import React, { Fragment, useContext, useState } from "react";
import { AuthContext } from "../../shared/context/authContext";
import { useHttpClient } from "../../shared/hooks/http-hook";

// components //
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
// import Map from "../../shared/components/UIElements/Map";

import "../../css/places/components/PlaceItem.css";
const PlaceItem = ({
  item: { _id, image, title, description, address, creator },
  onDelete,
}) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const authContext = useContext(AuthContext);
  const { isLoggedIn, userId } = authContext;
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHanlder = () => {
    setShowConfirmModal(true);
  };
  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };
  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      const res = await sendRequest(`/api/places/${_id}`, "delete");
      console.log(res);
      onDelete(_id);
    } catch (err) {}
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
        footer={<Button onClick={closeMapHandler}> CLOSE </Button>}
      >
        {/* props.children | form */}
        <div className='map-conteiner'>
          <h2> Map is left to render :( </h2>
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        header='Are You Sure'
        footerClass='place-item__modal-actions'
        footer={
          <Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              Cancel
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              Delete
            </Button>
          </Fragment>
        }
      >
        <p>
          Do You Want To Proceed And Delete This Place. This Can't Be Undone
          Later!!
        </p>
      </Modal>
      <li className='place-item'>
        <Card className='place-item__content'>
          <div className='place-item__image'>
            <img src={`/${image}`} alt={title} />
          </div>
          <div className='place-item__info'>
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className='place-item__actions'>
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {isLoggedIn && userId === creator && (
              <Fragment>
                <Button to={`/places/${_id}`}>EDIT</Button>
                {isLoading ? (
                  <div className='center'>
                    <LoadingSpinner asOverlay />
                  </div>
                ) : (
                  <Button danger onClick={showDeleteWarningHanlder}>
                    DELETE
                  </Button>
                )}
              </Fragment>
            )}
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default PlaceItem;
