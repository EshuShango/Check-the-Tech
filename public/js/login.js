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
      ? document.location.replace("/")
      : alert(response.statusText);
  }
};



const loginFormBtn = document.getElementById('loginFormBtn');
const usernameField = document.getElementById('loginName');
const loginPasswordField = document.getElementById('loginPassword');

async function login(e) {
  console.log(e.target);
  e.stopPropagation();
  e.preventDefault();

  const obj = {
    username: usernameField.value,
    password: loginPasswordField.value,
  };

  const response = await fetch('/api/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    usernameField.setCustomValidity('Invalid username or password');
  }
}

loginFormBtn.addEventListener('click', login);
