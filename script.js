const worker = document.querySelectorAll(".wrapper-work > div > img"),
  logoPret = document.querySelector(".logo-pret"),
  logoBeyond = document.querySelector(".logo-beyond"),
  logoPruaini = document.querySelector(".logo-pruaini"),
  logoCepat = document.querySelector(".logo-cepat"),
  logoVideo = document.querySelector(".logo-video"),
  videoWrapper = document.querySelector(".video-wrapper"),
  wrapperWork = document.querySelector(".wrapper-work"),
  seeMore = document.querySelector(".seemore-wrapper");
const pret = document.getElementById("pretroom"),
  beyond = document.getElementById("beyond"),
  pruaini = document.getElementById("pruaini"),
  podcast = document.getElementById("podcast"),
  content = document.getElementById("content");
console.log(worker.length);


pret.classList.add("border-effect");
pret.addEventListener("click", function () {
  pret.classList.add("border-effect");
  beyond.classList.remove("border-effect");
  pruaini.classList.remove("border-effect");
  podcast.classList.remove("border-effect");
  content.classList.remove("border-effect");
  for (i = 0; i < worker.length; i++) {
    worker[i].src = `/assets/desain${i + 1}.jpeg`;
  }
  logoPret.style.filter = "none";
  logoBeyond.style.filter = "grayscale()";
  logoPruaini.style.filter = "grayscale()";
  logoCepat.style.filter = "grayscale()";
  logoVideo.style.filter = "grayscale()";
  wrapperWork.style.display = "flex";
  videoWrapper.style.display ="none";
  seeMore.style.display ="none";
});

beyond.addEventListener("click", function () {
  beyond.classList.add("border-effect");
  pret.classList.remove("border-effect");
  pruaini.classList.remove("border-effect");
  podcast.classList.remove("border-effect");
  content.classList.remove("border-effect");
  for (i = 0; i < worker.length; i++) {
    worker[i].src = `/assets/desain${i + 10}.jpeg`;
  }
  logoPret.style.filter = "grayscale()";
  logoBeyond.style.filter = "none";
  logoPruaini.style.filter = "grayscale()";
  logoCepat.style.filter = "grayscale()";
  logoVideo.style.filter = "grayscale()";
  wrapperWork.style.display = "flex";
  videoWrapper.style.display ="none";
  seeMore.style.display ="none";
});

pruaini.addEventListener("click", function () {
  pruaini.classList.add("border-effect");
  beyond.classList.remove("border-effect");
  pret.classList.remove("border-effect");
  podcast.classList.remove("border-effect");
  content.classList.remove("border-effect");
  for (i = 0; i < worker.length; i++) {
    worker[i].src = `/assets/desain${i + 19}.jpeg`;
  }
  logoPret.style.filter = "grayscale()";
  logoBeyond.style.filter = "grayscale()";
  logoPruaini.style.filter = "none";
  logoCepat.style.filter = "grayscale()";
  logoVideo.style.filter = "grayscale()";
  wrapperWork.style.display = "flex";
  videoWrapper.style.display ="none";
  seeMore.style.display ="none";
});


podcast.addEventListener("click", function () {
  pruaini.classList.remove("border-effect");
  beyond.classList.remove("border-effect");
  pret.classList.remove("border-effect");
  podcast.classList.add("border-effect");
  content.classList.remove("border-effect");
  for (i = 0; i < worker.length; i++) {
    worker[i].src = `/assets/desain${i + 28}.jpeg`;
  }
  logoPret.style.filter = "grayscale()";
  logoBeyond.style.filter = "grayscale()";
  logoPruaini.style.filter = "grayscale()";
  logoCepat.style.filter = "none";
  logoVideo.style.filter = "grayscale()";
  wrapperWork.style.display = "flex";
  videoWrapper.style.display ="none";
  seeMore.style.display ="none";
});

content.addEventListener("click", function () {
  pruaini.classList.remove("border-effect");
  beyond.classList.remove("border-effect");
  pret.classList.remove("border-effect");
  podcast.classList.remove("border-effect");
  content.classList.add("border-effect");
  for (i = 0; i < worker.length; i++) {
    worker[i].src = `/assets/desain${i + 28}.jpeg`;
  }
  logoPret.style.filter = "grayscale()";
  logoBeyond.style.filter = "grayscale()";
  logoPruaini.style.filter = "grayscale()";
  logoCepat.style.filter = "grayscale()";
  logoVideo.style.filter = "none";
  wrapperWork.style.display = "none";
  videoWrapper.style.display ="flex";
  seeMore.style.display ="flex";
});
