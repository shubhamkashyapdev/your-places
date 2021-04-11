import React, { useState, useContext, Fragment } from "react";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/authContext";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators.js";

import "../../css/users/pages/Authenticate.css";

const Authenticate = ({ history }) => {
  const authContext = useContext(AuthContext);
  const { isLoggedIn, login } = authContext;
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = async (e) => {
    e.preventDefault();
    if (isLoginMode) {
      // login user //
      try {
        const body = {
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        };
        const res = await sendRequest(`api/users/login`, "post", body);
        login(history, res.userId, res.token);
      } catch (err) {
        console.error(err);
      }
    } else {
      // create new user //
      const formData = new FormData();
      formData.append("email", formState.inputs.email.value);
      formData.append("name", formState.inputs.name.value);
      formData.append("password", formState.inputs.password.value);
      formData.append("image", formState.inputs.image.value);
      try {
        const res = await sendRequest(`/api/users/signup`, "post", formData);
        login(history, res.userId, res.token);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const switchModeHandler = (e) => {
    if (!isLoginMode) {
      setFormData(
        { ...formState.inputs, name: undefined, image: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: true,
          },
          image: {
            value: null,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Card className='authentication'>
        {isLoading && <LoadingSpinner asOverlay />}

        <h2>{isLoginMode ? "Login Required!!" : "Signup Required!!"}</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (
            <Input
              type='text'
              element='input'
              id='name'
              name='name'
              label='Name'
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Please Enter A Name'
            />
          )}

          <Input
            id='email'
            element='input'
            type='email'
            label='Email'
            validators={[VALIDATOR_EMAIL()]}
            errorText='Please Enter A Valid Email Address'
            onInput={inputHandler}
          />
          <Input
            id='password'
            element='input'
            type='password'
            label='Password'
            validators={[VALIDATOR_MINLENGTH(10)]}
            errorText='Please Enter A Valid Password (atleast 10 characters)'
            onInput={inputHandler}
          />
          {!isLoginMode && (
            <ImageUpload
              center
              id='image'
              onInput={inputHandler}
              errorText='Please Provide An Image'
            />
          )}
          <Button type='submit' disabled={!formState.isValid}>
            {" "}
            {isLoginMode ? "Login" : "Register"}{" "}
          </Button>
          <Button type='button' inverse onClick={switchModeHandler}>
            {isLoginMode ? "SWITCH TO SIGNUP" : "SWITCH TO LOGIN"}
          </Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default Authenticate;
