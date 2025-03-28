import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useEffect } from 'react';


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  
`;

const popupFade = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const PopupBox = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 25px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  animation: ${popupFade} 0.3s ease-out;
  position: relative;
  
  
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: red;
  }
`;


const Popup = ({ title, content, onClose, children }) => {

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <Overlay onClick={onClose}>
      <PopupBox onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        {children ? children : (
          <>
            <h2>{title}</h2>
            <p>{content}</p>
          </>
        )}
      </PopupBox>
    </Overlay>
  )
}

export default Popup