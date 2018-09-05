using Microsoft.AspNetCore.Mvc;
using CoMoorValley.ClientWebServer.Classes;

namespace CoMoorValley.ClientWebServer.Controllers
{
    public class HomeController : Controller
    {
      [Route("about")]
      [HttpGet]
      public string About()
      {
        string filePath = FilePaths.AboutPage;
        return FileReader.ReadFileContent(filePath);
      }

      [Route("contact")]
      [HttpGet]
      public string Contact()
      {
        string filePath = FilePaths.ContactPage;
        return FileReader.ReadFileContent(filePath);
      }

      [Route("gallery")]
      [HttpGet]
      public string Gallery()
      {
        string filePath = FilePaths.GalleryPage;
        return FileReader.ReadFileContent(filePath);
      }

      [Route("home")]
      [HttpGet]
      public string Home()
      {
        string filePath = FilePaths.HomePage;
        return FileReader.ReadFileContent(filePath);
      }

      [Route("info")]
      [HttpGet]
      public string Info()
      {
        string filePath = FilePaths.InfoPage;
        return FileReader.ReadFileContent(filePath);
      }

      [Route("news")]
      [HttpGet]
      public string News()
      {
        string filePath = FilePaths.NewsPage;
        return FileReader.ReadFileContent(filePath);
      }
  }
}
