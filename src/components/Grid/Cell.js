import React from 'react'
import PropTypes from 'prop-types'

class Cell extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    percent: PropTypes.string,
    fixed: PropTypes.string,
    dynamic: PropTypes.string,
    padding: PropTypes.any,
    order: PropTypes.string,
    align: PropTypes.string,
    alignContent: PropTypes.string,
    wrap: PropTypes.string,
    ellipsis: PropTypes.any,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const { className, children, onClick } = this.props
    const sizeClassName = this.getSizeClassName()
    const percentClassName = this.getPercentClassName()
    const fixedClassName = this.getfixedClassName()
    const dynamicClassName = this.getDynamicClassName()
    const paddingClassName = this.getPaddingClassName()
    const orderClassName = this.getOrderClassName()
    const alignClassName = this.getAlignClassName()
    const alignContentClassName = this.getAlignContentClassName()
    const wrapClassName = this.getWrapClassName()
    const ellipsisClassName = this.getEllipsisClassName()

    return (
      <div
        className={`${sizeClassName} ${className} ${percentClassName} ${fixedClassName} ${dynamicClassName} ${paddingClassName} ${orderClassName} ${alignClassName} ${alignContentClassName} ${wrapClassName} ${ellipsisClassName}`}
        onClick={onClick}
      >
       {children}
      </div>
    )
  }

  getSizeClassName() {
    const { size } = this.props

    return size ? `sn-cell--${size}` : ''
  }

  getPercentClassName() {
    const { percent } = this.props

    return percent ? `sn-cell--${percent}perc` : ''
  }

  getfixedClassName() {
    const { fixed } = this.props

    return fixed ? `sn-cell--fixed-${fixed}` : ''
  }

  getDynamicClassName() {
    const { dynamic } = this.props

    return dynamic ? `sn-cell--${dynamic}` : ''
  }

  getPaddingClassName() {
    const { padding } = this.props

    if(padding) {
      return typeof padding === 'string'
                ? `sn-cell--padding-${padding}`
                : 'sn-cell--padding'
    }

    return ''
  }

  getOrderClassName() {
    const { order } = this.props

    return order ? `sn-cell--order-${order}` : ''
  }

  getAlignClassName() {
    const { align } = this.props

    return align ? `sn-cell--item-${align}` : ''
  }

  getAlignContentClassName() {
    const { alignContent } = this.props

    return alignContent ? `sn-cell--text-${alignContent}` : ''
  }

  getWrapClassName() {
    const { wrap } = this.props

    return wrap ? `sn-cell--${wrap}` : ''
  }

  getEllipsisClassName() {
    const { ellipsis } = this.props

    return ellipsis ? 'sn-cell--ellipsis' : ''
  }
}

export default Cell
