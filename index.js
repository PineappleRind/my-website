window.addEventListener("keydown", function (e) {
    if (e.key === 'y') {
      window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0";
    }
  })

  function snackbar() {
    var x = document.getElementById("snackbar");
    x.className = "appear";
    let y = document.getElementById("overlay");
    y.style.display = 'block';
    setTimeout(function() {y.style.opacity = '1';},1)
    setTimeout(function(){ x.className = x.className.replace("appear", ""); y.style.opacity = '0'; }, 3000);
    setTimeout(function() {
      y.style.display = 'none';
    },4000)
  }