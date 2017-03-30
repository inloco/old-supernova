import React from 'react'
import ResultCard from './ResultCard'
import spinner from './../../../assets/images/spinner.svg'

class Searchbox extends React.Component {
  static propTypes = {
    onSearch: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    onUnselect: React.PropTypes.func.isRequired,
    debounce: React.PropTypes.number,
    minLength: React.PropTypes.number,
    visibleResults: React.PropTypes.number,
    loading: React.PropTypes.any
  }

  static defaultProps = {
    debounce: 500,
    minLength: 3,
    visibleResults: 5
  }

  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleOnSelectResult = this.handleOnSelectResult.bind(this)

    this.state = {
      inputValue: '',
      expandedResults: false,
      selectedResults: []
    }
  }

  render() {
    return (
      <div className="sn-search-box">
        {this.hasSelectedResults() && this.renderSelectedResults()}
        {this.renderInput()}
        {this.shouldRenderResults() && this.renderResults()}
      </div>
    )
  }

  hasSelectedResults() {
    return this.state.selectedResults.length > 0
  }

  shouldRenderResults() {
    return this.props.results
            && this.state.expandedResults
            && this.inputHasMinLength()
  }

  renderSelectedResults() {
    return (
      <ul className="sn-search-box__selected">
        {this.state.selectedResults.map(selectedResult => (
          <li key={selectedResult.id}>
            {this.renderSelectedResultCard(selectedResult)}
          </li>
        ))}
      </ul>
    )
  }

  renderSelectedResultCard(selectedResult) {
    return (
      <div>
        <div className="sn-search-box__item-content">{selectedResult.title}</div>
        <button
          type="button"
          className="sn-search-box__item-button"
          onClick={this.handleCloseClick.bind(this, selectedResult)}>
        </button>
      </div>
    )
  }

  handleCloseClick(selectedResult) {
    this.unselectResult(selectedResult)
  }

  unselectResult(selectedResult) {
    this.setState(prevState => ({
      selectedResults: prevState.selectedResults.filter(
        iteratedSelectedResult => iteratedSelectedResult.id !== selectedResult.id
      )
    }), () => {
      this.props.onUnselect(selectedResult, this.state.selectedResults)
    })
  }

  renderInput() {
    return (
      <div>
        <input
          type="text"
          className="sn-search-box__input"
          autoComplete="off"
          ref={input => this.input = input}
          placeholder={this.props.placeholder}
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
        />

        {
          this.props.loading
            ? <img src={spinner} className="sn-search-box__input--spinner" alt="spinner" />
            : <span className="sn-search-box__input--icon" />
        }
      </div>
    )
  }

  handleInputChange(event) {
    const { onSearch, debounce } = this.props

    this.setState({ inputValue: event.target.value }, () => {
      clearTimeout(this.onSearchTimeout)

      this.onSearchTimeout = setTimeout(() => {
        this.inputHasMinLength() && onSearch(this.state.inputValue)
      }, debounce)
    })
  }

  inputHasMinLength() {
    return this.state.inputValue.length >= this.props.minLength
  }

  handleInputFocus(event) {
    this.setState({ expandedResults: true })
  }

  handleInputBlur(event) {
    this.setState({ expandedResults: false })
  }

  renderResults() {
    return (
      <ul className="sn-search-box__results">
        {this.getVisibleResults().map(result => (
          <li key={result.id}>
            <ResultCard
              result={result}
              onSelectResult={this.handleOnSelectResult}
            />
          </li>
        ))}
      </ul>
    )
  }

  getVisibleResults() {
    return this.getNotSelectedResults().slice(0, this.props.visibleResults)
  }

  getNotSelectedResults() {
    return this.props.results.filter(result =>
      !this.state.selectedResults.some(selectedResult =>
        selectedResult.id === result.id
      )
    )
  }

  handleOnSelectResult(result) {
    this.selectResult(result)
    this.input.focus()
  }

  selectResult(result) {
    this.setState(prevState => ({
      selectedResults: prevState.selectedResults.concat(result),
      inputValue: ''
    }), () => {
      this.props.onSelect(result, this.state.selectedResults)
    })
  }
}

export default Searchbox
