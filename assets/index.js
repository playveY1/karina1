const main__btn=document.querySelector(".main__btn");
const hearts1=document.querySelector(".heart1");
const hearts2=document.querySelector(".heart2");
const hearts3=document.querySelector(".heart3");
const hearts4=document.querySelector(".heart4");
const hearts5=document.querySelector(".heart5");
const hearts6=document.querySelector(".heart6");
const hearts7=document.querySelector(".heart7");
const hearts8=document.querySelector(".heart8");
const hearts9=document.querySelector(".heart9");
const hearts10=document.querySelector(".heart10");
const hearts11=document.querySelector(".heart11");
const hearts12=document.querySelector(".heart12");
const hearts13=document.querySelector(".heart13");
const hearts14=document.querySelector(".heart14");
const hearts15=document.querySelector(".heart15");
const hearts16=document.querySelector(".heart16");
const hearts17=document.querySelector(".heart17");
const hearts18=document.querySelector(".heart18");
const hearts19=document.querySelector(".heart19");
const hearts20=document.querySelector(".heart20");
const hearts21=document.querySelector(".heart21");
const cloud1=document.querySelector(".cloud1")
const cloud2=document.querySelector(".cloud2")
const cloud3=document.querySelector(".cloud3")
const cloud4=document.querySelector(".cloud4")
const cloud5=document.querySelector(".cloud5")
const cloud6=document.querySelector(".cloud6")
const poster=document.querySelector(".main__postcard")
const main__btn_text=document.querySelector(".main__btn_text")
const left__wing=document.querySelector(".main__left-wing")
const right__wing=document.querySelector(".main__right-wing")
const text=document.querySelector(".text")
main__btn.addEventListener('click',(event)=>{
    hearts1.style.transition="all 0.4s"
    hearts1.style.width="0";
    hearts2.style.transition="all 0.4s"
    hearts2.style.width="0";
    hearts3.style.transition="all 0.4s"
    hearts3.style.width="0";
    hearts4.style.transition="all 0.4s"
    hearts4.style.width="0";
    hearts5.style.transition="all 0.4s"
    hearts5.style.width="0";
    hearts6.style.transition="all 0.4s"
    hearts6.style.width="0";
    hearts7.style.transition="all 0.4s"
    hearts7.style.width="0";
    hearts8.style.transition="all 0.4s"
    hearts8.style.width="0";
    hearts9.style.transition="all 0.4s"
    hearts9.style.width="0";
    hearts10.style.transition="all 0.4s"
    hearts10.style.width="0";
    hearts11.style.transition="all 0.4s"
    hearts11.style.width="0";
    hearts12.style.transition="all 0.4s"
    hearts12.style.width="0";
    hearts13.style.transition="all 0.4s"
    hearts13.style.width="0";
    hearts14.style.transition="all 0.4s"
    hearts14.style.width="0";
    hearts15.style.transition="all 0.4s"
    hearts15.style.width="0";
    hearts16.style.transition="all 0.4s"
    hearts16.style.width="0";
    hearts17.style.transition="all 0.4s"
    hearts17.style.width="0";
    hearts18.style.transition="all 0.4s"
    hearts18.style.width="0";
    hearts19.style.transition="all 0.4s"
    hearts19.style.width="0";
    hearts20.style.transition="all 0.4s"
    hearts20.style.width="0";
    hearts21.style.transition="all 0.4s"
    hearts21.style.width="0";
    cloud1.style.transition="all 0.4s"
    cloud1.style.width="0";
    cloud2.style.transition="all 0.4s"
    cloud2.style.width="0";
    cloud3.style.transition="all 0.4s"
    cloud3.style.width="0";
    cloud4.style.transition="all 0.4s"
    cloud4.style.width="0";
    cloud5.style.transition="all 0.4s"
    cloud5.style.width="0";
    cloud6.style.transition="all 0.4s"
    cloud6.style.width="0";
    main__btn.style.transition="all 0.4s"
    main__btn.style.width="0";
    main__btn_text.innerHTML=""
    poster.style.transition="all 0.4s"
    poster.style.marginTop="-250px";
    left__wing.style.transition="all 0.4s"
    left__wing.style.marginTop="-250px";
    right__wing.style.transition="all 0.4s"
    right__wing.style.marginTop="-250px";
    text.innerHTML="I love you, and you me?"
    btn__yes.style.display="block"
    btn__no.style.display="block"

})
const btn__yes=document.querySelector(".btn__yes")
const btn__no=document.querySelector(".btn__no")
const kiss_cat=document.querySelector(".kiss_cat")
btn__yes.addEventListener('click',(event)=>{
btn__no.style.display="none"
    kiss_cat.style.display="block";
    kiss_cat.style.width="800px";
    kiss_cat.style.height="440px";
    hearts1.style.transition="all 0.4s"
    hearts1.style.width="";
    hearts2.style.transition="all 0.4s"
    hearts2.style.width="";
    hearts3.style.transition="all 0.4s"
    hearts3.style.width="";
    hearts4.style.transition="all 0.4s"
    hearts4.style.width="";
    hearts5.style.transition="all 0.4s"
    hearts5.style.width="";
    hearts6.style.transition="all 0.4s"
    hearts6.style.width="0";
    hearts7.style.transition="all 0.4s"
    hearts7.style.width="";
    hearts8.style.transition="all 0.4s"
    hearts8.style.width="";
    hearts9.style.transition="all 0.4s"
    hearts9.style.width="";
    hearts10.style.transition="all 0.4s"
    hearts10.style.width="";
    hearts11.style.transition="all 0.4s"
    hearts11.style.width="";
    hearts12.style.transition="all 0.4s"
    hearts12.style.width="";
    hearts15.style.transition="all 0.4s"
    hearts15.style.width="";
    hearts16.style.transition="all 0.4s"
    hearts16.style.width="";
    hearts17.style.transition="all 0.4s"
    hearts17.style.width="";
    hearts18.style.transition="all 0.4s"
    hearts18.style.width="";
    hearts19.style.transition="all 0.4s"
    hearts19.style.width="";
    hearts20.style.transition="all 0.4s"
    hearts20.style.width="";
    cloud1.style.transition="all 0.4s"
    cloud1.style.width="";
    cloud2.style.transition="all 0.4s"
    cloud2.style.width="";

}) 
let rand=0;
max=300;
function getRandomInt(max) {
    rand= Math.floor(Math.random() * max);
    rand+='px'
}
console.log(rand)

btn__no.addEventListener('mouseover',(event)=>{
    getRandomInt(max)
    console.log(rand)
    
    btn__no.style.marginTop=rand;
    getRandomInt(max)
    btn__no.style.marginRight=rand;
    

})
