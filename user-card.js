class UserCard extends HTMLElement {
    constructor() {
        super();

        // Création du Shadow DOM
        this.attachShadow({ mode: 'open' });

        // Ajout du contenu HTML et CSS
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    font-family: Arial, sans-serif;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    padding: 16px;
                    margin: 10px;
                    width: 300px;
                    display: block;
                }
                h2 {
                    margin: 0;
                    font-size: 20px;
                    color: #333;
                }
                p {
                    margin: 5px 0;
                    color: #555;
                }
                button {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 10px 16px;
                    font-size: 14px;
                    border-radius: 4px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
            <div>
                <h2 id="name"></h2>
                <p>Status: <span id="status"></span></p>
                <button id="toggle-btn">Toggle Status</button>
            </div>
        `;
    }

    // Fonction appelée lorsque le composant est ajouté au DOM
    connectedCallback() {
        // Récupération des attributs
        const name = this.getAttribute('name') || 'Anonymous';
        const status = this.getAttribute('status') || 'Unknown';

        // Ajout des valeurs dans le composant
        this.shadowRoot.querySelector('#name').textContent = name;
        this.shadowRoot.querySelector('#status').textContent = status;

        // Gestionnaire d'événements pour le bouton
        this.shadowRoot.querySelector('#toggle-btn').addEventListener('click', () => {
            const currentStatus = this.shadowRoot.querySelector('#status').textContent;
            const newStatus = currentStatus === 'Active' ? 'Inactive' : 'Active';
            this.shadowRoot.querySelector('#status').textContent = newStatus;
        });
    }

    // Nettoyage des événements lorsque le composant est retiré du DOM
    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-btn').removeEventListener('click');
    }
}

// Déclaration de la balise personnalisée
customElements.define('user-card', UserCard);
