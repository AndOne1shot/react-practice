import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '포켓몬';
  let [스타팅,스타팅변경] =  useState(['파이리','꼬부기','이상해씨']); // state : 변동시 자동으로 html에 반영되게 만들고 싶을 때 사용
  let [따봉,따봉변경] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'purple', fontSize: '40px'}}>React practice</h4>
      </div>
      
      <h4 style={{fontSize: '30px'}}>{post}</h4>


      <button onClick={()=>{
        let copy1 = [...스타팅];
        copy1.sort();
        스타팅변경(copy1);
      }}>
        가나다순 정렬
      </button>


      <button onClick={()=>{
        let copy = [...스타팅];   // state 가 array/object면 독립적 카피본을 만들어서 수정해야 한다. -> ...의 역할은 []를 벗겨주는 역할
        copy[0] = '브케인';
        스타팅변경(copy);
      }}>
      수정
      </button>

      <div className="list">
          <h4>{스타팅[0]} <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
          <p>불꽃타입</p>
      </div>

      <div className="list">
          <h4>{스타팅[1]}</h4>
          <p>물타입</p>
      </div>

      <div className="list">
          <h4>{스타팅[2]}</h4>
          <p>풀타입</p>
      </div>
    </div>
  );
}

export default App;
