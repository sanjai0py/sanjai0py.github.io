const age = document.getElementById("age");

function calcAge() {
  const currentYear = new Date().getFullYear();
  return currentYear - 2002;
}

age.innerText = calcAge();
