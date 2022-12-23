import { useState, createContext, useContext } from 'react'

const initialGlobalContext = {
  username: null,
  isLoggedIn: false,
}

const GlobalContext = createContext({
  globalContext: initialGlobalContext,
  setGlobalContext: () => initialGlobalContext,
})


const GlobalContextProvider = ({
  children = null,
  initialValue,
}) => {
  const [globalContext, setGlobalContext] = useState( // pasar a GlobalContext.Provider para hacer el contexto dinamico
    initialValue || initialGlobalContext
  )

  return (
    <GlobalContext.Provider
      value={{
        globalContext,
        setGlobalContext,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalContextProvider, useGlobalContext } // <GlobalContextProvider> {children} </GlobalContextProvider> in your app.js

// in your children
// How to use the value and the func to change the value in my component:
// const { globalContext, setGlobalContext } = useContext(GlobalContext)
