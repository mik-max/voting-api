BEGIN

UPDATE [dbo].[BenchmarkPoll]

SET [Status] = 'Started'
     ,[DateModified] = @dateModified
     ,[HasEnded] = 0

WHERE [dbo].[BenchmarkPoll].[Id] = @Id

END