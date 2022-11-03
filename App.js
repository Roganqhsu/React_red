import './App.css';
import { useState } from 'react'
// 引入axios
import Axios from 'axios'


function App() {

  const [name, setName] = useState('');

  const [age, setAge] = useState(0);

  const [country, setCountry] = useState('');

  const [position, setPosition] = useState('');

  const [wage, setWage] = useState(0);

  const addEmployee =()=>{
    // 一、使用axios.已post方法連到傳遞路徑
    Axios.post('http://localhost:3006/create',
    // 二、寫入欲傳遞之變數
    { 
      name:name,
      age:age,
      country:country,
      wage:wage
    // 使用.then()顯示傳遞成功資訊
    }
    ).then(
      ()=>{
      console.log('sucessfully created');
    }
    )
  }

  const displayInfo = () => {
    console.log(name + age + country + wage);
  }

  return (
    <div className="App">
      <div className='information'>
        <label>Name</label>
        <input onChange={(e) => {
          setName(e.target.value)
          console.log(name);
        }}
          type='text' />
        <label>Age</label>
        <input onChange={(e) => {
          setAge(e.target.value)
          console.log(name);
        }} type='number' />
        <label>Country</label>
        <input onChange={(e) => {
          setCountry(e.target.value)
          console.log(name);
        }} type='text' />
        <label>Wage(year)</label>
        <input onChange={(e) => {
          setWage(e.target.value)
          console.log(name);
        }} type='number' />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
