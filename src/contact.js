const ContactGen = () => {

    const content = document.querySelector(".main")

    const domElement = obj => {

        let domEl = document.createElement(obj.tag)

        if (obj.content) domEl.innerText = obj.content
        if (obj.classes) for (let cssClass of obj.classes) {
            domEl.classList.add(cssClass)
        }
        if (obj.for) domEl.for = obj.for
        if (obj.tag) domEl.tag = obj.tag
        if (obj.type) domEl.type = obj.type
        if (obj.name) domEl.name = obj.name
        if (obj.required) domEl.required = obj.required
        if (obj.value) domEl.value = obj.value
        if (obj.children) for (let child of obj.children) {
            domElement(child)
            domEl.append(domElement(child))
        }
        return domEl
    }

    const contactTemplate = {

        tag: 'form',
        children: [
            {
                tag: `div`,
                children: [
                    {
                        tag: 'label',
                        for: 'name',
                        content: 'Name:',
                    },
                    {
                        tag: 'input',
                        type: 'text',
                        name: 'name',
                        required: 'required',
                    }
                ]
            },
            {
                tag: `div`,
                children: [
                    {
                        tag: 'label',
                        for: 'email',
                        content: 'Email:',
                    },
                    {
                        tag: 'input',
                        type: 'email',
                        name: 'email',
                        required: 'required',
                    }
                ]
            },
            {
                tag: `div`,
                children: [
                    {
                        tag: 'label',
                        for: 'message',
                        content: 'Please type your message here:',
                    },
                    {
                        tag: 'input',
                        type: 'text',
                        name: 'message',
                        required: 'required',
                    }
                ]
            },
            {
                tag: `input`,
                type: 'submit',
                value: 'submit',                
            },
        ]
    }

    let gen = domElement(contactTemplate)
    content.append(gen)

};

export {
    ContactGen
}
