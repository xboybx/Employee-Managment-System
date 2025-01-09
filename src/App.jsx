import React, { useContext, useState, useEffect } from 'react'
import Login from '../src/components/Auth/Login'
import EmployeeDashboard from './components/Dasboard/EmployeeDashboard'
import AdminDashboard from './components/Dasboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {


  const [user, setUser] = useState("")
  const [userData, setUserData] = useContext(AuthContext)
  const [loggedInUserData, setLoggedInUserData] = useState('')

  useEffect(() => {
    if (userData) {
      const loggedInUser = localStorage.getItem("userloggedIn")

      if (loggedInUser) {
        setUser(loggedInUser.role)
      }
    }


  }, [userData])




  function handleLogin(email, password) {
    if (email === 'ad@ad.com' && password === '123') {
      setUser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
    }
    else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser("employee")
        setLoggedInUserData(employee)//by this we get only logged in employees data
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }))
      } else {
        alert("Invalid Email or Password")
      }
    } else {
      alert("Invalid Email or Password")
    }
  }



  return (
    <>

      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {user == "admin" ? <AdminDashboard userChange={setUser} userName={'Admin'} user={user} /> : ""}
      {user == 'employee' ? <EmployeeDashboard userChange={setUser} data={loggedInUserData} /> : ""}
    </>
  )
}

export default App