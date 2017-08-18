import React from 'react'
import PropTypes from 'prop-types'
import ResultCard from './ResultCard'
import Chip from './../Chip'
import Tooltip from './../Tooltip'

class Searchbox extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    onUnselect: PropTypes.func.isRequired,
    debounce: PropTypes.number,
    minLength: PropTypes.number,
    limit: PropTypes.number,
    loading: PropTypes.any,
    single: PropTypes.any,
    filter: PropTypes.any,
    error: PropTypes.any,
    spinner: PropTypes.any,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    selectedResultsPlacement: PropTypes.string,
    selectedResultsType: PropTypes.string,
    chipTooltip: PropTypes.any,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.any.isRequired,
        title: PropTypes.string.isRequired
      })
    ),
    initialSelectedResults: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.any.isRequired,
        title: PropTypes.string.isRequired
      })
    )
  }

  static defaultProps = {
    debounce: 500,
    minLength: 3,
    visibleResults: 5
  }

  componentWillReceiveProps(nextProps) {
    this.updateSelectedResultsIfNeeded(nextProps)
  }

  updateSelectedResultsIfNeeded(nextProps) {
    if(this.initialSelectedResultsHasChange(nextProps)) {
      this.setState({ selectedResults: nextProps.initialSelectedResults })
    }
  }

  initialSelectedResultsHasChange(nextProps) {
    const currentValue = this.props.initialSelectedResults
    const newValue = nextProps.initialSelectedResults
    const existsNewAndCurrentValues = currentValue && newValue
    const currentValueIsBeingFilled = existsNewAndCurrentValues && currentValue.length === 0 && newValue.length > 0

    return currentValueIsBeingFilled
  }

  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleOnSelectResult = this.handleOnSelectResult.bind(this)

    this.state = {
      inputValue: '',
      expandedResults: false,
      selectedResults: this.props.initialSelectedResults || [],
      hoveredResult: undefined
    }

    this.visibleResultsCount = 0
  }

  render() {
    return (
      <div className={this.getClassName()}>
        {this.hasSelectedResults() 
          && this.shouldRenderSelectedResultsOnTop() 
          && this.renderSelectedResults()}
        {this.shouldRenderInput() && this.renderInput()}
        {this.shouldRenderResults() && this.renderResults()}
        {this.props.error && this.renderError()}
        {this.hasSelectedResults() 
          && this.shouldRenderSelectedResultsOnBottom() 
          && this.renderSelectedResults()}
      </div>
    )
  }

  getClassName() {
    return `
      sn-search-box
      ${this.props.selectedResultsType === "chips" ? 'sn-search-box--chips' : ''}
      ${this.props.disabled ? 'sn-search-box--disabled' : ''}
      ${this.props.error ? 'sn-search-box--error': ''}
    `
  }

  shouldRenderSelectedResultsOnTop() {
    return this.props.selectedResultsPlacement === 'top' 
            || !this.props.selectedResultsPlacement
  }

  shouldRenderSelectedResultsOnBottom() {
    return this.props.selectedResultsPlacement === 'bottom'
  }

  shouldRenderInput() {
    return !(this.props.single && this.hasSelectedResults())
  }

  hasSelectedResults() {
    return this.state.selectedResults.length > 0
  }

  shouldRenderResults() {
    return this.props.results
            && this.state.expandedResults
            && this.inputHasMinLength()
            && this.getVisibleResults().length > 0
  }

  renderSelectedResults() {
    if (this.props.selectedResultsType === 'chips') {
      return (
        <ul className="sn-search-box--chips__selected">
          {this.state.selectedResults.map(selectedResult => (
            <li key={selectedResult.id}>
              {this.renderSelectedResultChip(selectedResult)}
            </li>
          ))}
        </ul>
      )
    } else {
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
  }

  renderSelectedResultChip(selectedResult) {
    if (this.props.chipTooltip) {
      return (
        <Tooltip
          message={selectedResult.title}
          position='top'
          size='md'
        >
          <Chip
            text={selectedResult.title}
            leftIconCode="cancel"
            leftIconClick={this.handleCloseClick.bind(this, selectedResult)}
          />
        </Tooltip>
      )
    } else {
      return (
        <Chip
          text={selectedResult.title}
          leftIconCode="cancel"
          leftIconClick={this.handleCloseClick.bind(this, selectedResult)}
        />
      )
    }
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
          className={`sn-search-box__input
                      ${this.props.selectedResultsType === "chips" ? "sn-search-box--chips__input" : ""}`
                    }
          autoComplete="off"
          ref={input => this.input = input}
          placeholder={this.props.placeholder}
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          disabled={this.props.disabled}
          onKeyDown={this.handleKeyDown}
        />

        {
          this.props.loading
            ? <img src={this.props.spinner} className="sn-search-box__input--spinner" alt="spinner" />
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
    this.setState({
      expandedResults: true,
      hoveredResult: undefined
    })
  }

  handleInputBlur(event) {
    this.setState({ expandedResults: false })
  }

  hoverNextResult() {
    const hovered = this.state.hoveredResult
    const nextHovered = hovered !== undefined ? hovered + 1 : 0

    if (nextHovered < this.visibleResultsCount) {
      this.setState({ hoveredResult: nextHovered })
    }
  }

  hoverPreviousResult() {
    const hovered = this.state.hoveredResult
    const nextHovered = hovered !== undefined ? hovered - 1 : 0

    if (nextHovered >= 0) {
      this.setState({ hoveredResult: nextHovered })
    }
    else {
      this.setState({ hoveredResult: undefined })
    }
  }

  selectHoveredResult() {
    const hovered = this.state.hoveredResult

    if (hovered !== undefined) {
      const results = this.getVisibleResults()
      const selectedResult = results[hovered]

      this.handleOnSelectResult(selectedResult)
      this.setState({ hoveredResult: undefined })
    }
  }

  handleKeyDown(event) {
    event.persist()

    switch (event.key) {
      case 'ArrowDown':
        this.hoverNextResult()
        event.preventDefault()
        break
      case 'ArrowUp':
        this.hoverPreviousResult()
        event.preventDefault()
        break
      case 'Enter':
        this.selectHoveredResult()
        event.preventDefault()
        break
    }
  }

  handleMouseEnter(index) {
    return () => {
      this.setState({ hoveredResult: index })
    }
  }

  renderResults() {
    const results = this.getVisibleResults()

    return (
      <ul className="sn-search-box__results">
        {results.map((result, i) => (
          <li
            onMouseEnter={this.handleMouseEnter(i)}
            key={result.id}
            className={i === this.state.hoveredResult ? 'hovered' : ''}>
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
    const { results, limit, filter } = this.props
    const notSelectedResults = this.getNotSelectedResults(results)
    const limitedResults = this.limitResults(limit, notSelectedResults)

    const filteredResults = filter ? this.filterResults(limitedResults) : limitedResults

    this.visibleResultsCount = filteredResults.length

    return filteredResults
  }

  getNotSelectedResults(results) {
    return results.filter(result =>
      !this.state.selectedResults.some(selectedResult =>
        selectedResult.id === result.id
      )
    )
  }

  limitResults(limit, results) {
    return results.slice(0, limit)
  }

  filterResults(results) {
    return results.filter(result => {
      const title = result.title.toLowerCase()
      const inputValue = this.state.inputValue.toLowerCase()

      return title.includes(inputValue)
    })
  }

  handleOnSelectResult(result) {
    this.selectResult(result)
    this.input && this.input.focus()
  }

  selectResult(result) {
    this.setState(prevState => ({
      selectedResults: prevState.selectedResults.concat(result),
      inputValue: ''
    }), () => {
      this.props.onSelect(result, this.state.selectedResults)
    })
  }

  renderError() {
    return (
      <div className="sn-search-box__message sn-search-box__message--danger">
        {this.props.error}
      </div>
    )
  }
}

export default Searchbox
