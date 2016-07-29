var Tooltip = Supernova.Tooltip;

var TooltipExample = React.createClass({
  render: function() {
    return(
      <Tooltip message="Some info message">
        Exemplo de tooltip
      </Tooltip>
    )
  }
});

ReactDOM.render(<TooltipExample />, document.getElementById("tooltip-component"));