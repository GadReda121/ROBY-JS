$(document).ready(function(){
    // Start Codes
    $(window).scroll(function(){
        if ( this.scrollY > 20 ){
            $(".header").css({
                "backgroundColor":"#1A1A1A",
                "box-shadow":"rgba(0,0,0,.1) 0px 1px 5px"
            });
            $(".header .logo h3 a").css("color","#f8f9fa");
            $(".header i").css("color","#f8f9fa");
            $(".header .menu ul li a").css("color","#f8f9fa");
        } else{
            $(".header").css({
                "background":"none",
                "box-shadow":"rgba(0,0,0,.1) 0px 0px 0px"
            });
            $(".header .logo h3 a").css("color","#1A1A1A");
            $(".header i").css("color","#1A1A1A");
            $(".header .menu ul li a").css("color","#1A1A1A");
        }
    });

    // add to card
    if( $(".buying").hasClass("feature") ){
        console.log("Right");
    } else {
        $(".buying").html("Please , Put Anything <h5>&#128525;</h5>").css({
            "display":"flex",
            "color":"#f8f9fa"
        });
    }

    $(".buying").slideUp();

    $(".header .tools i").click(function(){
        $(".buying").slideToggle(500);
    });
    // feature =>  card
    // feature1
    $(".feature .feature1 a").click(function(e){
        e.preventDefault();
        $(".buying").html($(".feature11"));
        $(".feature11").css("display","grid");
    });
    $(".feature11 a").click(function(e){
        e.preventDefault();
        $(".feature11").css("display","none");
        $(".buying").slideUp();
    });
    // feature2
    $(".feature .feature2 a").click(function(e){
        e.preventDefault();
        $(".buying").html($(".feature22"));
        $(".feature22").css("display","grid");
    });
    $(".feature22 a").click(function(e){
        e.preventDefault();
        $(".feature22").css("display","none");
        $(".buying").slideUp();
    });
    // feature3
    $(".feature .feature3 a").click(function(e){
        e.preventDefault();
        $(".buying").html($(".feature33"));
        $(".feature33").css("display","grid");
    });
    $(".feature33 a").click(function(e){
        e.preventDefault();
        $(".feature33").css("display","none");
        $(".buying").slideUp();
    });
    // women1
    $(".women .women1 a").click(function(e){
        e.preventDefault();
        $(".buying").html($(".women11"));
        $(".women11").css("display","grid");
    });
    $(".women11 a").click(function(e){
        e.preventDefault();
        $(".women11").css("display","none");
        $(".buying").slideUp();
    });
    // women2
    $(".women .women2 a").click(function(e){
        e.preventDefault();
        $(".buying").html($(".women22"));
        $(".women22").css("display","grid");
    });
    $(".women22 a").click(function(e){
        e.preventDefault();
        $(".women22").css("display","none");
        $(".buying").slideUp();
    });
    // women3
    $(".women .women3 a").click(function(e){
        e.preventDefault();
        $(".buying").html($(".women33"));
        $(".women33").css("display","grid");
    });
    $(".women33 a").click(function(e){
        e.preventDefault();
        $(".women33").css("display","none");
        $(".buying").slideUp();
    });
    // women4
    $(".women .women4 a").click(function(e){
        e.preventDefault();
        $(".buying").html($(".women44"));
        $(".women44").css("display","grid");
    });
    $(".women44 a").click(function(e){
        e.preventDefault();
        $(".women44").css("display","none");
        $(".buying").slideUp();
    });
    // new1
    $(".new2 .newChildren1 a").click(function(e){
        e.preventDefault();
        $(".buying").html($(".newChildren11"));
        $(".newChildren11").css("display","grid");
    });
    $(".newChildren11 a").click(function(e){
        e.preventDefault();
        $(".newChildren11").css("display","none");
        $(".buying").slideUp();
    });
    // new2
    $(".new2 .newChildren2 a").click(function(e){
        e.preventDefault();
        $(".buying").html($(".newChildren22"));
        $(".newChildren22").css("display","grid");
    });
    $(".newChildren22 a").click(function(e){
        e.preventDefault();
        $(".newChildren22").css("display","none");
        $(".buying").slideUp();
    });
    // new3
    $(".new3 .newChildren1 a").click(function(e){
        e.preventDefault();
        $(".buying").html($(".newChildren33"));
        $(".newChildren33").css("display","grid");
    });
    $(".newChildren33 a").click(function(e){
        e.preventDefault();
        $(".newChildren33").css("display","none");
        $(".buying").slideUp();
    });
    // new4
    $(".new3 .newChildren2 a").click(function(e){
        e.preventDefault();
        $(".buying").html($(".newChildren44"));
        $(".newChildren44").css("display","grid");
    });
    $(".newChildren44 a").click(function(e){
        e.preventDefault();
        $(".newChildren44").css("display","none");
        $(".buying").slideUp();
    });
    // Mennu-Mob
    $(".header .tools-mob .fa-align-left").click(function(){
        $(".menu-mob").slideDown();
        $(".header .tools-mob .fa-align-left").css("display","none");
        $(".header .tools-mob .fa-align-right").css("display","inline-block");
    });
    $(".header .tools-mob .fa-align-right").click(function(){
        $(".menu-mob").slideUp();
        $(".header .tools-mob .fa-align-left").css("display","inline-block");
        $(".header .tools-mob .fa-align-right").css("display","none");
    });
    
    // hover => feature
    $(".feature .features").hover(function(){
        $(this).css("transform","translateY(-15px)");
    },function(){
        $(this).css("transform","translateY(0px)");
    });

    $(".featureTwo .featuresTwo").hover(function(){
        $(this).css("transform","translateY(-15px)");
    },function(){
        $(this).css("transform","translateY(0px)");
    });

    // hover => women
    $(".women .womens").hover(function(){
        $(this).css("transform","translateY(-15px)");
    },function(){
        $(this).css("transform","translateY(0px)");
    });
    // hover => new
    $(".new .new1").hover(function(){
        $(this).css("transform","translateY(-15px)");
    },function(){
        $(this).css("transform","translateY(0px)");
    });
    // 2
    $(".new .new2").children().hover(function(){
        $(this).css("transform","translateY(-15px)");
    },function(){
        $(this).css("transform","translateY(0px)");
    });
    // 3
    $(".new .new3").children().hover(function(){
        $(this).css("transform","translateY(-15px)");
    },function(){
        $(this).css("transform","translateY(0px)");
    });
    // End Codes
});
