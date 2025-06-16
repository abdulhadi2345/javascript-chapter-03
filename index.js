// 1. Declare a variable age and show it in alert
var age = 18;
alert("I am " + age + " years old");

// 2. Track number of visits (using localStorage to persist data)
var visitCount = localStorage.getItem("visitCount");

if (visitCount === null) {
    visitCount = 1;
} else {
    visitCount = Number(visitCount) + 1;
}

localStorage.setItem("visitCount", visitCount);
document.write("You have visited this site " + visitCount + " times<br>");

// 3. Declare birth year and show it
var birthYear = 2008;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof (birthYear) + "<br>");

// 4. Clothing store order message
var visitorName = "John Doe";
var productTitle = "T-shirt(s)";
var quantity = 5;

document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store.");
