const express = require('express');
const cors = require('cors');

const app = express()
const port = 8080

app.use(cors({origin:true,credentials:true}));

const routes = require('./routes/allRoutes');

app.use('/', routes);

app.listen(process.env.PORT || port, () => {
  console.log(`App listening on port ${port}`)
})
