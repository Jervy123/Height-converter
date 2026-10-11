let cTof = document.getElementById("cmTofeet");
let fToc = document.getElementById("feetTocm");

cTof.addEventListener("click", function() {
    cTof.classList.add("active");
    fToc.classList.remove("active");
});

fToc.addEventListener("click", function() {
    fToc.classList.add("active");
    cTof.classList.remove("active");
});


function convert() {
    const raw = document.querySelector("#input").value.trim();
    let input = Number(document.querySelector("#input").value);
if(cTof.classList.contains("active")){
    let result = Math.floor(input / 30.48) + "'" + Math.round((input / 2.54) % 12);
    document.getElementById("result").textContent = result + " feet";
}else {
    let feet = 0, inches = 0;
    if (raw.includes("'")) {
      const [f, i] = raw.split("'");
      feet = Number(f) || 0;
      inches = Number(i) || 0;
    } else {
      feet = Number(raw) || 0;
    }
    const result = feet * 30.48 + inches * 2.54;
    document.querySelector("#result").textContent = result.toFixed(2) + " cm";
  }
}