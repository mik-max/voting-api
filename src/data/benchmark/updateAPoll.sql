BEGIN
UPDATE [dbo].[BenchmarkPoll]
SET  [Title] = @title
     ,[Description] = @description
     ,[BackdropImage] = @backdropImage
     ,[TotalVotes] = @totalVotes
     ,[PollType] = @pollType
     ,[PollTypeId] = @pollTypeId
     ,[Category] = @category
     ,[CategoryId] = @categoryId
     ,[DateModified] = @dateModified
WHERE [Id] = @Id AND [IsDeleted] = 0
END