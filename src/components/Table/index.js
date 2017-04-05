import React, { PropTypes } from 'react'

class Table extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    stripped: PropTypes.bool,
    bordered: PropTypes.bool,
    flat: PropTypes.bool,
    onlyContent: PropTypes.bool,
    style: PropTypes.any
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const { className, stripped, bordered, flat, onlyContent} = this.props
    const strippedClass = stripped ? 'sn-table--stripped' : ''
    const borderedClass = bordered ? 'sn-table--bordered' : ''
    const flatClass = flat ? 'sn-table--flat' : ''
    const onlyContentClass = onlyContent ? 'sn-table--only-content' : ''

    return (
      <table
        style={this.props.style}
        className={`sn-table
                   ${className}
                   ${strippedClass}
                   ${borderedClass}
                   ${flatClass}
                   ${onlyContentClass}`}
      >
        {this.props.children}
      </table>
    )
  }
}

export default Table