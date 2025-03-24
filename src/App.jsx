import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AccountSetting from "./pages/AccountSettingPage"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/loginPage"
import RegisterPage from "./pages/RegisterPage"
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/user" element={<AccountSetting />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
