import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useAuth from './hooks/useAuth'
import Protected from './components/Protected';
import Public from './components/Public';


function App() {
  const [isLogin, token] = useAuth();

  return isLogin?<Protected />:<Public />
}

export default App
