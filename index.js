function validateDOB() {
    var dobInput = document.getElementById('dob');
    var dob = new Date(dobInput.value);
    var now = new Date();
    var minAg = 18;
    var maxAg = 55;
    var age = now.getFullYear() - dob.getFullYear();

    if (now.getMonth() < dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) {
        age--;
    }

    if (age < minAg || age > maxAg) {
        alert("Age must be between 18 and 55 years.");
        dobInput.value = ''; 
    }
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

   
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dob = document.getElementById("dob").value;
    var terms = document.getElementById("terms").checked;
   
   
    var table = document.getElementById("userTable");
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var emailCell = row.insertCell(1);
    var passwordCell = row.insertCell(2);
    var dobCell = row.insertCell(3);
    var termsCell = row.insertCell(4);

    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    dobCell.innerHTML = dob;
    passwordCell.innerHTML = password;
    termsCell.innerHTML = terms ? 'Yes' : 'No';


  
    document.getElementById("registrationForm").reset();
});