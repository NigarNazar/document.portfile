

const experienceSection = document.querySelector('.row')

window.onload = cards

async function cards(){

const address = "card.json"

try{
   const unvanType = await fetch(address)


   const adventure = await unvanType.json()


   for(let i=0; i<adventure.length; i++){
      experienceSection.innerHTML += `
      <div class="col-12 col-md-6  circle  ">
      <div class="card vector" style="width: 22rem;" >
              <div class="card-body">
              <img src="" class="card-img-top" alt="">
             <h5 class="card-title">${adventure[i].barcode}</h5>
             <p class="card-text">${adventure[i].cropBody}</p>
                 <span>${adventure[i].cropTitle}</span>
               </div>
             </div>
       </div>
      `
   }
// console.log(adventure)
}
catch(e){

}
finally{
   
}


}




const faBars = document.querySelector(".fa-bars")

const barsNavbar = document.querySelector('.bars-navbar')

faBars.addEventListener('click' , function(){
   barsNavbar.classList.toggle('active')
   
   
    
})









/* <div class="expect1">
<h2>Making a design system from scratch</h2>
<p>12 Feb 2020 &nbsp;&nbsp; | &nbsp;&nbsp; Design, Pattern</p>
<span>Lorem ipsum dolor sit amet <br> consectetur adipisicing elit. Aspernatur distinctio,<br> quia
    dolorum quos reiciendis ullam sint <br> alias magnam commodi adipisci!</span> */