FROM mcr.microsoft.com/dotnet/sdk:6.0 as dotnet-builder
WORKDIR /app-src
COPY . .
RUN dotnet restore
RUN dotnet publish --configuration release --output ./dist

FROM mcr.microsoft.com/dotnet/aspnet:5.0-alpine
WORKDIR /app/api
COPY --from=dotnet-builder /app-src/dist .

ENV PORT=80
ENV ASPNETCORE_URLS=http://+:${PORT}
EXPOSE ${PORT}

ENTRYPOINT [ "dotnet", "ImageServerApi.dll" ]
