const { createTypesBD } = require("../../controllers/controllerTypes/controllerTypes")

const getTypesHandler = (req, res) => {
  const { name } = req.query
  
  if (name) {
  res.status(200).send(`Aqui esta el detalle del tipo de Pokemon por el nombre  ${name}`)} else {
    res.status(200).send("Aquí estan todos los tipos de pokemones")
  }
}

const getDetailTypesHandler = (req, res) => {
  const { id } = req.params
  
  res.status(200).send(`Aqui esta el detalle del tipo de Pokemon por el ID ${id}`)
}


const postTypesHandler = async (req, res) => {
  const {  nombre } = req.body

  try { 
    const response = await createTypesBD({nombre})
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

module.exports = {
  getTypesHandler,
  getDetailTypesHandler,
  postTypesHandler
}