import Modal from 'react-modal';

export default function ModalTemplate(props) {
    Modal.setAppElement("#root");
  
    return (
      <Modal
        open={props.open}
        onRequestClose={() => props.setOpen(false)}
      >
        <div className="wrapper">
          <div>
            {props.modalContent}

          </div>
          <button className="open" onClick={() => props.setOpen(false)}>
            Close modal
          </button>
        </div>
      </Modal>
    );
  }