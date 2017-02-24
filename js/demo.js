/**
 * Created by Administrator on 2016/11/25.
 */
$(function ($) {
    $(".nav li a").on('click', function(){
        $(".nav .active").removeClass('active');
        $(this).parent().addClass('active');
    });
});

iziToast.settings({
    timeout: 5000,
    // position: 'center',
    // imageWidth: 50,
    pauseOnHover: true,
    // resetOnHover: true,
    close: true,
    progressBar: true
    // layout: 1,
    // balloon: true,
    // target: '.target',
    // icon: 'material-icons',
    // iconText: 'face',
    // animateInside: false,
    // transitionIn: 'flipInX',
    // transitionOut: 'flipOutX',
});

//info 按钮
$(".trigger-info").on('click', function (event) {
    event.preventDefault();

    iziToast.info({
        title: '你好',
        message: '欢迎打开首页！',
        // imageWidth: 70,

        position: 'bottomLeft',
        transitionIn: 'bounceInRight',
        // rtl: true,
        // iconText: 'star',
        onOpen: function(){
            console.log('callback abriu! info');
        },
        onClose: function(){
            console.log("callback fechou! info");
        }
    });
});
//成功按钮
$(".trigger-success").on('click', function (event) {
    event.preventDefault();

    iziToast.success({
        title: '完成',
        message: '成功打开消息窗口！',
        position: 'bottomRight',
        transitionIn: 'bounceInLeft',
        // iconText: 'star',
        onOpen: function(){
            console.log('callback abriu! success');
        },
        onClose: function(){
            console.log("callback fechou! success");
        }
    });
});
//警告按钮
$(".trigger-warning").on('click', function (event) {
    event.preventDefault();

    iziToast.warning({
        title: '注意',
        message: '你正在进行一项严重的操作！',
        position: 'topLeft',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX'
    });
});
//错误按钮
$(".trigger-error").on('click', function (event) {
    event.preventDefault();

    iziToast.error({
        title: 'Error',
        message: 'Illegal operation',
        position: 'topRight',
        transitionIn: 'fadeInDown'
    });
});
//大窗口1按钮
$(".trigger-custom1").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        title: 'Hey',
        icon: 'icon-drafts',
        class: 'custom1',
        message: 'What would you like to add?',
        position: 'bottomCenter',
        image: 'img/avatar.jpg',
        balloon: true,
        buttons: [
            ['<button>Photo</button>', function (instance, toast) {

                // instance.hide({ transitionOut: 'fadeOutUp' }, toast);

                iziToast.show({
                    color: 'dark',
                    icon: 'icon-drafts',
                    title: 'OK',
                    message: 'Callback Photo!',
                    position: 'bottomCenter',
                    // iconText: 'star',
                });

            }],
            ['<button>Video</button>', function (instance, toast) {

                // instance.hide({ transitionOut: 'fadeOutUp' }, toast);

                iziToast.show({
                    color: 'dark',
                    icon: 'icon-ondemand_video',
                    title: 'OK',
                    message: 'Callback V铆deo!',
                    position: 'bottomCenter',
                    // iconText: 'star',
                });

            }],
            ['<button>Text</button>', function (instance, toast) {

                // instance.hide({ transitionOut: 'fadeOutUp' }, toast);

                iziToast.show({
                    color: 'dark',
                    icon: 'icon-event_note',
                    title: 'OK',
                    message: 'Callback Text!',
                    position: 'bottomCenter',
                    // iconText: 'star',
                });

            }],
        ]
    });

});



//大窗口2按钮
$(".trigger-custom2").on('click', function (event) {
    event.preventDefault();

    iziToast.show({
        class: 'test',
        color: 'dark',
        icon: 'icon-contacts',
        title: 'Hello!',
        message: 'Do you like it?',
        position: 'topCenter',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        progressBarColor: 'rgb(0, 255, 184)',
        image: 'img/avatar.jpg',
        imageWidth: 70,
        layout:2,
        onClose: function(){
            console.info('onClose');
        },
        iconColor: 'rgb(0, 255, 184)'
    });
});

document.addEventListener('iziToast-open', function(data){
    if(data.detail.class == 'test'){
        console.log('test open');
    }
});


document.addEventListener('iziToast-close', function(data){
    if(data.detail.class == 'test'){
        console.log('test close');
    }
});



