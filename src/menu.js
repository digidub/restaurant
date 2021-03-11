import menucabbage from "./menu-cabbage.jpg";
import menucabbagenclams from "./menu-cabbagenclams.jpg";
import menuclams from "./menu-clams.jpeg";
import menuclamsncabbage from "./menu-clamsncabbage.jpg";

const MenuGen = () => {

    const content = document.querySelector(".main")

    const domElement = obj => {

        let domEl = document.createElement(obj.tag)

        if (obj.content) domEl.innerText = obj.content

        if (obj.classes) for (let cssClass of obj.classes) {
            domEl.classList.add(cssClass)
        }
        if (obj.tag == "img") {
            domEl.src = obj.src;
        }
        if (obj.children) for (let child of obj.children) {
            domElement(child)
            domEl.append(domElement(child))
        }
        return domEl
    }

    const menuTemplate = {

        tag: 'div',
        classes: ['tab-content', 'tab-menu'],
        children: [
            {
                tag: `h3`,
                content: `Our Award-Winning Menu`
            },
            {
                tag: `div`,
                classes: ['menu-container'],
                children: [
                    {
                        tag: `figure`,
                        children: [
                            {
                                tag: 'img',
                                classes: [`menu-image`],
                                src: menuclams
                            },
                            {
                                tag: 'figcaption',
                                content: "Clams",
                            }
                        ]
                    },
                    {
                        tag: `figure`,
                        children: [
                            {
                                tag: 'img',
                                classes: [`menu-image`],
                                src: menucabbage
                            },
                            {
                                tag: 'figcaption',
                                content: "Cabbage",
                            }
                        ]
                    },
                    {
                        tag: `figure`,
                        children: [
                            {
                                tag: 'img',
                                classes: [`menu-image`],
                                src: menuclamsncabbage
                            },
                            {
                                tag: 'figcaption',
                                content: "Clams with Cabbage",
                            }
                        ]
                    },
                    {
                        tag: `figure`,
                        children: [
                            {
                                tag: 'img',
                                classes: [`menu-image`],
                                src: menucabbagenclams
                            },
                            {
                                tag: 'figcaption',
                                content: "Cabbage with Clams",
                            }
                        ]
                    },
                ]
            }
        ]
    }

    let gen = domElement(menuTemplate)
    content.append(gen)

};

export {
    MenuGen
}