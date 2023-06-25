const app = require('./app')
const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})