var SearchBox = Supernova.SearchBox;

var results = [
  { title: "O Boticário", subtitle: "O Boticário Perfumaria S.A.", info: "01.435.546/0001-34" },
  { title: "Hyundai", subtitle: "Caoa Motors S.A.", info: "01.435.546/0001-34" }
]


var SearchBoxExample = React.createClass({
  render: function() {
    return(
      <SearchBox
          label="Busque aqui"
          results={results}
          filter={true}/>
    )
  }
});

ReactDOM.render(<SearchBoxExample />, document.getElementById("searchbox-component"));