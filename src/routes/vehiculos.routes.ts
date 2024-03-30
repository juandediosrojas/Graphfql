import { Router } from 'express'
import { consultarVehiculos } from '../controllers/vehiculos.controller'
import { crearVehiculo } from '../controllers/vehiculos.controller'

const router = Router()

router.get('/vehiculos', consultarVehiculos);
router.post('/vehiculo', crearVehiculo);

export default router