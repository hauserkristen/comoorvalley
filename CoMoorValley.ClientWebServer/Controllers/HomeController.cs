using Microsoft.AspNetCore.Mvc;

namespace Battelle.MONA.ClientWebServer.Controllers
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
