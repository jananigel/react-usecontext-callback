import React, { useContext } from "react";
import styled from "@emotion/styled";

import CallbackContext from '../../context-provider/callback.provider.js';

const Button = ({wording, callbackType}) => {

  const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border-radius: 4px;
    border: 1px solid;
    cursor: pointer;

    &:hover {
      background: #c3c3c3;
    }
  `;

  const callback = useContext(CallbackContext);

  return (
    <React.Fragment>
      <StyledButton onClick={callback[callbackType]}>{ wording }</StyledButton>
    </React.Fragment>
  )
}

export default Button;

