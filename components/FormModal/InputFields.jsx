import React, { useMemo } from "react";
//next ui
import { Input } from "@nextui-org/react";

export default function InputFields(props) {
  const {
    nameValue,
    nameReset,
    nameBindings,
    emailValue,
    emailReset,
    emailBindings,
    phoneValue,
    phoneReset,
    phoneBindings,
  } = props;

  // email validation -----------------------
  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
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

  // name validation ------------------------
  const validateFullName = (value) => {
    return value.match(/^[a-zA-Z]+ [a-zA-Z]+$/);
  };
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

  // phone validation ---------------------
  const validatePhone = (value) => {
    return value.match(/^\+?\d{1,4}\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/);
  };

  const phoneHelper = useMemo(() => {
    if (!phoneValue)
      return {
        text: "",
        color: "",
      };

    const isValidPhone = validatePhone(phoneValue);

    return {
      phoneText: isValidPhone ? "Correct phone" : "Enter a valid phone",
      phoneColor: isValidPhone ? "success" : "error",
    };
  }, [phoneValue]);

  return (
    <>
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
        label="Full Name"
        placeholder="John Doe"
        aria-label="name"
        type="text"
        name="name"
      />
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
        label="Email"
        placeholder="apple@gmail.com"
        aria-label="enter your email"
        type="email"
        name="email"
      />
      <Input
        {...phoneBindings}
        clearable
        bordered
        onClearClick={phoneReset}
        status={phoneHelper.phoneColor}
        helperColor={phoneHelper.phoneColor}
        helperText={phoneHelper.phoneText}
        fullWidth
        color="secondary"
        size="lg"
        label="Phone number"
        placeholder="+46735693895"
        aria-label="enter your phone number"
        type="text"
        name="phone"
      />
    </>
  );
}
