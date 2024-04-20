namespace FirstSolution.ConsoleApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region Değişkenler


            // değişkenler
            // string, int, bool, decimal, double, float, object, DateTime, short, Long, char

            string name = "Ahmet Hakan ";
            string lastName = "Yıldırım";

            string message = "Hello " + name + lastName;
            string message2 = $"Hello {name} {lastName}";
            string message3 = @$"Hello {name} {lastName} \";
            Console.WriteLine(message);
            Console.WriteLine(message2);

            int num = 0;
            Console.WriteLine(num);

            int age = 24;

            bool isActive = false;
            decimal decimalNum = 0;
            double doubleNum = 23.5;
            float floatNum = 12.5f;


            // boxing 
            object firstName = "Ahmet Hakan";
            // unboxing
            Console.WriteLine((string)firstName);

            // boxing 
            object x = 0;
            object y = 1;

            // unboxing
            var z = (int)x + (int)y;


            DateTime date = DateTime.Now;
            DateTime date2 = Convert.ToDateTime("20.04.2024");



            #endregion

            #region Şart Blokları

            if (name == "Ahmet Hakan")
            {

                // bu işlemi yap

            } else
            {

                if(age > 24)
                {
                    // bunu yap
                } 
                else if(age == 24)
                {
                    // 
                    Console.WriteLine();
                }

                else
                {
                    // 
                }

            }

            // ternary operatör => single if line
            // şart ? // doğruysa bunu yap : // yanlış ise bunu yap
            var result = (age >= 18 ? age++ : age--);

            switch (age)    
            {
                case 10: Console.WriteLine("Giriş izni verildi");
                    break;

                case 20: Console.WriteLine("");
                    break;

                default: Console.WriteLine("");
                    break;

            }



            #endregion

            #region Döngüler

            // for, foreach, while

            for(int i = 0; i<10; i++)
            {
                // Console.WriteLine(i);
            }

            List<string> names = new () {
                "Ahmet","Şule", "Emine", "Hakan"
            };

            string[] nameArray = ["", "",""];

            foreach(string data in names)
            {
                if(data == "Ahmet" || data == "Hakan")
                {
                    Console.WriteLine("Seni Çok Seviyorum Şulem <3");
                }else
                {
                    Console.WriteLine(data);
                }

            }

            #endregion

            #region Goto
            tekrar:;
            int a = 0;
            int b = 1;
            int c = a + b;

            if (c > 3) {
                goto tekrar;
           }
            #endregion

           
        }
    }
}
