UPDATE [dbo].BenchmarkPoll

SET [dbo].[BenchmarkPoll].[TotalVotes] = [TotalVotes] + 1
WHERE [dbo].[BenchmarkPoll].[Id] = @Id