import Login from "./components/Login";
import Profile from "./components/Profile";
import './App.css'
import UserContextProivder from "./Context/UserContextProvider"

function App() {

  return (
    <UserContextProivder>
      <h1>React with chai</h1>
      <Login />
      <Profile />
    </UserContextProivder>
  )
}

export default App
