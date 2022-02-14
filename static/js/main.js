document.getElementById("logoutBtn").onclick = function () {
  document.querySelector('.logout_container').style.display = "flex";
};

document.getElementById("confirm_logout").onclick = function () {
  document.querySelector('.logout_container').style.display = "none";

  let timerInterval
  Swal.fire({
    title: 'Logging Out!',
    html: 'Please wait in <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      window.location.href = "/logout";
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })

};

document.getElementById("cancel_logout").onclick = function () {
  document.querySelector('.logout_container').style.display = "none";
};




