const submitBtn = document.querySelector(".submit-button");
const visitorName = document.querySelector("#visitor-name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

submitBtn.addEventListener("click", function () {
  if (visitorName.value.trim() === "") {
    document.querySelector(".visitor-name-label").style.borderBottom =
      "1px solid red";
  } else if (email.value.trim() === "") {
    document.querySelector(".email-label").style.borderBottom = "1px solid red";
  } else if (message.value.trim() === "") {
    document.querySelector(".placeholder-message").style.borderBottom =
      "1px solid red";
  } else {
    submitBtn.style.backgroundColor = "#777777";
  }
});

visitorName.addEventListener("input", function () {
  if (visitorName.value !== "") {
    document.querySelector(".visitor-name-label").style.borderBottom =
      "1px solid cornflowerblue";
  }
});

email.addEventListener("input", function () {
  if (email.value !== "") {
    document.querySelector(".email-label").style.borderBottom =
      "1px solid cornflowerblue";
  }
});

message.addEventListener("input", function () {
  if (message.value !== "") {
    document.querySelector(".placeholder-message").style.borderBottom =
      "1px solid cornflowerblue";
  }
});