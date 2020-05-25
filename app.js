const express = require('express');
const app = express();
const mysql = require('mysql');
const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('combined'));
app.use(cors());

app.get("/", (req, res) => {
    // const connection = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '0833',
    //     database: 'kmre'
    // })

    // const queryString = "SELECT ID FROM _kmre;";
    // connection.query(queryString, (err, rows, fields) => {
    //     console.log("Success" +  rows);
    //     res.json(rows);
    // })

    //res.end();

    const DATA = [
        {
            'label': '50BA904A-CF35-4532-854C-00AF0C58C575',
            'value': '6.5 & 6.6 Correct identification and procedure matching'
        }, 
        {
            'label': 'B16876F1-5DA1-49F6-9FB6-01576BDAA4B4',
            'value': '4 - Definitions'
        },
        {
            'label': '7436D0AB-87A3-49C0-8841-0169D984D25F',
            'value': '4.c.i Services and supports for daily living assist each consumer to participate in their community within and outside the organisation’s service environment'
        }
    ]
    res.json({DATA});
})

app.listen(3010, () => {
    console.log("Server is listening");
})