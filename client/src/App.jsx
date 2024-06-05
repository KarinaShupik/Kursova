import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from "./components/Home"
import {SignIn} from "./pages/SignIn"
import {SignUp} from "./pages/SignUp"
import {Profile} from "./pages/Profile"
import {Header} from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
import Gallery from "./pages/Gallery"
import GeneralNews from "./pages/GeneralNews"
import LocationInfo from "./pages/LocationInfo"
import ContactForm from "./pages/ContactForm"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/news" element={<GeneralNews />}/>
        <Route path="/contacts" element={<LocationInfo /> }/>
        <Route path="/membership" element={<ContactForm /> }/>
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
