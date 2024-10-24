// function customRender(reactElement,container){
//     //To inject an element in DOM we first create that element and then append that element.
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;
//     domElement.setAttribute('href',reactElement.props.href);
//     domElement.setAttribute('target',reactElement.props.target);

//     //Here we append the element that we have created on root
//     container.appendChild(domElement);
// }

//Now we will modify the above code by providing more iterations and see how react generalise it.Here if we have had more attributes then we would have got problem..also if there were another div or a single <h1> tag then also there would have been problem.

function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for(const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement);
}

//behind the scene the html(or jsx) that we have returned...how react sees this...react tries to create a tree of the element that we have returned.
//At the end of the day whatever jsx we write inside function in react is parsed to become like this.
const reactElement = {
    type : 'a',
    props: {
        //inside we have the properties of the element
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


const mainContainer = document.querySelector('#root');

customRender(reactElement,mainContainer); //This is the function call to render an  anchor tag on root.
//reactElement :- the element to be injected
//mainContainer :- this is where the element is to be injected.