const logoutBtn = document.getElementById("logoutBtn");

const logout = async () => {
  console.log("HELLO");
  // i want to destroy the session on the back end
  //so that user has to log back in
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // this redircts to the home page
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

logoutBtn.addEventListener("click", logout);

//! ------
