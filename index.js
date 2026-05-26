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
const feiraPageID = document.getElementById('feira-page');
const ongsPageID = document.getElementById('ongs-page');
const perdiPageID = document.getElementById('perdi-page');
const eventosPageID = document.getElementById('eventos-page');
const cadastroPageID = document.getElementById('cadastro-page');
const loginPageID = document.getElementById('login-page');
const contatoPageID = document.getElementById('contato-page');
const quemSomosPageID = document.getElementById('quemsomos-page');
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
    feiraPageID.style.display = 'none';
};

const cleanSubPages = () => {
    adotarPageID.style.display = 'none';
    encontreiPageID.style.display = 'none';
    blogPageID.style.display = 'none';
    doarPageID.style.display = 'none';
    ongsPageID.style.display = 'none';
    perdiPageID.style.display = 'none';
    eventosPageID.style.display = 'none';
    quemSomosPageID.style.display = 'none';
    cadastroPageID.style.display = 'none';
    loginPageID.style.display = 'none';
    contatoPageID.style.display = 'none';
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

const feiras = document.getElementById('feiras').addEventListener('click', (event) => {
    event.preventDefault();
    cleanPage();
    feiraPageID.style.display = '';
});

const ongs = document.getElementById('ongs').addEventListener('click', (event) => {
    event.preventDefault();
    cleanPage();
    ongsPageID.style.display = '';
});

const perdi = document.getElementById('perdi').addEventListener('click', (event) => {
    event.preventDefault();
    cleanPage();
    perdiPageID.style.display = '';
});

const eventos = document.getElementById('eventos').addEventListener('click', (event) => {
    event.preventDefault();
    cleanPage();
    eventosPageID.style.display = '';
});

const cadastro = document.getElementById('cadastro').addEventListener('click', (event) => {
    event.preventDefault();
    cleanSubPages();
    cleanPage();
    cadastroPageID.style.display = '';
});

const login = document.getElementById('login').addEventListener('click', (event) => {
    event.preventDefault();
    cleanSubPages();
    cleanPage();
    loginPageID.style.display = '';
    const logado = localStorage.getItem('usuario_logado');
    if (logado) {
        mostrarPerfilUsuario();
    }
});

const quemSomos = document.getElementById('quem-somos').addEventListener('click', (event) => {
    event.preventDefault();
    cleanSubPages();
    cleanPage();
    quemSomosPageID.style.display = '';
});

const contato = document.getElementById('contato').addEventListener('click', (event) => {
    event.preventDefault();
    cleanSubPages();
    cleanPage();
    contatoPageID.style.display = '';
});

const mostrarPerfilUsuario = () => {
    cleanSubPages();
    cleanPage();

    const perfilDiv = document.createElement('div');
    perfilDiv.className = 'perfil-container';
    const email = localStorage.getItem('usuario_logado');
    const usuario = JSON.parse(localStorage.getItem('usuario_' + email));
    perfilDiv.innerHTML = `
        <div class="perfil file">
            <img src="imagens/user.png" class="perfil-foto" style="width:100px;height:100px;border-radius:50%;">
            <h2>${usuario.nome}</h2>
            <p>${usuario.email}</p>
            <button id="logout-btn" class="btn btn-outline-secondary mt-3">Sair</button>
        </div>
    `;
    document.getElementById('main-content').appendChild(perfilDiv);
    document.getElementById('logout-btn').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('usuario_logado');
        perfilDiv.remove();
        cleanSubPages();
        cleanPage();
        loginPageID.style.display = '';
    });
}

const cadastroForm = document.getElementById('cadastro-form');
    cadastroForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const nome = cadastroForm.querySelector('input[type="text"]').value;
        const email = cadastroForm.querySelector('input[type="email"]').value;
        const senha = cadastroForm.querySelector('input[type="password"]').value;

        if (localStorage.getItem('usuario_' + email)) {
            cleanSubPages();
            cleanPage();
            perfilPageID.style.display = '';
        } else {
            localStorage.setItem('usuario_' + email, JSON.stringify({ nome, email, senha }));
            localStorage.setItem('usuario_logado', email);
            mostrarPerfilUsuario();
        }
    });


const form = document.getElementById('login-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        const senha = form.querySelector('input[type="password"]').value;
        const usuario = JSON.parse(localStorage.getItem('usuario_' + email));
        if (usuario && usuario.senha === senha) {
            localStorage.setItem('usuario_logado', email);
            console.log('Login bem-sucedido');
            mostrarPerfilUsuario();
        } else {
            alert('Usuário ou senha inválidos');
            console.log('Login falhou');
        }
    });

const previewImagem = (event) => {
    const imagem = document.getElementById('imagemPreview');
    imagem.src = URL.createObjectURL(event.target.files[0]);
};

