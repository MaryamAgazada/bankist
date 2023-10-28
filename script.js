"use strict"
const modal=document.querySelector(".modal")
const overlay=document.querySelector(".overlay")
const btnClose=document.querySelector(".btn--close-modal")
const btnOpen=document.querySelectorAll(".btn--show-modal")
const closeModal=()=>{
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}
const openModal=()=>{
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
// console.log(test)
}
 btnClose.addEventListener("click",function(e){
    e.preventDefault()
    closeModal()
 })
 
 overlay.addEventListener("click",function(e){
    e.preventDefault()
    closeModal()

 })
 btnOpen.forEach((el)=>
   el.addEventListener("click",function(e){
        e.preventDefault()
        openModal()
 }))
 window.addEventListener("keydown",function(e){
    if(e.key==="Escape" && !modal.classList.contains("hidden")){
        closeModal()
    }
 })


const tabs=document.querySelectorAll(".operation__tab")
const tabsContainer=document.querySelector(".operations__tab-container")
const tabsContent=document.querySelectorAll(".operations__content")

tabsContainer.addEventListener("click",function(e){
//  e.preventDefault()
 const clicked=e.target.closest(".operations__tab")
 if(!clicked){
    return
 }
 console.log(clicked)
 
//active tab
tabs.forEach((tab)=>tab.classList.remove("operations__tab--active"))
clicked.classList.add("operations__tab--active")

//active content area
const data = clicked.dataset.tab;

tabsContent.forEach((tabC)=>
    tabC.classList.remove("operations__content--active"))

    document
    .querySelector(`.operations__content--${data}`)
    .classList.add("operations__content--active")
})


const nav=document.querySelector(".nav");
document.querySelector(".nav__links").addEventListener("click",function(e){
    e.preventDefault()
    if(e.target.classList.contains("nav__link")){
        const id = e.target.getAttribute("href");
        console.log(id)
        document.querySelector(id).scrollIntoView({behavior:"smooth"})
    }
})
nav.addEventListener("mouseover",function(e){
    if(e.target.classList.contains("nav__link")){
       const link=e.target;
       const siblings=link.closest(".nav__links").querySelectorAll(".nav__link")
       const logo=document.querySelector(".nav__logo")

        siblings.forEach((el)=>{
           if(link!==el){
            el.style.opacity=0.5;
            logo.style.opacity=0.5;
        }
        })
    }
})
nav.addEventListener("mouseout",function ( e ) {
    if(e.target.classList.contains("nav__link")){
       const link=e.target;
       const siblings=link.closest(".nav__links").querySelectorAll(".nav__link")
       const logo=document.querySelector(".nav__logo")
       
        siblings.forEach((el)=>{
           if(link!==el){
            el.style.opacity=1; 
            logo.style.opacity=1;
        }
        })
    }
})
const section1=document.querySelector("#section--1")
const sectionCoords=section1.getBoundingClientRect().top;
// console.log(sectionCoords)
window.addEventListener("scroll",()=>{
    if(window.scrollY >=  sectionCoords-700){
nav.classList.add("sticky")


    }
    else{
nav.classList.remove("sticky")

    }
})


//revailing section
const allSections=document.querySelectorAll(".section")



// console.log(allSections)
window.addEventListener("scroll",()=>{
    allSections.forEach((section)=>{
const sectionCoords=section.getBoundingClientRect().top;
// console.log(sectionCoords)

    if(window.scrollY>=sectionCoords-700){ 
        section.classList.remove("section--hidden")
        }
        // else{
        // section.classList.add("section--hidden")
        
        // }
})


})

const images=document.querySelectorAll("img[data-src]");
images.forEach((image)=>{
    const imagesCoords=image.getBoundingClientRect().top;
    const src=image.dataset.src;
    // console.log(imagesCoords,src)
    window.addEventListener("scroll",()=>{
        if(window.scrollY>=imagesCoords-400){ 
            image.src=src;
            image.classList.remove("lazy-img")
             }
    })
    
       
})

//slider
 const slides=document.querySelectorAll(".slide");
 const btnLeft=document.querySelector(".slider__btn--left");
 const btnRight=document.querySelector(".slider__btn--right");
 const dotContainer=document.querySelector(".dots");

 let curSlide=0
 let maxSlide=slides.length-1;

 slides.forEach((slide,index)=>{
    slide.style.transform=`translateX(${index*100-curSlide*100}%)`
 })

 btnRight.addEventListener("click",()=>{
    slides.forEach((slide,index)=>{
        slide.style.transform=`translateX(${(index-curSlide)*100}%)`
     })
     if(curSlide===maxSlide){
        curSlide=0;
     }
     else{
        curSlide++
     }
    
 })
 btnLeft.addEventListener("click",()=>{
    slides.forEach((slide,index)=>{
        slide.style.transform=`translateX(${(index-curSlide)*100}%)`
     })
     if(curSlide===0){
        curSlide=maxSlide;
     }
     else{
        curSlide--;
     }
 })




