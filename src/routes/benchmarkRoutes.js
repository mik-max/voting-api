import { Router } from 'express';
import {getAllBenchmark, getPublicAnonymousBenchmark, getPublicAuthBenchmark, getPrivatePrivateBenchmark,createPoll, startAPoll, deleteAPoll, endPoll, updateAPoll, getPollById} from '../controllers/benchmarkController.js'
let benchmarkRouter = Router();
benchmarkRouter.get('/all-benchmark', getAllBenchmark);
benchmarkRouter.get('/public/anonymous', getPublicAnonymousBenchmark);
benchmarkRouter.get('/public/authenticated', getPublicAuthBenchmark);
benchmarkRouter.get('/private', getPrivatePrivateBenchmark);
benchmarkRouter.get('/poll/:id', getPollById)
benchmarkRouter.post('/create/poll', createPoll)
benchmarkRouter.put('/start/poll/:id', startAPoll)
benchmarkRouter.put('/delete/poll/:id', deleteAPoll)
benchmarkRouter.put('/end/poll/:id', endPoll)
benchmarkRouter.put('/update/poll/:id', updateAPoll)

export default benchmarkRouter;
