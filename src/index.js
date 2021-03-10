import {HeaderGen} from "./header.js";
import {TabGen} from "./tab.js"
import {InfoGen} from "./info.js";
import {MenuGen} from "./menu.js";

HeaderGen();
TabGen();
InfoGen();

const tabs = document.querySelectorAll(".tab")
const main = document.querySelector(".main")
console.log(main)

tabs.forEach(tab => {
  tab.onclick = (e) => {    
    let toRemove = document.querySelector(".tab-content");
    let toAdd = e.target.outerText;
    if (toRemove) main.removeChild(toRemove);
    
    
    switch(toAdd) {
        case "Menu":
            MenuGen();
            break;
        case "Info":
            InfoGen();
            break;
    }
  }  
});
