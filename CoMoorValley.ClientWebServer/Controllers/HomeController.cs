using Microsoft.AspNetCore.Mvc;

namespace CoMoorValley.ClientWebServer.Controllers
{
    public class HomeController : Controller
    {
      [Route("hello")]
      [HttpGet]
      public IActionResult Hello()
      {
        var msg = new { Message = "Hello World" };
        return this.Ok(msg);
      }
  }
}
