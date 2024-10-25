let myLinks = document.querySelectorAll(
  "header .container > ul li:not(:last-child)"
);
let otherLinks = document.querySelector("header .container > ul li:last-child");
let myInnerLinks = document.querySelectorAll(
  "header .container .links .inner-links > ul li"
);
let megaMenu = document.querySelector("header .container .links");
let skills = document.querySelectorAll(
  ".our-skills .container .our-skills-content .our-skills-box > div > div > span"
);
myLinks.forEach((link) => {
  link.onclick = () => {
    myLinks.forEach((link) => {
      link.classList.remove("active");
      if (otherLinks.classList.contains("active")) otherLinks.click();
    });
    link.classList.add("active");
  };
});

otherLinks.onclick = () => {
  myLinks.forEach((link) => {
    link.classList.remove("active");
  });
  otherLinks.classList.toggle("active");
  megaMenu.classList.toggle("show");
};

myInnerLinks.forEach((link) => {
  link.onclick = () => {
    otherLinks.classList.remove("active");
    megaMenu.classList.remove("show");
  };
});
// window.onscroll = function () {
//   if (window.scrollY >= 7000) {
//     skills.forEach((skill) => {
//       skill.style.transform = "scale(1,1)";
//     });
//   } else {
//     skills.forEach((skill) => {
//       skill.style.transform = "scale(0,1)";
//     });
//   }
// };
