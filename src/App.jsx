import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import GMapView from './components/pages/Mainpage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
      <div>
        <div>
          <Navbar />
          <div>
          {!isLoggedIn ? (
          <Intro onLogin={handleLogin} />
        ) : (
          <GMapView />
        )}
        </div>
        </div>
      </div>
    </>
  )
}

export default App
