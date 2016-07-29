var Card = Supernova.Card;
var CardCol = Supernova.CardCol;
var CardRow = Supernova.CardRow;
var CardList = Supernova.CardList;

var CardExample = React.createClass({
  render: function() {
    return(
      <Card>
        <CardCol size={2}>
          <CardRow isTitle={true}>
            Nome da Campanha
          </CardRow>

          <CardRow>Foo Campaign</CardRow>
        </CardCol>

        <CardCol size={2}>
          <CardRow isTitle={true}>
            Other Block
          </CardRow>

          <CardRow>Other value to this block</CardRow>
        </CardCol>

        <CardCol size={2}>
          <CardRow isTitle={true}>
            Nome da Campanha
          </CardRow>

          <CardRow>Foo Campaign</CardRow>
        </CardCol>

        <CardCol size={2}>
          <CardRow isTitle={true}>
            Other Block
          </CardRow>

          <CardRow>Other value to this block</CardRow>
        </CardCol>

        <CardCol center={true}>
          <a href=""><i className="material-icons"></i></a>
        </CardCol>
      </Card>
    )
  }
});

var CardGroupExample = React.createClass({
  render: function() {
    return(
      <CardList>
        <CardExample></CardExample>
        <CardExample></CardExample>
        <CardExample></CardExample>
        <CardExample></CardExample>
        <CardExample></CardExample>
      </CardList>
    )
  }
})

ReactDOM.render(<CardExample />, document.getElementById("card-component"));
ReactDOM.render(<CardGroupExample />, document.getElementById("card-group-component"));