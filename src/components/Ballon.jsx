import React, { PropTypes } from "react"
import Tooltip from "./Info"

class Ballon extends React.Component {
  static propTyes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    addon: PropTypes.string,
    isUnderAudit: PropTypes.bool,
    underAuditText: PropTypes.string
  }

  static defaultProps = {
    isUnderAudit: false
  }

  renderBallonHeader() {
    return (
      <div className={ "balloon-header " + this.props.color }>
        <span className={ `icon-24 ${ this.props.icon }` }></span>
        { this.props.label }
        { this.props.isUnderAudit ? this.renderAuditIcon() : null }
      </div>
    )
  }

  renderAuditIcon() {
    return <Tooltip icon="icon-alert under-audit" text={ this.props.underAuditText } />
  }

  renderBallonBody() {
    const{ addon } = this.props

    return (
      <div className="balloon-body">
        { addon !== null ? <span className="balloon-body-currency">{ addon }</span> : null }
        { this.props.value }
      </div>
    )
  }

  render() {
    return (
      <div className="balloon squared" id={ this.props.id }>
        { this.renderBallonHeader() }
        { this.renderBallonBody() }
      </div>
    )
  }
}

export default Ballon
