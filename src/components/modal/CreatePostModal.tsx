import Modal from "./core/Modal";

type CreatePostProps = {
  onClose: () => void;
};

function CreatePostModal({ onClose }: CreatePostProps) {
  return (
    <Modal heading="Create post" onClose={onClose} contentClassName="max-w-lg">
      This is the modal
    </Modal>
  );
}

export default CreatePostModal;
