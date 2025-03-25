import React from 'react'
import styled from 'styled-components'
import { popupsizes } from '../data';


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

const PopupBox = styled.div`
  background: ${(props) => props.$background || '#f0f0f0'};
  padding: 20px;
  border-radius: 50px;
  width: ${(props) => props.width || '250px'};
  height: ${(props) => props.height || '200px'};
  max-width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;

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


const Popup = ({ title, content, onClose, children, size = 'small' }) => {
  
  const { width, height, background } = popupsizes[size] || popupsizes.small;

  return (
    <Overlay onClick={onClose}>
      <PopupBox onClick={(e) => e.stopPropagation()}
        width={width}
        height={height}
        $background={background}>
        
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