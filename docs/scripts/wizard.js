var Wizard = Supernova.Wizard;
var Step = Supernova.WizardStep;
var Button = Supernova.Button;

var WizardExample = React.createClass({
  render: function() {
    return(
      <div>
        <Wizard ref="wizard">
          <Step>
            <h1>1 - Foo</h1>
          </Step>

          <Step>
            <h1>2 - Bar</h1>
          </Step>

          <Step>
            <h1>3 - Some</h1>
          </Step>
        </Wizard>

        <div className="sn-grid sn-grid--horizontal sn-grid--cell-gutter-sm">
          <div className="sn-grid--cell">
            <Button id="previous-button" onClick={() => {this.refs.wizard.previous()}} label="Previous"/>
          </div>
          <div className="sn-grid--cell">
            <Button id="next-button" onClick={() => {this.refs.wizard.next()}} label="Next"/>
          </div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(<WizardExample />, document.getElementById("wizard-component"));