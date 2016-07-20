var Steps = Supernova.Steps;
var StepsItem = Supernova.StepsItem;

var StepExample = React.createClass({
  render: function() {
    return(
      <Steps raised={true}>
        <StepsItem label="Informações Gerais" index={1} done={true}/>
        <StepsItem label="Endereço" index={2} active={true}/>
        <StepsItem label="Confirmação" index={3} />
        <StepsItem label="Pagamento" index={4} />
      </Steps>
    )
  }
});

ReactDOM.render(<StepExample />, document.getElementById("steps-component"));