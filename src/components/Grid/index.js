import React, { PropTypes } from 'react'

class Grid extends React.PureComponent {
  constructor(props){
    super(props)
  }

  static propTypes = {
    vertical: PropTypes.bool,
    reverse: PropTypes.bool,
    responsive: PropTypes.string,
    bleed: PropTypes.any,
    gutter: PropTypes.any,
    padding: PropTypes.any,
    wrap: PropTypes.any,
    align: PropTypes.string,
    alignJustify: PropTypes.string,
    alignContent: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const { className, children } = this.props
    const gridTypeClassName = this.getGridTypeClassName()
    const responsiveClassName = this.getResponsiveClassName()
    const bleedClassName = this.getBleedClassName()
    const gutterClassName = this.getGutterClassName()
    const paddingClassName = this.getPaddingClassName()
    const wrapClassName = this.getWrapClassName()
    const alignClassName = this.getAlignClassName()
    const alignJustifyClassName = this.getAlignJustifyClassName()
    const alignContentClassName = this.getAlignContentClassName()

    return (
      <div
        className={`
          sn-grid
          ${gridTypeClassName}
          ${responsiveClassName}
          ${bleedClassName}
          ${gutterClassName}
          ${paddingClassName}
          ${wrapClassName}
          ${alignClassName}
          ${alignJustifyClassName}
          ${alignContentClassName}
          ${className}
        `}
      >
        {children}
      </div>
    )
  }

  getGridTypeClassName() {
    const { vertical, reverse } = this.props
    const gridType = vertical ? 'sn-grid--vertical' : 'sn-grid--horizontal'

    return reverse ? `${gridType}-reverse` : gridType
  }

  getResponsiveClassName() {
    const { responsive } = this.props

    return responsive ? `sn-grid--responsive-${responsive}`: ''
  }

  getBleedClassName() {
    const { bleed } = this.props

    if(bleed) {
      return typeof bleed === 'string'
                ? `sn-grid--bleed-${bleed}`
                : 'sn-grid--bleed'
    }

    return ''
  }

  getGutterClassName() {
    const { gutter } = this.props

    if(gutter) {
      return typeof gutter === 'string'
                ? `sn-grid--cell-gutter-${gutter}`
                : 'sn-grid--cell-gutter'
    }

    return ''
  }

  getPaddingClassName() {
    const { padding } = this.props

    if(padding) {
      return typeof padding === 'string'
                ? `sn-grid--cell-padding-${padding}`
                : 'sn-grid--cell-padding'
    }

    return ''
  }

  getWrapClassName() {
    const { wrap } = this.props
    const wrapClassName = 'sn-grid--cell-'

    if(wrap === undefined) return ''

    if(wrap === 'nowrap') return `${wrapClassName}nowrap`

    return typeof wrap === 'string'
            ? `${wrapClassName}wrap-${wrap}`
            : `${wrapClassName}wrap`
  }

  getAlignClassName() {
    const { align } = this.props

    return align ? `sn-grid--align-${align}` : ''
  }

  getAlignJustifyClassName() {
    const { alignJustify } = this.props

    return alignJustify ? `sn-grid--justify-${alignJustify}` : ''
  }

  getAlignContentClassName() {
    const { alignContent } = this.props

    return alignContent ? `sn-grid--content-${alignContent}` : ''
  }
}

export default Grid
