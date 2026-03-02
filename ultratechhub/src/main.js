
// Loader
window.addEventListener("load",()=>{
const loader=document.getElementById("loader")
loader.style.opacity="0"
setTimeout(()=>loader.remove(),800)
})

// Cursor
const cursor=document.querySelector(".cursor")
document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px"
cursor.style.top=e.clientY+"px"
})

// Particle trail
const canvas=document.getElementById("particles")
const ctx=canvas.getContext("2d")
canvas.width=window.innerWidth
canvas.height=window.innerHeight
let particles=[]

document.addEventListener("mousemove",e=>{
particles.push({x:e.clientX,y:e.clientY,size:Math.random()*4+1,alpha:1})
})

function animateParticles(){
ctx.clearRect(0,0,canvas.width,canvas.height)
particles.forEach((p,i)=>{
p.alpha-=0.02
p.size*=0.97
if(p.alpha<=0)particles.splice(i,1)
ctx.fillStyle=`rgba(31,110,212,${p.alpha})`
ctx.beginPath()
ctx.arc(p.x,p.y,p.size,0,Math.PI*2)
ctx.fill()
})
requestAnimationFrame(animateParticles)
}

animateParticles()

// Infinite smoke crossfade
const smoke1=document.getElementById("smoke1")
const smoke2=document.getElementById("smoke2")
let active=1

function crossFadeSmoke(){

if(active===1){
smoke2.currentTime=0
smoke2.play()
smoke2.style.opacity=1
smoke1.style.opacity=0
active=2
}else{
smoke1.currentTime=0
smoke1.play()
smoke1.style.opacity=1
smoke2.style.opacity=0
active=1
}

}

setInterval(crossFadeSmoke,18000)

// Daily sale loader
fetch("sales.json")
.then(res=>res.json())
.then(data=>{

const container=document.querySelector(".sale-grid")

data.forEach(phone=>{

const card=document.createElement("div")
card.className="sale-item"

card.innerHTML=`
<img src="${phone.image}">
<h4>${phone.name}</h4>
<p>${phone.price}</p>
`

container.appendChild(card)

})

})

// Cart toggle
const cartIcon=document.querySelector(".cart-icon")
const cartPanel=document.getElementById("cart-panel")

cartIcon.onclick=()=>{
cartPanel.classList.toggle("open")
}
