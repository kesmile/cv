/*
 *  My scripts
 */

$(document).ready(function(){
      
      $('#s1,#s2,#s4').on('click',function(e){
            //prevenir el comportamiento predeterminado del enlace
            e.preventDefault();
            //obtenemos el id del elemento en que debemos posicionarnos
            var strAncla=$(this).attr('href');
            //utilizamos body y html, ya que dependiendo del navegador del navegador uno u otro no funciona
            $('body,html').stop(true,true).animate({
            //realizamos la animacion hacia el ancla
            scrollTop:$(strAncla).offset().top
            },1500);});
    /*
     *   Efectos de portada
     */
      setTimeout(function(){
           $('.title').fadeIn(1000);
      },1500);
         $("#logo").animate({opacity: 1,top: "0"},{duration:1500});
      setTimeout(function(){
           $("#arrow-down").fadeIn('slow');
      },3000);
    /*
     *      Efectos en about
     */
    var i = 0;
      $("#typed").typed({
            strings: ['"EL verdadero Programador no llora cuando nace"', "Hazlo simple, tan simple como sea posible,</br> pero no más.", "Lo siento, Dave. No puedo hacer eso.", "Dios es real, a menos que sea declarado entero."],
            typeSpeed: 30,
            backDelay: 500,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){
                  i = 0;
                  },
            preStringTyped: function() {
                        var obj = ["Anonimo","Albert Einstein","HAL 9000","Anónimo"];
                        $("#autor").html(obj[i]);
                        i++;
                  },
        });

   /*
    * Efectos en portafolio
    */
         $('.portafolio-item').hover(function(){
                  $(this).addClass('portafolio-item-hover');
                  $(this).children('a').find('img').stop().animate({"opacity": 0.5});
               },
               function() {
                  $(this).removeClass('portafolio-item-hover');
                  $(this).children('a').find('img').stop().animate({"opacity": 1});
         });
   /*
    * Efectos al bajar scroll
    */
   var portada = $('#portada').offset();
   var about = $('#about').offset();
   $(window).on('scroll', function() {
      
      });
   
   
});