import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import MainLayout from './structure/MainLayout'

class BasicLayoutTemplate extends React.Component {
  static propTypes = {
    drawer: PropTypes.element,
    aside: PropTypes.element,
    sysbar: PropTypes.element,
    header: PropTypes.element,
    subheader: PropTypes.element,
    footer: PropTypes.element,
    openDrawer: PropTypes.bool,
    content: PropTypes.any
  }

  static defaultProps = {
    drawer: null,
    aside: null,
    sysbar: null,
    header: null,
    subheader: null,
    footer: null,
    openDrawer: false,
    content: null
  }

  render() {
    const layoutClass = classNames('sn-layout', {
      'sn-layout--open-drawer': this.props.openDrawer,
    })

    return (
      <div className="sn-structure">
        <div className={layoutClass}>
          {this.props.sysbar}

          {this.props.drawer}

          <MainLayout>
            {this.props.header}
            {this.props.subheader}

            {this.props.children}

            {this.props.footer}
          </MainLayout>

          {this.props.aside}

        </div>
      </div>
    )
  }
}

export default BasicLayoutTemplate