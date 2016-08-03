var Well = Supernova.Well;

var WellExample = React.createClass({
  render: function() {
    return(
      <Well>
        I am a well!
      </Well>
    )
  }
});

ReactDOM.render(<WellExample />, document.getElementById("well-component"));