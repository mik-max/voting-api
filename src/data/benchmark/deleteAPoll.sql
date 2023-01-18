BEGIN

UPDATE [dbo].[BenchmarkPoll]

SET [Status] = 'Deleted'
    ,[IsDeleted] = 1
    ,[DateDeleted] = @dateDeleted

WHERE [dbo].[BenchmarkPoll].[Id] = @PollId

END