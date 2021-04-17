import React from "react";
import styled from "@emotion/styled";

const BottomArea = ({content, buttonPotision}) => {

  const StyledBottomArea = styled.div`
    display: flex;
    justify-content: ${buttonPotision};
    align-items: ${buttonPotision};
    padding: 4px 12px;

    button:not(last-child) {
      margin: 0 4px 0 0;
    }
  `;

  return (
    <React.Fragment>
      <StyledBottomArea>{ content }</StyledBottomArea>
    </React.Fragment>
  )
}

export default BottomArea;

