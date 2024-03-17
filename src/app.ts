import express from "express";
import cors from 'cors'

import estudiantesRoutes from './routes/estudiantes.routes'

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/api', estudiantesRoutes)

app.use((req, res, next) => {
    console.log('Ruta no encontrada');
    res.status(404).json({ message: 'Ruta no encontrada' })
})

export default app;