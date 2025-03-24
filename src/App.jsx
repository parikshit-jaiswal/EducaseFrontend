import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AccountSetting from "./pages/AccountSettingPage.js"
import LandingPage from "./pages/LandingPage.js"
import LoginPage from "./pages/loginPage.js"
import RegisterPage from "./pages/RegisterPage.js"
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
