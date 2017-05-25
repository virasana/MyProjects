using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using StructureMapPoC.Controllers;

namespace StructureMapPoC.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        private readonly IMessageProvider _messageProvider;

        public HomeControllerTest()
        {
            _messageProvider = new MessageProvider("The TEST message!")
            {
                SomeAttribute = "SomeAttribute! From the Test!"
            };
            
        }
        [TestMethod]
        public void Index()
        {

            // Arrange
            
            var controller = new HomeController(_messageProvider);

            // Act
            ViewResult result = controller.Index() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void About()
        {
            // Arrange
            var controller = new HomeController(_messageProvider);

            // Act
            ViewResult result = controller.About() as ViewResult;

            // Assert
            Assert.IsInstanceOfType(result.ViewBag.Message, typeof(string));
        }

        [TestMethod]
        public void Contact()
        {
            // Arrange
            var controller = new HomeController(_messageProvider);

            // Act
            ViewResult result = controller.Contact() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
        }
    }
}
