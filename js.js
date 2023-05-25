$(document).ready(function(){
    $(".card").mouseover(function(){
        $(this).children("img").eq(1).stop().animate({
            "translate":"-45%",
            "rotate":"-40deg"
        }, 1000);
        }).mouseleave(function(){
            $(this).children("img").eq(1).stop().animate({
                "translate":"0%",
                "rotate":"0deg"
            }, 1000);
        })
        
    })

$(document).ready(function(){
    $(".card").mouseover(function(){
        $(this).children("img").eq(2).stop().animate({
            "translate":"45%",
            "rotate":"40deg"
        }, 1000);
        }).mouseleave(function(){
            $(this).children("img").eq(2).stop().animate({
                "translate":"0%",
                "rotate":"0deg"
            }, 1000);
        })
    })
    
$(document).ready(function() {
    $(".navbar-icon").click(function() {
      if ($(this).children("span").hasClass("min-width")) {
        $(this).children("span").removeClass("min-width");
        $(this).children("span").animate({ width:"68%" }, 1000);
        $("#drop-down").slideDown(1000);
      } else {
        $(this).children("span").addClass("min-width");
        $(this).children("span").animate({ width: "40%" }, 1000);
        $("#drop-down").slideUp(1000);
      }
    });
  });