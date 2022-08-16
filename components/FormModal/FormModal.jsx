import React from "react";

//next ui
import {
  Modal,
  Input,
  Col,
  Button,
  Text,
  Textarea,
  Spacer,
} from "@nextui-org/react";

//hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function FormModal({ closeModal, visible }) {
  const isXs = useMediaQuery(500);
  return (
    <>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeModal}
        css={{ margin: isXs && "0 20px" }}
      >
        <Modal.Header>
          <Col>
            <Text weight="bold" h4 id="modal-title" size={18}>
              Feel free to
            </Text>
            <Text b h6 size={18}>
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
            aria-label="name"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="secondary"
            size="lg"
            placeholder="Email"
            aria-label="enter your name"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="secondary"
            size="lg"
            placeholder="Phone"
            aria-label="phone"
          />
          <Spacer y={1} />
          <Textarea
            labelPlaceholder="Type something else?..."
            status="secondary"
            minRows={2}
            aria-label="textarea"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto bordered color="error" onPress={closeModal}>
            Close
          </Button>
          <Button auto bordered color="secondary" onPress={closeModal}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
