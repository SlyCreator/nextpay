import express , {Application} from 'express';
//import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import Helmet from 'helmet';
import routes from './src/routes/index';

const app: Application = express()
const port = process.env.PORT || 5000;

app.use(Helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(`/${process.env.API_VERSION}`,routes );


app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})

module.exports = app
