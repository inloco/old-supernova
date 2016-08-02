import React, { PropTypes } from "react"

class Main extends React.Component {
  static propTypes = {
    initialTab:  PropTypes.number,
    children:    PropTypes.node.isRequired
  }

  static defaultProps = {
    active: false
  }

  constructor(props) {
    super(props)

    this.state = { currentTab: props.initialTab }
  }

  setActiveProp(tab, value) {
    return { ...tab.props, active: value }
  }

  setHandleClickProp(tab, index) {
    return { ...tab.props, handleClick: () => {
      this.setState({ currentTab: index })
    }}
  }

  loadTabs() {
    return this.props.children.map((tab, index) => {
      const props = {
        ...this.setActiveProp(tab, this.state.currentTab === index),
        ...this.setHandleClickProp(tab, index)
      }

      return { ...tab, props }
    })
  }

  renderActiveTabContent(tabs) {
    return tabs.map((tab, i) => {
      if(tab.props.active) {
        return <div key={i}>{tab.props.children}</div>
      }
    })
  }

  render() {
    const tabs = this.loadTabs()

    return (
      <div>
        <div className="sn-tabs">
          <ul>{tabs}</ul>
        </div>
        <div className="sn-tabs__content">
          {this.renderActiveTabContent(tabs)}
        </div>
      </div>
    )
  }
}

export default Main