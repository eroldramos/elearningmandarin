document.getElementById("deleteBtn").onclick = function () {
    document.querySelector('.delete_container').style.display = "flex";
  };
  
  document.getElementById("confirm_delete").onclick = function () {
    window.location.href = "/delete-account";
  };
  
  document.getElementById("cancel_delete").onclick = function () {
    document.querySelector('.delete_container').style.display = "none";
  };
  
  
  