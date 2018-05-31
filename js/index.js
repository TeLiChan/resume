$(function(){
	$(".hide").hide();
	    $("input[type=button]").click(function(){
      var txt=$("input[type=text]").val();
      if($.trim(txt)!=""){

        $("table tr:not('#theader')").hide().filter(":contains('"+txt+"')").show().css("background","pink");
        $(".showAgain").show();
      }else{
        $("table tr:not('#theader')").css("background","#fff").show();
        $(".showAgain").hide();
      }
    });
	$('.slip a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top + 10
        }, 600);
        event.preventDefault();
    });    
});

function AutoScroll(obj) {
    $(obj).find("ul:first").animate({
        marginTop: "-80px"
    },
    500,
    function() {
        $(this).css({
            marginTop: "0px"
        }).find("li:first").appendTo(this);
    });
}
$(document).ready(function() {
    setInterval('AutoScroll("#demo")', 3000)
});

