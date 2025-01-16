import { Route,Routes,useLocation } from "react-router-dom";
import { Footer,Header } from "./Layout";
import Home from "./Home"
import About from "./About"
import Signup from "./Signup"
import Login from "./Login"
function App() {
  let local = useLocation()
  let auth = local.pathname == '/signup' || local.pathname == '/login'
  return (
    <>
    {!auth && <Header />}
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    {!auth && <Footer />}
    </>
  )
}
export default App;