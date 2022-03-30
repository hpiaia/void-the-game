import './main.css'

import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Board0 from './game/boards/Board0'
import Board1 from './game/boards/Board1'
import Board2 from './game/boards/Board2'
import Board3 from './game/boards/Board3'
import Board4 from './game/boards/Board4'
import Board5 from './game/boards/Board5'
import Board6 from './game/boards/Board6'
import Board7 from './game/boards/Board7'
import Board8 from './game/boards/Board8'
import Start from './game/Start'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/boards/0" element={<Board0 />} />
      <Route path="/boards/1" element={<Board1 />} />
      <Route path="/boards/2" element={<Board2 />} />
      <Route path="/boards/3" element={<Board3 />} />
      <Route path="/boards/4" element={<Board4 />} />
      <Route path="/boards/5" element={<Board5 />} />
      <Route path="/boards/6" element={<Board6 />} />
      <Route path="/boards/7" element={<Board7 />} />
      <Route path="/boards/8" element={<Board8 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
