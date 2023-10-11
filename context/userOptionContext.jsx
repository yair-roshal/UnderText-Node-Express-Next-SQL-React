import { createContext, useContext, useState,  , useMemo } from 'react'

const userOptionContext = createContext({
  userOption: {}, // Структура для хранения настроек пользователя
  setUserOption: () => {},
  loading: true,
})

export const ContextProvider = ({ children }) => {
  const [userOption, setUserOption] = useState({})

  const contextValue = useMemo(() => ({ userOption, setUserOption }), [userOption, setUserOption])

  return <userOptionContext.Provider value={contextValue}>{children}</userOptionContext.Provider>
}

export const useUserOptionContext = () => useContext(userOptionContext)

export default userOptionContext
