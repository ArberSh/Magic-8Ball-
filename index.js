const input = document.querySelector("input");

arr = [
  "It is certain.",
  "As I see it, yes.",
  " It is decidedly so.",
  "Better not tell you now.",
  "Cannot predict now",
  "I do not know for sure ",
  "My reply is no.",
  "My sources say no.",
  "Very doubtful.",
  "Yes definitely.",
]; //Pergjigje
// sa her qe te kontrollosh input atehere perher shto .value sic e bona rn sepse kshu afishohet ca ka brenda a


function random() {
  if (input.value === "") {
    alert("Please put something in text");
    return;
  } else {
    document.getElementById("Answer").innerHTML =
      arr[Math.floor(Math.random() * 10)];
    answering.style.display = "block";
    answering.style.visibility = "visible";
    answering.style.opacity = 1;
    nr.style.display = "none";
  }
}
