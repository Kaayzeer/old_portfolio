import React, { useMemo } from "react";
import { motion } from "framer-motion";

//next ui
import {
  Modal,
  Input,
  Col,
  Button,
  Text,
  Textarea,
  Spacer,
  useInput,
} from "@nextui-org/react";

//hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function FormModal({ closeModal, visible }) {
  const isXs = useMediaQuery(500);
  const {
    value: emailValue,
    reset: emailReset,
    bindings: emailBindings,
  } = useInput("");
  const {
    value: nameValue,
    reset: nameReset,
    bindings: nameBindings,
  } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const validateFullName = (value) => {
    return value.match(/^[a-zA-Z]+ [a-zA-Z]+$/);
  };

  const emailHelper = useMemo(() => {
    if (!emailValue)
      return {
        text: "",
        color: "",
      };

    const isValidEmail = validateEmail(emailValue);

    return {
      emailText: isValidEmail ? "Correct email" : "Enter a valid email",
      emailColor: isValidEmail ? "success" : "error",
    };
  }, [emailValue]);

  const nameHelper = useMemo(() => {
    if (!nameValue)
      return {
        text: "",
        color: "",
      };

    const isValidFullName = validateFullName(nameValue);

    return {
      nameText: isValidFullName ? "Correct name" : "Enter a valid name",

      nameColor: isValidFullName ? "success" : "error",
    };
  }, [nameValue]);

  return (
    <motion.div>
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
          <Spacer y={0.5} />
          <Input
            {...nameBindings}
            clearable
            bordered
            onClearClick={nameReset}
            status={nameHelper.nameColor}
            helperColor={nameHelper.nameColor}
            helperText={nameHelper.nameText}
            fullWidth
            color="secondary"
            size="lg"
            labelPlaceholder="Full Name"
            aria-label="name"
            type="text"
          />
          <Spacer y={0.5} />
          <Input
            {...emailBindings}
            clearable
            bordered
            onClearClick={emailReset}
            status={emailHelper.emailColor}
            helperColor={emailHelper.emailColor}
            helperText={emailHelper.emailText}
            fullWidth
            color="secondary"
            size="lg"
            labelPlaceholder="Email"
            aria-label="enter your name"
            type="email"
          />
          <Spacer y={0.5} />
          <Input
            clearable
            bordered
            fullWidth
            color="secondary"
            size="lg"
            labelPlaceholder="Phone"
            aria-label="phone"
            type="number"
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
    </motion.div>
  );
}
