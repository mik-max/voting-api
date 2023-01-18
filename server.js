import express from 'express';
import Cors from 'cors'
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert {type: "json"};
import benchmarkRouter from './src/routes/benchmarkRoutes.js';
import candidateRouter from './src/routes/candidatesRoutes.js';
const app = express()
const port = process.env.PORT || 8005
//middlewares
app.use(express.json());
app.use(Cors());
app.use('/api', benchmarkRouter)
app.use('/api', candidateRouter);

var options = {
     explorer: true,
};
   
   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
//API endpoints
app.get('/', (req, res) => res.status(200).send('Hello CleverProgrammers!!!!!. CELZ4 API!!!🔥🔥'))


//listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));