$(document).ready(function () {
    // Menú desplegable

    $(".btn-menu").click(function (e) { 
        e.preventDefault();
        $(".menu-desplegable").toggleClass("menuAbierto");
        $(".btn-menu i").toggleClass("color-black");
    });

    $(".menu-desplegable a").click(function () { 
        
        $(".menu-desplegable").removeClass("menuAbierto");
        
    });




    // Scroll

    $(window).scroll(function () { 
        var htmlTop =$("html").scrollTop();
        if (htmlTop > 540){
            $("header").addClass("bg");
            $(".logo h1").addClass("color-black");
            $(".menu-desk a").addClass("color-black");
            $(".btn-menu i").addClass("color-black");
        }else{
            $("header").removeClass("bg");
            $(".logo h1").removeClass("color-black");
            $(".menu-desk a").removeClass("color-black");
            $(".btn-menu i").removeClass("color-black");
        }
    });



    // Carrousel
    $('.main-carousel').flickity({

  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  autoPlay: true
});
});