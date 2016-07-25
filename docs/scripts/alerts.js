var Alert = Supernova.Alert;

var createAlert = function(type) {
  return React.createClass({
    getInitialState: function() {
      return { alertIsActive: false }
    },
    handleOnClick: function() {
      this.setState({ alertIsActive: true })
    },
    render: function() {
      return(
        <div>
          <Alert type={type} closeAfter={2000} active={this.state.alertIsActive} message="Usuário cadastrado com sucesso!" icon="&#xE876;" />
          <button onClick={this.handleOnClick}>Open alert {type}</button>
        </div>
      )
    }
  });
}

var AlertSuccessExample = createAlert("success");
ReactDOM.render(<AlertSuccessExample />, document.getElementById("alert-component--success"));

var AlertDangerExample = createAlert("danger");
ReactDOM.render(<AlertDangerExample />, document.getElementById("alert-component--danger"));

var AlertWarningExample = createAlert("warning");
ReactDOM.render(<AlertWarningExample />, document.getElementById("alert-component--warning"));

var AlertInfoExample = createAlert("info");
ReactDOM.render(<AlertInfoExample />, document.getElementById("alert-component--info"));