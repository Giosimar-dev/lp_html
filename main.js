
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset propriedades que vamos animar
var animating; //sinalizador para evitar falhas rápidas de vários cliques

// Próximo
$(".proximo").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//ativar a próxima etapa na barra de progresso usando o índice de next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//mostrar o próximo conjunto de campos
	next_fs.show(); 
	//ocultar o conjunto de campos atual com estilo
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//como a opacidade de current_fs reduz a 0 - armazenado em "agora"
			//1. reduza current_fs para 80%
			scale = 1 - (1 - now) * 0.2;
			//2. trazer next_fs da direita(50%)
			left = (now * 50)+"%";
			//3. aumentar a opacidade de next_fs para 1 conforme ele se move
			opacity = 1 - now;
			current_fs.css({
				'transform': 'scale('+scale+')',
				'position': 'absolute'
			});
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//isso vem do plug-in de easing personalizado
		easing: 'easeInOutBack'
	});
});
// Voltar
$(".voltar").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})

// DEFINIR ESTILOS
$(function() {
    $('.simples').on('click', function() {
        $(".selected").removeClass("selected");
        $(this).addClass('selected');
        $("#modelo_vsl").val("simples");
        $('.topo_opcao').addClass('hidden');
    });

    $('.padrao').on('click', function() {
        $(".selected").removeClass("selected");
        $(this).addClass('selected');
        $("#modelo_vsl").val("padrao");
        $('.topo_opcao').removeClass('hidden');
    });

    $('.avancado').on('click', function() {
        $(".selected").removeClass("selected");
        $(this).addClass('selected');
        $("#modelo_vsl").val("avancado");
        $('.topo_opcao').removeClass('hidden');
    });
});

// 1 ETAPA
function primeira_etapa(){
// Variaveis
var modelo_vsl = document.getElementById("modelo_vsl").value;
var cor_body_vsl = document.getElementById("cor_body_vsl").value;
var cor_texto_vsl = document.getElementById("cor_texto_vsl").value;
var topo_vsl = document.getElementById("topo_vsl").value;
var cor_fundo_topo = document.getElementById("cor_fundo_topo").value;
var cor_texto_topo = document.getElementById("cor_texto_topo").value;
var headline_vsl = document.getElementById("headline_vsl").value;
var cor_headline_vsl = document.getElementById("cor_headline_vsl").value;
var subheadline_vsl = document.getElementById("subheadline_vsl").value;
var cor_subheadline_vsl = document.getElementById("cor_subheadline_vsl").value;

      if (modelo_vsl == "padrao") {
        // Definir cores
        var style = "<style>:root {--fundo_pagina: "+ cor_body_vsl +";--cor_texto: "+ cor_texto_vsl +";--cor_fundo_topo: "+ cor_fundo_topo +";--cor_texto_topo: "+ cor_texto_topo +";--cor_headline_vsl: "+ cor_headline_vsl +";--cor_subheadline_vsl: "+ cor_subheadline_vsl +";}</style>"
        $(style).appendTo(".primeiro_estilo");

        // Definir topo da VSL
        $(".texto_topo_vsl").text(topo_vsl);

        if ($(".headline_vsl_texto").is(":empty")){
          // Definir headline da VSL
          $(".headline_vsl_texto").text(headline_vsl);
        } 

        // Definir subheadline da VSL
        $(".subheadline_vsl_texto").text(subheadline_vsl);

      } else if(modelo_vsl == "simples"){
        var style = "<style>:root {--fundo_pagina: "+ cor_body_vsl +";--cor_texto: "+ cor_texto_vsl +";--cor_fundo_topo: "+ cor_fundo_topo +";--cor_texto_topo: "+ cor_texto_topo +";--cor_headline_vsl: "+ cor_headline_vsl +";--cor_subheadline_vsl: "+ cor_subheadline_vsl +";}</style>"
        $(style).appendTo(".primeiro_estilo");

        // Remover o topo
        $(".topo_pagina_vsl").addClass("hide");

        // Redefinir o conteudo do h2
        $(".headline_vsl_texto").html("");

        if ($(".headline_vsl_texto").is(":empty")){
          // Definir headline da VSL
          $(".headline_vsl_texto").text(headline_vsl);
        } 

        // Definir subheadline da VSL
        $(".subheadline_vsl_texto").text(subheadline_vsl);

      } else {
        // Definir cores
        var style = "<style>:root {--fundo_pagina: "+ cor_body_vsl +";--cor_texto: "+ cor_texto_vsl +";--cor_fundo_topo: "+ cor_fundo_topo +";--cor_texto_topo: "+ cor_texto_topo +";--cor_headline_vsl: "+ cor_headline_vsl +";--cor_subheadline_vsl: "+ cor_subheadline_vsl +";}</style>"
        $(style).appendTo(".primeiro_estilo");

        // Definir topo da VSL
        $(".texto_topo_vsl").text(topo_vsl);

        if ($(".headline_vsl_texto").is(":empty")){
          // Definir headline da VSL
          $(".headline_vsl_texto").text(headline_vsl);
        } 

        // Definir subheadline da VSL
        $(".subheadline_vsl_texto").text(subheadline_vsl);
      }

}
function getBaseUrl() {
    var file = document.querySelector('input[type=file]')['files'][0];
    var reader = new FileReader();
    var baseString;
    reader.onloadend = function () {
        baseString = reader.result;
        // console.log(baseString);
        // Redefinir o conteudo do h2
        $(".headline_vsl_texto").html("");
        $(".headline_vsl_texto").html("<img src='"+ baseString +"' alt=''/>");
    };
    reader.readAsDataURL(file);
}
function tipotopo(){
  // Variaveis
  var tipo_de_topo_vsl = document.getElementById("tipo_headline").value;

  if (tipo_de_topo_vsl == "texto"){
    // Limpar conteudo da div
    $(".headline_vsl_texto").html("")
    // Remover input de imagem
    $(".imagem_tp_vsl").addClass("hidden");
    // Remover input de imagem
    $(".texto_tp_vsl").removeClass("hidden");
  } else {
    // Remover input de imagem
    $(".texto_tp_vsl").addClass("hidden");
    // Remover input de imagem
    $(".imagem_tp_vsl").removeClass("hidden");

  }

}
// VOLTAR PRIMEIRA ETAPA
function voltar_primeira_etapa(){
var modelo_vsl = document.getElementById("modelo_vsl").value;
     if (modelo_vsl == "padrao") {
        // Redefinir estilos
        $(".primeiro_estilo").html("");

        // Redefinir topo
        $(".texto_topo_vsl").html("");

        // Redefinir headline da VSL
        $(".headline_vsl_texto").html("");

        // Redefinir subheadline da VSL
        $(".subheadline_vsl_texto").html("");

      } else if(modelo_vsl == "simples"){
        // Redefinir estilos
        $(".primeiro_estilo").html("");

        // Remover o topo
        $(".topo_pagina_vsl").removeClass("hide");

        // Redefinir headline da VSL
        $(".headline_vsl_texto").html("");

        // Redefinir subheadline da VSL
        $(".subheadline_vsl_texto").html("");

      } else {
        // Redefinir estilos
        $(".primeiro_estilo").html("");

        // Redefinir topo
        $(".texto_topo_vsl").html("");

        // Redefinir headline da VSL
        $(".headline_vsl_texto").html("");

        // Redefinir subheadline da VSL
        $(".subheadline_vsl_texto").html("");
      }
}

// SEGUNDA ETAPA
function segunda_etapa(){
// Variaveis
var modelo_vsl = document.getElementById("modelo_vsl").value;
var cor_borda_vsl = document.getElementById("cor_borda_vsl").value;
var texto_botao_vsl = document.getElementById("texto_botao_vsl").value;
var texto_som_vsl = document.getElementById("texto_som_vsl").value;
var cor_fundo_botao_vsl = document.getElementById("cor_fundo_botao_vsl").value;
var cor_texto_botao_vsl = document.getElementById("cor_texto_botao_vsl").value;
var link_botao_vsl = document.getElementById("link_botao_vsl").value;
var tempo_atraso_vsl = document.getElementById("tempo_atraso_vsl").value;
var pixel_vsl = document.getElementById("pixel_vsl").value;
var milisegundos = (tempo_atraso_vsl)*1000;
var emote_som = "";

      if( $("#texto_som_vsl").val().length === 0 ) {
        var emote_som = "";
      } else {
        var emote_som = "🔊 ";
      }

        // Definir cores
        var style2 = "<style>:root {--cor_borda_vsl: "+ cor_borda_vsl +";--cor_fundo_botao_vsl: "+ cor_fundo_botao_vsl +";--cor_texto_botao_vsl: "+ cor_texto_botao_vsl +";}</style>"
        $(style2).appendTo(".segundo_estilo");
        $(pixel_vsl).appendTo(".segundo_estilo");

        // Definir texto e link botão
        if (modelo_vsl == "padrao") {

          $(".texto_som_da_vsl").text(emote_som + texto_som_vsl);
          $(".link1").text(texto_botao_vsl);
          $(".link1").attr("href", link_botao_vsl);
          $("#botao").attr("atraso", milisegundos);
          $("#botao_dois").addClass("hide");
        } else if (modelo_vsl == "simples") {

          $(".texto_som_da_vsl").text(emote_som + texto_som_vsl);
          $(".link1").text(texto_botao_vsl);
          $(".link1").attr("href", link_botao_vsl);
          $("#botao").attr("atraso", milisegundos);
          $("#botao_dois").addClass("hide");
        } else {

          $(".texto_som_da_vsl").text(emote_som + texto_som_vsl);
          $(".link1").text(texto_botao_vsl);
          $(".link1").attr("href", link_botao_vsl);
          $(".link2").text(texto_botao_vsl);
          $(".link2").attr("href", link_botao_vsl);
          $("#botao").attr("atraso", milisegundos);
          $("#botao_dois").attr("atraso", milisegundos);
        }
          $('body video, body audio').each(function(){
             $(this).prop('muted', true);
          });

}
// VOLTAR A SEGUNDA ETAPA
function voltar_segunda_etapa(){
  var modelo_vsl = document.getElementById("modelo_vsl").value;
        $(".segundo_estilo").html("");

        // Definir texto e link botão
        if (modelo_vsl == "padrao") {
          $(".texto_som_da_vsl").html("");
          $(".link1").html("");
          $(".link1").attr("href", "");
          $("#botao").attr("atraso", "");
          $("#botao_dois").removeClass("hide");
        } else if (modelo_vsl == "simples") {
          $(".texto_som_da_vsl").html("");
          $(".link1").html("");
          $(".link1").attr("href", "");
          $("#botao").attr("atraso", "");
          $("#botao_dois").removeClass("hide");
        } else {
          $(".texto_som_da_vsl").html("");
          $(".link1").html("");
          $(".link1").attr("href", "");
          $(".link2").text("");
          $(".link2").attr("href", "");
          $("#botao").attr("atraso", "");
          $("#botao_dois").attr("atraso", "");
        }
}
//GERADOR DE COMENTÁRIOS
function terceira_etapa()
{
        // Variáveis
        var rodape_vsl = document.getElementById("rodape_vsl").value;
        $(".rodape_texto").html(rodape_vsl);
        // VERIFICA SE OS COMENTÁRIOS ESTÃO ESCRITOS SE NÃO MOSTRA O ERRO
        const div_comentarios = document.getElementsByClassName('ce-paragraph')[0];
        if (div_comentarios.childNodes.length === 0) {
            $(".erro_comentarios").css({
            'display':'block'
            });
            $(".kuchaI1555436").addClass("hide");
        } else {
          // PEGA OS COMENTÁRIOS
        var comentarios = Array.prototype.slice.call( 
        document.getElementsByClassName( 'ce-paragraph' ) 
        ).map( function( x ){ return x.innerText } );
        comentarios = comentarios.filter(item => item);

        // PEGAR TOTAL DE COMENTARIOS
        var total_comentarios = comentarios.length;
        var total = document.getElementById("total_comentarios");
        total.innerHTML = total_comentarios;

         // COLOCA OS COMENTARIOS NO SCRIPT
        const masculino = [{"genero":"masculino","foto":"image.77860.2992523.jpg","nome":"José Antônio"},{"genero":"masculino","foto":"image.77981.2992523.jpg","nome":"Carlos Roberto"},{"genero":"masculino","foto":"image.78122.2992523.jpg","nome":"Paulo Ricardo"},{"genero":"masculino","foto":"image.78201.2992523.jpg","nome":"Pedro Lucas"},{"genero":"masculino","foto":"image.78230.2992523.jpg","nome":"Marcos"},{"genero":"masculino","foto":"image.78280.2992523.jpg","nome":"Marcelo"},{"genero":"masculino","foto":"image.78384.2992523.jpg","nome":"Carlos Eduardo"},{"genero":"masculino","foto":"image.78466.2992523.jpg","nome":"Henrique"},{"genero":"masculino","foto":"image.78706.2992523.jpg","nome":"Raimundo"},{"genero":"masculino","foto":"image.78780.2992523.jpg","nome":"André Matheus"},{"genero":"masculino","foto":"image.78958.2992523.jpg","nome":"Fernando"},{"genero":"masculino","foto":"image.79078.2992523.jpg","nome":"Fabio"},{"genero":"masculino","foto":"image.79104.2992523.jpg","nome":"Leonardo"},{"genero":"masculino","foto":"image.79161.2992523.jpg","nome":"Guilherme"},{"genero":"masculino","foto":"image.79611.2992523.jpg","nome":"Leandro"},{"genero":"masculino","foto":"image.79711.2992523.jpg","nome":"Marcio"},{"genero":"masculino","foto":"image.79995.2992523.jpg","nome":"Jorge"},{"genero":"masculino","foto":"image.80082.2992523.jpg","nome":"Alexandre"},{"genero":"masculino","foto":"image.80180.2992523.jpg","nome":"Roberto"},{"genero":"masculino","foto":"image.80289.2992523.jpg","nome":"Edson Hugo"},{"genero":"masculino","foto":"image.80519.2992523.jpg","nome":"Diego"},{"genero":"masculino","foto":"image.80624.2992523.jpg","nome":"Vitor"},{"genero":"masculino","foto":"image.81065.2992523.jpg","nome":"Claudio"},{"genero":"masculino","foto":"image.81099.2992523.jpg","nome":"Matheus"},{"genero":"masculino","foto":"image.81142.2992523.jpg","nome":"Thiago"},{"genero":"masculino","foto":"image.81225.2992523.jpg","nome":"Geraldo"},{"genero":"masculino","foto":"image.81817.2992523.jpg","nome":"Adriano"},{"genero":"masculino","foto":"image.82143.2992523.jpg","nome":"Luciano"},{"genero":"masculino","foto":"image.82186.2992523.jpg","nome":"Julio"},{"genero":"masculino","foto":"image.82212.2992523.jpg","nome":"Renato"},{"genero":"masculino","foto":"image.82415.2992523.jpg","nome":"Alex"},{"genero":"masculino","foto":"image.82514.2992523.jpg","nome":"Vinicius"},{"genero":"masculino","foto":"image.82661.2992523.jpg","nome":"Rogerio"},{"genero":"masculino","foto":"image.82703.2992523.jpg","nome":"Samuel"},{"genero":"masculino","foto":"image.82758.2992523.jpg","nome":"Ronaldo"},{"genero":"masculino","foto":"image.82885.2992523.jpg","nome":"Mario"},{"genero":"masculino","foto":"image.82920.2992523.jpg","nome":"Flavio"},{"genero":"masculino","foto":"image.82979.2992523.jpg","nome":"Igor"},{"genero":"masculino","foto":"image.83021.2992523.jpg","nome":"Douglas"},{"genero":"masculino","foto":"image.83044.2992523.jpg","nome":"Davi"},{"genero":"masculino","foto":"image.83059.2992523.jpg","nome":"Manuel"},{"genero":"masculino","foto":"image.83160.2992523.jpg","nome":"Arhur"},{"genero":"masculino","foto":"image.83249.2992523.jpg","nome":"Heitor"},{"genero":"masculino","foto":"image.83264.2992523.jpg","nome":"Samuel"},{"genero":"masculino","foto":"image.83296.2992523.jpg","nome":"Miguel"},{"genero":"masculino","foto":"image.83341.2992523.jpg","nome":"Davi"},{"genero":"masculino","foto":"image.83412.2992523.jpg","nome":"Bernardo"},{"genero":"masculino","foto":"image.83427.2992523.jpg","nome":"Maurício"},{"genero":"masculino","foto":"image.83516.2992523.jpg","nome":"Denis"},{"genero":"masculino","foto":"image.83785.2992523.jpg","nome":"Inácio"},{"genero":"masculino","foto":"image.84020.2992523.jpg","nome":"Heitor"},{"genero":"masculino","foto":"image.84070.2992523.jpg","nome":"Augusto"},{"genero":"masculino","foto":"image.84145.2992523.jpg","nome":"Breno"},{"genero":"masculino","foto":"image.84226.2992523.jpg","nome":"Benício"},{"genero":"masculino","foto":"image.84411.2992523.jpg","nome":"Álvaro"},{"genero":"masculino","foto":"image.84497.2992523.jpg","nome":"Abner"},{"genero":"masculino","foto":"image.84628.2992523.jpg","nome":"Francisco"},{"genero":"masculino","foto":"image.84945.2992523.jpg","nome":"Wendel"},{"genero":"masculino","foto":"image.85011.2992523.jpg","nome":"Giovanni"},{"genero":"masculino","foto":"image.85060.2992523.jpg","nome":"Bernardo"},{"genero":"masculino","foto":"image.85433.2992523.jpg","nome":"Aécio"},{"genero":"masculino","foto":"image.85999.2992523.jpg","nome":"Ademar"},{"genero":"masculino","foto":"image.86283.2992523.jpg","nome":"Adelmiro"},{"genero":"masculino","foto":"image.86430.2992523.jpg","nome":"Adelino"},{"genero":"masculino","foto":"image.86466.2992523.jpg","nome":"Abraão"},{"genero":"masculino","foto":"image.86553.2992523.jpg","nome":"Acelino"},{"genero":"masculino","foto":"image.86713.2992523.jpg","nome":"Adão"},{"genero":"masculino","foto":"image.86747.2992523.jpg","nome":"Adelmiro"},{"genero":"masculino","foto":"image.86937.2992523.jpg","nome":"Adolfo"},{"genero":"masculino","foto":"image.84020.2992523.jpg","nome":"Jose"}];
        const feminino = [{"genero":"feminino","foto":"image.77387.2992523.jpg","nome":"Abigail"},{"genero":"feminino","foto":"image.77918.2992523.jpg","nome":"Acácia"},{"genero":"feminino","foto":"image.77950.2992523.jpg","nome":"Sophia"},{"genero":"feminino","foto":"image.78011.2992523.jpg","nome":"Laura"},{"genero":"feminino","foto":"image.78067.2992523.jpg","nome":"Valentina"},{"genero":"feminino","foto":"image.78155.2992523.jpg","nome":"Helena"},{"genero":"feminino","foto":"image.78175.2992523.jpg","nome":"Isabella"},{"genero":"feminino","foto":"image.78253.2992523.jpg","nome":"Manuela"},{"genero":"feminino","foto":"image.78403.2992523.jpg","nome":"Júlia"},{"genero":"feminino","foto":"image.78541.2992523.jpg","nome":"Luiza"},{"genero":"feminino","foto":"image.78589.2992523.jpg","nome":"Lívia"},{"genero":"feminino","foto":"image.78638.2992523.jpg","nome":"Giovanna"},{"genero":"feminino","foto":"image.78734.2992523.jpg","nome":"Maria Luiza"},{"genero":"feminino","foto":"image.78847.2992523.jpg","nome":"Heloísa"},{"genero":"feminino","foto":"image.78890.2992523.jpg","nome":"Maria Eduarda"},{"genero":"feminino","foto":"image.78918.2992523.jpg","nome":"Maria Clara"},{"genero":"feminino","foto":"image.78991.2992523.jpg","nome":"Lara"},{"genero":"feminino","foto":"image.79016.2992523.jpg","nome":"Lorena"},{"genero":"feminino","foto":"image.79211.2992523.jpg","nome":"Beatriz"},{"genero":"feminino","foto":"image.79251.2992523.jpg","nome":"Mariana"},{"genero":"feminino","foto":"image.79285.2992523.jpg","nome":"Melissa"},{"genero":"feminino","foto":"image.79362.2992523.jpg","nome":"Cecília"},{"genero":"feminino","foto":"image.79500.2992523.jpg","nome":"Ana Clara"},{"genero":"feminino","foto":"image.79553.2992523.jpg","nome":"Ana Júlia"},{"genero":"feminino","foto":"image.79639.2992523.jpg","nome":"Isadora"},{"genero":"feminino","foto":"image.79696.2992523.jpg","nome":"Maria Júlia"},{"genero":"feminino","foto":"image.79776.2992523.jpg","nome":"Rafaela"},{"genero":"feminino","foto":"image.79834.2992523.jpg","nome":"Emanuelly"},{"genero":"feminino","foto":"image.79928.2992523.jpg","nome":"Esther"},{"genero":"feminino","foto":"image.80035.2992523.jpg","nome":"Lavínia"},{"genero":"feminino","foto":"image.80126.2992523.jpg","nome":"Sarah"},{"genero":"feminino","foto":"image.80364.2992523.jpg","nome":"Isabelly"},{"genero":"feminino","foto":"image.80403.2992523.jpg","nome":"Elisa"},{"genero":"feminino","foto":"image.80461.2992523.jpg","nome":"Nicole"},{"genero":"feminino","foto":"image.80851.2992523.jpg","nome":"Maria Alice"},{"genero":"feminino","foto":"image.80985.2992523.jpg","nome":"Gabriela"},{"genero":"feminino","foto":"image.81043.2992523.jpg","nome":"Maria"},{"genero":"feminino","foto":"image.81292.2992523.jpg","nome":"Rebeca"},{"genero":"feminino","foto":"image.81875.2992523.jpg","nome":"Letícia"},{"genero":"feminino","foto":"image.81927.2992523.jpg","nome":"Clara"},{"genero":"feminino","foto":"image.82015.2992523.jpg","nome":"Marina"},{"genero":"feminino","foto":"image.82092.2992523.jpg","nome":"Ísis"},{"genero":"feminino","foto":"image.82261.2992523.jpg","nome":"Alícia"},{"genero":"feminino","foto":"image.82356.2992523.jpg","nome":"Maria Cecília"},{"genero":"feminino","foto":"image.82547.2992523.jpg","nome":"Agatha"},{"genero":"feminino","foto":"image.82565.2992523.jpg","nome":"Catarina"},{"genero":"feminino","foto":"image.82594.2992523.jpg","nome":"Ana Laura"},{"genero":"feminino","foto":"image.82632.2992523.jpg","nome":"Larissa"},{"genero":"feminino","foto":"image.82817.2992523.jpg","nome":"Ana Beatriz"},{"genero":"feminino","foto":"image.82950.2992523.jpg","nome":"Maria Fernanda"},{"genero":"feminino","foto":"image.82993.2992523.jpg","nome":"Maitê"},{"genero":"feminino","foto":"image.83109.2992523.jpg","nome":"Vitória"},{"genero":"feminino","foto":"image.83217.2992523.jpg","nome":"Bianca"},{"genero":"feminino","foto":"image.83487.2992523.jpg","nome":"Laís"},{"genero":"feminino","foto":"image.83601.2992523.jpg","nome":"Allana"},{"genero":"feminino","foto":"image.83640.2992523.jpg","nome":"Maria Valentina"},{"genero":"feminino","foto":"image.83839.2992523.jpg","nome":"Ana Sophia"},{"genero":"feminino","foto":"image.83961.2992523.jpg","nome":"Milena"},{"genero":"feminino","foto":"image.84259.2992523.jpg","nome":"Fernanda"},{"genero":"feminino","foto":"image.84314.2992523.jpg","nome":"Amanda"},{"genero":"feminino","foto":"image.84556.2992523.jpg","nome":"Maria Vitória"},{"genero":"feminino","foto":"image.84740.2992523.jpg","nome":"Maria Helena"},{"genero":"feminino","foto":"image.85027.2992523.jpg","nome":"Eduarda"},{"genero":"feminino","foto":"image.85256.2992523.jpg","nome":"Maria Sophia"},{"genero":"feminino","foto":"image.85346.2992523.jpg","nome":"Stella"},{"genero":"feminino","foto":"image.85384.2992523.jpg","nome":"Camila"},{"genero":"feminino","foto":"image.85627.2992523.jpg","nome":"Gabrielly"},{"genero":"feminino","foto":"image.85689.2992523.jpg","nome":"Mirella"},{"genero":"feminino","foto":"image.86181.2992523.jpg","nome":"Ana Lívia"},{"genero":"feminino","foto":"image.86317.2992523.jpg","nome":"Bruna"}];
        const ambos = [{"genero":"ambos","foto":"image.77860.2992523.jpg","nome":"José Antônio"},{"genero":"ambos","foto":"image.77981.2992523.jpg","nome":"Carlos Roberto"},{"genero":"ambos","foto":"image.78122.2992523.jpg","nome":"Paulo Ricardo"},{"genero":"ambos","foto":"image.78201.2992523.jpg","nome":"Pedro Lucas"},{"genero":"ambos","foto":"image.78230.2992523.jpg","nome":"Marcos"},{"genero":"ambos","foto":"image.78280.2992523.jpg","nome":"Marcelo"},{"genero":"ambos","foto":"image.78384.2992523.jpg","nome":"Carlos Eduardo"},{"genero":"ambos","foto":"image.78466.2992523.jpg","nome":"Henrique"},{"genero":"ambos","foto":"image.78706.2992523.jpg","nome":"Raimundo"},{"genero":"ambos","foto":"image.78780.2992523.jpg","nome":"André Matheus"},{"genero":"ambos","foto":"image.78958.2992523.jpg","nome":"Fernando"},{"genero":"ambos","foto":"image.79078.2992523.jpg","nome":"Fabio"},{"genero":"ambos","foto":"image.79104.2992523.jpg","nome":"Leonardo"},{"genero":"ambos","foto":"image.79161.2992523.jpg","nome":"Guilherme"},{"genero":"ambos","foto":"image.79611.2992523.jpg","nome":"Leandro"},{"genero":"ambos","foto":"image.79711.2992523.jpg","nome":"Marcio"},{"genero":"ambos","foto":"image.79995.2992523.jpg","nome":"Jorge"},{"genero":"ambos","foto":"image.80082.2992523.jpg","nome":"Alexandre"},{"genero":"ambos","foto":"image.80180.2992523.jpg","nome":"Roberto"},{"genero":"ambos","foto":"image.80289.2992523.jpg","nome":"Edson Hugo"},{"genero":"ambos","foto":"image.80519.2992523.jpg","nome":"Diego"},{"genero":"ambos","foto":"image.80624.2992523.jpg","nome":"Vitor"},{"genero":"ambos","foto":"image.81065.2992523.jpg","nome":"Claudio"},{"genero":"ambos","foto":"image.81099.2992523.jpg","nome":"Matheus"},{"genero":"ambos","foto":"image.81142.2992523.jpg","nome":"Thiago"},{"genero":"ambos","foto":"image.81225.2992523.jpg","nome":"Geraldo"},{"genero":"ambos","foto":"image.81817.2992523.jpg","nome":"Adriano"},{"genero":"ambos","foto":"image.82143.2992523.jpg","nome":"Luciano"},{"genero":"ambos","foto":"image.82186.2992523.jpg","nome":"Julio"},{"genero":"ambos","foto":"image.82212.2992523.jpg","nome":"Renato"},{"genero":"ambos","foto":"image.82415.2992523.jpg","nome":"Alex"},{"genero":"ambos","foto":"image.82514.2992523.jpg","nome":"Vinicius"},{"genero":"ambos","foto":"image.82661.2992523.jpg","nome":"Rogerio"},{"genero":"ambos","foto":"image.82703.2992523.jpg","nome":"Samuel"},{"genero":"ambos","foto":"image.82758.2992523.jpg","nome":"Ronaldo"},{"genero":"ambos","foto":"image.82885.2992523.jpg","nome":"Mario"},{"genero":"ambos","foto":"image.82920.2992523.jpg","nome":"Flavio"},{"genero":"ambos","foto":"image.82979.2992523.jpg","nome":"Igor"},{"genero":"ambos","foto":"image.83021.2992523.jpg","nome":"Douglas"},{"genero":"ambos","foto":"image.83044.2992523.jpg","nome":"Davi"},{"genero":"ambos","foto":"image.83059.2992523.jpg","nome":"Manuel"},{"genero":"ambos","foto":"image.83160.2992523.jpg","nome":"Arhur"},{"genero":"ambos","foto":"image.83249.2992523.jpg","nome":"Heitor"},{"genero":"ambos","foto":"image.83264.2992523.jpg","nome":"Samuel"},{"genero":"ambos","foto":"image.83296.2992523.jpg","nome":"Miguel"},{"genero":"ambos","foto":"image.83341.2992523.jpg","nome":"Davi"},{"genero":"ambos","foto":"image.83412.2992523.jpg","nome":"Bernardo"},{"genero":"ambos","foto":"image.83427.2992523.jpg","nome":"Maurício"},{"genero":"ambos","foto":"image.83516.2992523.jpg","nome":"Denis"},{"genero":"ambos","foto":"image.83785.2992523.jpg","nome":"Inácio"},{"genero":"ambos","foto":"image.84020.2992523.jpg","nome":"Heitor"},{"genero":"ambos","foto":"image.84070.2992523.jpg","nome":"Augusto"},{"genero":"ambos","foto":"image.84145.2992523.jpg","nome":"Breno"},{"genero":"ambos","foto":"image.84226.2992523.jpg","nome":"Benício"},{"genero":"ambos","foto":"image.84411.2992523.jpg","nome":"Álvaro"},{"genero":"ambos","foto":"image.84497.2992523.jpg","nome":"Abner"},{"genero":"ambos","foto":"image.84628.2992523.jpg","nome":"Francisco"},{"genero":"ambos","foto":"image.84945.2992523.jpg","nome":"Wendel"},{"genero":"ambos","foto":"image.85011.2992523.jpg","nome":"Giovanni"},{"genero":"ambos","foto":"image.85060.2992523.jpg","nome":"Bernardo"},{"genero":"ambos","foto":"image.85433.2992523.jpg","nome":"Aécio"},{"genero":"ambos","foto":"image.85999.2992523.jpg","nome":"Ademar"},{"genero":"ambos","foto":"image.86283.2992523.jpg","nome":"Adelmiro"},{"genero":"ambos","foto":"image.86430.2992523.jpg","nome":"Adelino"},{"genero":"ambos","foto":"image.86466.2992523.jpg","nome":"Abraão"},{"genero":"ambos","foto":"image.86553.2992523.jpg","nome":"Acelino"},{"genero":"ambos","foto":"image.86713.2992523.jpg","nome":"Adão"},{"genero":"ambos","foto":"image.86747.2992523.jpg","nome":"Adelmiro"},{"genero":"ambos","foto":"image.86937.2992523.jpg","nome":"Adolfo"},{"genero":"ambos","foto":"image.84020.2992523.jpg","nome":"Jose"},{"genero":"ambos","foto":"image.77387.2992523.jpg","nome":"Abigail"},{"genero":"ambos","foto":"image.77918.2992523.jpg","nome":"Acácia"},{"genero":"ambos","foto":"image.77950.2992523.jpg","nome":"Sophia"},{"genero":"ambos","foto":"image.78011.2992523.jpg","nome":"Laura"},{"genero":"ambos","foto":"image.78067.2992523.jpg","nome":"Valentina"},{"genero":"ambos","foto":"image.78155.2992523.jpg","nome":"Helena"},{"genero":"ambos","foto":"image.78175.2992523.jpg","nome":"Isabella"},{"genero":"ambos","foto":"image.78253.2992523.jpg","nome":"Manuela"},{"genero":"ambos","foto":"image.78403.2992523.jpg","nome":"Júlia"},{"genero":"ambos","foto":"image.78541.2992523.jpg","nome":"Luiza"},{"genero":"ambos","foto":"image.78589.2992523.jpg","nome":"Lívia"},{"genero":"ambos","foto":"image.78638.2992523.jpg","nome":"Giovanna"},{"genero":"ambos","foto":"image.78734.2992523.jpg","nome":"Maria Luiza"},{"genero":"ambos","foto":"image.78847.2992523.jpg","nome":"Heloísa"},{"genero":"ambos","foto":"image.78890.2992523.jpg","nome":"Maria Eduarda"},{"genero":"ambos","foto":"image.78918.2992523.jpg","nome":"Maria Clara"},{"genero":"ambos","foto":"image.78991.2992523.jpg","nome":"Lara"},{"genero":"ambos","foto":"image.79016.2992523.jpg","nome":"Lorena"},{"genero":"ambos","foto":"image.79211.2992523.jpg","nome":"Beatriz"},{"genero":"ambos","foto":"image.79251.2992523.jpg","nome":"Mariana"},{"genero":"ambos","foto":"image.79285.2992523.jpg","nome":"Melissa"},{"genero":"ambos","foto":"image.79362.2992523.jpg","nome":"Cecília"},{"genero":"ambos","foto":"image.79500.2992523.jpg","nome":"Ana Clara"},{"genero":"ambos","foto":"image.79553.2992523.jpg","nome":"Ana Júlia"},{"genero":"ambos","foto":"image.79639.2992523.jpg","nome":"Isadora"},{"genero":"ambos","foto":"image.79696.2992523.jpg","nome":"Maria Júlia"},{"genero":"ambos","foto":"image.79776.2992523.jpg","nome":"Rafaela"},{"genero":"ambos","foto":"image.79834.2992523.jpg","nome":"Emanuelly"},{"genero":"ambos","foto":"image.79928.2992523.jpg","nome":"Esther"},{"genero":"ambos","foto":"image.80035.2992523.jpg","nome":"Lavínia"},{"genero":"ambos","foto":"image.80126.2992523.jpg","nome":"Sarah"},{"genero":"ambos","foto":"image.80364.2992523.jpg","nome":"Isabelly"},{"genero":"ambos","foto":"image.80403.2992523.jpg","nome":"Elisa"},{"genero":"ambos","foto":"image.80461.2992523.jpg","nome":"Nicole"},{"genero":"ambos","foto":"image.80851.2992523.jpg","nome":"Maria Alice"},{"genero":"ambos","foto":"image.80985.2992523.jpg","nome":"Gabriela"},{"genero":"ambos","foto":"image.81043.2992523.jpg","nome":"Maria"},{"genero":"ambos","foto":"image.81292.2992523.jpg","nome":"Rebeca"},{"genero":"ambos","foto":"image.81875.2992523.jpg","nome":"Letícia"},{"genero":"ambos","foto":"image.81927.2992523.jpg","nome":"Clara"},{"genero":"ambos","foto":"image.82015.2992523.jpg","nome":"Marina"},{"genero":"ambos","foto":"image.82092.2992523.jpg","nome":"Ísis"},{"genero":"ambos","foto":"image.82261.2992523.jpg","nome":"Alícia"},{"genero":"ambos","foto":"image.82356.2992523.jpg","nome":"Maria Cecília"},{"genero":"ambos","foto":"image.82547.2992523.jpg","nome":"Agatha"},{"genero":"ambos","foto":"image.82565.2992523.jpg","nome":"Catarina"},{"genero":"ambos","foto":"image.82594.2992523.jpg","nome":"Ana Laura"},{"genero":"ambos","foto":"image.82632.2992523.jpg","nome":"Larissa"},{"genero":"ambos","foto":"image.82817.2992523.jpg","nome":"Ana Beatriz"},{"genero":"ambos","foto":"image.82950.2992523.jpg","nome":"Maria Fernanda"},{"genero":"ambos","foto":"image.82993.2992523.jpg","nome":"Maitê"},{"genero":"ambos","foto":"image.83109.2992523.jpg","nome":"Vitória"},{"genero":"ambos","foto":"image.83217.2992523.jpg","nome":"Bianca"},{"genero":"ambos","foto":"image.83487.2992523.jpg","nome":"Laís"},{"genero":"ambos","foto":"image.83601.2992523.jpg","nome":"Allana"},{"genero":"ambos","foto":"image.83640.2992523.jpg","nome":"Maria Valentina"},{"genero":"ambos","foto":"image.83839.2992523.jpg","nome":"Ana Sophia"},{"genero":"ambos","foto":"image.83961.2992523.jpg","nome":"Milena"},{"genero":"ambos","foto":"image.84259.2992523.jpg","nome":"Fernanda"},{"genero":"ambos","foto":"image.84314.2992523.jpg","nome":"Amanda"},{"genero":"ambos","foto":"image.84556.2992523.jpg","nome":"Maria Vitória"},{"genero":"ambos","foto":"image.84740.2992523.jpg","nome":"Maria Helena"},{"genero":"ambos","foto":"image.85027.2992523.jpg","nome":"Eduarda"},{"genero":"ambos","foto":"image.85256.2992523.jpg","nome":"Maria Sophia"},{"genero":"ambos","foto":"image.85346.2992523.jpg","nome":"Stella"},{"genero":"ambos","foto":"image.85384.2992523.jpg","nome":"Camila"},{"genero":"ambos","foto":"image.85627.2992523.jpg","nome":"Gabrielly"},{"genero":"ambos","foto":"image.85689.2992523.jpg","nome":"Mirella"},{"genero":"ambos","foto":"image.86181.2992523.jpg","nome":"Ana Lívia"},{"genero":"ambos","foto":"image.86317.2992523.jpg","nome":"Bruna"}];

        function aleatorio(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        for (var i = 0; i < comentarios.length; i++) {
        // DEFINA A URL DA HOSPEDAGEM (IMAGENS)
        var url = "https://wpinfinite.net/";
        // VERIFICAR O GENERO
        var genero = document.getElementById("genero").value;
        // PEGAR DADOS ALEATORIOS
        var random = "";
        if (genero == "ambos"){
            var random = ambos[Math.floor(Math.random() * ambos.length)];
        } else if (genero == "feminino"){
            var random = feminino[Math.floor(Math.random() * feminino.length)];
        } else {
            var random = masculino[Math.floor(Math.random() * masculino.length)];
        }
        var inicio = comentarios[i].substring(0, 1);
        var html = ''
        if (inicio == "-") {
             var html = '<div class="mb-2" style="margin-left: 43px;"><div class="flex w-full space-x-1 items-center font-[Helvetica]"> <img src="'+ url +'imagens/'+ random.foto +'" class="cursor-pointer rounded-full h-10 w-10"> <div class="flex w-full flex-col py-1 px-3 rounded-[18px] bg-stone-100"> <div class="px-0.5 py-1"> <p class="font-semibold text-[#365899] text-[13px] leading-4 cursor-pointer hover:underline"> '+ random.nome +' </p><p class="text-sm leading-4 pt-0.5"> '+ comentarios[i].substring(1) +' </p></div></div></div><div class="flex w-full justify-between"> <div class="w-12 sm:w-16"></div><div class="grow flex gap-1 text-xs pt-0.5"> <p class="font-semibold cursor-pointer hover:underline text-[#90949c]"> Curtir </p><p class="text-[#90949c]">·</p><p class="font-semibold cursor-pointer hover:underline text-[#90949c]"> Responder </p><p class="text-[#90949c]">·</p><div class="text-[#90949c] flex gap-x-0.5 cursor-pointer hover:underline"> <p class="text-xs text-[#90949c]"> ' + aleatorio(0,50) + ' </p><p class="text-[#90949c] ">min</p></div></div><div class="-mt-2 mr-2 h-5 flex items-center relative drop-shadow rounded-full bg-slate-50 py-0.5 px-1 w-fit"> <img class="w-4 block" src="https://img.imageboss.me/atm/cdn/p/l.png"> <img class="w-4 -ml-1 mr-0.5" src="https://img.imageboss.me/atm/cdn/p/h.png"> <span class="text-xs text-[#90949c] pt-0.5"> ' + aleatorio(0,100) + ' </span> </div></div></div>'
        } else {
             var html = '<div class="mb-2"> <div class="flex w-full space-x-1 items-center font-[Helvetica]"> <img src="'+ url +'imagens/'+ random.foto +'" class="cursor-pointer rounded-full h-10 w-10"> <div class="flex w-full flex-col py-1 px-3 rounded-[18px] bg-stone-100"> <div class="px-0.5 py-1"> <p class="font-semibold text-[#365899] text-[13px] leading-4 cursor-pointer hover:underline"> '+ random.nome +' </p><p class="text-sm leading-4 pt-0.5"> '+ comentarios[i] +' </p></div></div></div><div class="flex w-full justify-between"> <div class="w-12 sm:w-16"></div><div class="grow flex gap-1 text-xs pt-0.5"> <p class="font-semibold cursor-pointer hover:underline text-[#90949c]"> Curtir </p><p class="text-[#90949c]">·</p><p class="font-semibold cursor-pointer hover:underline text-[#90949c]"> Responder </p><p class="text-[#90949c]">·</p><div class="text-[#90949c] flex gap-x-0.5 cursor-pointer hover:underline"> <p class="text-xs text-[#90949c]"> ' + aleatorio(0,50) + ' </p><p class="text-[#90949c] ">min</p></div></div><div class="-mt-2 mr-2 h-5 flex items-center relative drop-shadow rounded-full bg-slate-50 py-0.5 px-1 w-fit"> <img class="w-4 block" src="https://img.imageboss.me/atm/cdn/p/l.png"> <img class="w-4 -ml-1 mr-0.5" src="https://img.imageboss.me/atm/cdn/p/h.png"> <span class="text-xs text-[#90949c] pt-0.5"> ' + aleatorio(0,100) + ' </span> </div></div></div>'
        }  
        $("#fb_comentarios").append(html)    
        }
        }

}
function mostrarcomentarios(){
  // Variaveis
  var mostrar_comentarios = document.getElementById("mostrar_comentarios").value;
  if (mostrar_comentarios == "sim"){
    // Remover input de imagem
    $(".kuchaI1555436").removeClass("hide");
  } else {
    // Remover input de imagem
    $(".kuchaI1555436").addClass("hide");
  }

}
// Gerar index.html
function gerar(){
        var script_vsl = document.getElementById("script_vsl").value;
        var titulo_vsl = document.getElementById("titulo_vsl").value;
        // Definir script video
        $(script_vsl).appendTo(".script_video");

        var inicio = "<!DOCTYPE html><html lang=\"pt-BR\" dir=\"ltr\"><head><meta name=\"robots\" content=\"index, follow\"><link rel=\"shortcut icon\" href=\"data:\" /><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\" /><title>";
        var fim_inicio = "</title><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin><link href=\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&display=swap\" rel=\"stylesheet\" media=\"print\" onload=\"this.onload=null;this.removeAttribute('media');\">";
        var topo_resultado = $('#topo_resultado').html();
        var inicio_conteudo = "</head><body>";
        var fim_conteudo = "</body></html>";
        var resultado = $('#resultado').html();
        var a = document.createElement('a')
        var content = inicio + titulo_vsl + fim_inicio + topo_resultado + inicio_conteudo + resultado + fim_conteudo;
        var mimeType = "text/html";
        var filename = "index.html";
        var blob = new Blob([content], {type: mimeType})
        var url = URL.createObjectURL(blob)
        a.setAttribute('href', url)
        a.setAttribute('download', filename)
        a.click()
}

// Reload
function gerarmais() {
    window.location.reload();
}