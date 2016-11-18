import React, { PropTypes } from "react"
import _ from "lodash"

class SearchBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      results: props.results,
      selectedResultsIds: [],
      latestResultsIds: props.results.map(result => result.id),
      expandedResults: false
    }
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
      this.setState({
        latestResultsIds: nextProps.results.map(result => result.id),
        results: _.unionBy(nextProps.results, this.state.results, "id")
      })
    }
  }

  render() {
    const haveSelectedResults = this.getSelectedResults().length > 0
    const shouldShowInput = !(this.props.single && haveSelectedResults)

    return (
      <div className="sn-search-box">
        {this.renderSelectedResults()}
        {shouldShowInput && this.renderInput()}
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

  renderInput() {
    return (
      <div>
        <input
          ref={input => this.input = input}
          type="text"
          className="sn-search-box__input"
          placeholder={this.props.label}
          autoComplete="off"
          onFocus={this.handleInputFocus.bind(this)}
          onChange={this.handleInputChange.bind(this)}/>

        <span className="sn-search-box__input--icon"></span>

        {this.hasMinimumInputLength() && this.renderResults()}
        {this.renderHelpMessage()}
      </div>
    )
  }

  getSelectedResults() {
    const { results, selectedResultsIds } = this.state

    return results.filter(result => this.resultIsSelected(result))
  }

  resultIsSelected(result) {
    return this.state.selectedResultsIds.includes(result.id)
  }

  renderSelectedResultCard(selectedResult) {
    const CustomComponent = this.props.component

    if(CustomComponent) {
      return <div>
        <CustomComponent result={selectedResult}/>
        <button
          type="button"
          className="sn-search-box__item-button sn-search-box__item-button--top"
          onClick={this.handleUnselectClick.bind(this, selectedResult)}>
        </button>
      </div>
    }

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

  handleUnselectClick(unselectedResult) {
    this.unselectResult(unselectedResult)

    this.input && this.input.focus()
  }

  unselectResult(unselectedResult) {
    const { selectedResultsIds } = this.state

    this.setState({
      selectedResultsIds: selectedResultsIds.filter(resultId => unselectedResult.id !== resultId)
    })
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

  hasMinimumInputLength() {
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
    const currentResults = this.getCurrentResults()

    return this.props.ajax
            ? currentResults.filter(result => !this.resultIsSelected(result))
            : currentResults.filter(result => !this.resultIsSelected(result) && result.matched)
  }

  getCurrentResults() {
    const { latestResultsIds, results } = this.state

    return results.filter(result => latestResultsIds.includes(result.id))
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

  selectResult(selectedResult) {
    const { selectedResultsIds } = this.state

    this.setState({
      selectedResultsIds: selectedResultsIds.concat(selectedResult.id)
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