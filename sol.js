// var args=[];
function mergeSort(arr) {
    var args = [...arguments];
    var result = [];
    for (var i = 0; i < args.length; i++) {
        var preName = [];
        for (var j = 0; j < args[i].length; j++) {
            if (!result.includes(args[i][j])) {
                result.push(args[i][j]); 
            }
            var d = new Date();
            var eTeen = d.setDate(d.getDate -18);
            console.log(eTeen);
            if (args[i][j].DOB > eTeen){
                console.log(args[i][j]);
            }
            var curName = args[i][j].name;
            console.log("CurName");
            console.log(curName);
            result.sort(function(curName, preName) {
                 return preName === preName ? 0 : curName < preName ? -1 : 1;
             }
            )
            // console.log(result);
            preName = args[i][j].name;
            console.log("preName");
            console.log(preName);
        }

        // console.log(args[i]);
        
    }
    console.log(result); 
}
let males = [{ "name": "Jishnu", "last_name": "Vishwanath", "user_name": "neolivz", "DOB": "20-JAN-1984", "Place": "Thodupuzha" }, { "name": "Binoy", "last_name": "John", "user_name": "carnage", "DOB": "07-APR-1997", "Place": "Ernakulam" }, { "name": "Graph", "last_name": "Overflow", "user_name": "graphOverflow", "DOB": "16-DEC-1993", "Place": "Ernakulam" }, { "name": "Shiniyas", "last_name": "Khan", "user_name": "shan", "DOB": "17-NOV-2001", "Place": "Ernakulam" }];
let females = [{ "name": "Gauri", "last_name": "Kumar", "user_name": "lilwolf", "DOB": "18-AUG-1994", "Place": "Alappuzha" }, { "name": "Shmita", "last_name": "Sen", "user_name": "roho", "DOB": "02-JAN-2000", "Place": "Ernakulam" }];
let females2 = [{ "name": "Smita", "last_name": "Sen", "user_name": "roho", "DOB": "02-JAN-2000", "Place": "Ernakulam" }];
mergeSort(males, females, females2);
    // console.log("Merged Array");
    // console.log(result);
    // result.sort(function(a, b) {
    //     return a === b ? 0 : a < b ? -1 : 1;
    // })
    // console.log("Sorted Array");
    // console.log(result);
    // return result;


// let sortArray = (males, females, females2) => {result }; 

// function alphabeticalOrder(arr) {
//     // Add your code below this line
//     return arr.sort(function(a, b) {
//       return a === b ? 0 : a < b ? -1 : 1;
//     });
//     // Add your code above this line
//   }
//   alphabeticalOrder(sortArray);
//   console.log(sortArray);