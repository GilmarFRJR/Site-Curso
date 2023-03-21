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