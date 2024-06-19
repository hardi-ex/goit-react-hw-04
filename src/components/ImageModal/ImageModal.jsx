import Modal from "react-modal";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    padding: "1px",
  },

  overlay: {
    backgroundColor: "rgba(40, 40, 40, 0.75)",
  },
};

export const ImageModal = ({ onClose, modalImage }) => {
  return (
    <Modal isOpen={true} onRequestClose={onClose} style={customStyles}>
      <img src={modalImage.imageRegular} alt={modalImage.description} />
    </Modal>
  );
};
export default ImageModal;
