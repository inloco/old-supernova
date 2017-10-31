import React from 'react'
import Highlight from 'react-highlight'
import PropTypes from 'prop-types'
import CopyToClipboard from 'react-copy-to-clipboard'
import classNames from 'classnames'
import Alert from './../Alert'

class CodeBox extends React.PureComponent {
  static propTypes = {
    lang: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    showTitle: PropTypes.bool,
    showCopyToClipboard: PropTypes.bool
  }

  static defaultProps = {
    lang: 'html',
    title: 'HTML',
    className: '',
    showTitle: true,
    showCopyToClipboard: true
  }

  constructor(props) {
    super(props)

    this.state = { open: false }

    this.handleCloseButton = this.handleCloseButton.bind(this)
    this.handleClickButton = this.handleClickButton.bind(this)
    this.getHighlightStyle = this.getHighlightStyle.bind(this)
  }

  render() {
    const {
      title,
      children,
      className
    } = this.props

    return (
      <div className={classNames('sn-code-box', className)}>
        {this.shouldRenderCopyToClipboard() && this.renderCopyToClipboard()}
        {this.shouldRenderTitle() && this.renderTitle()}
        <Highlight className={this.getHighlightStyle()}>
          {children}
        </Highlight>
        <Alert
          closeAfter={3000}
          type="info"
          active={this.state.open}
          message="Copied to clipboard"
          icon="info"
          onClose={() => this.handleCloseButton()}
        />
      </div>
    )
  }

  handleCloseButton() {
    this.setState({ open: false })
  }

  handleClickButton() {
    this.setState({ open: true })
  }

  getHighlightStyle() {
    const lang = this.props.lang

    return `${lang} sn-code-box__code`
  }

  shouldRenderTitle() {
    return this.props.showTitle
  }

  renderTitle() {
    return (
      <div className="sn-code-box__title">
        {this.props.title}
      </div>
    )
  }

  shouldRenderCopyToClipboard() {
    return this.props.showCopyToClipboard
  }

  renderCopyToClipboard() {
    return (
      <CopyToClipboard text={this.props.children}>
        <div
          className="sn-code-box__copy-button"
          onClick={() => this.handleClickButton()}
        ></div>
      </CopyToClipboard>
    )
  }
}

export default CodeBox