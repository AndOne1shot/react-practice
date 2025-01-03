import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { useState } from 'react';
import FirePokemon from './pages/FirePokemon';

function App() {
  let post = '포켓몬';
  let [스타팅, 스타팅변경] = useState(['파이리', '꼬부기', '이상해씨']);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="black-nav">
          <h4 style={{color : 'purple', fontSize: '40px'}}>React practice</h4>
        </div>
        
        <h4 style={{fontSize: '30px'}}>{post}</h4>

      

        <button onClick={() => {
          let copy = [...스타팅];
          copy[0] = '브케인';
          스타팅변경(copy);
        }}>
          수정
        </button>

        <Routes>
          <Route path="/" element={
            <>
              <Link to="/fire-pokemon">
                <div className="list">
                  <h4>{스타팅[0]} <span onClick={(e) => { e.preventDefault(); 따봉변경(따봉 + 1); }}>👍</span> {따봉} </h4>
                  <p>불꽃타입</p>
                </div>
              </Link>
              
              <div className="list">
                <h4>{스타팅[1]}</h4>
                <p>물타입</p>
              </div>

              <div className="list">
                <h4>{스타팅[2]}</h4>
                <p>풀타입</p>
              </div>

              <Modal />
            </>
          } />
          <Route path="/fire-pokemon" element={<FirePokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>이름</h4>
      <p>타입</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
