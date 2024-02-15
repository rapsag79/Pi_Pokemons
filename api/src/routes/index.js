const { Router } = require('express');
const pokemonsRouter = require('./pokemonesRoutes/pokemonesRouter');
const typeRouter = require('./typeRoutes/typeRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemon", pokemonsRouter)

router.use("/type", typeRouter)

module.exports = router;
