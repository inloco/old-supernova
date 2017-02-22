import React, { PropTypes } from "react"

class Main extends React.Component {
  static propTypes = {
    active: PropTypes.number,
    children: PropTypes.node.isRequired,
    updateWhenReceiveProps: PropTypes.bool
  }

  static defaultProps = {
    active: 0,
    updateWhenReceiveProps: false
  }

  constructor(props) {
    super(props)

    this.state = { active: props.active }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.updateWhenReceiveProps) {
      this.setState({ active: nextProps.active })
    }
  }

  handleTabClick(index) {
    const { onChange } = this.props

    this.setState({ active: index })

    if(onChange) {
      onChange(index)
    }
  }

  getTabsLabel() {
    return this.props.children.map(tab => {
      return tab.props.label
    })
  }

  getTabItemClassName(index) {
    return this.state.active === index ? "is-active" : ""
  }

  renderTabsItems() {
    return this.getTabsLabel().map((label, index) => {
      return (
        <li className={this.getTabItemClassName(index)} key={index}>
          <a href="#" onClick={this.handleTabClick.bind(this, index)}>
            {label}
          </a>
        </li>
      )
    })
  }

  renderTabsContent() {
    return this.props.children.map((tab, index) => {
      return React.cloneElement(tab, {
        active: this.state.active === index,
        key:    index
      })
    })
  }

  render() {
    return (
      <div>
        <div className="sn-tabs">
          <ul>{this.renderTabsItems()}</ul>
        </div>

        <div className="sn-tabs__content">
          {this.renderTabsContent()}
        </div>
      </div>
    )
  }
}

export default Main
