import React, {createContext, useContext} from 'react';

// DEPENDENCIES

const DepsContext = createContext({} as any);

export function useDeps() {
  return useContext(DepsContext);
}

export default function ({children, ...services}: React.PropsWithChildren<{}>) {
  return (
    <DepsContext.Provider value={{...useDeps(), ...services}}>
      {children}
    </DepsContext.Provider>
  );
}
