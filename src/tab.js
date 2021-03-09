const TabGen = (() => {

    const content = document.querySelector(".content")
          
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

    const tabTemplate = {

        tag: 'div',
        classes: ['main'],
        children: [
            {
                tag: 'div',
                classes: ['tab-selected'],
                content: `Info`,
            },
            {
                tag: 'div',
                classes: ['tab'],
                content: `Menu`,
            },
            {
                tag: 'div',
                classes: ['tab'],
                content: `Contact`,
            },
        ]
    }

    let gen = domElement(tabTemplate)
    content.appendChild(gen)

})();

export {
    TabGen
}