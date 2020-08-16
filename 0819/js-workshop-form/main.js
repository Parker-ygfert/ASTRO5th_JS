window.addEventListener("DOMContentLoaded", function() {
  let btn = document.querySelector(".button");
  let form = document.forms[0];
  
  btn.addEventListener("click", function(e) {
    e.preventDefault();

    // let userName = form["userName"].value,
    // let userEmail = form["email"].value;
    // let userPw = form["password"].value;
    // let agreement = form["agree"].checked;
    // console.log(form);
    // console.log(agreement);

    let formValues = {
      userName: form["userName"].value,
      email: form["email"].value,
      password: form["password"].value,
      agree: form["agree"].checked
    }
    // console.log(formValues);

    console.log(JSON.stringify(formValues));
  });
});

JSON.stringify()