﻿using System.Collections.Generic;
using System.Linq;
using Invernify.Core.Dtos;
using Invernify.Data;
using Microsoft.AspNetCore.Mvc;

namespace Invernify.Controllers
{
    [Route("api/iot")]
    public class IotController : Controller
    {
        private readonly ApplicationDbContext _context;

        public IotController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("humidity")]
        public IEnumerable<HumidityDto> GetIotData()
        {
            return _context.DeviceData.Select(_ => new HumidityDto(_));
        }

        [HttpGet("last-humidity")]
        public HumidityDto LastHumidity()
        {
            var x = _context.DeviceData.OrderBy(_ => _.Tt).LastOrDefault();
            return x == null ? null : new HumidityDto(x);
        }
    }
}