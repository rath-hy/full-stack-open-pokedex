const express = require('express')
const app = express()

// get the port from env variable
const PORT = 5001

app.use(express.static('dist'))

app.get('/health', (req, res) => {

  // if (true) throw('error...  ')
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
