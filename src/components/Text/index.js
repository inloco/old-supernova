import React, { PropTypes } from 'react'

class Text extends React.PureComponent {
  constructor(props) {
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
    span: PropTypes.bool,
    id: PropTypes.string,
    bold: PropTypes.bool
  }

  static defaultProps = {
    type: "body"
  }

  render() {
    return this.getTag()
  }

  getTag() {
    const {type, span, children, id} = this.props
    const className = this.getClassName()

    if(type === 'header') return this.getHeaderTag(className)

    if(span) {
      return <span id={id} className={className}>{children}</span>
    }

    return <p id={id} className={className}>{children}</p>
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
      color,
      bold
    } = this.props

    const isBodyOrSubhead = (type === 'body' || type === 'subhead')
    const boldSizeClassName = bold ? '-2' : '-1'
    const sizeClassName = size ? `-${size}` : ''

    const sizeClass = isBodyOrSubhead ? boldSizeClassName : sizeClassName
    const fontWeightClass = fontWeight ? `sn-typo--font-${fontWeight}` : ''
    const alignClass = align ? `sn-typo--text-${align}` : ''
    const capsClass = caps ? `sn-typo--text-${caps}` : ''
    const wrapClass = wrap ? `sn-typo--${wrap}` : ''
    const configClasses = `${className || ''} ${fontWeightClass} ${alignClass} ${capsClass} ${wrapClass} ${color || ''}`

    return `sn-typo--${type} ${sizeClass} ${configClasses}`
  }

  getHeaderTag(className) {
    const {children, id} = this.props

    switch (this.props.size) {
      case "1":
        return <h1 id={id} className={className}>{children}</h1>
      case "2":
        return <h2 id={id} className={className}>{children}</h2>
      case "3":
        return <h3 id={id} className={className}>{children}</h3>
      case "4":
        return <h4 id={id} className={className}>{children}</h4>
      case "5":
        return <h5 id={id} className={className}>{children}</h5>
      case "6":
        return <h6 id={id} className={className}>{children}</h6>
    }
  }
}

export default Text
