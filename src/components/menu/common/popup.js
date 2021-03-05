import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Popup = ( { className, visible, width, children } ) => {
    return (
    <>
      <PopupBg visible={visible} />
      <PopupFrame className={className} tabIndex="-1" visible={visible}>
        <PopupBody className="popup-body" bodyWidth={width}>
          { children }
        </PopupBody>
      </PopupFrame>
    
    </>
    );
}

Popup.prototype = {
    visible: PropTypes.bool,
    bodyWidth: PropTypes.string
}

const PopupBg = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`
const PopupFrame = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`
const PopupBody = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 0.12em;
  width: ${(props) => props.bodyWidth ? props.bodyWidth : "20em"};
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`
//
export default Popup;
