
/*

  let nomeFilme = 'Homem Aranha'

switch(nomeFilme) {
    case 'Vingadores': 
    console.log('É o filme dos Vingadores')
    break
    case 'Batman vs Superman':
        console.log('É o filme do Batman vs Superman')
        break
     case   'Senhor dos Anéis':
        console.log('É o filme dos senhor dos anéis ')
        break
        default:
            console.log('É outro filme')    
        break

}      

*/



// let resultadoDaSoma= (numero1,numero2) => {
  //return numero1 + numero2
 //}
 //console.log(resultadoDaSoma(12,5))

function alterarCorDeFundoPrimeiroPost() {
  let posts = document.getElementsByClassName('post');

  console.log(posts)

  let primeiroPost = posts[0];
  console.log('primeiroPost', primeiroPost)
  primeiroPost.style.backgroundColor= 'red';
} 
 
function aumentarFonteSegundoPost() {
  let textoPosts = document.getElementsByClassName('texto-post');
  
  textoPosts[1].classList.add('fonte-grande')

  console.log(textoPosts[1].classList)

  }

  function marcarRadio(genero) {
    // 2) Acessar as duas opções (inputs do tipo radio) e armazenamos em duas variáveis distintas:
    let generoMasculino = document.getElementById("genero-masculino");
    let generoFeminino = document.getElementById("genero-feminino");
  
    // 3) Criar uma condicional para definir que, se o parâmetro passado na função for igual a “M”, o atributo checked deve ser atribuído ao botão “Marcar radio masculino” através do método também chamado checked. Mas, se o parâmetro passado na função for igual a “F”, o atributo checked deve ser atribuído ao botão “Marcar radio feminino”. Os parâmetros “M” e “F” já foram passados na criação dos botões no documento HTML.
    if (genero === "M") {
      generoMasculino.checked = true;
    } else if (genero === "F") {
      generoFeminino.checked = true;
    }
  }
  