const HeaderGen = (() => {

    const content = document.querySelector(".content")
          
    const domElement = obj => {
        
        let domEl = document.createElement(obj.tag)
        
        if (obj.content) domEl.innerText = obj.content
        
        if (obj.classes) for (let cssClass of obj.classes) {
            domEl.classList.add(cssClass)
          
        }
        if (obj.tag == "img") {
            domEl.src = "logo";
        }
        if (obj.children) for (let child of obj.children) {
            domElement(child)
            domEl.append(domElement(child))                     
        }
        return domEl
    }   

    const headerTemplate = {

        tag: 'div',
        classes: ['header'],
        children: [
            {
                tag: 'img',
                src: 'logo',
                classes: ['logo'],
            },
            {
                tag: 'h1',
                content: `Clams n' Cabbage`,
            },
            {
                tag: 'h2',
                content: `the finest clams n cabbage the world did ever taste!`,
            }
        ]
    }
    let gen = domElement(headerTemplate)
    content.prepend(gen)

})();

export {
    HeaderGen
}