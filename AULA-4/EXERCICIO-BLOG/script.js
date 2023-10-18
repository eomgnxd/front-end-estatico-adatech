let cards = document.querySelector(".cards");

let options = [
    "familia",
    "salada",
    "suco",
    "carro",
    "animais",
    "cidades",
    "comidas",
    "praia",
    "cidade",
    "montanha",
    "natureza",
    "edifício",
    "floresta",
    "pôr do sol",
    "oceano",
    "rio",
    "campo",
    "deserto",
    "ceu",
    "lua",
    "planeta",
    "galáxia",
    "nebulosa",
    "universo",
    "cometa",
    "estrela",
    "software",
];

for (let i = 0; i < options.length; i++) {
    cards.innerHTML += `
        <div class="card">
        <img
            src="https://source.unsplash.com/800x800/?${options[i]}"
            alt=""
        />
        <h2>Descrição</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quia qui commodi, reprehenderit repellat nesciunt velit
        repellendus harum id deleniti consequatur sapiente, vel eum
        in repudiandae iste neque quis pariatur.</p>
        </div>
        `;
}
