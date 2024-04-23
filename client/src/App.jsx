import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {SignIn} from "./pages/SignIn"
import {SignUp} from "./pages/SignUp"
import {Profile} from "./pages/Profile"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
