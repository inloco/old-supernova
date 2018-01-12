import React from 'react'
import PropTypes from 'prop-types'
import Structure from './structuralComponents/Structure'
import Layout from './structuralComponents/Layout'
import Main from './structuralComponents/Main'
import Sysbar from './structuralComponents/Sysbar'
import Drawer from './structuralComponents/Drawer'
import Header from './structuralComponents/Header'
import Subheader from './structuralComponents/Subheader'
import Content from './structuralComponents/Content'
import Footer from './structuralComponents/Footer'
import Aside from './structuralComponents/Aside'

class SnLayout extends React.Component {
  static propTypes = {
    sysbar: PropTypes.element,
    drawer: PropTypes.element,
    aside: PropTypes.element,
    footer: PropTypes.element,
    fixedContent: PropTypes.bool,
    drawerIsCollapsed: PropTypes.bool,
    children: PropTypes.any
  }

  static defaultProps = {
    sysbar: null,
    drawer: null,
    aside: null,
    footer: null,
    fixedContent: true,
    drawerIsCollapsed: true
  }

  constructor(props) {
    super(props)

    this.state = { drawerIsOpen: false }
  }

  getChildContext() {
    return {
      drawerIsCollapsed: this.props.drawerIsCollapsed,
      drawerIsOpened: this.state.drawerIsCollapsed,
      handleOpenDrawerClick: this.handleOpenDrawerClick,
      handleCloseDrawerClick: this.handleCloseDrawerClick
    }
  }

  render() {
    return (
      <Structure>
        <Layout drawerIsOpen={this.state.drawerIsOpen}>
          { this.props.sysbar && this.renderSysbar() }
          { this.props.drawer && this.renderDrawer() }
          <Main>
            {
              this.props.fixedContent
              ? this.renderFixedContent()
              : this.renderContentFlow()
            }
          </Main>
          { this.props.aside && this.renderAside() }
        </Layout>
      </Structure>
    )
  }

  renderSysbar() {
    return(
      <Sysbar>
        { this.props.sysbar }
      </Sysbar>
    )
  }

  renderDrawer() {
    return(
      <Drawer
        isCollapsed={ this.props.drawerIsCollapsed }
        handleCloseDrawerClick={ this.handleCloseDrawerClick }
      >
        { this.props.drawer }
      </Drawer>
    )
  }

  renderAside() {
    return(
      <Aside>
        { this.props.aside }
      </Aside>
    )
  }

  renderFixedContent() {
    return (
      <React.Fragment>
        { this.props.header && this.renderHeader() }
        { this.props.subheader && this.renderSubheader() }
        <Content>
          { this.props.children }
        </Content>
        { this.props.footer && this.renderFooter() }
      </React.Fragment>
    )
  }

  renderContentFlow() {
    return (
      <Content>
        { this.props.header && this.renderHeader() }
        { this.props.subheader && this.renderSubheader() }
        { this.props.children }
        { this.props.footer && this.renderFooter() }
      </Content>
    )
  }

  renderHeader() {
    return(
      <Header>
        { this.props.header }
      </Header>
    )
  }

  renderSubheader() {
    return(
      <Subheader>
        { this.props.subheader }
      </Subheader>
    )
  }

  renderFooter() {
    return(
      <Footer>
        { this.props.footer }
      </Footer>
    )
  }

  handleOpenDrawerClick = () => {
    this.setState({ drawerIsOpen: true })
  }

  handleCloseDrawerClick = () => {
    this.setState({ drawerIsOpen: false })
  }
}

SnLayout.childContextTypes = {
  drawerIsCollapsed: PropTypes.bool,
  drawerIsOpened: PropTypes.bool,
  handleOpenDrawerClick: PropTypes.func,
  handleCloseDrawerClick: PropTypes.func
}

export default SnLayout