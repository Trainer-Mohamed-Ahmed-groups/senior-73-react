import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './views/Home'
import Example from './components/Example'

function App() {

  var username = "Ibrahim"

  return (
    <>
      <div>Hello React</div>
      <div className='test'>This is test</div>
      <input type="text" />
      <img src={reactLogo} />
      <div style={{ color: 'blue' }}>This is {username}</div>
      <hr />
      <Home />
      <Example />
    </>
  )
}

export default App
