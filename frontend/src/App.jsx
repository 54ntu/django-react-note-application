import { useState } from 'react'
import './App.css'
import NoteList from './components/NoteList'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavbarMenu from './components/NavbarMenu'
import NoteAdd from './components/NoteAdd'
import NoteDetailPage from './components/NoteDetailPage'
import NoteUpdatePage from './components/NoteUpdatePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <NavbarMenu/>
        <Routes>
          <Route exact path='/' Component={NoteList}/>
          <Route path='/addNote' Component={NoteAdd}/>
          <Route path='/detail/:id' Component={NoteDetailPage}/>
          <Route path='/update/:id' Component={NoteUpdatePage}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
