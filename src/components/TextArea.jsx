import React from "react"
import PropTypes from "prop-types"

class TextArea extends React.Component {
  static propTyes = {
    id: PropTypes.string,
    name: PropTypes.string,
    rows: PropTypes.number,
    tabIndex: PropTypes.number
  }

  static defaultProps = {
    tabIndex: "-1"
  }

  hadleUndefined(item) {
    return item !== undefined ? item : null
  }

  render() {
    const{ id, name, rows, tabIndex } = this.props

    return (
      <textarea id={ this.hadleUndefined(id) }
                name={ this.hadleUndefined(name) }
                className="form-control bs-material"
                rows={ this.hadleUndefined(rows) }
                tabIndex={ tabIndex } />
    )
  }
}

export default TextArea
