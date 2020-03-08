/* Attempt 1
//create the list of JSON objects - 15 total
var firstNames = ["Emuel", "Kathryn", "Patty", "Brady", "Olivia", "Christy", "Alex", "Mia", "Kendall", "Ev", "Elle", "Maggie", "Kira", "Brian", "Alison"];
var lastNames = ["Aldridge", "Wallace", "Irizarry", "Eastin", "Carino", "Onanuga", "Miller", "Savelli", "Lake", "Andrews", "Henderson", "Weir", "Lewitt", "Hall", "Jibilian"];


let buildList = document.querySelector('#nameSelector');

for (i = 0; i < firstNames.length; i++) {
    buildList.innerHTML += "<option value=" + ">" + firstNames[i] + " " + lastNames[i] + "</option>";
}

//call image and fact from buildList

var fact = document.querySelector('#fact');

$.getJSON('https://api.myjson.com/bins/dzr8q', function (data) {
    fact.innerHTML = data[0].fact;
    //fact.innerHTML = "";
    for(i = 0; i < 10; i++){
        fact.innerHTML += "<h3>Fact: " + data[i].fact + "</h3>";
    }
    
}); */

//Attempt 2
// var student = document.querySelector("#student");
// var category = document.querySelector('#category');


// function qa() {
//     
//         //for(i = 0; i < student.length; i++){
//         student.innerHTML = "<div style='text-transform: capitalize'>" + data[0]
//         .stu_name + " " + data[0].last_name + "</div>"
//         //}
//         //data[0].stu_name;
//         // category.innerHTML = "<div style='color: darkgreen; text-transform: capitalize'>" + data[0]
//         //     .last_name + "</div>"
//     });
// }

$.getJSON('https://api.myjson.com/bins/dzr8q', function (data) {
    let output = document.querySelector('#alsoRan');
    let next = document.querySelector('#next');
    let previous = document.querySelector('#previous');

    let i = 0;

    function canShow(plusMinus) {
        output.innerHTML = "<h1>" + data[i].stu_name + " " + data[i].last_name + "</h1>" + " " + "<h2>Fact: " + data[i].fact + "</h2>" + "<br>" + "<img src=" + data[i].domain + "/images/me.jpg>";
        i += plusMinus;
        if (i == data.length) {
            i = 0;
        }
        if (i < 0) {
            i = data.length - 1;
        }
    }

    previous.onclick = function () {
        canShow(-1);
    }
    next.onclick = function () {
        canShow(1);
    }
});