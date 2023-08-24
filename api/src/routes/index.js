const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const dietRouter = require('./diets/diets')
const recipesRouter = require('./recipes/recipes')

const router = Router()


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/diets', dietRouter)
router.use('/recipes',  recipesRouter)

module.exports = router