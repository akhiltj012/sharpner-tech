var btn = document.querySelector("#btn")

btn.addEventListener("click",click)

function click(event){

   event.preventDefault();

   let n = document.querySelector("#name").value

   let e = document.querySelector("#email").value

   let p = document.querySelector("#phone").value

   let t = document.querySelector("#time").value

  
  let arr =  JSON.parse(localStorage.getItem("user")) || [];
  let use = {"name":n,"email":e,"phone":p,"time":t}
  arr.push(use)
   localStorage.setItem('user',JSON.stringify(arr))
  
   console.log(arr)

   for(let i=0;i<arr.length;i++){
    let div = document.createElement("div")
    div.setAttribute("id","arr")
    document.querySelector("#inside").append(div)
    div.innerText= `Name:- ${arr[i].name}` + `Phone:- ${arr[i].phone}`+ `Email:- ${arr[i].email}`+ `Date:- ${arr[i].time}`
    console.log(arr[i].name);
    let btn1 = document.createElement("button")
    btn1.innerText="Delete";
    div.append(btn1)
   }
}