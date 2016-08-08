var SearchBox = Supernova.SearchBox;

var SearchBoxExample = React.createClass({
  render: function() {
    return(
      <SearchBox
        label="Busque aqui"
        helpMessage="Texto de ajuda ou informação"
        typeMessage="info"
      />
    )
  }
});

ReactDOM.render(<SearchBoxExample />, document.getElementById("searchbox-component"));