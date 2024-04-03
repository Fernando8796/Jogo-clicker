//Os coins e o poder de ganhar mais dinheiro
let coin = 0;
let power = 1;
updateDisplay();

/*==============Sessão da função principal de click================*/

$("#coin").click(() => {
    //Adicionando mais dinheiro de acordo com o poder
    coin += power;
    //Atualizando display a cada clique
    updateDisplay();
})

/*===============Sessão de comprar mais upgrades===================*/

//Classe para cada item upgrade
class Upgrade {
    constructor(nome, id, preco, power) {
        this.nome = nome;
        this.preco = preco;
        this.power = power;
        this.id = id;
    }

    //Função para chamar a compra do produto
    comprar(){
        if (coin >= this.preco) {
            coin -= this.preco;
            power += this.power;
            alert(`Parabéns, você comprou '${this.nome}'!`);
            updateDisplay();
            
            //Não deixar o usuário comprar o upgrade novamente
            $(this.id).text("Comprado").css("cursor", "default");
            this.comprar = null;
        } else {
            alert("Sem dinheiro suficiente");
        }
    }
}

//Upgrades disponíveis
const caixa = new Upgrade('Caixa de mendigo', '#caixa', 100, 1);
const pano = new Upgrade('Pano', '#pano', 200, 5);
const emprego = new Upgrade('Emprego', '#emprego', 1000, 10);

//Evento de clique nos botões de compra
$('#caixa').click(() => caixa.comprar());
$('#pano').click(() => pano.comprar());
$('#emprego').click(() => emprego.comprar());

/*=================Sessão de navegação==============================*/

$("#btn-home").click(() => $("#upgrades").hide());
$("#btn-upgrades").click(() => $("#upgrades").show());

/*==========================Funções===============================*/

//Função para atualizar o estado do contador
function updateDisplay(){
    $("#coin-counter").text(`${coin} Coins`);
    $("#power-counter").text(`${power} power click`);
}