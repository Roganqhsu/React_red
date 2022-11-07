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

  const [employeeList, setEmployeeList] = useState([''])

  const [newWage, setNewWage] = useState(0)

  const addEmployee = () => {
    // 一、使用axios.已post方法連到傳遞路徑
    Axios.post('http://localhost:3006/create',
      // 二、寫入欲傳遞之變數
      // 1014
      {

        name: name,
        age: age,
        country: country,
        wage: wage
        // 使用.then()顯示傳遞成功資訊
      }
    ).then(
      () => {
        setEmployeeList([
          ...employeeList,
          {
            name: name,
            age: age,
            country: country,
            wage: wage
          }
        ])
      }
    )
  }

  const getEmployees = () => {
    // 將Axios使用get方法取得路徑，將資料以response回傳
    Axios.get('http://localhost:3006/employees').then((response) => {
      //寫入陣列 
      setEmployeeList(response.data)
    })
  }

  // 2209
  const UpdateEmployeeWage = (id) => {
    // 使用put方法寫入路徑，傳入後端新的wage變數，及相對應id
    Axios.put('http://localhost:3006/update', { wage: newWage, id: id })
      // 用then > setEmployeeList改變employeeList陣列，並用map語法遍歷所有物件
    .then((response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id == id
              ? {
                id: val.id,
                name: val.name,
                age: val.age,
                country: val.country,
                wage: newWage,
              }
              : val
          })
        )

      })
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
        <hr />
        <button onClick={getEmployees}>get Employee</button>
        {employeeList[0].name}
        {employeeList.map(
          (val, req) => {
            return (
              <div>
                <div>
                  id{val.employeesid}
                  <h3>Name:{val.name}</h3>
                  <h3>Age:{val.age}</h3>
                  <h3>Country:{val.country}</h3>
                  <h3>Wage:{val.wage}</h3>
                </div>
                <br />
                <input type="text" placeholder="newWage"
                  onChange={(e) => {
                    setNewWage(e.target.value)
                  }}
                />
                <button onClick={() => { UpdateEmployeeWage(val.employeesid) }} >
                  Update Wage
                </button>
              </div>
            )
          }
        )}
      </div>

    </div>
  );
}

export default App;
