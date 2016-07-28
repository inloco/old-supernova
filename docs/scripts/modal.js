var Modal = Supernova.Modal;
var ModalBody = Supernova.ModalBody;
var ModalFooter = Supernova.ModalFooter;
var ModalHeader = Supernova.ModalHeader;
var Button = Supernova.Button;

var ModalExample = React.createClass({
  getInitialState: function() {
    return { open: false }
  },
  open: function() {
    this.setState({ open: true })
  },
  close: function() {
    this.setState({ open: false })
  },
  render: function() {
    return(
      <div>
        <Modal open={this.state.open} onClose={this.close} size="large">
          <ModalHeader>
            <span className="modal-title">Título do Modal</span>
          </ModalHeader>

          <ModalBody>
            <p>Algum conteúdo pertinente ao modal daqui</p>
          </ModalBody>

          <ModalFooter>
            Rodapé desse modal
          </ModalFooter>
        </Modal>

        <Button onClick={this.open} label="Abrir modal" />
      </div>
    )
  }
});

ReactDOM.render(<ModalExample />, document.getElementById("modal-component"));