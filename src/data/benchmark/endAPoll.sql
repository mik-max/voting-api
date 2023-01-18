BEGIN

UPDATE [dbo].[BenchmarkPoll]

SET [Status] = 'Ended'
    ,[HasEnded] = 1

WHERE [dbo].[BenchmarkPoll].[Id] = @Id

END