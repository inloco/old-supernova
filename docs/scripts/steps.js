var Steps = Supernova.ArrowSteps;
var Step = Supernova.ArrowStep;

var StepExample = React.createClass({
  render: function() {
    return(
      <Steps raised={true} activeStep={1}>
        <Step label="Informações Gerais" />
        <Step label="Endereço" />
        <Step label="Confirmação" />
        <Step label="Pagamento" />
      </Steps>
    )
  }
});

ReactDOM.render(<StepExample />, document.getElementById("steps-component"));