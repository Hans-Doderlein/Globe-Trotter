(function () {
  let search = document.getElementById("retrievedName");
  search.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("cityName").focus();
  });
})();
