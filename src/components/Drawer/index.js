import React, { PropTypes } from 'react'

class Drawer extends React.Component {
  constructor(props) {
    super(props)

    this.handleDrawerButtonClick = this.handleDrawerButtonClick.bind(this)
    this.handleObfuscatorClick = this.handleObfuscatorClick.bind(this)

    this.state = {
      open: false
    }
  }

  static defaultProps = {
    open: false,
  }

  static propTypes = {
    open: PropTypes.bool,
    children: PropTypes.any
  }

  render() {
    return (
      <div>
        <div className={this.getDrawerClassName()}>
          <div className="sn-layout__drawer--wrap">
            {this.props.children}
          </div>
        </div>

        <div
          onClick={this.handleObfuscatorClick}
          className={this.getObfuscatorClassName()}
        />
      </div>
    )
  }

  getDrawerClickEventName() {
    return 'supernova.drawer_button.click'
  }

  componentDidMount() {
    window.addEventListener(
      this.getDrawerClickEventName(),
      this.handleDrawerButtonClick
    )
  }

  componentWillUnmount() {
    window.removeEventListener(
      this.getDrawerClickEventName(),
      this.handleDrawerButtonClick
    )
  }

  getDrawerClassName() {
    return `
      sn-layout__drawer
      ${this.getActiveClassName()}
    `
  }

  getObfuscatorClassName() {
    return `
      sn-layout__obfuscator
      ${this.getActiveClassName()}
    `
  }

  getActiveClassName() {
    return this.state.open ? 'is-visible' : ''
  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open
    })
  }

  handleObfuscatorClick() {
    this.toggleDrawer()
  }

  handleDrawerButtonClick() {
    this.toggleDrawer()
  }
}

export default Drawer
