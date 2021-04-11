import React, { Fragment, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/authContext";
import { useHttpClient } from "../../shared/hooks/http-hook";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/utils/validators.js";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";

import "../../css/places/pages/PlaceForm.css";

export const UpdatePlace = ({ match }) => {
  const authContext = useContext(AuthContext);
  const { userId } = authContext;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [place, setPlace] = useState(null);

  const placeId = match.params.placeId;
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  useEffect(() => {
    try {
      const getPlaceById = async () => {
        const res = await sendRequest(`/api/places/${placeId}`, "get");
        setPlace(res);
      };
      getPlaceById();
    } catch (err) {}
  }, [sendRequest]);
  useEffect(() => {
    if (place) {
      setFormData(
        {
          title: {
            value: place.title,
            isValid: true,
          },
          description: {
            value: place.description,
            isValid: true,
          },
        },
        true
      );
    }
  }, [place]);

  const history = useHistory();
  const placeUpdateSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const body = {
        title: formState.inputs.title.value,
        description: formState.inputs.description.value,
      };
      const res = await sendRequest(`/api/places/${placeId}`, "patch", body);
      if (res) {
        history.push(`/${userId}/places`);
      }
    } catch (err) {}
  };
  console.log(formState.isValid);

  return isLoading ? (
    <div className='center'>
      <LoadingSpinner asOverlay />
    </div>
  ) : (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && formState.inputs.title.value !== "" && (
        <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
          <Input
            type='text'
            element='input'
            id='title'
            placeholder='Title'
            label='Title'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid title'
            onInput={inputHandler}
            value={formState.inputs.title.value}
            valid={formState.inputs.title.isValid}
          />

          <Input
            element='textarea'
            id='description'
            placeholder='Description'
            label='Description'
            validators={[VALIDATOR_REQUIRE(5)]}
            errorText='Please enter a valid description (minimum 5 characters)'
            onInput={inputHandler}
            value={formState.inputs.description.value}
            valid={formState.inputs.description.isValid}
          />
          <Button type='submit' disabled={formState.isValid}>
            Update Place
          </Button>
        </form>
      )}
    </Fragment>
  );
};

export default UpdatePlace;
