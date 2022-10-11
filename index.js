
let q = inputarray[0].split(" ")[0]


for(let i=0;i<q;i++){
    let sum = 0;
    let arr = inputarray[1].split(" ")
    let arr1 = inputarray[2+i].split(" ")
    for(let j=arr1[0];j<arr1[1];j++){
        sum = sum + arr[j]
    }
    console.log(sum)
}