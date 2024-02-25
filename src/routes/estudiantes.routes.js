import { Router } from 'express'
import { consultarEstudiantes } from '../controllers/estudiantes.controller.js'


const router = Router()

router.get('/estudiantes', consultarEstudiantes);

export default router