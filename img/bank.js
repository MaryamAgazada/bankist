`use strict`;

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnClose = document.querySelector(`.btn--close-modal`);
const btnOpen = document.querySelectorAll(`.btn--show-modal`);

const closeModal = () => {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};
const openModal = () => {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};
closeModal();
openModal();
btnClose.addEventListener(`click`, () => {
  closeModal();
});

overlay.addEventListener(`click`, () => {
  closeModal();
}); 
const btnScrollTo=document.querySelector(".btn--scroll-to");
const section1=document.querySelector("#section--1");
btnScrollTo.addEventListener("click",function(){
  section1.scrollIntoView({behavior:"smooth"})
})
document.querySelectorAll("nav__link").forEach((el)=>{
  el.addEventListener("click",function(e){
    e.preventDefault();
    const id=this.getAttribute("href")
    document.querySelector(id).scrollIntoView({behavior:"smooth"})
  })
})
const tabs=document.querySelectorAll(".operations__tab")
const tabsContainer=document.querySelectorAll(".operations__tab-container")
const tabsContent=document.querySelectorAll(".operations__content")
tabsContainer.addEventListener('click',function(e){
  const clicke=e.target.closet(".operations__tab");
  if(!clicked){
    return
  }
  tabs.forEach((tabs)=>tabs.classList.remove(".opoerations__tab--active"));
  clicked.classList.add(".opoerations__tab--active")
  const data=clicked.dataset.tab;
  tabContent.forEach((tabC)=>
  tabC.classList.remove(".opoerations__tab--active"))
})


































// btnOpen.forEach((el)=>
//     el.addEventListener("click",function(e){
//         e.preventDefault();
//         openModal();
//     })
// )
// window.addEventListener("keydown",function(e){
//     if(e.key==="Escape"&&!modal.classList.classList.contains("hidden")){
//         closeModal()
//     }
// })
// const section1=document.getElementById("section--1");
// const btnScroll=document.querySelector(".btn--scroll-to");
// btnScroll.addEventListener("click",function(e){
//     section1.scrollIntoView({behavior:"smooth"})
// })

// // ////

// document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
//   e.preventDefault();
//   if (e.target.classList.contains(`nav__link`)) {
//     const id = e.target.getAttribute(`href`);
//     document.querySelector(id).scrollIntoView({ behavior: `smooth` });
//   }
// });

// //////
// const tabs = document.querySelectorAll(`.operations__tab`);
// const tabsContainer = document.querySelector(`.operations__tab-container`);
// const tabsContent = document.querySelectorAll(`.operations__content`);

// //////
// tabsContainer.addEventListener(`click`, function (e) {
//   const clicked = e.target.closest(`.operations__tab`);

//   if (!clicked) {
//     return;
//   }
//   // console.log(clicked);

//   /////

//   tabs.forEach((tab) => tab.classList.remove(`operations__tab--active`));
//   clicked.classList.add(`operations__tab--active`);
//   ////
//   const data = clicked.dataset.tab;
//   console.log(data);

//   ////
//   tabsContent.forEach((tabC) =>
//     tabC.classList.remove(`operations__content--active`)
//   );

//   document
//     .querySelector(`.operations__content--${data}`)
//     .classList.add("operations__content--active");
// });

// ///menu fake  animation
// const nav=document.querySelector(".nav");
// nav.addEventListener ("mauseover",function(e){
//     if(e.target.classList.contains("nav__link")){
// const link=e.target;
// const siblins=link.closest(".nav__links").querySelectorAll(".nav__link")
// const logo=document.querySelector(".nav__logo");

// siblings.forEach((element)=>{
//     if(link!==element)element.style.opacity=0.5
// })
//     }
// })
