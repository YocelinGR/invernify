using System.Linq;
using Invernify.Data;
using Microsoft.AspNetCore.Mvc;

namespace Invernify.Controllers
{
    [Route("api/iot")]
    public class IotController : Controller
    {
        private ApplicationDbContext _context;

        public IotController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("sample")]
        public string GetIotData()
        {
            return _context.DeviceData.Count().ToString();
        }
    }
}