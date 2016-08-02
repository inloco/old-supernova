var Pills = Supernova.Pills;
var Pill = Supernova.Pill;

var PillsExample = React.createClass({
  render: function() {
    return(
      <Pills name="lala">
        <Pill label="Item 1" value="zoombie"/>
        <Pill label="Item 2" value="automatic"/>
        <Pill label="Item 3" value="manually"/>
      </Pills>
    )
  }
});

ReactDOM.render(<PillsExample />, document.getElementById("pills-component"));