import React from 'react';
import styled from 'styled-components';

const ConfirmModal = ({
  confirmModalView, setConfirmModalView, setProjectDetails
}) => {

  if (!confirmModalView) {
    return null;
  }

  return (
    <Modal>
      Modal!
    </Modal>
  );
};

export default ConfirmModal;

const Modal = styled.div`
width: 400px;
height: 250px;
margin: auto;
display: table;
position: fixed;
left: 0;
right:0;
top: 15%;
background: white;
border: 1px solid;
tansition: 2s ease-out;
filter: blur(0);
transform: scale(1);
opacity: 5;
visibility: visible;
z-index: 999;
`;
