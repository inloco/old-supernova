import React, { PropTypes } from "react"
import ModalTrigger from "./Trigger"
import Button from "../../Button"

class Main extends React.Component {
  static propTyes = {
    id: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    title: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.node
  }

  static defaultProps = {
    style: ""
  }

  getHeader() {
    const{ title } = this.props

    return(
      <div className="modal-header">
        <Button type="button"
                isModal={ true }
                iconSize="24"
                iconName="icon-close" />
        <h4 className="modal-title">
          { title }
        </h4>
      </div>
    )
  }

  getFooter() {
    const{ title } = this.props

    return(
      <div className="modal-footer">
        <Button type="button"
                isModal={ true }
                btnType="default"
                style="validate-then-dismiss-modal"
                label={ label }/>
      </div>
    )
  }

  render() {
    const{ id, style, size, children } = this.props

     return (
       <div id={ id } className={ "modal fade " + style }>
        <div className={ "modal-dialog modal-" + size }>
          <div className="modal-content">
            { this.getHeader() }
            <div className="modal-body">
              { children }
            </div>
            { this.getFooter() }
          </div>
        </div>
      </div>
     )
 }
}

export default Main
