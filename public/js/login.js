const loginFormHandler = async (e) => {
  e.preventDefault();

  // Collect values from the login form
  const logEmail = document.getElementById("emailLogin").value.trim();
  const logPwEl = document.getElementById("passwordLogin").value.trim();

  if (logEmail && logPwEl) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If successful, redirect the browser to the profile page
    response.ok
      ? document.location.replace("/profile")
      : alert(response.statusText);
  }
};

const signupFormHandler = async (e) => {
  e.preventDefault();

  // const name = document.querySelector('#name-signup').value.trim();
  // const email = document.querySelector('#email-signup').value.trim();
  // const password = document.querySelector('#password-signup').value.trim();

  const firstName = document.getElementById("regFirstName").value.trim();
  const lastName = document.getElementById("regLastName").value.trim();
  const regEmail = document.getElementById("regEmail").value.trim();
  const regPwEl = document.getElementById("regPassword").value.trim();
  const repPwEl = document.getElementById("regRepPassword").value.trim();

  if (firstName && lastName && email && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, regEmail, regPwEl, repPwEl }),
      headers: { "Content-Type": "application/json" },
    });

    response.ok
      ? document.location.replace("/dashboard")
      : alert(response.statusText);
  }
};

document
  .getElementById(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .getElementById(".signupForm")
  .addEventListener("submit", signupFormHandler);
