const searchUser = document.querySelector("#searchUser");
const github = new Github();

searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    github
      .getUser(userText)
      .then((data) => {
        if (data.profile.message === "Not Found") {
        } else {
        }
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  } else {
  }
});
