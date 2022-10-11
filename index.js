var btn = document.querySelector("#btn")

btn.addEventListener("click",click)

function click(event){

   event.preventDefault();

   let n = document.querySelector("#name").value

   let e = document.querySelector("#email").value

   let p = document.querySelector("#phone").value

   let t = document.querySelector("#time").value

   let use = {"name":n,"email":e,"phone":p,"time":t}
  let arr = [] || JSON.parse(localStorage.getItem("user"));
  arr.push(use)
   localStorage.setItem("user",JSON.stringify(use))
   console.log(arr)
}