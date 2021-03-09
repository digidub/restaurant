const InfoGen = (() => {

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

    const infoTemplate = {

        tag: 'div',
        classes: ['main'],
        children: [
            {
                tag: 'div',
                classes: ['tab'],
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
            {
                tag: 'div',
                classes: ['tab-content'],
                children: [
                    {
                        tag: `h3`,
                        content: `About Clams n' Cabbage`
                    },
                    {
                        tag: `p`,
                        content: `Clams n' Cabbage was established in 1337 
                        and is the oldest running dual-food specialist in 
                        the Northern Hemisphere. We are a family run operation,
                        with our super secret special and infamous clam and
                        cabbage recipes having been passed down the generations.
                        Come and enjoy our authentic seabed-to-seedbed cuisine
                        in a relaxed, friendly atmosphere!`
                    },
                ]
            },
        ]
    }
    let gen = domElement(headerTemplate)
    content.append(gen)

})();

export {
    InfoGen
}