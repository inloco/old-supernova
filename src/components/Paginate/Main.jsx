import React from "react"
import PropTypes from "prop-types"

class Paginate extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props

    return (
      <tfoot>
        <tr role="row">
          <td className="footer-nav-col" colSpan="10">
            <ul className="pagination table-footer-icons">
              { children }
            </ul>
          </td>
        </tr>
      </tfoot>
    )
  }
}

export default Paginate
