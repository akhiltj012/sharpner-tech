



let exp = document.querySelector("#exp")
let des = document.querySelector("#des")
let type = document.querySelector("#type")
let submit = document.querySelector("#submit")
let main = document.querySelector("#main")
let list = document.getElementById("sub1")
let form = document.getElementById("form")


submit.addEventListener("click",click)


show()

function click(){
    sub1.innerHTML="";
   show()
   add()
}

async function add(){
  try{

    if(des.value==="" || type.value==="" || exp.value===""){
      showerror()
       console.error("Must be filled all spaces");
    }
    else{
      let obj={exp:exp.value,des:des.value,type:type.value}
     console.log(obj);
      axios.post("https://crudcrud.com/api/3f635fc793f845e0b56f2e26c8edd6c0/Expenses",obj)
      show()

      exp.value=""
      des.value=""
      
  
    }
    
  }
  catch(err){
    console.log(err);
  }
}

async function show(){
  try{
   const res = await axios.get("https://crudcrud.com/api/3f635fc793f845e0b56f2e26c8edd6c0/Expenses")
    if(res){
      console.log(res.data);
      let data = res.data;
      list.innerHTML="";
      data.forEach(element => {
       
        let div = document.createElement("div")
        let div11 = document.createElement("div")
        let div12 =document.createElement("div")
        let div13= document.createElement("div")
        div11.innerHTML = ` Expense: ${element.exp} `
        div12.innerHTML =`Description:${element.des}`
        div13.innerHTML =` Category:${element.type}`
        div.setAttribute("id","list")
        list.append(div)
        div.append(div11,div12,div13)
        let dlt = document.createElement("button")
        let edit = document.createElement("button")
        dlt.setAttribute("id","dlt")
        edit.setAttribute("id","edit")
        dlt.innerText="Delete item"
        edit.innerText="Edit item"
        div.append(dlt,edit)
        dlt.addEventListener("click",delete_item)
        edit.addEventListener("click",edit_item)

        exp.value=""
        des.value=""

        async function edit_item(){
          try{
            obj={exp:exp.value,des:des.value,type:type.value}
            delete_item()
            add()
            exp.value=""
            des.value=""

            
          }
          catch{
            console.log("error");
          }
         

        }

         async function delete_item(){
             try{
              await  axios.delete(`https://crudcrud.com/api/3f635fc793f845e0b56f2e26c8edd6c0/Expenses/${element._id}`)
              console.log(element._id );
              show()
             } 
             catch{
              console.log("Error in loading");
             }  
        }


      });
    }
  }
  catch(err){
    console.log(err);
  }

  
}
function showerror(){
  let err =  document.createElement("div")
  err.setAttribute("id","err")
  err.innerText = "Must filled all empty spaces with a value";
  document.getElementById("sub2").append(err)
  setTimeout(()=>{
    console.log("Time for warning");
    err.innerHTML="";
  },2000)

  

}