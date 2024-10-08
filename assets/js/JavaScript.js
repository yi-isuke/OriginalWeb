// $(".summary").mouseover{
//     $(this).toggleClass('on-summary');
// }

//変数は「箱」

const btnMenu = document.querySelector("#btn-menu");

$(".openbtn1").click(function () {
    $(this).toggleClass('active');
    $(btnMenu).toggleClass('active');
});

$(function(){
    topBtn=$('.page_top');
    // topBtn.hide();
    
    // ボタンの表示設定
    // $(window).scroll(function(){
    // if($(this).scrollTop()>80){
    //     // 画面を80pxスクロールしたら、ボタンを表示する
    //     topBtn.fadeIn();
    // }else{
    //     // 画面が80pxより上なら、ボタンを表示しない
    //     topBtn.fadeOut();
    // }
    // });
    
    // ボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
    });
});


/* ページ２ */  

$(".info").modaal({
    overlay_close:true,//モーダル背景クリック時に閉じるか
    before_open:function(){// モーダルが開く前に行う動作
        $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
    },
    after_close:function(){//モーダルが閉じた後に行う動作
        $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
    }
});


/*ページ３*/
$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    autoplaySpeed:1500,//スライドの移動間隔
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    speed: 300, //スライドのスピード
    arrows: true,// 矢印
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    centerMode: true,
    responsive: [
        {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
        slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
        }
    },
    {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
        slidesToShow: 1,//スライドを画面に1枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        }
    }
    ]
});

/*page4のトランジション*/

    // トリミング
    // $(window).load(function() {
    //     $('.activity').imageFit();
    // });
    // $('.activity').imageFit({
    //     mode: 'inside',
    //     force: 'true'
    // });

let a = 0;
const transition = () => {
    //表面に使う3つの写真を取得
    let TR_show = new Array();
    // let TR_next = new Array();
    let index; 
    for (let j = 0; j < 3; j++){
        index = a + j;
        if(index >= useImg.length){
            index = index - useImg.length;
        }
        TR_show[j] = useImg[index];
        // TR_next[j] = useImg[index+1]; 
        console.log(index)
    }
    if(a < 3){//写真を一通り見せたら最初から
        a++;
        // console.log(a);
    } else {
        a = 0;
    }
    

    //取得したTR_showの写真を表示
    document.getElementById("activity1_img").src=TR_show[2];
    document.getElementById("activity2_img").src=TR_show[1];
    document.getElementById("activity3_img").src=TR_show[0];

}
setInterval('transition()', 1800);
// $(".activity").click(function(){
//     transition();
// });

//使いたい写真を配列に入れる
const useImg = new Array("file:///c%3A/Users/81801/OneDrive/yusuke.seedTech/Web%E5%88%B6%E4%BD%9C/OriginalWeb/assets/image/%E3%83%95%E3%83%A9%E3%82%A4%E3%83%B3%E3%82%B0.png",
    "file:///c%3A/Users/81801/OneDrive/yusuke.seedTech/Web%E5%88%B6%E4%BD%9C/OriginalWeb/assets/image/%E3%82%AA%E3%83%BC%E3%83%90%E3%83%BC.png",
    "file:///c%3A/Users/81801/OneDrive/yusuke.seedTech/Web%E5%88%B6%E4%BD%9C/OriginalWeb/assets/image/%E3%82%B9%E3%83%91%E3%82%A4%E3%82%AF.png"
);

$('.flower_top').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 10000,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 3,//スライドを画面に4枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    responsive: [
        {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
            speed: 6000,
            slidesToShow: 2,//スライドを画面に2枚見せる
        }
    },
    {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
        slidesToShow: 1.5,//スライドを画面に1.5枚見せる
        }
    }
    ]
});
//スライド下の設定
$('.flower_bottom').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 10000,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 3,//スライドを画面に4枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    rtl: true,//スライダの表示方向を左⇒右に変更する
    responsive: [
        {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
            speed: 6000,
            slidesToShow: 2,//スライドを画面に2枚見せる
        }
    },
    {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
        slidesToShow: 1.5,//スライドを画面に1.5枚見せる
        }
    }
    ]
});