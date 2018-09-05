using System.IO;

namespace CoMoorValley.ClientWebServer.Classes
{
    public class FileReader 
    {

        public static string ReadFileContent(string path) {
            return File.ReadAllText(path);
        }

    }
}