import React, { PropTypes } from 'react'

class Card extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    cardColor: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    padding: PropTypes.bool,
    bordered: PropTypes.bool,
    flat: PropTypes.bool,
    bleed: PropTypes.bool
  }

  static defaultProps = {
    padding: true,
    className: ''
  }

  render() {
    const {
      cardColor,
      className,
      padding,
      bordered,
      flat,
      bleed
    } = this.props
    const style = {
      borderLeftColor: cardColor,
      borderLeftWidth: '4px',
      borderLeftStyle: 'solid'
    }
    const cardStyle = cardColor ? style : {}
    const paddingClass = padding ? 'sn-card--padding' : ''
    const borderedClass = bordered ? 'sn-card--bordered' : ''
    const flatClass = flat ? 'sn-card--flat' : ''
    const bleedClass = bleed ? 'sn-card--bleed' : ''

    return (
      <div
        onClick={this.props.onClick}
        style={cardStyle}
        className={`sn-card
                    ${className}
                    ${paddingClass}
                    ${borderedClass}
                    ${flatClass}
                    ${bleedClass}`
                  }
      >
        {this.props.children}
      </div>
    )
  }
}

export default Card
