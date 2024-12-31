import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '포켓몬';
  let [글제목,b] =  useState('포켓몬 추천'); // state : 변동시 자동으로 html에 반영되게 만들고 싶을 때 사용

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'purple', fontSize: '40px'}}>React practice</h4>
      </div>
      
      <h4 style={{fontSize: '30px'}}>{post}</h4>

      <div className="list">
          <h4>{글제목}</h4>
          <p>불꽃타입</p>
          <p>깃 허브 테스트</p>
      </div>
    </div>
  );
}

export default App;
