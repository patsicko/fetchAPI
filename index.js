let body=document.getElementById("body");


    document.addEventListener("DOMContentLoaded",(e)=>{
   
        
        fetchData();


    })

    function fetchData(){
      

      console.log("loading data....");
      

      const option={
      
        method:"GET"
      }
      
      const request = new Request("https://api.github.com/users");

      fetch(request).then(response=>response.json()).then(data=>console.log(data)).catch(error=>{
        console.log(error);
      });
    }



  
