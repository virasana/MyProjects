using System;
using System.Collections.Generic;
using EventsAPI.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace EventsAPI.Controllers
{
    public interface IEvent
    {
        int Id { get; set; }
        string Name { get; set; }
        DateTime Date { get; set; }
        string Time { get; set; }
        decimal Price { get; set; }
        string ImageUrl { get; set; }
        string Location { get; set; }
        string Address { get; set; }
        string City { get; set; }
        string Country { get; set; }
        string OnlineUrl { get; set; }
        List<ISession> Sessions { get; set; }
    }

    public interface ISession
    {
        int Number { get; set; }
        string Name { get; set; }
        string Presenter { get; set; }
        int Duration { get; set; }
        int Level { get; set; }
        string Abstract { get; set; }
        List<string> Voters { get; set; }
    }

    public class Session : ISession
    {
        public int Number { get; set; }
        public string Name { get; set; }
        public string Presenter { get; set; }
        public int Duration { get; set; }
        public int Level { get; set; }
        public string Abstract { get; set; }
        public List<string> Voters { get; set; }
    }

    public class Event : IEvent
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Time { get; set; }
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }
        public string Location { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string OnlineUrl { get; set; }
        public List<ISession> Sessions { get; set; }
    }
}

[Route("api/[controller]")]
public class EventsController : Controller
{
    // GET api/values
    [HttpGet]
    public IEnumerable<Event> Get()
    {
        var result = new List<Event>
        {
            new Event()
            {
                Name = "UN Angular Summit",
                Address = "The UN Angular Center",
                City = "New York",
                Country = "USA",
                Date = DateTime.Now,
                Id = 4,
                ImageUrl = "/app/assets/images/basic-shield.png",
                OnlineUrl = "undefined",
                Price = 10.33M,
                Time = "8:00 am",
                Sessions = new List<ISession>
                {
                    new Session
                    {
                        Name = "Session 1",
                        Abstract = "Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah",
                        Duration = 2,
                        Level = 1,
                        Number = 5,
                        Presenter = "John Sophomore",
                        Voters = new List<string>() {"1", "2", "3"}
                    }
                }
            },
            new Event()
            {
                Name = "ng-vegas",
                Address = "The Excalibur",
                City = "Las Vegas",
                Country = "USA",
                Date = DateTime.Now,
                Id = 5,
                ImageUrl = "/app/assets/images/ng-vegas.png",
                OnlineUrl = "",
                Price = 9,
                Time = "9:00 am",
                Sessions = new List<ISession>
                {
                    new Session
                    {
                        Name = "Session 1",
                        Abstract = "Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah",
                        Duration = 2,
                        Level = 1,
                        Number = 5,
                        Presenter = "John Sophomore",
                        Voters = new List<string>() {"1", "2", "3"}
                    }
                }
            },
            new Event()
            {
                Name = "Angular Connect",
                Address = "1057 DT",
                City = "London",
                Country = "England",
                Date = DateTime.Now,
                Id = 1,
                ImageUrl = "/app/assets/images/angularconnect-shield.png",
                OnlineUrl = "",
                Price = 2,
                Time = "10:00 am",
                Sessions = new List<ISession>
                {
                    new Session
                    {
                        Name = "Session 1",
                        Abstract = "Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah",
                        Duration = 2,
                        Level = 1,
                        Number = 5,
                        Presenter = "John Sophomore",
                        Voters = new List<string>() {"1", "2", "3"}
                    }
                }
            },
            new Event()
            {
                Name = "ng-nl",
                Address = "The NG-NL Convention Center & Scuba Shop",
                City = "Amsterdam",
                Country = "Netherlands",
                Date = DateTime.Now,
                Id = 2,
                ImageUrl = "/app/assets/images/ng-nl.png",
                OnlineUrl = "",
                Price = 16.23M,
                Time = "9:00 am",
                Sessions = new List<ISession>
                {
                    new Session
                    {
                        Name = "Session 1",
                        Abstract = "Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah",
                        Duration = 2,
                        Level = 1,
                        Number = 5,
                        Presenter = "John Sophomore",
                        Voters = new List<string>() {"1", "2", "3"}
                    }
                }
            },
            new Event()
            {
                Name = "ng-conf 2037",
                Address = "The Palatial America Hotel",
                City = "Salt Lake City",
                Country = "USA",
                Date = DateTime.Now,
                Id = 3,
                ImageUrl = "/app/assets/images/ng-conf.png",
                OnlineUrl = "",
                Price = 11.99M,
                Time = "9:00 am",
                Sessions = new List<ISession>
                {
                    new Session
                    {
                        Name = "Session 1",
                        Abstract = "Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah",
                        Duration = 2,
                        Level = 1,
                        Number = 5,
                        Presenter = "John Sophomore",
                        Voters = new List<string>() {"1", "2", "3"}
                    }
                }
            }
        };

        return result;
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
        return "value";
    }

    // POST api/values
    [HttpPost]
    public void Post([FromBody]string value)
    {
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
}
