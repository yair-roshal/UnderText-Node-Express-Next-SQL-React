import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import initialUsersData from '../constants/initialUsersData.json'

const UsersContext = createContext({
  usersData: initialUsersData || [],
  setUsersData: () => {},
  loading: true,
})

export const ContextProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Попытка получить данные из localStorage
    const storedData = localStorage.getItem('usersData')

     
    if (storedData.length > 0) {
      setUsersData(JSON.parse(storedData))
    } else {
      // Если данных в localStorage нет, используем начальные данные
      setUsersData(initialUsersData)
    }

    setLoading(false)
  }, [])

  // Сохранение данных в localStorage при изменении usersData
  useEffect(() => {
    if (usersData.length > 0) {
      localStorage.setItem('usersData', JSON.stringify(usersData))
    }
  }, [usersData])

  const contextValue = useMemo(() => ({ usersData, setUsersData, loading }), [usersData, setUsersData, loading])

  return <UsersContext.Provider value={contextValue}>{children}</UsersContext.Provider>
}

export const useUsersContext = () => useContext(UsersContext)

export default UsersContext
