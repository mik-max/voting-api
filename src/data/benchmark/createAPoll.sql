BEGIN
INSERT INTO [dbo].[BenchmarkPoll](
          ,[Title]
          ,[Description]
          ,[BackdropImage]
          ,[TotalVotes]
          ,[PollType]
          ,[PollTypeId]
          ,[Category]
          ,[CategoryId]
          ,[DateCreated]
)
VALUES (
     @title,
     @description,
     @backdropImage,
     @totalVotes,
     @pollType,
     @pollTypeId,
     @category,
     @categoryId
     @dateCreated
);
END