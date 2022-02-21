function cabs(cab, items){
    menusNav = `
    <nav id=${cab}Nav>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target=#${cab}Cab aria-controls=${cab}Cab aria-expanded="false" aria-label="Navegação">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div id=${cab}Cab  class="collapse navbar-collapse">
                        <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
                            ${items}
                        </ul>
            </div>
    </nav>`
    let Cab = `#${cab} header`;
    $(Cab).append(menusNav);
    $(`#${cab}Nav`).addClass('navbar navbar-expand-xl navbar-light');    
    $(`#${cab}`).addClass(`padrao ${cab}`)
    $(`${Cab}`).addClass('row')
}

function inserItems(Items){
    let Itens = ''
    Items.split(',').forEach(e => {
        Itens += `<li class="nav-item"><a class="nav-link" href="#">${e}</a></li>`
    });
    return Itens;
}

let items = '';
items = 'Contato,Sobre nós,Onde estamos';
cabs('inicio',inserItems(items));
paginasInicio = ['contato.html','sobre_nos.html','onde_estamos.html'];
caminhoInicio = '/idiomas/pt-br/partes/inicio/';
paginasInicio.forEach(p =>{
    $.get((caminhoInicio + p), pagina =>{
        $('#inicio main').append(`<div>${pagina}</div>`);
    }) })

items = 'Produtos,Clientes,Parceiros,Loja';
cabs('meio',inserItems(items))
paginasMeio = ['produtos.html','clientes.html','parceiros.html','loja.html'];
caminhoMeio = '/idiomas/pt-br/partes/meio/';
paginasMeio.forEach(p =>{
    $.get((caminhoMeio + p), pagina =>{
        $('#meio main').append(`<div>${pagina}</div>`);
    }) })

items = 'Redes Sociais';
cabs('fim',inserItems(items))
paginasFim = ['redes_sociais.html'];
caminhoFim = '/idiomas/pt-br/partes/fim/';
paginasFim.forEach(p =>{
    $.get((caminhoFim + p), pagina =>{
        $('#fim main').append(`<div>${pagina}</div>`);
    }) })

    $('#fim footer').append('<div>The first project</div>')