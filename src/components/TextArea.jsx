import React, { PropTypes } from "react"

class TextArea extends React.Component {
  static propTyes = {
    id: PropTypes.string,
    name: PropTypes.string,
    rows: PropTypes.string,
    tabIndex: PropTypes.string
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
                className="form-control empty"
                rows={ this.hadleUndefined(rows) }
                tabIndex={ tabIndex } />
    )
  }
}

export default TextArea
