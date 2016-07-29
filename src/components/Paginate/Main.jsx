import React, { PropTypes } from "react"

class Paginate extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props

    return (
      <tfoot>
        <tr role="row">
          <td className="footer-nav-col" colspan="10" data-column="0">
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
