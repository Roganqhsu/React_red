// 載入express三步驟
const express = require('express');
const app = express();
app.use(express.json());

// 載入mysql
const mysql = require('mysql');

// 阿摘就背吧
const cors = require('cors');
app.use(cors())

// 設定json格式


//  用mysql語法，引入資料庫，並輸入使用者名稱、host、密碼、資料庫名稱
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root123',
    database: 'employeesystem'
})
// 使用post語法開啟路徑
app.post('/create', (req, res) => {
    // 引入所有變數
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const wage = req.body.wage;
    // 將變數以mysql語法寫入employees資料庫欄位
    db.query('INSERT INTO employees(name,age,country,wage) VALUES (?,?,?,?)'
        // 寫入欲傳遞之變數
        , [name, age, country, wage]
        // 備註
        , (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('ok');
                // result.send('ya')
            }
        }
    )
})

// 將資料庫傳入前端
// 用get方法加入路徑，箭頭函式取得回傳值，
// 用query方法取得資料庫，將回傳值用send方法傳入result
app.get('/employees', (req, res) => {
    db.query('SELECT * FROM employees',
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    )
})

// 修改值
// 
app.put('/update', (req, res) => {
    const id = req.body.id;
    const wage = req.body.wage;
    console.log(id);
    // mysql方法找到相對應id，並修改新的wage
    db.query('UPDATE  employees SET wage=? WHERE employeesid = ?',
        [wage, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
                console.log(result);
            }
        })
})

// 設立app監聽事件，將後端使用3006路徑連到資料庫
app.listen(3006, () => {
    console.log('3006 running on port');
})