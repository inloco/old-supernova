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

// ALERT: This value should be equals to $layout-responsive-breakpoint
const LAYOUT_RESPONSIVE_BREAKPOINT = 480

class SnLayout extends React.Component {
  static propTypes = {
    sysbar: PropTypes.element,
    drawer: PropTypes.element,
    aside: PropTypes.element,
    header: PropTypes.element,
    subheader: PropTypes.element,
    footer: PropTypes.element,
    fixedContent: PropTypes.bool,
    drawerIsCollapsed: PropTypes.bool,
    children: PropTypes.any,
    customizableContent: PropTypes.bool
  }

  static defaultProps = {
    sysbar: null,
    drawer: null,
    aside: null,
    header: null,
    subheader: null,
    footer: null,
    fixedContent: true,
    drawerIsCollapsed: true,
    customizableContent: false
  }

  constructor(props) {
    super(props)

    this.state = {
      drawerIsOpen: false,
      // This value should be greater than LAYOUT_RESPONSIVE_BREAKPOINT
      layoutWidth: LAYOUT_RESPONSIVE_BREAKPOINT + 1
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleScreenSizeChange)

    this.handleScreenSizeChange()
  }

  componentWillUnMount() {
    window.removeEventListener('resize')
  }

  getChildContext() {
    const drawerMenuIsShowing = this.drawerMenuIsShowing()

    return {
      drawerIsCollapsed: this.props.drawerIsCollapsed,
      drawerIsOpened: drawerMenuIsShowing && this.state.drawerIsOpen,
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
          {
            this.props.customizableContent
            ? this.props.children
            : this.renderContent()
          }
          { this.props.aside && this.renderAside() }
        </Layout>
      </Structure>
    )
  }

  renderSysbar() {
    const hasDrawer = this.props.drawer !== null

    return(
      <Sysbar hasDrawer={hasDrawer}>
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

  renderContent() {
    return(
      <Main>
        {
          this.props.fixedContent
          ? this.renderFixedContent()
          : this.renderContentFlow()
        }
      </Main>
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

  handleScreenSizeChange = () => {
    this.setState({ layoutWidth: window.innerWidth })
  }

  drawerMenuIsShowing() {
    return this.state.layoutWidth <= LAYOUT_RESPONSIVE_BREAKPOINT
  }
}

SnLayout.childContextTypes = {
  drawerIsCollapsed: PropTypes.bool,
  drawerIsOpened: PropTypes.bool,
  handleOpenDrawerClick: PropTypes.func,
  handleCloseDrawerClick: PropTypes.func
}

export default SnLayout