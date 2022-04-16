var form = document.getElementById('Página1');
                
    form.addEventListener("submit", function validaCadastro(evt) {
        var nome = document.getElementById('Nome-Completo');
        var email = document.getElementById('E-mail');
        var documento = document.getElementById('Documento-(CPF/RG)');
        var estado = document.getElementById('Estado');
        var cidade = document.getElementById('Cidade');
        var universidade = document.getElementById('Universidade');
        var formato = document.getElementById('Formato-(presencial/EAD)');
        var matricula = document.getElementById('Número-de-matrícula');
        var curso = document.getElementById('Curso');
        var trabalha = document.getElementById('Trabalha?');
        var necessidades = document.getElementById('Necessidades-especiais?');
        var seSim = document.getElementById('Se-sim-escreva-aqui');
        var contErro = 0;
     
     
        /* Required */
        function required (tagErro,tagCampo,tagMensagem){
        caixa = document.querySelector(tagErro);
        if(tagCampo.value == ""){
            caixa.innerHTML = "Favor preencher: ".concat(tagMensagem);
            caixa.style.display = 'block';
            contErro += 1;
        }else{
            caixa.style.display = 'none';
        }
        }
    
        required('.msg-nome',nome,"Nome")
        required('.msg-email',email,"E-mail")
        required('.msg-documento',documento,"Documento")
        required('.msg-estado',estado,"Estado")
        required('.msg-cidade',cidade,"Cidade")
        required('.msg-universidade',universidade,"Universidade")
        required('.msg-formato',formato,"Formato")
        required('.msg-matricula',matricula,"Número de matrícula")
        required('.msg-curso',curso,"Curso")
        required('.msg-trabalha',trabalha,"Trabalha?")
        required('.msg-necessidades',necessidades,"Necessidades Especiais")
    
    
        if(contErro > 0){
            evt.preventDefault();
        }
    
        else {
            form.addEventListener("submit", e => {
                e.preventDefault();
                fetch("https://sheetdb.io/api/v1/4t8wn7u23apn1", {
                    method : "POST",
                    body: new FormData(document.getElementById("Página1")),
                }).then(
                    response => response.json()
                ).then((html) => {
                    window.location.href = "index.html";
                })
            });
        }

        },true)