import Header from './components/Header'
import Button from './components/Button'
import Home from './components/Home'

function App() {
  const text = 'delete'
  return (
      <>
        <Header/>
        <Button content='submit'/>
        <Button content='view'/>
        <Button content='check'/>
        <Button content={78}/>
        <Button content={text}/>
        <Home/>
      </>

  )
}

export default App
