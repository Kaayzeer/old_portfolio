import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";

export default function FormModal({ setVisible, visible }) {
  const closeModal = () => {
    setVisible(false);
    console.log("modal closed");
  };

  return (
    <>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeModal}
      >
        <Modal.Header>
          <Text id="modal-title" siza={18}>
            Welcome to
            <Text b sieze={18}>
              NextUi
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="secondary"
            size="lg"
            placeholder="Name"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="secondary"
            size="lg"
            placeholder="Email"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="secondary"
            size="lg"
            placeholder="Phone"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto bordered color="error" onClick={closeModal}>
            Close
          </Button>
          <Button auto bordered color="secondary" onClick={closeModal}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
