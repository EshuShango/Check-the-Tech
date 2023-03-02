const signUp = async (e) => {
  e.preventDefault();

  const firstName = document.getElementById("regFirstName").value.trim();
  const lastName = document.getElementById("regLastName").value.trim();
  const regEmail = document.getElementById("regEmail").value.trim();
  const regPwEl = document.getElementById("regPassword").value.trim();
  const repPwEl = document.getElementById("regRepPassword").value.trim();

  //!----SignUp 

  const username = signupUsername.value;
  const password = signupPassword.value;
  
  if (password.length >= 8) {
    const userObj = {
        username: username,
        password: password
    };

    const response = await fetch('/api/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
    });

    if (response.status === 200) {
        signupStatus.textContent = 'User created';
        document.location.replace('/');
    } else {
        signupStatus.textContent = 'Could not create user';
    };
} else {
    signupStatus.textContent = 'Password must be at least 8 characters!';
};
  //! -----

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
  .addEventListener("submit", signUp);



  //! How to implement signing up 

async function signup(e) {
  e.preventDefault();
  e.stopPropagation();

  const username = signupUsername.value;
  const password = signupPassword.value;

  if (password.length >= 8) {
      const userObj = {
          username: username,
          password: password
      };

      const response = await fetch('/api/users/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userObj)
      });

      if (response.status === 200) {
          signupStatus.textContent = 'User created';
          document.location.replace('/');
      } else {
          signupStatus.textContent = 'Could not create user';
      };
  } else {
      signupStatus.textContent = 'Password must be at least 8 characters!';
  };
};

  //! ---------

