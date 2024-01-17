
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { Home } from "./components/Home"
import { useSelector } from "react-redux"


function App() {
  const { currentUser } = useSelector(state => state.users);
  console.log(currentUser);
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={currentUser? <Home />:<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
