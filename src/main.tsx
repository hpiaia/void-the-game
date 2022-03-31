import './main.css'

import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ItemsProvider } from './contexts/ItemsContext'
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
import Board28 from './game/boards/Board28'
import Board29 from './game/boards/Board29'
import Board30 from './game/boards/Board30'
import Board31 from './game/boards/Board31'
import Board32 from './game/boards/Board32'
import Board33 from './game/boards/Board33'
import Board34 from './game/boards/Board34'
import Board35 from './game/boards/Board35'
import Board36 from './game/boards/Board36'
import Board37 from './game/boards/Board37'
import Board38 from './game/boards/Board38'
import Board39 from './game/boards/Board39'
import Board40 from './game/boards/Board40'
import Board41 from './game/boards/Board41'
import Board42 from './game/boards/Board42'
import End1 from './game/ends/End1'
import End2 from './game/ends/End2'
import End3 from './game/ends/End3'
import End4 from './game/ends/End4'
import End5 from './game/ends/End5'
import End6 from './game/ends/End6'
import End7 from './game/ends/End7'
import Start from './game/Start'

ReactDOM.render(
  <BrowserRouter>
    <ItemsProvider>
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
        <Route path="/boards/28" element={<Board28 />} />
        <Route path="/boards/29" element={<Board29 />} />
        <Route path="/boards/30" element={<Board30 />} />
        <Route path="/boards/31" element={<Board31 />} />
        <Route path="/boards/32" element={<Board32 />} />
        <Route path="/boards/33" element={<Board33 />} />
        <Route path="/boards/34" element={<Board34 />} />
        <Route path="/boards/35" element={<Board35 />} />
        <Route path="/boards/36" element={<Board36 />} />
        <Route path="/boards/37" element={<Board37 />} />
        <Route path="/boards/38" element={<Board38 />} />
        <Route path="/boards/39" element={<Board39 />} />
        <Route path="/boards/40" element={<Board40 />} />
        <Route path="/boards/41" element={<Board41 />} />
        <Route path="/boards/42" element={<Board42 />} />

        <Route path="/ends/1" element={<End1 />} />
        <Route path="/ends/2" element={<End2 />} />
        <Route path="/ends/3" element={<End3 />} />
        <Route path="/ends/4" element={<End4 />} />
        <Route path="/ends/5" element={<End5 />} />
        <Route path="/ends/6" element={<End6 />} />
        <Route path="/ends/7" element={<End7 />} />
      </Routes>
    </ItemsProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
