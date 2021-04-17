import React from "react";
import "./style.css";

import Button from "./shared/components/button/button.js";
import BottomArea from "./shared/components/bottom-area/bottom-area.js";
import CallbackContext from "./shared/context-provider/callback.provider.js";

export default function App() {
  const [action, setAction] = React.useState({ currentAction: "" });

  const onCancelClick = e => {
    setAction({
      currentAction: "Cancel click"
    });
    console.log("btn cancel click = ", e);
  };

  const onConfirmClick = e => {
    setAction({
      currentAction: "Confirm click"
    });
    console.log("btn confirm click = ", e);
  };

  return (
    <>
      Current action = {action.currentAction}
      <CallbackContext.Provider
        value={{ cancel: onCancelClick, confirm: onConfirmClick }}
      >
        <BottomArea
          buttonPotision="flex-end"
          content={
            <>
              <Button wording="Cancel" callbackType="cancel" />
              <Button wording="Confirm" callbackType="confirm" />
            </>
          }
        />
      </CallbackContext.Provider>
    </>
  );
}
