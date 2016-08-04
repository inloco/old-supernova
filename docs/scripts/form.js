var FormGroup = Supernova.FormGroup;
var Checkbox = Supernova.Checkbox;

var FormExample = React.createClass({
  render: function() {
    return(
      <div>
        <FormGroup label="Segmento">
          <Checkbox label="Indoor" />
          <Checkbox label="Retargeting" />
          <Checkbox label="Pretargeting" />
        </FormGroup>
      </div>
    )
  }
});

ReactDOM.render(<FormExample />, document.getElementById("form-component"));