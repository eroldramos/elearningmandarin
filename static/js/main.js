document.getElementById("logoutBtn").onclick = function () {
  document.querySelector('.logout_container').style.display = "flex";
};

document.getElementById("confirm_logout").onclick = function () {
  window.location.href = "/logout";
};

document.getElementById("cancel_logout").onclick = function () {
  document.querySelector('.logout_container').style.display = "none";
};

