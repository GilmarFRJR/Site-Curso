// header------------------------------------------------------------------------------------------------------

$("#botao-video").click(()=>{
    $("#container-video").fadeIn()    
})


$("#fechar-video").click(()=>{
    $("#container-video").fadeOut()
    video.currentTime = 0
})


$("video").mouseenter(()=>{
    $("#fechar-video").fadeIn('fast')
})


$("video").mouseleave(()=>{
    $("#fechar-video").fadeOut('fast')
})


$("#fechar-video").mouseenter(()=>{
    $("#fechar-video").fadeIn('fast')
})

// header------------------------------------------------------------------------------------------------------






// FAQ------------------------------------------------------------------------------------------------------

$('.resposta').hide();
  
$('.pergunta').click(function() {
  var resposta = $(this).next('.resposta');
  
  if (resposta.is(':visible')) {
    resposta.slideUp(200);
    $(this).find(".seta").css('transform', 'translateY(-45%)')
  } else {
    $('.resposta').slideUp(200);
    resposta.slideDown(200);
    $(".seta").css('transform', 'translateY(-45%)')
    $(this).find(".seta").css('transform', 'translateY(-45%) rotate(180deg)')
  }
});










$('.ver-mais').append('<p>VER MAIS</p>').click(function(){

    let verMais = 'VER MAIS'
    let verMenos = 'VER MENOS'
    let textoAtual = $(this).find('p').text()



    if (textoAtual === verMais) {
        $(".esconder").slideDown()
        $(this).find('p').text(verMenos)
    } else {
        $(this).find('p').text(verMais)
        $(".esconder").slideUp()
    }
});


// FAQ------------------------------------------------------------------------------------------------------