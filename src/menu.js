const MenuGen = (() => {

    const content = document.querySelector(".main")

    const domElement = obj => {

        let domEl = document.createElement(obj.tag)

        if (obj.content) domEl.innerText = obj.content

        if (obj.classes) for (let cssClass of obj.classes) {
            domEl.classList.add(cssClass)

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
                tag: `figure`,
                children: [
                    {
                        tag: 'img',
                        src: "menu-clams.jpeg"
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
                        src: "menu-cabbage.jpeg"
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
                        src: "menu-clamsncabbage.jpeg"
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
                        src: "menu-cabbagenclams.jpeg"
                    },
                    {
                        tag: 'figcaption',
                        content: "Cabbage with Clams",
                    }
                ]
            },
        ]
    }

    let gen = domElement(menuTemplate)
    content.append(gen)

})();

export {
    MenuGen
}