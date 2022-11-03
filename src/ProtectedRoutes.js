import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  const dispatch = useDispatch()
  const loggedIn = useSelector((state) => state.loggedIn)
  const [loading, setLoading] = useState(true)

  React.useEffect(() => {
    let userInfo = localStorage.getItem('userInfo')
    userInfo = JSON.parse(userInfo)
    console.log(userInfo?.type)
    userInfo?.type === 'ADMIN' && dispatch({ type: 'set', loggedIn: true })
    setLoading(false)
  }, [dispatch])

  if (loading) {
    return (
      <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
      </div>
    )
  }

  return loggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes
