const obj1 = document.querySelector("#root");

const element = {
    type: "h1",
    props: {
        style: {color: 'red', fontSize: '24px'}
    },
    content: 'Hello, World!'
}

function customRende(element, obj1) {
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.content;
    domElement.style.color = element.props.style.color;
    domElement.style.fontSize = element.props.style.fontSize;

    obj1.appendChild(domElement);
}

customRende(element, obj1);