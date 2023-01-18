BEGIN
SELECT  [Id]
      ,[Name]
      ,[Photo]
      ,[Description]
      ,[Team]
      ,[Votes]
      ,[PollId]
FROM [PollApp].[dbo].[Candidates]
WHERE [PollId] = @pollId
END