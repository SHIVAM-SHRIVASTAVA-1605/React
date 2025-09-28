function customRender(reactElement, container) {
    /*
    const domElment = document.createElement
    (reactElement.type)
    domElment.innerHTML = reactElement.children
    domElment.setAttribute('href', reactElement.props.href)
    domElment.setAttribute('target', reactElement.props.target)
    container.appendChild(domElment)
    */

    const domElement = document.createElement
    (reactElement)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props) {
        if(prop === 'children') continue
        domElement.setAttributes(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https:google.com',
        target: '_blank',
    },
    children: 'Click me to visit google'
}

const mainContainermain = document.querySelector('#root')

customRender(reactElement, mainContainer)