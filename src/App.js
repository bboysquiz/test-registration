import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main/Main'
import Login from './pages/Login/Login'
import Registration from './pages/Registration/Registration'
import Profile from './pages/Profile/Profile'

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route index path='/' element={<Main />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </div>
  );
}



export default App;
