import express , {Application,Request,Response,NextFunction,Router} from 'express';
import * as cors from 'cors'
import * as bodyParser from 'body-parser'

export const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req:Request, res:Response, next:NextFunction) => {
    res.json('Hello world')
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
