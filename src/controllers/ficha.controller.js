import { pool } from "../db.js"

export const getFicha=async(req,res)=>{
    const [rows]=await pool.query('SELECT * FROM ficha')
    res.json(rows)
}



export const createFicha=async (req,res)=>{
    const {nombre}=req.body
     const [rows]=await pool.query('INSERT INTO ficha(nombre) VALUES(?)',
     [nombre])
     res.send({
        id:rows.insertId,
        nombre
})
}

export const updateFicha=(req,res)=>res.send('editar fichas')

export const deleteFicha=(req,res)=>res.send('eliminar fichas')