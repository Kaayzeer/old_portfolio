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
import { useNewDocument } from "../../hooks/useNewDocument";
import { useRouter } from "next/router";
//functions

export default function FormModal({ closeModal, visible }) {
  const { addDocument, message, error, setError, setMessage } =
    useNewDocument();
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const isSm = useMediaQuery(500);
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

    nameReset();
    emailReset();
    phoneReset();
    reset();
    setTimeout(() => {
      closeModal();
    }, [3500]);
  };

  const handleClose = () => {
    setError("");
    setMessage("");
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
        css={{ margin: isSm && "0 20px" }}
      >
        <>
          {!message && !error && (
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
          {message && (
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
              <Button
                type="submit"
                auto
                bordered
                color="secondary"
                disabled={nameValue.length < 1 && true}
              >
                Send
              </Button>
            </Modal.Footer>
          </form>
        </>
      </Modal>
    </motion.div>
  );
}
