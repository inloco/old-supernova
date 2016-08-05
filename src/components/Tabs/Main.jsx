import React, { PropTypes } from "react"

class Main extends React.Component {
  static propTypes = {
    activeTab: PropTypes.number,
    children:  PropTypes.node.isRequired
  }

  static defaultProps = {
    active: false
  }

  constructor(props) {
    super(props)

    this.state = { activeTab: props.activeTab }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ activeTab: nextProps.activeTab })
  }

  handleTabClick(index) {
    this.setState({ activeTab: index })
  }

  getTabsLabel() {
    return this.props.children.map(tab => {
      return tab.props.label
    })
  }

  getTabItemClassName(index) {
    return this.state.activeTab === index ? "is-active" : ""
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
        active: this.state.activeTab === index,
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