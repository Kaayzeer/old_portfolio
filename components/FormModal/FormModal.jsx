import React, { useState, useRef } from "react";
//next ui
import {
  Modal,
  Col,
  Button,
  Text,
  Textarea,
  Spacer,
  useInput,
} from "@nextui-org/react";
//framer-motion
import { motion } from "framer-motion";
//hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";
//components
import InputFields from "./InputFields";
import { useNewDocument } from "../../firebase/functions";
//functions

export default function FormModal({ closeModal, visible }) {
  const { addDocument, message, error } = useNewDocument();
  const [msg, setMsg] = useState("");

  const isXs = useMediaQuery(500);
  const {
    value: nameValue,
    reset: nameReset,
    bindings: nameBindings,
  } = useInput("");

  const {
    value: emailValue,
    reset: emailReset,
    bindings: emailBindings,
  } = useInput("");

  const {
    value: phoneValue,
    reset: phoneReset,
    bindings: phoneBindings,
  } = useInput("");

  const { reset, bindings } = useInput("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    addDocument(
      e.target.name.value,
      e.target.email.value,
      e.target.phone.value,
      e.target.textArea.value
    );
    setMsg(message);
  };

  const handleClose = () => {
    setMsg("");
    nameReset();
    emailReset();
    phoneReset();
    reset();
    closeModal();
  };

  return (
    <motion.div>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={handleClose}
        css={{ margin: isXs && "0 20px" }}
      >
        <>
          {!msg && !error && (
            <Modal.Header>
              <Col align="center">
                <Text weight="bold" h4 id="modal-title" size={18}>
                  Feel free to
                </Text>
                <Text b h6 size={14}>
                  Contact me :)
                </Text>
              </Col>
            </Modal.Header>
          )}
          {msg && (
            <Modal.Header>
              <Col align="left">
                <Text
                  weight="bold"
                  h4
                  color="success"
                  id="modal-title"
                  size={18}
                >
                  {message}
                </Text>
                <Text b h6 size={14}>
                  I will review it and come back to you in the near future :)
                </Text>
              </Col>
            </Modal.Header>
          )}
          {error && (
            <Modal.Header>
              <Col>
                <Text
                  weight="bold"
                  h4
                  color="success"
                  id="modal-title"
                  size={18}
                >
                  {error}
                </Text>
                <Text b h6 size={14}>
                  Give it a moment and try again :)
                </Text>
              </Col>
            </Modal.Header>
          )}

          <form onSubmit={handleSubmit}>
            <Modal.Body>
              <Spacer y={0.5} />
              <InputFields
                nameValue={nameValue}
                nameReset={nameReset}
                nameBindings={nameBindings}
                emailValue={emailValue}
                emailReset={emailReset}
                emailBindings={emailBindings}
                phoneValue={phoneValue}
                phoneReset={phoneReset}
                phoneBindings={phoneBindings}
              />
              <Spacer y={1} />
              <Textarea
                {...bindings}
                labelPlaceholder="Type something else?..."
                status="secondary"
                minRows={2}
                aria-label="textarea"
                name="textArea"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button auto bordered color="error" onPress={handleClose}>
                Close
              </Button>
              <Button type="submit" auto bordered color="secondary">
                Send
              </Button>
            </Modal.Footer>
          </form>
        </>
      </Modal>
    </motion.div>
  );
}
