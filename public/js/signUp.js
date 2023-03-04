// const userName = document.getElementById("regUserName").value.trim();
// const regEmail = document.getElementById("regEmail").value.trim();
// const regPwEl = document.getElementById("regPassword").value.trim();
// const repPwEl = document.getElementById("repPassword").value.trim();


const fullName = document.getElementById("fullName");
const userName = document.getElementById("regUserName");
const regEmail = document.getElementById("regEmail");
const regPwEl = document.getElementById("regPassword");
const repPwEl = document.getElementById("repPassword");


// function checkPasswords(e) {
  //   console.log(e.target);
  //   e.stopPropagation();
  //   e.preventDefault();
  //   if (registerPasswordField.value !== confirmPasswordField.value) {
    //     confirmPasswordField.setCustomValidity("Passwords do not match");
    //   } else {
      //     registerUser();
      //   }
      // }
      
      //^ const signupForm = document.getElementById("registerBtn").value;

function checkPasswords(e) {
  console.log(e.target);
  e.stopPropagation();
  e.preventDefault();
  if (regPwEl.value !== repPwEl.value) {
    return false
    // repPwEl.setCustomValidity("Passwords do not match");
  } else {
    // signupFormSubmission();
    return true
  }
}


const signupFormSubmission = async (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("Hey there");
  
  const passwordsOk = checkPasswords(e)
  if( !passwordsOk ) return console.log("bad passwords")

  if (fullName.value && userName.value && regEmail.value && regPwEl.value && repPwEl.value) {
    console.log(fullName);
    const userObj = {
      fullname: fullName.value.trim(),
      username: userName.value,
      email: regEmail.value,
      password: regPwEl.value,
      repeatPW: repPwEl.value,
    };
    // Send a POST request for userApi, right ?
    const response = await fetch("/api/user/signup", {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: { "Content-Type": "application/json" },
    });
    // console.log("response", response);
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/dashboard");
    } else {
      alert("hey now");
      alert(response.statusText);
    }
  }
}

document
  .getElementById("registerBtn")
  .addEventListener("click", signupFormSubmission);

//   //!----SignUp

//   //! -----

//! How to implement signing up

//! ---------
