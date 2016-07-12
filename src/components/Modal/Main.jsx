import React, { PropTypes } from "react"
import ModalTrigger from "./Trigger"
import Button from "../../Button"

class Main extends React.Component {
  static propTyes = {
    id: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    title: PropTypes.string
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
        <button type="button" className="btn btn-default validate-then-dismiss-modal" data-dismiss="modal">
          <%= translate("dictionary.ok") %>
        </button>
      </div>
    )
  }

  render() {
    const{ id, style, size } = this.props

     return (
       <div id={ id } className={ "modal fade " + style }>
        <div className={ "modal-dialog modal-" + size }>
          <div className="modal-content">
            { this.getHeader() }
            <div className="modal-body">
              <%= app_builder.fields_for :geofence_configuration, app_builder.object.geofence_configuration do |geofence_configuration_builder| %>
                <div className="form-group">
                  <%= geofence_configuration_builder.label :sleep_time,
                                                           translate("web.applications.form.advanced.geofence_configuration.sleep_time") %>
                  <%= tooltip_span(translate("web.applications.form.advanced.geofence_configuration.sleep_time_tooltip")) %>
                  <div className="layout horizontal col-gutter-small">
                    <div className="flex-5">
                      <div className="form-control-wrapper">
                        <%= geofence_configuration_builder.text_field :sleep_time,
                                                                      id: "geofence_configuration_sleep_time",
                                                                      className: "form-control empty",
                                                                      number: true %>
                        <span className="material-input"></span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="type-body-2 disabled-txt">
                        <%= translate("web.applications.form.advanced.geofence_configuration.sleep_time_unit") %>
                      </span>
                    </div>
                  </div>
                </div>
              <% end %>
            </div>
            { this.getFooter() }
          </div>
        </div>
      </div>
     )
 }
}

export default Main
