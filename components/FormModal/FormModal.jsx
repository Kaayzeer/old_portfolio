import React from "react";
import {
  Modal,
  Input,
  Col,
  Button,
  Text,
  Textarea,
  Spacer,
} from "@nextui-org/react";

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
          <Col>
            <Text weight="bold" h4 id="modal-title" siza={18}>
              Feel free to
            </Text>
            <Text b h6 sieze={18}>
              Contact me :)
            </Text>
          </Col>
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
          <Spacer y={1} />
          <Textarea
            labelPlaceholder="Type something else?..."
            status="secondary"
            minRows={2}
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
