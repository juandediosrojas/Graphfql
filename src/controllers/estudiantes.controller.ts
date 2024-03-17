import { Request, Response } from 'express';
import { pool } from '../db';
import { Estudiante } from '../interfaces';

let sqlCrearEstudiante = 'INSERT INTO estudiantes (numeroDocumento, nombre, telefono) VALUES (?, ?, ?)'
let sqlConsultarEstudiantes = 'SELECT * FROM estudiantes'
export const consultarEstudiantes = async (req: Request, res: Response) => {
    try {
        const { numeroDocumento, nombre, telefono } = req.body;
        let rta: any = await pool.query(sqlConsultarEstudiantes, []);
        let estudiantes = rta[0];
        if (estudiantes.length > 0) {
            return res.status(200).json(estudiantes);
        } else {
            return res.status(204).json();
        }
    }
    catch (e) {
        console.log('error', e)
        return res.status(500).json({ message: `Ha ocurrido un error en el servidor, error=> ${e}` })
    }
}