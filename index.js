
let exp = document.querySelector("#exp")
let des = document.querySelector("#des")
let type = document.querySelector("#type")
let submit = document.querySelector("#submit")
let main = document.querySelector("#main")


submit.addEventListener("click",click)
let obj1={};
let obj={}
let arr = JSON.parse(localStorage.getItem("expense")) || [];
let count=arr.length;

function click(){
    sub1.innerHTML="";
   
  obj={exp:exp.value,des:des.value,type:type.value}

 

  arr.push(obj)
  console.log(arr);
 localStorage.setItem("expense",JSON.stringify(arr))

  arr.map((ele,ind)=>{
    let div = document.createElement("div")
    div.setAttribute("id","element")
    sub1.append(div)
    let lab = document.createElement("label")
    lab.innerText = ` Exepense:${ele.exp}        Description:${ele.des}          Type:${ele.type}`;
    div.append(lab)
   
    let dlt = document.createElement("button")
    dlt.setAttribute("id","delete")
    dlt.innerHTML="Delete"
    let edit = document.createElement("button")
    edit.setAttribute("id","edit")
    edit.innerHTML="Edit"
    div.append(dlt)
    div.append(edit)

    dlt.addEventListener("click",delet)
   
     
    function delet(){
  
    
        arr=JSON.parse(localStorage.getItem("expense"))
        localStorage.removeItem("expense");
        const index = ind;;
      if (index > -1) { // only splice array when item is found
       arr.splice(index, 1); // 2nd parameter means remove one item only
     }
    localStorage.setItem("expense",JSON.stringify(arr))

    div.style.display="none"

    }
   
  })

}