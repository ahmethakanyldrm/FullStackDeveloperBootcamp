using Microsoft.AspNetCore.Mvc;

namespace FirstMVC.Controllers
{
    public class HomeController : Controller
    {

        public static List<string> Todos = new();
        public static string updateTodo = string.Empty;
        public static int updateIndex = 0;
        public IActionResult Index()
        {
            return View(Todos);
        }

        [HttpGet]
        public IActionResult Save(string work)
        {
            Todos.Add(work);
            TempData["Message"] = "Todo Create is successfully";
            TempData["Type"] = "success";
            return RedirectToAction("Index", "Home");
        }
        [HttpGet]
        public IActionResult DeleteByIndex(int index)
        {
            index = index - 1;
            Todos.Remove(Todos[index]);
            TempData["Message"] = "Todo Delete is successfully";
            TempData["Type"] = "danger";
            return RedirectToAction("Index", "Home");
        }

        [HttpGet]
        public IActionResult Get(int index)
        {
            updateIndex = index - 1;
            updateTodo = Todos[updateIndex];
            TempData["UpdateWork"] = updateTodo;
            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Update(string updateWork)
        {
            Todos[updateIndex] = updateWork;
            TempData["UpdateWork"] = string.Empty;
            TempData["Message"] = "Todo Update is successfully";
            TempData["Type"] = "info";
            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Cancel()
        {
            TempData["UpdateWork"] = string.Empty;
            return RedirectToAction("Index");
        }

        public IActionResult Contact()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Send(string name, string email, string subject, string content)
        {
            return RedirectToAction("Index", "Home");
        }
       
    }
}
