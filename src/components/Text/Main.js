import React, { PropTypes } from 'react'

class Text extends React.PureComponent {
  constructor(props){
    super(props)
  }
  
  static propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    fontWeight: PropTypes.string,
    align: PropTypes.string,
    caps: PropTypes.string,
    wrap: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    span: PropTypes.bool
  }

  static defaultProps = {
    type: "body"
  }

  getClassName() {
    const {
      type,
      size,
      fontWeight,
      align,
      caps,
      wrap,
      className,
      color
    } = this.props
    const sizeClassName = size ? `-${size}` : ''
    const fontWeightClass = fontWeight ? `sn-typo--font-${fontWeight}` : ''
    const alignClass = align ? `sn-typo--text-${align}` : ''
    const capsClass = caps ? `sn-typo--text-${caps}` : ''
    const wrapClass = wrap ? `sn-typo--${wrap}` : ''
    const configClasses = `${className || ''} ${fontWeightClass} ${alignClass} ${capsClass} ${wrapClass} ${color || ''}`

    return `sn-typo--${type}${sizeClassName} ${configClasses}`
  }

  getHeaderTag(className) {
    const {children} = this.props

    switch (this.props.size) {
      case "1":
        return <h1 className={className}>{children}</h1>
      case "2":
        return <h2 className={className}>{children}</h2>
      case "3":
        return <h3 className={className}>{children}</h3>
      case "4":
        return <h4 className={className}>{children}</h4>
      case "5":
        return <h5 className={className}>{children}</h5>
      case "6":
        return <h6 className={className}>{children}</h6>
    }
  }

  getTag() {
    const {type, span, children} = this.props
    const className = this.getClassName()

    if(type === 'header') return this.getHeaderTag(className)

    if(span) {
      return <span className={className}>{children}</span>
    }

    return <p className={className}>{children}</p>
  }

   render() {
    return this.getTag()
  }
}

export default Text
