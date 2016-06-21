import React, { PropTypes } from "react"

class Footer extends React.Component {  
  static propTyes = {
    children: PropTypes.node,
    company: PropTypes.string.isRequired
  }
  
  getCurrentYear() {
    return new Date().getFullYear()
  }
  
  render() {
    const { company, children } = this.props

    return (
      <div className="nav-footer">
        <p className="copyright">
          <strong>{ company }</strong> © { this.getCurrentYear() }
        </p>
        <p>{ children }</p>
      </div>
    )
  }
}

export default Footer