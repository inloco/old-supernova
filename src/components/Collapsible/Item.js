import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Item extends Component {
  static PropTypes = {
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.any.isRequired,
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

    this.onResize = this.onResize.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  render() {
    const {
      itemClass,
      headerClass,
      contentClass
    } = this.getClassNames()

    const {
      iconStyle,
      headerStyle,
      contentStyle
    } = this.getCustomStyles()

    const iconOnClick = this.getIconOnClickAction()
    const headerOnClick = this.getHeaderOnClickAction()

    return (
      <div className={itemClass}>
        <div className={headerClass} onClick={headerOnClick} style={headerStyle}>
          <button className="sn-collapsible__item__header__toggle-button" onClick={iconOnClick} style={iconStyle} />
          <div className="sn-collapsible__item__header__title">
            {this.props.title}
          </div>
        </div>
        <div className={contentClass} style={contentStyle}>
          <div className="sn-collapsible__item__content__inner" ref={ (divElement) => this.divElement = divElement}>
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }

  shouldComponentUpdate(nextProps) {
    return this.props.isActive || nextProps.isActive
  }

  updateDimensions() {
    const childrenHeight = this.divElement.clientHeight
    this.setState({ childrenHeight })
  }

  onResize (){
    if (this.currentRequestAnimationFrame) return

    if(typeof window !== 'undefined') {
      this.currentRequestAnimationFrame = window.requestAnimationFrame(() => {
        this.currentRequestAnimationFrame = null
        this.updateDimensions()
      })
    }
  }

  componentDidMount () {
    this.updateDimensions()
    if(typeof window !== 'undefined') {
      window.addEventListener('resize', this.onResize, false)
    }
  }

  componentWillUnmount () {
    if(typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize)
    }
  }

  getClassNames() {
    const itemClass = classNames('sn-collapsible__item', this.props.className, {
      'sn-collapsible__item--open': this.props.isActive,
      'sn-collapsible__item--disabled': this.props.disabled,
      'sn-collapsible__item--borderless':this.props.borderless
    })
    const headerClass = classNames('sn-collapsible__item__header', this.props.headerClass)
    const contentClass = classNames('sn-collapsible__item__content', this.props.contentClass)

    return {
      itemClass,
      headerClass,
      contentClass
    }
  }

  getCustomStyles() {
    const contentHeight = this.props.isActive ? this.state.childrenHeight : 0
    const contentStyle = {
      height: `${contentHeight}px`
    }

    const collapseTriggerIsHeader = this.props.collapseTrigger === 'header'
    const headerStyle = {
      cursor: collapseTriggerIsHeader && !this.props.disabled
      ? 'pointer'
      : ''
    }

    const collapseTriggerIsIcon = this.props.collapseTrigger === 'icon'
    const iconStyle = {
      cursor: !this.props.disabled
              ? 'pointer'
              : ''
    }

    return {
      iconStyle,
      headerStyle,
      contentStyle
    }
  }

  getIconOnClickAction() {
    const collapseTriggerIsIcon = this.props.collapseTrigger === 'icon'
    const iconOnClick = collapseTriggerIsIcon
                        ? this.props.onItemClick
                        : null

    return iconOnClick
  }

  getHeaderOnClickAction() {
    const collapseTriggerIsHeader = this.props.collapseTrigger === 'header'
    const headerOnClick = collapseTriggerIsHeader
                          ? this.props.onItemClick
                          : null

    return headerOnClick
  }
}

export default Item