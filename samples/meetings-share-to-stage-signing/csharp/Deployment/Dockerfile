FROM mcr.microsoft.com/dotnet/sdk:6.0-bullseye-slim AS build

RUN curl --silent --location https://deb.nodesource.com/setup_16.x | bash - && apt-get install --yes nodejs

ARG REACT_APP_AAD_CLIENT_ID
ARG REACT_APP_MSA_ONLY_CLIENT_ID
ARG REACT_APP_MSA_ONLY_SCOPE

COPY ./ ./
RUN dotnet publish /MeetingSigning.Web/Microsoft.Teams.Samples.MeetingSigning.Web.csproj -c release -o /app

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:6.0-bullseye-slim
WORKDIR /app
COPY --from=build /app ./
ENTRYPOINT ["dotnet", "Microsoft.Teams.Samples.MeetingSigning.Web.dll"]
