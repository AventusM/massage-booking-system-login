import React, { useState, useEffect } from 'react';
import loginService from './services/login'

const WelcomeScreen = () => {
  return (
    <div>Kirjauduit sisään!</div>
  )
}

const LoginForm = (props) => {
  const { handleLoginFunction, email, password, setEmail, setPassword } = props
  return (
    <form className="login_form" onSubmit={handleLoginFunction}>
      <label>Sähköposti</label>
      <input
        placeholder="justinar@unity3d.com"
        type="text"
        value={email}
        name="email"
        onChange={({ target }) => setEmail(target.value)}
      />

      <label>Salasana</label>
      <input
        placeholder="********"
        type="password"
        value={password}
        name="password"
        onChange={({ target }) => setPassword(target.value)}
      />
      <button type="submit">kirjaudu</button>
    </form>
  )
}

const App = () => {
  const [appointments, setAppointments] = useState([])
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log('User currently', user)
  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON)
      setUser(user)

      // Appointmentservice.setToken tms tänne
      // Appointmentservice.setToken tms tänne
      // Appointmentservice.setToken tms tänne
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const loggedInUser = await loginService.login({ email, password })
      window.localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))

      // Appointmentservice.setToken tms tänne
      // Appointmentservice.setToken tms tänne
      // Appointmentservice.setToken tms tänne

      setUser(loggedInUser)
      setEmail('')
      setPassword('')

      // console.log('kirjautunut käyttäjä', loggedInUser)
    } catch (exception) {
      console.log('virhe kirjautumisessa', exception)
    }
  }

  return (
    <div>
      <h1>Unity massage booking system</h1>
<<<<<<< HEAD
  <h2>Kirjautuminen</h2>
=======
      <h2>Kirjaudu</h2>
>>>>>>> ab7b03d572527916014063acf752213b0dc317c1

  { user === null && <LoginForm handleLoginFunction={handleLogin} email={email} setEmail={setEmail} password={password} setPassword={setPassword} /> }
  { user !== null && <WelcomeScreen /> }
    </div >
  )
}

export default App
