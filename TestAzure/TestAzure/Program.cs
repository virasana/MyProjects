using System;
using System.IO;
using Microsoft.Extensions.Configuration;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;

// Be sure to add the Microsoft.Extensions.Configuration.Json package in addition to Microsoft.Extensions.Configuration!

namespace TestAzure
{
    class Program
    {
        public static IConfigurationRoot Configuration { get; set; }

        static void Main(string[] args)
        {
            Startup();

            var connectionString = Configuration["ConnectionStrings:AzureStorage"];

            // Storage Account 
            //    ==> Blob Client 
            //        ==> Container
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse(connectionString);
            CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
            CloudBlobContainer container = blobClient.GetContainerReference("signin");

            container.CreateIfNotExistsAsync();

            var blobName = $"MyBlob_{DateTime.Now.Day}_{DateTime.Now.Hour}_{DateTime.Now.Minute}";
            ICloudBlob blob = container.GetBlockBlobReference(blobName);
            using (var theFile = File.OpenRead(@"D:\Temp\less.js"))
            {
                blob.UploadFromStreamAsync(theFile);
            }

            Console.WriteLine("Press a key...");
            Console.ReadKey();
        }

        private static void Startup()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");

            Configuration = builder.Build();
        }
    }
}
