// changin skill spam
let mySkills = ["programer", "designer", "content creator"];
let skillHeader = document.querySelector(".about .content .title h3");
let skillCounter = 0;

skillHeader.innerHTML = mySkills[skillCounter];
let changSkill = setInterval(function () {
  skillHeader.innerHTML = mySkills[skillCounter];
  if (skillCounter < mySkills.length - 1) {
    skillCounter++;
  } else {
    skillCounter = 0;
  }
}, 2000);

// progress bar
let progressHeader = document.querySelectorAll(
  ".skills ul li .txt h3:last-child"
);
let progressBox = document.querySelectorAll(".skills .box");
console.log(progressBox);
document.onscroll = function () {
  progressBox.forEach(function (ele, index) {
    let progressBars = document.querySelectorAll(
        `.skills .box:nth-child(${index + 1})  .progress`
      );
    if (ele.offsetHeight + 60 <= scrollY) {
      progressBars.forEach(function (ele) {
        let progressDegree = ele.getAttribute("data-progress");
        ele.style.width = progressDegree;
        console.log("hello")
      });
    } else {
      progressBars.forEach(function (ele) {
        let progressDegree = "0%";
        ele.style.width = progressDegree;
      });
    }
  });
};
// let progress = document.querySelector(".skills .container");
// document.onscroll = function(){
//     if(scrollY >= progress.offsetTop - 200){
//         progressBars.forEach(function (ele) {
//             let progressDegree = ele.getAttribute("data-progress");
//             ele.style.width = progressDegree;
//         });
//     }else{
//         progressBars.forEach(function (ele) {
//             let progressDegree = ele.getAttribute("data-progress");
//             ele.style.width = "0px";
//         });
//     }
// }

progressHeader.forEach(function (ele) {
  let progressDegree = ele.getAttribute("data-progress");
  ele.innerHTML = progressDegree;
});
