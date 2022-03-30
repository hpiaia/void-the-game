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
import Board9 from './game/boards/Board9'
import Board10 from './game/boards/Board10'
import Board11 from './game/boards/Board11'
import Board12 from './game/boards/Board12'
import Board13 from './game/boards/Board13'
import Board14 from './game/boards/Board14'
import Board15 from './game/boards/Board14'
import Board16 from './game/boards/Board16'
import Board17 from './game/boards/Board17'
import Board18 from './game/boards/Board18'
import Board19 from './game/boards/Board19'
import Board20 from './game/boards/Board20'
import Board21 from './game/boards/Board21'
import Board22 from './game/boards/Board22'
import Board23 from './game/boards/Board23'
import Board24 from './game/boards/Board24'
import Board25 from './game/boards/Board25'
import Board26 from './game/boards/Board26'
import Board27 from './game/boards/Board27'
import End1 from './game/ends/End1'
import End2 from './game/ends/End2'
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
      <Route path="/boards/9" element={<Board9 />} />
      <Route path="/boards/10" element={<Board10 />} />
      <Route path="/boards/11" element={<Board11 />} />
      <Route path="/boards/12" element={<Board12 />} />
      <Route path="/boards/13" element={<Board13 />} />
      <Route path="/boards/14" element={<Board14 />} />
      <Route path="/boards/15" element={<Board15 />} />
      <Route path="/boards/16" element={<Board16 />} />
      <Route path="/boards/17" element={<Board17 />} />
      <Route path="/boards/18" element={<Board18 />} />
      <Route path="/boards/19" element={<Board19 />} />
      <Route path="/boards/20" element={<Board20 />} />
      <Route path="/boards/21" element={<Board21 />} />
      <Route path="/boards/22" element={<Board22 />} />
      <Route path="/boards/23" element={<Board23 />} />
      <Route path="/boards/24" element={<Board24 />} />
      <Route path="/boards/25" element={<Board25 />} />
      <Route path="/boards/26" element={<Board26 />} />
      <Route path="/boards/27" element={<Board27 />} />

      <Route path="/ends/1" element={<End1 />} />
      <Route path="/ends/2" element={<End2 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
