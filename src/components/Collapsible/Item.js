import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
  static PropTypes = {
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onItemClick: PropTypes.func,
    className: PropTypes.string,
    headerClass: PropTypes.string,
    contentClass: PropTypes.string,
    borderless: PropTypes.bool,
    disabled: PropTypes.bool,
    collapseTrigger: PropTypes.oneOf(['header', 'icon'])
  }

  static defaultProps = {
    isActive: false,
    onItemClick() {},
    className: '',
    headerClass: '',
    contentClass: '',
    borderless: false,
    collapseTrigger: 'header',
    disabled: false
  }

  constructor(props) {
    super(props)

    this.state = {
      childrenHeight: 0
    }

    this.onResize = this.onResize.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  shouldComponentUpdate(nextProps) {
    return this.props.isActive || nextProps.isActive;
  }

  updateDimensions() {
    const childrenHeight = this.divElement.clientHeight
    this.setState({ childrenHeight })
  }

  onResize (){
    if (this.rqf) return
    if( typeof window !== 'undefined' )
      this.rqf = window.requestAnimationFrame(() => {
        this.rqf = null
        this.updateDimensions()
      })
  }

  componentDidMount () {
    this.updateDimensions()
    if( typeof window !== 'undefined' )
      window.addEventListener('resize', this.onResize, false)
  }

  componentWillUnmount () {
    if( typeof window !== 'undefined' )
      window.removeEventListener('resize', this.onResize)
  }

  render() {
    const itemClass = (
      `sn-collapsible__item
      ${(this.props.isActive ? 'sn-collapsible__item--open' : '')}
      ${(this.props.disabled ? 'sn-collapsible__item--disabled': '')}
      ${(this.props.borderless ? 'sn-collapsible__item--borderless': '')}
      ${this.props.className}`
    ).trim()
    const headerClass = `sn-collapsible__item__header ${this.props.headerClass}`.trim()
    const contentClass = `sn-collapsible__item__content ${this.props.contentClass}`.trim()

    const contentStyle = {
      height: (this.props.isActive ? this.state.childrenHeight : 0) + 'px'
    }

    const collapseTriggerIsHeader = this.props.collapseTrigger === 'header'
    const headerOnClick = collapseTriggerIsHeader
                          ? this.props.onItemClick
                          : null
    const headerStyle = {
      cursor: collapseTriggerIsHeader && !this.props.disabled
      ? 'pointer'
      : ''
    }

    const collapseTriggerIsIcon = this.props.collapseTrigger === 'icon'
    const iconOnClick = collapseTriggerIsIcon
                        ? this.props.onItemClick
                        : null
    const iconStyle = {
      cursor: !this.props.disabled
              ? 'pointer'
              : ''
    }

    return (
      <div className={itemClass}>
        <div className={headerClass} onClick={headerOnClick} style={headerStyle}>
          <button className="sn-collapsible__item__header__toggle-button" onClick={iconOnClick} style={iconStyle} />
          <div className="sn-collapsible__item__header__title">
            {this.props.title}
          </div>
        </div>
        <div className={contentClass} style={contentStyle}>
          <div className="sn-collapsible__item__content__inner" ref={ (divElement) => this.divElement = divElement}>{this.props.details}</div>
        </div>
      </div>
    )
  }
}

export default Item