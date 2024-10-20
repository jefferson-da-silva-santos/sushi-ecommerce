let menuVisible = false;
let themeDark = false;

document.addEventListener('DOMContentLoaded', () => {
  const menuList = getElement('.nav__list-menu');
  const btnMenu = getElement('.nav__menu');
  const btnThema = document.getElementById('btn-theme');

  enableDarkTheme();

  //Código que aplica e retira o box shadow do menu fixo quando ele está no topo
  window.addEventListener('scroll', () => {
    getElement('.groupNav').style.boxShadow = (window.scrollY === 0) ? 'none' : '0px 0px 10px hsla(20, 15%, 43%, 0.361)';
  });

  //Código responável pelo abrimento do menu com o click
  btnMenu.addEventListener('click', () => {
    menuList.style.display = !menuVisible ? 'flex' : 'none';
    menuVisible = toggleVariable(menuVisible);
    toggleColorBtnMenu(getElement('.nav__menu__line', true));
  });

  //Código para fechar o menu mobile quando o tamanho da tela for alterado
  window.addEventListener('resize', () => {
    if (window.innerWidth > 884) {
      menuList.style.display = 'flex';
      menuVisible = false;
      getElement('.nav__menu__line', true).forEach(line => {
        line.style.backgroundColor = 'hsl(19, 16%, 15%)';
      });
    } else {
      menuList.style.display = 'none';
      menuVisible = false;
      getElement('.nav__menu__line', true).forEach(line => {
        line.style.backgroundColor = 'hsl(19, 16%, 15%)';
      });
    }
  });

  //Chamando as funções de observação para o header
  criarObservacao('.hide-header-1', 'show-header-1');
  criarObservacao('.hide-header-2', 'show-header-2');
  //Chamando as funções de observação para o about
  criarObservacao('.hide-about-1', 'show-about-1');
  criarObservacao('.hide-about-2', 'show-about-2');
  //Chamando as funções de observação para o popular
  criarObservacao('.hide-card-food-1', 'show-card-food-1');
  criarObservacao('.hide-card-food-2', 'show-card-food-2');
  criarObservacao('.hide-card-food-3', 'show-card-food-3');
  //Chamando as funções de observação para o recently
  criarObservacao('.hide-recently-1', 'show-recently-1');
  criarObservacao('.hide-recently-2', 'show-recently-2');
  //Chamando as funções de observação para o footer
  criarObservacao('.hide-footer', 'show-footer');

  // Alterar tema
  btnThema.addEventListener('click', event => {
    event.preventDefault();
    alterTheme();
  });
  
});

//Função para alterar o tema
function alterTheme() {
  document.body.style.backgroundColor = themeDark ? '#fff1eb' : '#12100e';
  getElement('.groupNav').style.backgroundColor = themeDark ? '#fff1eb' : '#12100e';
  getElement('.recently-secundary__form').style.backgroundColor = themeDark ? '#2c2420' : '#151511';
  getElement('.recently-secundary__form').style.boxShadow = themeDark ? 'none' : '0px 0px 20px #00000052';
  getElement('.footer__container__group-1__logo').style.color = themeDark ? '#2c2420' : '#e2d5d0';
  getElement('.recently-secundary__form__group-texts__group-input').style.backgroundColor = themeDark ? '#ffffff' : '#12100e';
  
  getElement('h2', true).forEach(e => {
    e.style.color = themeDark ? '#2c2420' : '#e2d5d0';
  });
  getElement('h1', true).forEach(e => {
    e.style.color = themeDark ? '#2c2420' : '#e2d5d0';
  });
  getElement('.footer-title', true).forEach(e => {
    e.style.color = themeDark ? '#2c2420' : '#e2d5d0';
  });
  getElement('h3', true).forEach(e => {
    e.style.color = themeDark ? '#2c2420' : '#e2d5d0';
  });
  getElement('a', true).forEach(e => {
    e.style.color = themeDark ? '#2c2420' : '#e2d5d0';
  });
  getElement('p', true).forEach(e => {
    e.style.color = themeDark ? '#68544b' : '#b4a197';
  });
  getElement('.popular__group-secundary__card-food', true).forEach(e => {
    e.style.backgroundColor = themeDark ? '#fff5f0' : '#151511';
    e.style.boxShadow = themeDark ? '0px 8px 20px hsla(21, 44%, 60%, 0.186)' : '0px 8px 20px hsl(0deg 0% 0% / 60%)';
  });
  themeDark = toggleVariable(themeDark);
}

//Função para selecionar elementos do DOM
function getElement(classElement, multiple = false) {
  return multiple ? document.querySelectorAll(classElement) : document.querySelector(classElement);
}

//Função responsável por alternar valores booleanos de variaveis
function toggleVariable(variable) {
  return !variable;
}

//Função responsável por mudar a cor do botão de abrir menu
function toggleColorBtnMenu(list) {
  list.forEach(line => {
    line.style.backgroundColor = menuVisible ? 'hsl(19, 64%, 54%)' : 'hsl(19, 16%, 15%)';
  });
}

//Função responsável por aplicar animações com quando os elementos estão observáveis
function criarObservacao(classeOculta, classeMostrar) {
  const observacao = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(classeMostrar);
      } else {
        return;
      }
    });
  });

  const elementosOcultos = document.querySelectorAll(classeOculta);
  elementosOcultos.forEach((element) => observacao.observe(element));
}


//Função responsável por mudar o tema da página para escuro
function enableDarkTheme() {
  getElement('.header__group-primary__btn').style.backgroundColor = 'hsl(19, 64%, 58%)';
  getElement('.about__group-secundary__suptitle').style.color = 'hsl(19, 64%, 58%)';
  
}