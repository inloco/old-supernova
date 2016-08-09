var Dropdown = Supernova.Dropdown;

var DropdownExample = React.createClass({
  render: function() {
    return(
      <Dropdown label="Dropdown">
        <a href="">Item #A</a>
        <a href="">Item #B</a>
        <a href="">Item #C</a>
      </Dropdown>
    )
  }
});

ReactDOM.render(<DropdownExample />, document.getElementById("dropdown-component"));