var btn = document.querySelector("#btn")

btn.addEventListener("click",click)

function click(event){

   event.preventDefault();

   let n = document.querySelector("#name").value

   let e = document.querySelector("#email").value

   let p = document.querySelector("#phone").value

   let t = document.querySelector("#time").value

  
  let arr =  JSON.parse(localStorage.getItem("user")) || arr;
  let use = {"name":n,"email":e,"phone":p,"time":t}
  arr.push(use)
   localStorage.setItem('user',JSON.stringify(arr))
  
   console.log(arr)
}