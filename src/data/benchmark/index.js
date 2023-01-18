import configData from "../../config.js";
import loadSqlQueries from '../../../utils.js'
import sql from 'mssql';
let pool = await sql.connect(configData.sql);
let sqlQueries = await loadSqlQueries("data/benchmark")
let generalSqlQueries = await loadSqlQueries('data/general')
const getAllBenchmarkPolls = async () => {
     
     try {
          // let sqlQueries = await loadSqlQueries('data/events');
          const list = await pool.request().execute('AllBenchmarkPoll');
          console.log('okay')
          return list.recordset;
     } catch (error) {
          console.log(error)
          return error.message
     }
}

const getPublicBenchmarkPolls = async () => {
     try {
          const list = await pool.request().execute('PABenchmarkPoll');
          return list.recordset;
     } catch (error) {
          return error.message
     }
}

const getAuthPublicPolls = async () => {
     try {
          const list = await pool.request().execute('PNABenchmarkPoll');
          return list.recordset;
     } catch (error) {
          return error.message;
     }
}

const getPrivateBenchmarkPolls = async () => {
     try {
          const list = await pool.request().execute('PRBenchmarkPoll');
          return list.recordset;
     } catch (error) {
          return error.message
     }
}
const getPollDataById = async (Id) => {
     try {
          const list = await pool.request().input('Id', sql.Int, Id).query(sqlQueries.getPollById);
          return list.recordset
     } catch (error) {
          return error.message
     }
}
const getPollCandidatesData = async (pollId) => {
     try {
          const list = await pool.request().input('PollId', sql.Int, pollId).query(sqlQueries.Candidates)
          return list.recordset;
     } catch (error) {
          return error.message
     }
}



const createPollData = async (pollData) => {
     let date = new Date(); 
     let isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
     try {
          const PollTypeId = await pool.request().input('Name', sql.VarChar(20), pollData.pollType).query(generalSqlQueries.getPollTypeId)

          const categoryId = await pool.request().input('Name', sql.VarChar(20), pollData.category).query(generalSqlQueries.getCategoryTypeId)
          const insertPoll = await pool.request()
          .input('Title', sql.VarChar(20), pollData.title)
          .input('Description', sql.VarChar(100), pollData.description)
          .input('BackdropImage', sql.VarChar(100), pollData.backdropImage)
          .input('TotalVotes', sql.Int, pollData.totalVotes)
          .input('PollType', sql.VarChar(20), pollData.pollType)
          .input('PollTypeId', sql.Int, PollTypeId.recordset[0].Id)
          .input('Category', sql.VarChar(20), pollData.category)
          .input('CategoryId', sql.Int, categoryId.recordset[0].Id)
          .input('DateCreated', sql.DateTime2, isoDateTime)
          .query(sqlQueries.createAPoll)
          return insertPoll.recordset;
     } catch (error) {
          return error.message
     }
}

const deletePollData = async(Id) => {
     let date = new Date(); 
     let isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();

     try {
          const list = await pool.request()
          .input('Id', sql.Int, Id )
          .input('DateDeleted', sql.DateTime2, isoDateTime).query(sqlQueries.deleteAPoll)

          return list.recordset
     } catch (error) {
          return error.message
     }
     
}

const updatePolldata = async (Id, pollData) => {
     let date = new Date(); 
     let isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
     try {
          const PollTypeId = await pool.request().input('Name', sql.VarChar(20), pollData.pollType).query(generalSqlQueries.getPollTypeId)


          const categoryId = await pool.request().input('Name', sql.VarChar(20), pollData.category).query(generalSqlQueries.getCategoryTypeId)
          const updatePoll = await pool.request()
          .input('Id', sql.Int, Id)
          .input('Title', sql.VarChar(20), pollData.title)
          .input('Description', sql.VarChar(100), pollData.description)
          .input('BackdropImage', sql.VarChar(100), pollData.backdropImage)
          .input('TotalVotes', sql.Int, pollData.totalVotes)
          .input('PollType', sql.VarChar(20), pollData.pollType)
          .input('PollTypeId', sql.Int, PollTypeId.recordset[0].Id)
          .input('Category', sql.VarChar(20), pollData.category)
          .input('CategoryId', sql.Int, categoryId.recordset[0].Id)
          .input('DateModified', sql.DateTime2, isoDateTime)
          .query(sqlQueries.createAPoll)
          return updatePoll.recordset;
     } catch (error) {
          return error.message
     }
}
const startUpAPoll = async (Id) => {
     let date = new Date(); 
     let isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
     try {
          const list = await pool.request().input("Id", sql.Int, Id).input('DateModified', sql.DateTime2, isoDateTime).query(sqlQueries.startAPoll)
          return list.recordset
     } catch (error) {
          return error.message
     }
}

const endAPoll = async (Id) => {
     try {
          const list = await pool.request().input("Id", sql.Int, Id).query(sqlQueries.endAPoll)
          return list.recordset
     } catch (error) {
          return error.message
     }
}

const voteforAcandidate = async (candidateId, pollId) => {
     try {
          const list = await pool.request().input("Id", sql.Int, candidateId).query(sqlQueries.voteACandidate)
          await pool.request().input("Id", sql.Int, pollId).query(sqlQueries.updateTotalVotes)
          return list.recordset;
     } catch (error) {
          return error.message
     }
}
export {getAllBenchmarkPolls, getPublicBenchmarkPolls, getAuthPublicPolls, getPrivateBenchmarkPolls, getPollCandidatesData, createPollData, deletePollData, updatePolldata, startUpAPoll, endAPoll, voteforAcandidate, getPollDataById}