const express = require('express')
const app = express()

const usuarios = {
  "usuarios": [
    "Juan", "Jocelyn", "Astrid", "Maria", "Ignacia", "Javier", "Brian"
  ]
}

app.listen(3000, () => {
  console.log("Server listen on port 3000")
})

app.use(express.static("assets"))

app.get("/abracadabra/usuarios", (req, res)=> {
  res.send(usuarios)
})

app.use("/abracadabra/juego/:usuario", (req, res, next) => {
  if (!(usuarios.usuarios.includes(req.params.usuario))) res.sendFile(__dirname +"/assets/who.jpeg")

  next()
})

app.get("/abracadabra/juego/:usuario", (req, res) => {
  res.sendFile(__dirname+ "/index.html")
})

app.get("/abracadabra/conejo/:n", (req, res) => {
  const userNumber = req.params.n
  const bunnnyNumber = Math.floor(Math.random() * 5 - 1)

  console.log(userNumber)
  console.log(bunnnyNumber)
  if (userNumber == bunnnyNumber){
    res.sendFile(__dirname + "/assets/conejito.jpg")
  } else {
    res.sendFile(__dirname + "/assets/voldemort.jpg")
  }
})