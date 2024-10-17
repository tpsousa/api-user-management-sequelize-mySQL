const sequelize = new Sequelize('nodesequelize','root','',{

  host : 'localhost',
  dialect: 'mysql'
})

try{

 sequelize.authenticate()

 console.log('conectamos com sucesso o sequelize')

}catch(err){
  console.log('nao foi possivel conectar',error)
}

module.exports = sequelize