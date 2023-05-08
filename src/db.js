import {createPool} from 'mysql2/promise'

export const pool=createPool({
    host: 'localhost',
    user:'root',
    password:'Yarn_123.?Mysql',
    database:'fichasdb'
})


