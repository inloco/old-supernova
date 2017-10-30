import React from 'react'
import Highlight from 'react-highlight'
import PropTypes from 'prop-types'
import CopyToClipboard from 'react-copy-to-clipboard'
import Alert from './../Alert'

class CodeBox extends React.PureComponent {
  static propTypes = {
    lang: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    lang: 'html',
    title: 'HTML',
    className: ''
  }

  constructor(props) {
    super(props)

    this.state = { open: false }

    this.handleCloseButton = this.handleCloseButton.bind(this)
    this.handleClickButton = this.handleClickButton.bind(this)
    this.getHighlightStyle = this.getHighlightStyle.bind(this)
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

  render() {
    const {
      title,
      children,
      className
    } = this.props

    return (
      <div className={`sn-code-box ${className}`}>
        <CopyToClipboard text={children}>
          <div
            className="sn-code-box__copy-button"
            onClick={() => this.handleClickButton()}
          ></div>
        </CopyToClipboard>
        <div className="sn-code-box__title">
          {title}
        </div>
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
}

export default CodeBox