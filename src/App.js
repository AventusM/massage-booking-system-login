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
    <form onSubmit={handleLoginFunction}>
      <div>Käyttäjätunnus
      <input
          type="text"
          value={email}
          name="email"
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
      <div>Salasana
      <input
          type="password"
          value={password}
          name="password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
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
      <h2>Kirjaudu</h2>

      {user === null && <LoginForm handleLoginFunction={handleLogin} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />}
      {user !== null && <WelcomeScreen />}
    </div>
  )
}

export default App
