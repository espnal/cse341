const routes = require('express').Router();

routes.get('/', (req, res, next) =>{
    res.json('awasome person')
})
module.exports = routes
