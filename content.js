let list = document.querySelectorAll('div');
list[0].className = "logInThing"
list = document.querySelectorAll('span');
list[0].className = "titleThing"

//get all images with source /s1.jpg and replace with source /star1.png
list = document.getElementsByTagName("img");
for (let i = 0; i < list.length; i++) {
    if (list[i].src.includes("s1.jpg")) {
        list[i].src = chrome.runtime.getURL("bar1.png");
        list[i].className = "bar";
    }
    if (list[i].src.includes("s2.jpg")) {
        list[i].src = chrome.runtime.getURL("bar2.png");
        list[i].className = "bar";
    }
    if (list[i].src.includes("c1.jpg") || list[i].src.includes("c2.jpg")) {
        list[i].style.display = "none";
    }
}
list = document.getElementsByTagName("td");
for (let i = 0; i < list.length; i++) {
    if (list[i].getElementsByTagName("div").length == 0) {
        let tlist = list[i].getElementsByTagName("img");
        console.log(list[i]);
        for (let j = 0; j < tlist.length; j++) {
            if (tlist[j].src.includes("c1.jpg") || tlist[j].src.includes("c2.jpg")) {
                tlist[j].style.display = "inline";
                
            }
        }
    }
}

//list with all children of a div with class name summ
list = document.getElementsByClassName("summ");
for (let i = 0; i < list.length; i++) {
    list[i].getElementsByTagName("img")[0].className = "startOfBar";
}

if (document.getElementsByName("uname").length > 0){
    alert("You are logged out. Are you sure you want to continue?");
}
