import React from "react";

const callback = (e) => {};

const CallbackContext = React.createContext({['type']: callback});

// const CallbackContextProvider = ({ children }) => {
//   const [unicornTypes, setUnicornTypes] = React.useState(undefined);
//   return (
//     <CallbackContext.Provider value={{ unicornTypes, setUnicornTypes }}>
//       {...children}
//     </CallbackContext.Provider>
//   );
// };

// export default CallbackContextProvider;
export default CallbackContext;