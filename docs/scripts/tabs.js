var Tabs = Supernova.Tabs;
var Tab = Supernova.Tab;

var TabsExample = React.createClass({
  render: function() {
    return(
      <Tabs initialTab={1}>
        <Tab label="Opção A">
          <div className="sn-grid--bleed-top">Conteúdo de A</div>
        </Tab>

        <Tab label="Opção B">
          <div className="sn-grid--bleed-top">Conteúdo de B</div>
        </Tab>

        <Tab label="Opção C">
          <div className="sn-grid--bleed-top">Conteudo de C</div>
        </Tab>
      </Tabs>
    )
  }
});

ReactDOM.render(<TabsExample />, document.getElementById("tabs-component"));