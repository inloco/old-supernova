var Alert = Supernova.Alert;

var AlertExample = React.createClass({
  render: function() {
    return(
      <Alert active={true} message="Usuário cadastrado com sucesso!" icon="&#xE876;" closeAfter={ 2000 } />
    )
  }
});

ReactDOM.render(<AlertExample  />, document.getElementById("alert-component"));