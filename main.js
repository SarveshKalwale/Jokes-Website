let get = document.getElementById("load")
async function loading(){
const p = await fetch("https://icanhazdadjoke.com/",{
    headers:{
        accept: "application/json"
    }
})
const stored = await p.json()
// console.log(great)
let data = stored.joke
get.innerHTML = (data+"&#128514;")
}
loading()