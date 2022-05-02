// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page



let read=(ids)=>{
    return document.getElementById(ids);
  }
  
  import {navbar} from "../components/navbar.js";
  read("navbar").innerHTML = navbar();

let que = JSON.parse(localStorage.getItem("searchText"));
for(let i=0;i<que.length;i++){
    var query = que[i];
}


  import {getData, appendData} from "../components/fetch.js";
const url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;
  getData(url).then((data)=>{
      console.log(data);
      let container = read("results");
    //   container.innerHTML=null;
      appendData(data.articles,container);
  })


  let search = (e)=>{
      if(e.key=="Enter"){
        let  value = read("search_input").value;
        const url = `https://masai-mock-api.herokuapp.com/news?q=${value}`;
        getData(url).then((data)=>{
            console.log(data);
            let container = read("results");
            container.innerHTML=null;
            appendData(data.articles,container);
        })
      }
  }
  read("search_input").addEventListener("keydown",search);