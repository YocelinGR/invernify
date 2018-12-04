using System;
using Invernify.Data;

namespace Invernify.Core.Dtos
{
    public class HumidityDto
    {
        public HumidityDto(DeviceData from)
        {
            Id = from.Uuid.ToString();
            DateTime = from.Tt;
            DeviceId = from.Did;
            PinId = from.Pid;
            SensorModel = from.Sm;
            Value = from.H;
        }

        public string Id { get; set; }
        public string DeviceId { get; set; }
        public DateTime DateTime { get; set; }
        public string PinId { get; set; }
        public string Value { get; set; }
        public string SensorModel { get; set; }
    }
}