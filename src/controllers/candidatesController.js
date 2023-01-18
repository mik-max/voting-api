import { getPollCandidatesData, voteforAcandidate } from "../data/benchmark/index.js";

const getPollCandidates = async (req, res, next) => {
     try {
          const pollId = req.params.id
          const data = await getPollCandidatesData(pollId)
          res.status(200).send(data)

     } catch (error) {
          res.status(400).send(error).message
     }
}
const voteCandidate = async (req, res, next) => {
     try {
          let pollId = req.params.pollId
          let candidateId = req.params.candidateId
          let data = await voteforAcandidate(candidateId,pollId)
          res.status(200).send(data)
     } catch (error) {
          res.status(400).send(error).message
     }
}
export {getPollCandidates, voteCandidate}