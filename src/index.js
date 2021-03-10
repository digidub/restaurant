import { HeaderGen } from "./header.js";
import { TabGen } from "./tab.js"
import { InfoGen } from "./info.js";
import { MenuGen } from "./menu.js";
import { ContactGen } from "./contact.js";

HeaderGen();
TabGen();
InfoGen();

const tabs = document.querySelectorAll(".tab")
const main = document.querySelector(".main")

tabs.forEach(tab => {
  tab.onclick = (e) => {

    let toRemove = document.querySelector(".tab-content");
    let toAdd = e.target.outerText;

    if (toRemove) main.removeChild(toRemove);


    switch (toAdd) {
      case "Menu":
        MenuGen();
        activeTab(e, "menu");
        break;
      case "Info":
        InfoGen();
        activeTab(e, "info");
        break;
      case "Contact":
        ContactGen();
        activeTab(e, "contact");
        break;
    }
  }
});

function activeTab(e, tab) {

  let removeActive = document.querySelector(".tab-selected")
  removeActive.classList.remove("tab-selected")

  if (e.target.classList.contains(`tab-${tab}`)) {
    e.target.classList.add("tab-selected")
  }
}