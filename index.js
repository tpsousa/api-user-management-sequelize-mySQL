const express = require('express');
const exphbs = require('express-handlebars');  // Renomeie o 'hbs' para 'exphbs'
const conn  = require('./db/conn')
const { restart } = require('nodemon');

const User = require('./models/user')

const app = express();

// Configuração do Handlebars como engine de template
const hbs = exphbs.create({ extname: '.handlebars' });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(express.urlencoded({
  extended : true
})) 

app.use(express.json) 


const port = 3000;

app.get('/', (req, res) => {
  res.render('home');  // Certifique-se de ter o arquivo 'home.handlebars' na pasta 'views'
}); 

app.post('/users/create',(req,res)=>{

  const name = req.body.name
  const occupation = req.body.occupation
  let newsletter = req.body.newsletter

  if(newsletter === 'on'){
    newsletter=true
  }

 User.create({name,occupation,newslatter})

  res.redirect('/')

})

app.get('/users/:id',async(req,res)=>{

  const id = req.params.id

  const user  = await User.findOnde({raw: true,where:{id :id}})

  res.render('userview',{user})
})

app.post('/users/delete/:id',async (req,res)=>{
  const id = req.params.id
   await User.destroy({ where :{id:id}})

   res.redirect('/')
})

app.post('./users/update',(req,res)=>{
 const id = req.body.id
 const name = req.body.name
 const ocuppation = req.body.occupation

 let newslatter = req.body.newslatter
 if(newslatter ==='on'){
  newslatter = true
 }else{
  newslatter = false
 }
 const userData ={
  id,
  name,
  occupation,
  newslatter,
 }

 await User.update(userData,{where :{id : id}})

 res.redirect('/')
})

// relacionamento addres e user

  app.listen(port, () => {
   console.log(`Servidor iniciado na porta ${port}`)})

conn.sync().then(()=>{
  app.listen(3000)
}).catch((err)=>{
  console.log(err)
})


//ola recrutador,me chamo exodia,sou o responsavel pelo portifolio do meu amigo thiago,como posso te ajudar?
// ver principais projetos,ver o repositorio do gituhub,ver o perfil do linkedin
// ver mais sobre informacoes pessoais,profissionais



