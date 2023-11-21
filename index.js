const userEntries = JSON.parse(localStorage.getItem("user-entries")) || [];

function displayUserEntries() {
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = "";
    userEntries.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td style="border: 1px solid #ccc; padding: 0.5em;">${entry.name}</td>
            <td style="border: 1px solid #ccc; padding: 0.5em;">${entry.email}</td>
            <td style="border: 1px solid #ccc; padding: 0.5em;">${entry.password}</td>
            <td style="border: 1px solid #ccc; padding: 0.5em;">${entry.dob}</td>
            <td style="border: 1px solid #ccc; padding: 0.5em;">${entry.terms}</td>
        `;
        tableBody.appendChild(row);
    });
}

function validateForm(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const dob = document.querySelector('#dob').value;
    const terms = document.querySelector('#terms').checked;
    const userEntry = {
        name,
        email,
        password,
        dob,
        terms
    };
    userEntries.push(userEntry);
    localStorage.setItem("user-entries", JSON.stringify(userEntries));
    displayUserEntries();
}

document.addEventListener("DOMContentLoaded", displayUserEntries);
