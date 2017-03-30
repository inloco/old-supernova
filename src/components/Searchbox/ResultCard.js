import React from 'react'

class ResultCard extends React.PureComponent {
  static propTypes = {
    onSelectResult: React.PropTypes.func.isRequired,
    result: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    this.handleMouseDown = this.handleMouseDown.bind(this)
  }

  render() {
    const { result } = this.props

    return (
      <div onMouseDown={this.handleMouseDown}>
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

  handleMouseDown() {
    const { onSelectResult, result } = this.props

    onSelectResult(result)
  }
}

export default ResultCard
