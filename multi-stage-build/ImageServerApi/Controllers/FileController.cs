using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ImageServerApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace ImageServerApi.Controllers
{
  [ApiController]
  [Route("api/files")]
  public class FileController : ControllerBase
  {
    private readonly IConfiguration _configuration;

    private string _tempFolder => Path.Combine(
      Directory.GetCurrentDirectory(),
      "temp"
    );

    public FileController(IConfiguration configuration)
    {
      this._configuration = configuration;

      Directory.CreateDirectory(this._tempFolder);
    }

    private IMongoCollection<FileEntity> GetFilesCollection()
    {
      var host = _configuration
        .GetSection("Mongo")
        .GetSection("Host")
        .Get<string>();

      var port = _configuration
        .GetSection("Mongo")
        .GetSection("Port")
        .Get<string>();

      var client = new MongoClient($"mongodb://{host}:{port}");
      var database = client.GetDatabase("file-uploader");
      var filesCollection = database.GetCollection<FileEntity>("files");

      return filesCollection;
    }

    [HttpPost]
    [Route("upload")]
    public async Task<IActionResult> Upload([FromForm] IFormFile file)
    {
      if (file == null)
        BadRequest("File not provided.");

      if (!file.ContentType.ToUpper().Contains("image"))
        BadRequest("Invalid format.");

      var fileEntity = new FileEntity()
      {
        Id = Guid.NewGuid().ToString(),
        Name = file.FileName
      };

      var fileName = $"{fileEntity.Id}.{fileEntity.Name.Split('.').Last()}";
      var filePath = Path.Combine(_tempFolder, fileName);

      using (var fileStream = new FileStream(filePath, FileMode.Create))
        await file.CopyToAsync(fileStream);

      var filesCollection = GetFilesCollection();

      await filesCollection.InsertOneAsync(fileEntity);

      return Ok(fileEntity);
    }

    [HttpGet]
    [Route("")]
    public async Task<ActionResult> ListFiles()
    {
      var filesCollection = GetFilesCollection();

      var files = await filesCollection
        .Find(p => true)
        .ToListAsync();

      return Ok(files);
    }

    [HttpGet]
    [Route("{fileId}")]
    public async Task<IActionResult> FindFile([FromRoute] string fileId)
    {
      var filesCollection = GetFilesCollection();

      var foundFile = await filesCollection
        .Find(p => p.Id == fileId)
        .FirstAsync();

      if (foundFile == null)
        return BadRequest("File not found");

      var fileName = $"{foundFile.Id}.{foundFile.Name.Split('.').Last()}";
      var filePath = Path.Combine(_tempFolder, fileName);

      var stream = new FileStream(filePath, FileMode.Open);

      return new FileStreamResult(stream, "image/jpeg");
    }
  }
}
