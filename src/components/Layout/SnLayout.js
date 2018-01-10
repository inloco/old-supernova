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
    fixedContent: PropTypes.bool
  }

  static defaultProps = {
    sysbar: null,
    drawer: null,
    aside: null,
    fixedContent: true
  }

  constructor(props) {
    super(props)

    this.state = { openDrawer: false }
  }

  render() {
    return (
      <Structure>
        <Layout openDrawer={this.props.openDrawer}>
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
        { React.cloneElement(this.props.sysbar, { handleDrawerButtonClick }) }
      </Sysbar>
    )
  }

  renderDrawer() {
    return(
      <Drawer>
        { this.props.drawer }
      </Drawer>
    )
  }

  renderHeader() {
    return(
      <Header>
        { React.cloneElement(this.props.header, { handleDrawerButtonClick }) }
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
        { this.renderHeader() }
        { this.renderSubheader() }
        <Content>
          { this.props.children }
        </Content>
        { this.renderFooter() }
      </React.Fragment>
    )
  }

  renderContentFlow() {
    return (
      <Content>
        { this.renderHeader() }
        { this.renderSubheader() }
        { this.props.children }
        { this.renderFooter() }
      </Content>
    )
  }

  handleDrawerButtonClick = () => {
    this.setState({ openDrawer: !this.state.openDrawer })
  }
}

export default SnLayout