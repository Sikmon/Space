
$( document ).ready(function() {

    $('.planets').click(function(e){
      $('.planets').css("text-decoration","none");
      $(this).css("text-decoration","underline");
        

        e.preventDefault();

        var planet = $(this).data("value");

        $.getJSON("data.json", function(data){
          console.log(data);

            $('.planet-name').html(planet);
            $('.planet-image').attr("src",data[planet].images.webp);
            $('.planet-description').html(data[planet].description);
            $('.planet-distance').html(data[planet].distance);
            $('.planet-travel').html(data[planet].travel);

           

        }).fail(function(){
            console.log("An error has occurred.");
        });

    });
    
    $('.options').click(function(e){
      $('.options').css('background-color', 'rgb(34, 33, 33)');
      $(this).css('background-color', 'white');
      $('options').on("mouseenter",function(){
      $(this).css("background-color","white");
    })
        var option = $(this).data("value");
        
        $.getJSON("data.json",function(data) {
          
          $('.crew-name').html(option);
          $('.crew-role').html(data[option].role);
          $('.crew-description').html(data[option].description);
          $('.crew-image').attr("src",data[option].images.png);
        
          
        });
        
      });
      $('.choices').click(function(e){
        $('.choices').css("background-color","transparent").css("color","white");
        $(this).css("background-color","white").css("color","black");
           var choice= $(this).data("value");
           $.getJSON("data.json",function(data){
            $('.technology-name').html(choice);
            $('.technology-description').html(data[choice].description);
            $('.portrait').attr("src",data[choice].images.portrait);
            $('.landscape').attr("src",data[choice].images.landscape);
           });   
      });
      


        $('.burger').on("click", function (e) {
        $("nav").animate({ right: "0" }, 400); 
        e.stopPropagation();
        $(".overlay").fadeIn(300);
      });
    
      $('.close').on("click", function (e) {
        $("nav").animate({ right: "-100%" }, 300);
        $(".overlay").fadeOut(300); 
        e.stopPropagation();
      });
      $(document).on('click',function(){
        $("nav").animate({ right: "-100%" }, 300);
        $(".overlay").fadeOut(300); 
      });
      $(window).on("resize", function () {
        if ($(window).width() <= 894) {
          $("nav").css("right", "-100%");
          $(".overlay").hide();
        }
      });
      $("nav").on("click", function (e) {
        e.stopPropagation(); 
      });
    
    });

    