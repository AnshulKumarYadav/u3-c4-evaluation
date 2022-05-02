// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


let read=(ids)=>{
  return document.getElementById(ids);
}


import {navbar} from "../components/navbar.js";
read("navbar").innerHTML = navbar();

import {getData,appendData} from "../components/fetch.js";



const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
getData(url).then((data)=>{
    console.log(data);
    let container = read("results");
    container.innerHTML=null;
    appendData(data.articles, container);
})



let searchArr= [];

let search = (e) =>{
    if(e.key =="Enter"){
        window.location.href="./search.html"
        searchArr.push(read("search_input").value);
        localStorage.setItem("searchText",JSON.stringify(searchArr));
    }
}



read("search_input").addEventListener("keydown",search);

let countries = read("sidebar").children;
console.log(countries);

function data(){
    console.log(this.id)
        const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`
        getData(url).then((data)=>{
            console.log(data);
            let container = read("results");
            container.innerHTML=null;
            appendData(data.articles, container);
        })
}
for(let el of countries){
    el.addEventListener("click",data);
}