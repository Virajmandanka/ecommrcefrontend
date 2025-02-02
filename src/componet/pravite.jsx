import { Children } from 'react'
import {Navigate} from 'react-router-dom'


function PrivateRouter({ Children}) {
    const isLogin=localStorage.getItem('login')
  return (
    isLogin ? Children : <Navigate to="/login"/>
  )
}

export default PrivateRouter 