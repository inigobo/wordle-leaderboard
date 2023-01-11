import { useState, createContext, useContext } from 'react'

const initialGlobalContext = {
  currentUser: null,
  isLoggedIn: false,
  selectedUser: null,
  avatarSeed: null,
}

const GlobalContext = createContext({
  globalContext: initialGlobalContext,
  setGlobalContext: () => initialGlobalContext,
})


const GlobalContextProvider = ({
  children = null,
  initialValue,
}) => {
  const [globalContext, setGlobalContext] = useState(
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

export { GlobalContextProvider, useGlobalContext } 

