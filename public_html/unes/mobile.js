/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

if (window.screen.width < 600){


               function exibeQuemSomos(){
                document.getElementById("fundo-janelas").style.display = "block";
                document.getElementById("texto-quemsomos").style.display = "block";
                document.body.style.overflowY = "hidden";
                document.getElementById("quemsomos").onclick = function(){ocultaQuemSomos();};
                document.getElementById("quemsomos").style.cursor = "pointer";
                quemsomos = document.getElementById("texto-quemsomos").offsetWidth;
                tela = window.screen.width;
                margem = (tela - quemsomos) / 2 + "px";
                document.getElementById("texto-quemsomos").style.marginLeft = margem;
            }
                function ocultaQuemSomos(){
                document.getElementById("fundo-janelas").style.display = "none";
                document.getElementById("texto-quemsomos").style.display = "none";
                document.body.style.overflowY = "visible";
                document.getElementById("quemsomos").onclick = function(){exibeQuemSomos();};
            }
            
            document.getElementById("quemsomos").onclick = function(){exibeQuemSomos();};
            document.getElementById("quemsomos").style.cursor = "pointer";
            document.getElementById("fechar-quemsomos").onclick = function(){ocultaQuemSomos();};
            document.getElementById("fechar-quemsomos").style.cursor = "pointer"; 

            
            function redimensiona(){
                contatoNome = document.querySelector("#form-contato form fieldset input[type=text]:first-of-type");
                contatoEmail = document.querySelector("#form-contato form fieldset input[type=email]");
                tamanhoLabel = document.querySelector("#form-contato form fieldset label:first-of-type").offsetWidth;
                tamanhoTela = window.screen.width;
                tamanhoForm = tamanhoTela - (tamanhoTela * 0.20);
                document.getElementById("form-contato").style.width = tamanhoForm + "px";
                document.querySelector("#form-contato form fieldset").style.width = tamanhoForm - (tamanhoForm * 0.20) + "px";
                margemEsquerdaForm = (tamanhoTela - tamanhoForm - 25) / 2 + "px";
                document.getElementById("form-contato").style.marginLeft = margemEsquerdaForm;
                document.getElementById("questionamento").style.width = tamanhoForm - (tamanhoForm * 0.10) + "px";
                tamanhoFieldset = document.getElementById("questionamento").clientWidth;
                contatoNome.style.width = (tamanhoFieldset - tamanhoLabel -5) + "px";
                tamanhoLabel2 = document.querySelector("#form-contato form fieldset label:nth-of-type(2)").offsetWidth;
                contatoEmail.style.width = (tamanhoFieldset - tamanhoLabel2 -5) + "px";
            }
            
            
            function exibeContato(){
                document.getElementById("fundo-janelas").style.display = "block";
                document.getElementById("form-contato").style.display = "block";
                document.body.style.overflowY = "hidden";
                document.getElementById("contato").onclick = function(){ocultaContato();};
                document.getElementById("contato").style.cursor = "pointer";
                redimensiona();
            }

            function ocultaContato(){
                document.getElementById("fundo-janelas").style.display = "none";
                document.getElementById("form-contato").style.display = "none";
                document.body.style.overflowY = "visible";
                document.getElementById("contato").onclick = function(){exibeContato();};
            }
            
            document.getElementById("contato").onclick = function(){exibeContato();};
            document.getElementById("contato").style.cursor = "pointer";
            document.getElementById("fechar-contato").onclick = function(){ocultaContato();};
            document.getElementById("fechar-contato").style.cursor = "pointer"; 
            document.body.onresize = function() {redimensiona();};
            document.getElementById("home").onclick = function (){window.location.href = "#";};
            document.getElementById("home").style.cursor = "pointer";
            
            
            var cab = [];
            sessoes = document.querySelectorAll("section");
            var Menu = document.createElement("div");
            Menu.id = "menuNav";
            Menu.innerHTML = "<div id=tituloMenu>Navegação no texto" + "<div id=esconderMenu>X</div><div>";
            document.body.appendChild(Menu);
            
            var itensNav = document.createElement("ul");
            document.getElementById("menuNav").appendChild(itensNav);
            var conta = 0;
            itens = 0;            
            function menu(sessao){
                sessao.childNodes.forEach(item_menu);
                conta = 0;
            }

            function item_menu (item){
                if (item.localName === "h2"){
                    var itemNav = document.createElement("li");
                    itemNav.innerHTML = "<a href=#" + itens + item.parentElement.id + ">" + item.parentElement.id + " - " + item.innerText + "</a>";
                    itemNav.id = itens + item.parentElement.id;
                    itemNav.classList.add("titulo2");
                    itensNav.appendChild(itemNav);
                    conta++;
                    item.id = itens + item.parentElement.id;
                    itens++;
                }
                else if (item.localName === "h3"){
                    var itemNav = document.createElement("li");
                    itemNav.innerHTML = "<a href=#" + itens + item.parentElement.id + ">" + item.parentElement.id + " - " + item.innerText + "</a>";
                    itemNav.id = itens + item.parentElement.id;
                    itemNav.classList.add("titulo3");
                    itensNav.appendChild(itemNav);
                    item.id = itens + item.parentElement.id;
                    itens++;
                }

            }
            sessoes.forEach(menu);
            
            
            
            
            function exibeMenu(){
                document.getElementById("fundo-janelas").style.display = "block";
                document.getElementById("menuNav").style.display = "block";
            }
            
            document.getElementById("exibirmenu").onclick = function () {exibeMenu();};
            document.getElementById("esconderMenu").onclick = function () {esconderMenu();};
            
            function esconderMenu() {
                document.getElementById("fundo-janelas").style.display = "none";
                document.getElementById("menuNav").style.display = "none";
            }
            }