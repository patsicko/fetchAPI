let body=document.getElementById("body");


const data=()=>{
 const items=fetch("https://api.github.com/users")
 .then(res=>res.json());
items.then(datum=>datum.map(item=>body.innerHTML+=`<img src=${item.avatar_url}>`))

items.then(data=>console.log(data));




}
 data();


//  fetch("https://api.github.com/users")
//  .then(res=>res.json())
//  .then(json=>console.log(json));


 fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => json.map(item=>body.innerHTML+=`<img src=${item.image}>`) );
//  



// const loadData=async()=>{
//  const data= await (await fetch("https://api.github.com/users")).json();

//  console.log(data);
// }

// loadData();