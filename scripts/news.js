// Ude Import export (MANDATORY)


let read=(ids)=>{
    return document.getElementById(ids);
  }
  
  
  import {navbar} from "../components/navbar.js";
  read("navbar").innerHTML = navbar();

  let arr = JSON.parse(localStorage.getItem("searchText"));
  function search(e){
      if(e.key=="Enter"){
          window.location.href="./search.html";
          arr.push(read("search_input").value);
          localStorage.setItem("searchText", JSON.stringify(arr));
      }
  }

  read("search_input").addEventListener("keydown",search);

  let news = JSON.parse(localStorage.getItem("news"));

  let detail = read("detailed_news");
  news.map(({urlToImage,title,description})=>{
      let img = document.createElement("img");
      img.src = urlToImage;

      let name = document.createElement("h3");
      name.innerText = title;

      let job = document.createElement("p");
      job.innerText = description;

     detail.append(img,name,job);
  })
