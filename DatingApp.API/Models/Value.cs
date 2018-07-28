using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Models
{
    public class Value
    {
        public int Id{get;set;}
        [StringLength(20)]
        public string Name{get;set;}="";
    }
}