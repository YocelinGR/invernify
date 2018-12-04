using System;
using System.Collections.Generic;

namespace Invernify.Data
{
    public partial class DeviceData
    {
        public Guid Uuid { get; set; }
        public string Did { get; set; }
        public DateTime Tt { get; set; }
        public string Pid { get; set; }
        public string H { get; set; }
        public string Sm { get; set; }
    }
}
