import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleTabClick = this.handleTabClick.bind(this)

    this.state = { activeTab: props.active }
  }

  static propTypes = {
    children: PropTypes.any.isRequired,
    active: PropTypes.number,
    customBehavior: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    active: 0
  }

  render() {
    return (
      <div>
        <div className="sn-tabs">
          <ul>
            {this.renderTabsItems()}
          </ul>
        </div>
        <div className="sn-tabs__content">
          {this.renderTabsContent()}
        </div>
      </div>
    )
  }

  handleTabClick(index) {
    const { onClick } = this.props
    this.setState({ activeTab: index })

    if(onClick) {
      onClick(index)
    }
  }

  getTabsLabel() {
    return React.Children.map(this.props.children, child => {
      return child.props.label
    })
  }

  getTabItemClassName(index) {
    const nextActiveTab = this.getNextActiveTab()

    return nextActiveTab === index ? 'is-active' : ''
  }

  renderTabsItems() {
    const tabLabels = this.getTabsLabel()

    return tabLabels.map((label, index) => {
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
    const nextActiveTab = this.getNextActiveTab()

    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        active: nextActiveTab === index,
        key: index
      })
    })
  }

  getNextActiveTab() {
    const { customBehavior, active } = this.props
    const { activeTab } = this.state

    return customBehavior ? active : activeTab
  }
}

export default Main
