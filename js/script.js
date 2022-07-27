var beginUserInformation = alert("Welcome User!");

var firstNameUser = prompt("Enter your first name:", "Bolta").trim(),
    lastNameUser = prompt("Enter your last name?", "Qilichev").trim(),
    ageUser = prompt("Enter your age:", "21").trim(),
    occupationUser = prompt("Enter your profession", "Cyber Security").trim(),
    addressUser = prompt("Enter your address", "Qashqadaryo").trim();

console.log(`User information: 
User first name: ${firstNameUser} 
User last name: ${lastNameUser} 
User age: ${ageUser} 
User occupation: ${occupationUser} 
User address: ${addressUser}`);

confirm("Are you sure your data is correct?");

var endUserInformation = alert("Thank You very much!");
