const arr = [
    "https://thumbs.dreamstime.com/b/wooden-chair-isolated-11718982.jpg",
    "https://st.depositphotos.com/1821481/2817/i/950/depositphotos_28179031-stock-photo-wooden-chair-on-white-background.jpg",
    "https://www.ikea.com/in/en/images/products/mammut-childrens-chair-in-outdoor-red__0727924_pe735940_s5.jpg?f=s",
    "https://www.shutterstock.com/image-photo/white-armchair-isolated-on-background-260nw-101575315.jpg",
    "https://cdn5.vectorstock.com/i/1000x1000/09/89/wooden-chair-on-white-background-vector-30550989.jpg",
    "https://img.freepik.com/free-photo/modern-lifestyle-furniture-chair-white-background_1122-1834.jpg?1",
    "https://thumbs.dreamstime.com/b/wooden-chair-isolated-11718982.jpg",
    "https://st.depositphotos.com/1821481/2817/i/950/depositphotos_28179031-stock-photo-wooden-chair-on-white-background.jpg",
    "https://www.ikea.com/in/en/images/products/mammut-childrens-chair-in-outdoor-red__0727924_pe735940_s5.jpg?f=s",
    "https://www.shutterstock.com/image-photo/white-armchair-isolated-on-background-260nw-101575315.jpg",
    "https://cdn5.vectorstock.com/i/1000x1000/09/89/wooden-chair-on-white-background-vector-30550989.jpg",
    "https://img.freepik.com/free-photo/modern-lifestyle-furniture-chair-white-background_1122-1834.jpg?1"
]
const card = document.getElementById("cards-container")

card.innerHTML = arr.map((val)=>{
    let discount = Math.floor(Math.random()*100)
    let background
    if(discount > 75){
        background = "green"
    }
    else if(discount > 45 && discount <= 75){
        background = "yellow"
    }
    else{
        background = "red"
    }
 
    let views = Math.floor(Math.random()*100)
    return`
    <div class="card" >
    <section>
        <div class="top">
            <div class="discount ${background}">${discount}%</div>
            <div class="icon"><i class="fa fa-eye"></i></div>
        </div>
        <div class="img-container">
            <img src=${val}/>
        </div>
    </section>
    <footer>
        <div>
            <p>Green wood chair</p>
            <p>#1234567GH</p>
        </div>
    </footer>
    <div class="views">
        <span>${views} people</span>
        <span>views</span>
    </div>
</div>
    `
})

//trigger the cards pop up
let individualCard = document.getElementsByClassName("card")
for(let i  = 0; i < individualCard.length; i++){
    // individualCard[i].addEventListener("onmouseover",function(){
    //     console.log("its comming", i)
    // })
    individualCard[i].onclick = function(){
        this.classList.toggle("single-page")
        
    }
}




