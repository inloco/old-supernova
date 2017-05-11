import React from 'react'
import Grid from './../Grid'
import Cell from './../Grid/Cell'
import Text from './../Text'
import PropTypes from 'prop-types'

class ResultCard extends React.PureComponent {
  static propTypes = {
    onSelectResult: PropTypes.func.isRequired,
    result: PropTypes.object.isRequired
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
          <Grid responsive="mobile-lg" gutter>
            <Cell size="1">
              <Text span fontWeight="bold">
                {result.title}
              </Text>
            </Cell>

            <Cell size="auto" alignContent="right">
              <Text span color="sn-color--secondary-text" wrap="caption">
                {result.info}
              </Text>
            </Cell>
          </Grid>

          <Grid responsive="mobile-lg">
            <Cell size="1">
              <Text span color="sn-color--secondary-text" wrap="caption">
                {result.subtitle}
              </Text>
            </Cell>
          </Grid>
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
