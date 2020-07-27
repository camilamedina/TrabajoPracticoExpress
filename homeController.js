let database = require('../data/database');

module.exports = controller = {
    index:function(req,res){
res.write("Bienvenidos al HOME \n\n")
res.write("Sucursales: \n\n")
database.forEach(concesionaria=>{
    res.write(concesionaria.sucursal + '\n')
})
res.end()
    }
}