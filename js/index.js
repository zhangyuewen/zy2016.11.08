$(function(){
    var clientW=$(window).width();
    var clientH=$(window).height();
    $(".menu_son").css({width:clientW,height:clientH});

    $(".xz").click(function(){
        $(".xz").next(".son").finish();
        //$(".xz").next(".son").slideUp();
        $(this).next(".son").slideToggle();
    })

    $(".menu").click(function(){
        //$(".menu").next(".menu_son").finish();
        $(".menu").next(".menu_son").slideToggle();
    })



    /*轮播图*/

    var now=0;
    var next=0;
    var nowtime=0;
    var flag=true;

    function move1(){
        next++;
        if(next==3){
            next=0;
            flag=false;
            $(".progress").css("width",0);
        }
        $(".pic:eq("+now+")").animate({width:"80%",height:"80%"}).css("zIndex",0);
        $(".pic:eq("+next+")").animate({left:0},function(){
            $(".pic:eq("+now+")").css({left:"100%",height:"100%",width:"100%"});
            now=next;
            nowtime=0;
            flag=true;
        }).css("zIndex",1);

    }
    function move2(){
        nowtime+=50;
        var bili=nowtime/3000;
        if(bili>1){
            bili=1;
        }
        $(".progress").eq(now).css({width:bili*100+"%"});
        if(flag==false){
            $(".progress").css("width",0);
        }
    }
    var t1=setInterval(move1,3000);
    var t2=setInterval(move2,50);

    $(window).blur(function(){
        clearInterval(t1);
        clearInterval(t2);
    })
    $(window).focus(function(){
        t1=setInterval(move1,3000);
        t2=setInterval(move2,50);
    })

    function stop() {
        /* 定时器停掉*/
        clearInterval(t1);
        clearInterval(t2);

        /*按钮的变化*/
        $(".btns_list").find(".progress").css("width", 0);
        $(".btns_list").eq(next).find(".progress").css({width:"100%"});

        /*轮播图发生变化*/
        if (next > now) {
            $(".pic:eq("+now+")").animate({width: "80%", height: "80%"}).css("zIndex", 0);

            $(".pic:eq(" + next + ")").animate({left: 0}, function () {
                $(".pic:eq(" + now + ")").css({left: "100%", width: "100%", height: "100%"});
                now = next;
            }).css("zIndex", 1)
        } else {
            $(".pic:eq(" + now + ")").animate({left: "100%"}).css("zIndex", 1);
            $(".pic").eq(next).css({
                width: "80%", height: "80%", left: 0
            }).animate({width: "100%", height: "100%"}, function () {
                now = next;
            })


        }
    }


    $(".btns_list").click(function(){
        next=$(this).index(".btns_list");
        stop();
    })

    $(".leftBtn").click(function(){
        next--;
        if(next==-1){
            next=2;
        }
        stop();
    })
    $(".rightBtn").click(function(){
        next++;
        if(next==3){
            next=0;
        }
        stop();
    })
})