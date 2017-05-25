using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StructureMapPoC.Controllers
{
    public class HomeController : Controller
    {
        private readonly IMessageProvider _messageProvider;

        public HomeController(IMessageProvider messageProvider)
        {
            _messageProvider = messageProvider;
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = _messageProvider.GetMessage();

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = _messageProvider.GetMessage();

            return View();
        }
    }

    public interface IMessageProvider
    {
        string GetMessage();
        string SomeAttribute { get; set; }
    }

    public class MessageProvider : IMessageProvider
    {
        private readonly string _message;

        public MessageProvider(string message)
        {
            _message = message;
        }
        public string GetMessage()
        {
            return $"{_message} with some attribute {this.SomeAttribute ?? "banana"}";
        }

        public string SomeAttribute { get; set; }
    }
}