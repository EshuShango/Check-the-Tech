const logFormBtn = document.getElementById("loginFormBtn");
//? can i make it so you can press the btn and ENTER key ?

const userName = document.getElementById("logUserName");
const logEmail = document.getElementById("logEmail");
const PwEl = document.getElementById("logPassword");

const login = async (e) => {
  console.log("WTF");
  console.log(e.target);
  e.preventDefault();
  // e.stopPropagation();
  const userObj = {
    username: userName.value.trim(),
    email: logEmail.value.trim(),
    password: PwEl.value.trim(),
  };

  //? why is the if statement not working ?
  // if (userObj.email && userObj.password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj),
    });

    if (response.ok) {
      console.log("user logged in !");
      alert("Your logged in !");
      document.location.replace("/dashboard");
    } else {
      email.setCustomValidity("Invalid username or password");
      alert(response.statusText);
    }
  //? }
};

logFormBtn.addEventListener("click", login);
