const worker = document.querySelectorAll(".wrapper-work > div > img"),
  logoPret = document.querySelector(".logo-pret"),
  logoBeyond = document.querySelector(".logo-beyond"),
  logoPruaini = document.querySelector(".logo-pruaini");
const pret = document.getElementById("pretroom"),
beyond = document.getElementById("beyond"),
pruaini = document.getElementById("pruaini");
console.log(worker.length)

pret.addEventListener("click", function(){
    pret.classList.add("border-effect")
    beyond.classList.remove("border-effect")
    pruaini.classList.remove("border-effect")
    for (i = 0; i < worker.length; i++ ){
    worker[i].src = `/assets/desain${i+1}.jpeg`
    }
    logoPret.style.filter = "none"
    logoBeyond.style.filter = "grayscale()"
    logoPruaini.style.filter = "grayscale()"
});


beyond.addEventListener("click", function(){
    beyond.classList.add("border-effect")
    pret.classList.remove("border-effect")
    pruaini.classList.remove("border-effect")
    for (i = 0; i < worker.length; i++ ){
        worker[i].src = `/assets/desain${i+10}.jpeg`
        }
    logoPret.style.filter = "grayscale()"
    logoBeyond.style.filter = "none"
    logoPruaini.style.filter = "grayscale()"
});

pruaini.addEventListener("click", function(){
    pruaini.classList.add("border-effect")
    beyond.classList.remove("border-effect")
    pret.classList.remove("border-effect")
    for (i = 0; i < worker.length; i++ ){
        worker[i].src = `/assets/desain${i+19}.jpeg`
        }
    logoPret.style.filter = "grayscale()"
    logoBeyond.style.filter = "grayscale()"
    logoPruaini.style.filter = "none"
});