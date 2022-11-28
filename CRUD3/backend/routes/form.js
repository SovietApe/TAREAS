var express = require('express');
var router = express.Router();
var difusionModel = require('./../models/difusionModel')


router.get('/', function(req, res, next) {
  res.render('formulario', {
    layout: 'admin/layout'
  })
  
});

router.post('/enviar', async (req, res, next) => {
    try{
        if(req.body.nombre != "" && req.body.apellido != "" && req.body.email != "") {
            await difusionModel.insertDifusion(req.body);
            res.redirect('/',)
        } else{
            res.render('formulario', {
                layout: 'admin/layout',
                error: true, message: 'todos los campos son requeridos'
            })
        }
    } catch (error){
    console.log(error)
     res.render('formulario', {
        layout: 'admin/layout',
        error: true, message: 'No se pudo cargar los datos a la lista, intente nuevamente'
     });
    }
});

module.exports = router;
