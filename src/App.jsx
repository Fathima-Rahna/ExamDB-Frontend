import { Route, Routes } from "react-router-dom"
import Auth from './Pages/Auth'
import UsersPage from "./Pages/UsersPage"
import Home from "./Pages/Home"


function App() {


  return (
    <>
   <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/register' element={<Auth />} />
   <Route path='/login' element={<UsersPage />} />
   </Routes>
    </>
  )
}

export default App
