import React from 'react'
import Grid from './../Grid'
import Cell from './../Grid/Cell'
import Text from './../Text'
import PropTypes from 'prop-types'

class ResultCard extends React.PureComponent {
  static propTypes = {
    onSelectResult: PropTypes.func.isRequired,
    result: PropTypes.shape({
      title: PropTypes.string.isRequired,
      info: PropTypes.string,
      subtitle: PropTypes.string,
      secondaryImage: PropTypes.string,
      tag: PropTypes.string
    }).isRequired
  }

  constructor(props) {
    super(props)

    this.handleMouseDown = this.handleMouseDown.bind(this)
  }

  render() {
    const { result } = this.props
    const {
      title,
      info,
      subtitle,
      secondaryImage,
      tag
    } = result

    return (
      <div onMouseDown={this.handleMouseDown}>
        <div className="sn-search-box__item-content">
          <Grid responsive="mobile-lg" gutter="xs">
            {secondaryImage && (
              <Cell align="center">
                <img className="sn-search-box__item-content__image" src={secondaryImage} />
              </Cell>
            )}

            <Cell size="1" align="center">
              <Text span fontWeight="bold">
                {title}
              </Text>
              {tag && (
                <Text span className="sn-search-box__item-content__tag">
                  {tag}
                </Text>
              )}
            </Cell>

            <Cell size="auto" alignContent="right" align="center">
              <Text span color="sn-color--secondary-text" wrap="caption">
                {info}
              </Text>
            </Cell>

          </Grid>

          <Grid responsive="mobile-lg">
            <Cell size="1">
              <Text span color="sn-color--secondary-text" wrap="caption">
                {subtitle}
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
