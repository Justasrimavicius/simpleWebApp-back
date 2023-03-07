const express = require('express')
let cors = require('cors');

const app = express()
const port = 8080

app.use(cors({origin:true,credentials:true}));

const routes = require('./routes/allRoutes');

app.use('/', routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
