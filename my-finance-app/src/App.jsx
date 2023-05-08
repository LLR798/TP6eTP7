import './App.css'
import Title from './components/Title'

// function App() {
//   return ()
// }
// export default App

function sum(a, b) {
  return a + b
}

export default function App() {
  const status = true
  
  
  return (
      <div>
          <Title/>
          <h2>Its easy, like 1 + 1 is {sum(1, 1)}</h2>
          <h2>Current status: {status ? "ON": "OFF"}</h2>
      </div>
  )
}