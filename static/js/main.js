document.getElementById("logoutBtn").onclick = function () {
  if (window.confirm("Are you sure you want to logout?")) {
    window.location.href = "/logout";
  }
};
