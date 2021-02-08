class assignment {
    emp=[];
    constructor(...params){
        for (const i of params) {
            let p=JSON.parse(i)
            //  console.log(p);
             this.emp = this.emp.concat(p);
             
        }   
    }
    sortFn(){
        var sort = this.emp.sort(function(a, b){
            return new Date(a.name) - new Date(b.name)
        })
        console.log(sort);
    }
    eighteenFn(){
        var eighteen = this.emp.filter(
            (a)=>{
                var today= new Date();
                var bd = new Date(a.DOB);
                var age = today.getFullYear() - bd.getFullYear();
                return age >18;
            }
        )
        for (const i of eighteen) {
            console.log(i.name);
        }
    }
}    
let males = [{ "name": "Jishnu", "last_name": "Vishwanath", "user_name": "neolivz", "DOB": "20-JAN-1984", "Place": "Thodupuzha" }, { "name": "Binoy", "last_name": "John", "user_name": "carnage", "DOB": "07-APR-1997", "Place": "Ernakulam" }, { "name": "Graph", "last_name": "Overflow", "user_name": "graphOverflow", "DOB": "16-DEC-1993", "Place": "Ernakulam" }, { "name": "Shiniyas", "last_name": "Khan", "user_name": "shan", "DOB": "17-NOV-2001", "Place": "Ernakulam" }];
let females = [{ "name": "Aauri", "last_name": "Kumar", "user_name": "lilwolf", "DOB": "18-AUG-1994", "Place": "Alappuzha" }, { "name": "Shmita", "last_name": "Sen", "user_name": "roho", "DOB": "02-JAN-2000", "Place": "Ernakulam" }];
let females2 = ({ "name": "Smita", "last_name": "Sen", "user_name": "roho", "DOB": "02-JAN-2000", "Place": "Ernakulam" });
let m = JSON.stringify(males);
let f1 =JSON.stringify(females);
let f2 =JSON.stringify(females2);
let obj = new assignment(m, f1, f2);
obj.sortFn();
obj.eighteenFn();
