BEGIN

UPDATE [dbo].[Candidates]

SET [Votes] = [Votes] + 1

WHERE [dbo].[Candidates].[Id] = @Id

SELECT [PollApp].[dbo].[Candidates].[Id]
      ,[Name]
      ,[Photo]
      ,[PollApp].[dbo].[Candidates].[Description]
      ,[Team]
      ,[Votes]
      ,[PollId]
	,[TotalVotes]
FROM [PollApp].[dbo].[Candidates]INNER JOIN [dbo].[BenchmarkPoll] ON [PollId] = [dbo].[BenchmarkPoll].[Id]
WHERE [dbo].[Candidates].[Id] = @Id

END