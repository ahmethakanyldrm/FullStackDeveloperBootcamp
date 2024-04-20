namespace FirstSolution.SayiTahminOyunu.ConsoleApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("Merhaba Sayı tahmin oyununa hoşgeldin. Ben NumberAI");

            int number = new Random().Next(1,100);
            int answerNumber = 0;
            while (number != answerNumber)
            {
                Console.WriteLine("1-100 arasında bir sayı tuttum. Bunu tahmin edebilir misin?");
                Console.WriteLine("Sayı Giriniz:");
                Console.ForegroundColor = ConsoleColor.White;
                string? answer = Console.ReadLine();

                int.TryParse(answer, out answerNumber);

                if (number == answerNumber)
                {
                    Console.ForegroundColor = ConsoleColor.Green;
                    Console.WriteLine("Tebrikler tuttuğum sayıyı bildin!");
                    
                }
                else
                {
                    Console.ForegroundColor = ConsoleColor.Green;
                    Console.WriteLine("Üzgünüm tuttuğum sayıyı bilemedin !");

                }
            }

        }

        private void tahmin()
        {
            Console.WriteLine("Merhaba Sayı tahmin oyununa hoşgeldin. Ben NumberAI");
            tekrar:;
            Console.WriteLine("1-100 arasında bir sayı tuttum. Bunu tahmin edebilir misin?");
            Console.WriteLine("Sayı Giriniz:");
            string? answer = Console.ReadLine();

            int number = 10;
            int.TryParse(answer, out int answerNumber);

            if (number == answerNumber)
            {
                Console.WriteLine("Tebrikler tuttuğum sayıyı bildin!");
            }
            else
            {
                Console.WriteLine("Üzgünüm tuttuğum sayıyı bilemedin !");
                goto tekrar;
            }
        }
    }
}
