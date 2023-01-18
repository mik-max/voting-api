import { getAllBenchmarkPolls, getPublicBenchmarkPolls, getAuthPublicPolls, getPrivateBenchmarkPolls, createPollData, deletePollData, updatePolldata, startUpAPoll, endAPoll, getPollDataById} from "../data/benchmark/index.js";

const getAllBenchmark = async (req, res, next) => {
     try {
         const allBenchmarks = await getAllBenchmarkPolls();
         res.status(200).send(allBenchmarks);
  
     } catch (error) {
         console.log(error)
         res.status(400).send(error.message)
     }
}

const getPublicAnonymousBenchmark = async (req, res, next) => {
     try {
          const publicAnonymous = await getPublicBenchmarkPolls();
          res.status(200).send(publicAnonymous);

     } catch (error) {
          res.status(400).send(error.message)
     }
}
const getPublicAuthBenchmark = async (req, res, next) => {
     try {
          const publicAuthenticated = await getAuthPublicPolls()
          res.status(200).send(publicAuthenticated);
          
     } catch (error) {
          res.status(400).send(error.message)
     }
}
const getPrivatePrivateBenchmark = async (req, res, next) => {
     try {
          const privatePoll = await getPrivateBenchmarkPolls();
          res.status(200).send(privatePoll);
     } catch (error) {
          res.status(400).send(error.message)
     }
}
const createPoll = async (req, res, next) => {
     try {
          let body = req.body
          const data = await createPollData(body)
          res.status(201).send({Status: "Ok", message: "Poll successfully created"})
     } catch (error) {
          res.status(400).send(error.message)
     }
}

const startAPoll = async (req, res, next) => {
     try {
          const Id = req.params.id
          const data = await startUpAPoll(Id)
          res.status(200).send({Status: "Ok", message: "Poll successfully started"})
     } catch (error) {
          res.status(400).send(error.message)
     }
}
const endPoll = async (req, res, next) => {
     try {
          let pollId = req.params.id
          const data = await endAPoll(pollId)
          res.status(200).send({Status: "Ok", message: "Poll successfully created"})
     } catch (error) {
          res.status(400).send(error.message)
     }
}
const deleteAPoll = async (req, res, next) => {
     try {
          let pollId = req.params.id
          const data = await deletePollData(pollId)
          res.status(200).send({Status: "Ok", message: "Poll successfully deleted"})
     } catch (error) {
          res.status(400).send(error.message)
     }
}
const updateAPoll = async (req, res, next) => {
     try {
          let pollId = req.params.id
          let body = req.body
          const data = await updatePolldata(pollId , body)
          res.status(200).send({Status: "Ok", message: "Poll successfully updated"})
     } catch (error) {
          res.status(400).send(error.message)
     }
}

const getPollById = async (req, res, next) => {
     try {
          let Id = req.params.id
          const data = await getPollDataById(Id)
          res.status(200).send(data)
     } catch (error) {
          res.status(400).send(error.message)
     }
}


export{getAllBenchmark, getPublicAnonymousBenchmark, getPublicAuthBenchmark, getPrivatePrivateBenchmark, createPoll, startAPoll, deleteAPoll, endPoll, updateAPoll, getPollById}