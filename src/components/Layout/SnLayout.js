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
    fixedContent: PropTypes.bool,
    drawerCollapsed: PropTypes.bool,
    children: PropTypes.any
  }

  static defaultProps = {
    sysbar: null,
    drawer: null,
    aside: null,
    fixedContent: true,
    drawerCollapsed: true
  }

  constructor(props) {
    super(props)

    this.state = {
      openDrawer: false,
      defaultDrawerCollapsed: props.drawerCollapsed,
      currentDrawerCollapsed: props.drawerCollapsed
    }
  }

  render() {
    return (
      <Structure>
        <Layout openDrawer={this.state.openDrawer}>
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
    const SnSysbar = () => {
      return React.cloneElement(
        this.props.sysbar,
        { handleDrawerButtonClick: this.handleDrawerButtonClick }
      )
    }

    return(
      <Sysbar>
        <SnSysbar />
      </Sysbar>
    )
  }

  renderDrawer() {
    const SnDrawer = () => {
      return React.cloneElement(
        this.props.drawer,
        {
          drawerIsCollapsed: this.state.currentDrawerCollapsed,
          handleObfuscatorClick: this.handleObfuscatorClick
        }
      )
    }

    return(
      <Drawer
        collapsed={ this.props.drawerCollapsed }
        obfuscatorClick={ this.handleObfuscatorClick }
      >
        <SnDrawer />
      </Drawer>
    )
  }

  renderHeader() {
    const SnHeader = () => {
      return React.cloneElement(
        this.props.header,
        { handleDrawerButtonClick: this.handleDrawerButtonClick }
      )
    }

    return(
      <Header>
        <SnHeader />
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

  handleDrawerButtonClick = () => {
    this.setState({ openDrawer: true, currentDrawerCollapsed: false })
  }

  handleObfuscatorClick = () => {
    console.log('fui chamado by handleObfuscatorClick')
    this.setState({
      openDrawer: false,
      currentDrawerCollapsed: this.state.defaultDrawerCollapsed
    })
  }
}

export default SnLayout