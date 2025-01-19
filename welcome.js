const template = document.createElement('template');
template.innerHTML = `
   <h2 id="header">hello world</h2>
   <p>Bonjour le monde !</p>`;


class HelloWorld extends HTMLElement {

    static get observedAttributes(){
        return ['title']
    }

    connectedCallback() {
        this.innerHTML = template.innerHTML
        const title = this.getAttribute('title')
        document.getElementById('header').innerHTML = title
    }
}
customElements.define('hello-world', HelloWorld);