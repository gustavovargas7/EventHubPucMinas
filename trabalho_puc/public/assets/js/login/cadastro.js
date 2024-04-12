$(document).ready(function () {

    const formCadUser = $('#cadas-user-data');
    const btnEnvioForm = $('#enviar-form');
    let usersData = [];
    let dataUser = {};

    $(formCadUser).on('submit', (e) => {
        e.preventDefault();
        getItens();
    })

    function getItens() {
        dataUser = {
            user: {
                name: $('#name').val(),
                sobrenome: $('#sobre-nome').val(),
                cpf: $('#cpf').val(),
                dataNascimento: $('#date-nasc').val(),
            },
            dataLoginUser: {
                login: $('#login').val(),
                senha: $('#senha').val(),
                confirm: $('#confirm-senha').val(),
            },
            contatos: {
                email: $('#email').val(),
                numero: $('#numero').val(),
            },
            endereco: {
                pais: $('#pais').val(),
                estado: $('#estado').val(),
                cidade: $('#cidade').val(),
                bairro: $('#bairro').val(),
                cep: $('#cep').val(),
            },
        };
        usersData.push(dataUser);
        localStorage.setItem('usersData', JSON.stringify(usersData));
        console.log("AAAAAAAAAAAA");
    }
});