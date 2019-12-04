$(function() {

	// // Custom JS
   

    


});



(function($) {

    $('[data-fancybox="images"]').fancybox({
        buttons : [ 
            'zoom',
            'slideShow',
            // 'share',
            // 'fullScreen',
            // 'download',
            "thumbs",
            'close'
        ],
        loop: true,
        gutter : 10,
        keyboard: true,
        arrows: true,
        infobar: true,
        smallBtn: "auto",
        toolbar: true,
        protect: true,
        modal: false,
        idleTime: 3,
        animationEffect: "zoom",
        animationDuration: 600,
        transitionEffect: "fade",
        transitionDuration: 400,
        slideClass: "myClass",
        baseClass: "myclass",
        slideShow: {
            autoStart: false,
            speed: 1000
        },
        youtube : {
        controls : 0,
        showinfo : 0
        },
        thumbs : {
            autoStart : false
        }
        });
})(jQuery_3_4_1);
