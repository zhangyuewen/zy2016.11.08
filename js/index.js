$(function(){
    $(".xz").click(function(){
        $(".xz").next(".son").finish();
        //$(".xz").next(".son").slideUp();
        $(this).next(".son").slideToggle();
    })
})