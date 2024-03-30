import { Request, Response } from 'express';
import { pool } from '../db';
import { Vehiculo } from '../interfaces';

let sqlCrearVehiculo = 'INSERT INTO vehiculos (numeroPlaca, modelo, color, numeroPasajeros ) VALUES (?, ?, ?, ?)'
let sqlConsultarVehiculo = 'SELECT * FROM vehiculos'
export const consultarVehiculos = async (req: Request, res: Response) => {
    try {
        let rta: any = await pool.query(sqlConsultarVehiculo, []);
        let vehiculos = rta[0];
        if (vehiculos.length > 0) {
            return res.status(200).json(vehiculos);
        } else {
            return res.status(204).json();
        }
    }
    catch (e) {
        console.log('error', e)
        return res.status(500).json({ message: `Ha ocurrido un error en el servidor, error=> ${e}` })
    }
}

export const crearVehiculo = async (req: Request, res: Response) => {
    let vehiculo: Vehiculo = req.body;
    let { numeroPlaca, modelo, color, numeroPasajeros } = vehiculo;
    try {
        let rta: any = await pool.query(sqlCrearVehiculo, [numeroPlaca, modelo, color, numeroPasajeros]);
        return res.status(201).json({ message: 'Vehiculo creado correctamente' });
    }
    catch (e) {
        console.log('error', e)
        return res.status(500).json({ message: `Ha ocurrido un error en el servidor, error=> ${e}` })
    }
}