const petsData = async () => {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro na requisição dos dados dos pets:', error);
    }
};

const pets = petsData();

const displayPets = () => {
    const petList = document.getElementById('pet-list');
    petList.innerHTML = '';
    pets.then(pets => {
        pets.forEach(pet => {
            const petCard = `
                <div class="col-12 col-md-6">
                    <div class="card h-100">
                        <img src="${pet.imagem}" class="card-img-top" alt="${pet.nome}">
                        <div class="card-body">
                            <h5 class="card-title">${pet.nome}</h5>
                            <p class="card-text">${pet.raca}, ${pet.idade} anos.</p>
                            <p class="card-text">${pet.descricao}</p>
                            <a href="#" class="btn btn-primary">Adotar</a>
                        </div>
                </div>
            </div>
        `;
            petList.innerHTML += petCard;
        });
    });
};


const adotarID = document.getElementById('adotar');
const doarID = document.getElementById('doar');
const feirasID = document.getElementById('feiras');
const perdiID = document.getElementById('perdi');
const encontreiID = document.getElementById('encontrei');
const blogID = document.getElementById('blog');
const ongsID = document.getElementById('ongs');
const eventosID = document.getElementById('eventos');
const adotarPageID = document.getElementById('adotar-page');
const encontreiPageID = document.getElementById('encontrei-page');
const doarPageID = document.getElementById('doar-page');
const blogPageID = document.getElementById('blog-page');
const eventosPageID = document.getElementById('eventos-page');
const ongsPageID = document.getElementById('ongs-page');
const quemSomosPageID = document.getElementById('quem-somos-page');
const homePageID = document.querySelectorAll('.home-page');

const cleanPage = () => {
    adotarID.style.display = 'none';
    doarID.style.display = 'none';
    feirasID.style.display = 'none';
    perdiID.style.display = 'none';
    encontreiID.style.display = 'none';
    blogID.style.display = 'none';
    ongsID.style.display = 'none';
    eventosID.style.display = 'none';
};

const cleanSubPages = () => {
    adotarPageID.style.display = 'none';
    encontreiPageID.style.display = 'none';
    blogPageID.style.display = 'none';
    doarPageID.style.display = 'none';
    eventosPageID.style.display = 'none';
    ongsPageID.style.display = 'none';
    quemSomosPageID.style.display = 'none';
};

const home = document.querySelectorAll('.home-page').forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        adotarID.style.display = '';
        doarID.style.display = '';
        feirasID.style.display = '';
        perdiID.style.display = '';
        encontreiID.style.display = '';
        blogID.style.display = '';
        ongsID.style.display = '';
        eventosID.style.display = '';
        cleanSubPages();
    });
});

const adotar = document.getElementById('adotar').addEventListener('click', (event) => {
    event.preventDefault();
    cleanPage();
    adotarPageID.style.display = ''; 
    displayPets();
});

const encontrei = document.getElementById('encontrei').addEventListener('click', (event) => {
    event.preventDefault();
    cleanPage();
    encontreiPageID.style.display = '';
});

const doar = document.getElementById('doar').addEventListener('click', (event) => {
    event.preventDefault();
    cleanPage();
    doarPageID.style.display = '';
});

const blog = document.getElementById('blog').addEventListener('click', (event) => {
    event.preventDefault();
    cleanPage();
    blogPageID.style.display = '';
});

const eventos = document.getElementById('eventos').addEventListener('click', (event) => {
    event.preventDefault();
    cleanPage();
    eventosPageID.style.display = '';
});

const ongs = document.getElementById('ongs').addEventListener('click', (event) => {
    event.preventDefault();
    cleanPage();
    ongsPageID.style.display = '';
});

const quemSomos = document.getElementById('quem-somos-page').addEventListener('click', (event) => {
    event.preventDefault();
    cleanPage();
    quemSomosPageID.style.display = '';
});

const previewImagem = (event) => {
    const imagem = document.getElementById('imagemPreview');
    imagem.src = URL.createObjectURL(event.target.files[0]);
}