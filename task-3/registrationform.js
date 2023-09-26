// Array to store the submitted registration data
let registrations = [];

// Function to handle form submission
function submitForm(){
// Retrieving form input values 
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const courses = Array.from(document.getElementById("courses").options)
                      .filter(option => option.selected)
                      .map(option => option.value);
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const address = document.getElementById("address").value;
  const state = document.getElementById("state").value;
  const city = document.getElementById("city").value;

// Creating an object to store the registration data
  const registrationData = {
    fullName,
    email,
    phoneNumber,
    courses,
    gender,
    address,
    state,
    city,
  };

 // Adding the registration data to the registrations array
  registrations.push(registrationData);

// Displaying the results of submitted data
  displayResults();

// Resetting the form after submission
  document.getElementById("registrationForm").reset();
}

// Function to display the results of submitted data
function displayResults() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  for (let i = 0; i < registrations.length; i++) {
    const data = registrations[i];
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");

// Creating HTML content for displaying the registration data
    const resultHeading = document.createElement("h3");
    resultHeading.textContent = `Registration ${i + 1}`;                    
    resultDiv.appendChild(resultHeading);

    const resultDetails = document.createElement("p");
    resultDetails.innerHTML = `<strong>Name:</strong> ${data.fullName}<br>
      <strong>Email:</strong> ${data.email}<br>
      <strong>Phone Number:</strong> ${data.phoneNumber}<br>
      <strong>Courses:</strong> ${data.courses.join(", ")}<br>
      <strong>Gender:</strong> ${data.gender}<br>
      <strong>Address:</strong> ${data.address}, ${data.city}, ${data.state}<br>`;
    resultDiv.appendChild(resultDetails);

// Appending the registration data div to the results container
    resultsDiv.appendChild(resultDiv);
  }
}