import Modal from "./Modal";

type CreatePostProps = {
  onClose: () => void;
};

function CreatePostModal({ onClose }: CreatePostProps) {
  return (
    <Modal
      heading="Create Post"
      onClose={onClose}
      headingClassName="text-center"
    >
      This is the modal
    </Modal>
  );
}

export default CreatePostModal;
