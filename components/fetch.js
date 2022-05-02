//https://masai-mock-api.herokuapp.com/news/top-headlines?country=in

//https://masai-mock-api.herokuapp.com/news?q=twitter


let getData = async(url)=>{
    try{

        let res = await fetch(url);
        let data = await res.json();

        return data;

    }
    catch(err){
        console.log("err: ", err);

    }
}

let appendData = (data,container)=>{
    data.map((el)=>{
        let img = document.createElement("img"); 
        img.src = el.urlToImage;

        let title = document.createElement("h3");
        title.innerText= el.title;

        let desc = document.createElement("p");
        desc.innerText = el.description;

        let innerbox = document.createElement("div");
        innerbox.append(title,desc);

        let box = document.createElement("div");
        box.append(img,innerbox);
        box.setAttribute("class","news");
        box.addEventListener("click",function(){
        displayBox(el)
    });
        container.append(box);
    })
}

let arr = [];
function displayBox(el)
{
    window.location.href=("./news.html");
    arr.push(el);
    localStorage.setItem("news",JSON.stringify(arr))
}



export {getData,appendData};