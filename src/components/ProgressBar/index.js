import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Text from './../Text'

export class ProgressBar extends React.PureComponent {
  static propTypes = {
    beginValue: PropTypes.any.isRequired,
    currentValue: PropTypes.any.isRequired,
    endValue: PropTypes.any.isRequired,
    message: PropTypes.string,
    date: PropTypes.bool,
    color: PropTypes.string
  }

  render() {
    const { message } = this.props
    const paddingStyle = message ? { paddingBottom: '20px' } : {}
    const progressStyle = this.getStyle()
    const percentage = this.getPercentage()

    const beginValue = this.formatValue(this.props.beginValue)
    const currentValue = this.formatValue(this.props.currentValue)
    const endValue = this.formatValue(this.props.endValue)

    return (
      <div className='sn-progress-bar' style={paddingStyle}>
        <div className='sn-progress-bar__inner-wrapper'>
          <Text className='sn-progress-bar__initial-text' span>
            { beginValue }
          </Text>
          <div
            className='sn-progress-bar__progress-wrapper'
            style={progressStyle}
          >
            <Text className='sn-progress-bar__inner-text' span>
              { `${currentValue} (${percentage})` }
            </Text>
          </div>
          <Text className='sn-progress-bar__final-text' span>
            { endValue }
          </Text>
        </div>
        { this.props.message && this.renderMessage() }
      </div>
    )
  }

  getStyle() {
    const colorStyle = { backgroundColor: this.props.color }
    const style = { width: this.getPercentage(), ...colorStyle }

    return style
  }

  formatValue(value) {
    if (this.props.date) return moment(value).format('DD MMM')

    return Number(value).toLocaleString()
  }

  getPercentage() {
    const { beginValue, currentValue, endValue, date } = this.props

    const begin = date ? 0 : beginValue
    const current = date ? this.getDiffDays(beginValue, currentValue) : currentValue
    const end = date ? this.getDiffDays(beginValue, endValue) : endValue

    let percentage = ((current - begin) * 100) / (end - begin)
    if (percentage < 0) percentage = 0
    if (percentage > 0 && percentage < 1) percentage = 1
    if (percentage > 100) percentage = 100

    return `${percentage.toFixed(1)}%`
  }

  getDiffDays (current, end) {
    const endDate = moment(end)
    const currentDate = moment(current)
    const diffInDays = endDate.diff(currentDate, 'days')

    if (diffInDays < 0) return 0

    return diffInDays + 1
  }

  renderMessage() {
    return(
      <Text
        type='caption'
        color='sn-color--secondary-text'
        className='sn-progress-bar__message-text'
        span
      >
        { this.props.message }
      </Text>
    )
  }
}

export default ProgressBar
