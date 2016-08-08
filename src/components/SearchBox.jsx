import React, { PropTypes } from "react"

class SearchBox extends React.Component {
  getTypeMessageClassName() {
    const { typeMessage } = this.props

    return typeMessage ? `sn-search-box__message--${typeMessage}` : ""
  }

  getHelpMessageClassName() {
    return `sn-search-box__message ${this.getTypeMessageClassName()}`
  }

  renderHelpMessage() {
    return (
      <span className={this.getHelpMessageClassName()}>
        {this.props.helpMessage}
      </span>
    )
  }

  render() {
    return (
      <div className="sn-search-box">
        <input type="text" className="sn-search-box__input" placeholder={this.props.label} autoComplete="off"/>
        <span className="sn-search-box__input--icon"></span>

        {this.renderHelpMessage()}
      </div>
    )
  }
}

export default SearchBox
