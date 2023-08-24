const { Router } = require('express');

const dietRouter = Router()

dietRouter.get('/', (req, res) => {
    res.status(200).send('Estoy en diets')
})

module.exports = dietRouter