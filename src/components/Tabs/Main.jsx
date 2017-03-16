import React from 'react'

class Main extends React.PureComponent {
  getTabsLabel() {
    return this.props.children.map(tab => {
      return tab.props.label
    })
  }

  getTabItemClassName(index) {
    return this.props.active === index ? 'is-active' : ''
  }

  renderTabsItems() {
    return this.getTabsLabel().map((label, index) => {
      return (
        <li className={this.getTabItemClassName(index)} key={index}>
          <a href="#" onClick={() => this.props.onClick(index)}>
            {label}
          </a>
        </li>
      )
    })
  }

  renderTabsContent() {
    return this.props.children.map((tab, index) => {
      return React.cloneElement(tab, {
        active: this.props.active === index,
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
