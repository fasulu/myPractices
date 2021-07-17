

function datetest() {
    
    // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var options = { day: 'numeric', month: 'long', year: 'numeric'};
    var today  = new Date();
    
    console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    console.log(today.toLocaleDateString("en-FR", options)); // Mmm dd, yyyy
    console.log(today.toLocaleDateString("en-IN", options)); 

}

datetest()

// Checks if leap year. Years from 1900 to 9999 are valid. Only dd-MM-yyyy

var stringToValidate = "29-02-2012";
var rgexp = /(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
var isValidDate = rgexp.test(stringToValidate);


// Here is Regex for multiple date formats working for me :

        //dd.MM.yyyy
        var date_regex = /^(0[1-9]|1\d|2\d|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
        alert(date_regex.test("02.02.1991"));  

//      //dd/mm/yyyy
//      var date_regex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
//          alert(date_regex.test("02/12/1991"));  

//      //dd-mm-yyyy
//      var date_regex = /^(0[1-9]|1\d|2\d|3[01])\-(0[1-9]|1[0-2])\-(19|20)\d{2}$/;
//      alert(date_regex.test("02-12-1991")); 

//      //mm/dd/yyyy
//      var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
//      alert(date_regex.test("12/02/1991")); 


//      //yyyy.MM.dd
//      var date_regex = /^((19|20)\d{2})\.(0[1-9]|1[0-2])\.(0[1-9]|1\d|2\d|3[01])$/;
//      alert(date_regex.test("1991.12.02")); 

//      //yyyy/MM/dd
//      var date_regex = /^((19|20)\d{2})\/(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])$/;
//      alert(date_regex.test("1991/12/02")); 

//      //yyyy-MM-dd
//      var date_regex = /^((19|20)\d{2})\-(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])$/;
//      alert(date_regex.test("1991-12-02"));