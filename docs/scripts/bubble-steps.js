var Steps = Supernova.BubbleSteps;
var Step = Supernova.BubbleStep;

var StepExample = React.createClass({
  render: function() {
    return(
      <Steps defaultStep={2}>
        <Step label="Item Completo" />
        <Step label="Item Completo" />
        <Step label="Item Ativo" />
        <Step label="Item a Fazer" />
      </Steps>
    )
  }
});

ReactDOM.render(<StepExample />, document.getElementById("bubble-steps-component"));