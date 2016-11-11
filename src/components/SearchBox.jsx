import React, { PropTypes } from "react"

class SearchBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      results: this.addIdsInResults(props.results),
      expandedResults: false
    }
  }

  addIdsInResults(results) {
    return results.map((result, index) => {
      return { ...result, id: index }
    })
  }

  componentDidMount() {
    const body = document.querySelector('body')

    body.onclick = this.handleOutsideClick.bind(this)
  }

  handleOutsideClick(event) {
    if(event.target !== this.input) {
      this.setState({ expandedResults: false })
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.results !== this.props.results) {
      this.setState({ results: nextProps.results })
    }
  }

  render() {
    return (
      <div className="sn-search-box">
        {this.renderSelectedResults()}

        <input
          ref={input => this.input = input}
          type="text"
          className="sn-search-box__input"
          placeholder={this.props.label}
          autoComplete="off"
          onFocus={this.handleInputFocus.bind(this)}
          onChange={this.handleInputChange.bind(this)}/>

        <span className="sn-search-box__input--icon"></span>

        {this.hasMinimumInputValue() && this.renderResults()}
        {this.renderHelpMessage()}
      </div>
    )
  }

  renderSelectedResults() {
    const selectedResults = this.getSelectedResults()

    if(selectedResults.length === 0) return null

    return (
      <ul className="sn-search-box__selected">
        {selectedResults.map(result => <li key={result.id}>{this.renderSelectedResultCard(result)}</li>)}
      </ul>
    )
  }

  getSelectedResults() {
    return this.state.results.filter(result => result.selected)
  }

  renderSelectedResultCard(selectedResult) {
    return (
      <div>
        <div className="sn-search-box__item-content">{selectedResult.title}</div>
        <button
          type="button"
          className="sn-search-box__item-button"
          onClick={this.handleUnselectClick.bind(this, selectedResult)}>
        </button>
      </div>
    )
  }

  handleInputFocus() {
    this.setState({ expandedResults: true })
  }

  handleUnselectClick(selectedResult) {
    this.setState({
      results: this.state.results.map(result => {
        return selectedResult.id === result.id ? { ...result, selected: false } : result
      })
    })

    this.input.focus()
  }

  handleInputChange(event) {
    if(typeof this.props.onChange === "function") {
      this.props.onChange(event)
    }

    this.setState({
      results: this.state.results.map(result => {
        const matched = result.title.toLowerCase().includes(event.target.value.toLowerCase())

        return { ...result, matched }
      })
    })
  }

  hasMinimumInputValue() {
    return this.input && this.input.value.length > 1
  }

  renderResults() {
    const visibleResults = this.getVisibleResults()

    return (
      <ul
        className="sn-search-box__results"
        style={{ display: this.state.expandedResults ? 'block' : 'none' }}>
        {
          visibleResults.length === 0
            ? this.renderEmptyMessage()
            : visibleResults.map(result => <li key={result.id}>{this.renderResultCard(result)}</li>)
        }
      </ul>
    )
  }

  getVisibleResults() {
    const { results } = this.state

    return this.props.ajax
            ? results.filter(result => !result.selected)
            : results.filter(result => !result.selected && result.matched)
  }

  renderEmptyMessage() {
    return (
      <li className="sn-search-box__results--no-results">
        <div className="sn-search-box__item-content">
          Nenhum resultado encontrado.
        </div>
      </li>
    )
  }

  renderResultCard(result) {
    return (
      <div onClick={this.handleResultCardMouseDown.bind(this, result)}>
        <div className="sn-search-box__item-content">
          <div className="sn-grid sn-grid--responsive-mobile-lg sn-grid--cell-gutter">
            <div className="sn-cell--1">
              <span className="sn-typo--font-bold">{result.title}</span>
            </div>
            <div className="sn-cell--auto sn-cell--text-right">
              <span className="sn-typo--caption sn-color--secondary-text">{result.info}</span>
            </div>
          </div>
          <div className="sn-grid sn-grid--responsive-mobile-lg">
            <div className="sn-cell--1">
              <span className="sn-typo--caption sn-color--secondary-text">{result.subtitle}</span>
            </div>
          </div>
        </div>

        <button type="button" className="sn-search-box__item-button"></button>
      </div>
    )
  }

  handleResultCardMouseDown(result, event) {
    this.selectResult(result)

    this.input.focus()
    this.input.value = ""
  }

  selectResult(resultToSelect) {
    this.setState({
      results: this.state.results.map(result => {
        return resultToSelect.id === result.id ? { ...result, selected: true } : result
      })
    })
  }

  renderHelpMessage() {
    return (
      <span className={this.getHelpMessageClassName()}>
        {this.props.helpMessage}
      </span>
    )
  }

  getHelpMessageClassName() {
    return `sn-search-box__message ${this.getTypeMessageClassName()}`
  }

  getTypeMessageClassName() {
    const { typeMessage } = this.props

    return typeMessage ? `sn-search-box__message--${typeMessage}` : ""
  }
}

SearchBox.defaultProps = {
  results: []
}

export default SearchBox