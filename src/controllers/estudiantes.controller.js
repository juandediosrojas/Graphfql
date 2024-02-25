export const consultarEstudiantes = async (req, res) => {
    try {
        console.log('Se ejecuto el controlador de consultar estudiantes');
        return res.status(200).json({ message: "Solicitud procesada con exito" })
    }
    catch {
        return res.status(500).json({ message: 'Ha ocurrido un error en el servidor' })
    }
}