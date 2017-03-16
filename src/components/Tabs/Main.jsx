import React from 'react'

class Main extends React.PureComponent {
  static defaultProps = {
    active: 0,
    customBehavior: false
  }

  constructor(props) {
    super(props)

    this.handleTabClick = this.handleTabClick.bind(this)

    this.state = { activeTab: props.active }
  }

  handleTabClick(index) {
    const { onClick } = this.props
    this.setState({ activeTab: index })

    if(onClick) {
      onClick(index)
    }
  }

  getTabsLabel() {
    return this.props.children.map(tab => {
      return tab.props.label
    })
  }

  getTabItemClassName(index) {
    const { customBehavior, active } = this.props
    const { activeTab } = this.state
    const nextActiveTab = customBehavior ? active : activeTab

    return nextActiveTab === index ? 'is-active' : ''
  }

  renderTabsItems() {
    return this.getTabsLabel().map((label, index) => {
      return (
        <li className={this.getTabItemClassName(index)} key={index}>
          <a href="#" onClick={() => this.handleTabClick(index)}>
            {label}
          </a>
        </li>
      )
    })
  }

  renderTabsContent() {
    const { customBehavior, active } = this.props
    const { activeTab } = this.state
    const nextActiveTab = customBehavior ? active : activeTab

    return this.props.children.map((tab, index) => {
      return React.cloneElement(tab, {
        active: nextActiveTab === index,
        key: index
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
