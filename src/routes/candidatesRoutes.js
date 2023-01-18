import { Router } from 'express';
import { getPollCandidates, voteCandidate} from '../controllers/candidatesController.js';

let candidateRouter = Router();

candidateRouter.get('/poll/candidates/:id', getPollCandidates)
candidateRouter.put('/vote/candidate/:pollId/:candidateId', voteCandidate)

export default candidateRouter;
