// Funadamentals

// 1 ) Arrays : for each ,map,filter , find , indexOf
 //var arr = [1,2,3,"abc",{},true , [a,b,c ]]  //any kind of value in array

 var arr=[1,2,3,4];
 arr.forEach(function(val){
        console.log(val + "hello");
 })

 //map
 var ans = arr.map(function(val){
       return val+2;     // ans = [3,4,5,6]
 })
 ans.forEach(function(val){
       console.log(val+"ajs")
 })
 console.log(ans)  // can print whole array  

 //filter
 var ans = arr.filter(function(val){
       if(val>=3){
              return true
       }
       else return false
 })
 console.log(ans)

console.log(arr.find(function(val){
       if(val==2) return val;
}))
console.log(arr.findIndex(function(val){
       if(val==2) return val  // index of 2
}))

//indexOf
console.log(arr.indexOf(3))

// 2) objects
var obj = {
       name:"vish",
       age:12
}
console.log(obj.name )
console.log(obj['name'])
obj.name = "abc"  //will change

Object.freeze(obj)  //now values cannot be change (will run but value will not change)
obj.age=23   //remains 12

//3) async js 
async function abcd(){
       var blob=await fetch('https://randomuser.me/api/')
       var ans= await blob.json()
       console.log(ans.results[0].name)
}
abcd()