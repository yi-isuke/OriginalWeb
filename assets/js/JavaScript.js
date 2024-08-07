$(".openbtn1").click(function () {
    $(this).toggleClass('active');
});

/* ページ２ */  



$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    speed: 300, //スライドのスピード
    arrows: true,// 矢印
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
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


let a = 0;
const transition = () => {
    //表面に使う3つの写真を取得
    let TR_show = new Array();
    let TR_next = new Array();
    let index; 
    for (let j = 0; j < 3; j++){
        index = a + j;
        if(index >= useImg.length){
            index = index - useImg.length;
        }
        TR_show[j] = useImg[index];
        TR_next[j] = useImg[index+1]; 
        // console.log(index)
    }
    if(a <= 3){//写真を一通り見せたら最初から
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
setInterval("transition()", 3000);

//使いたい写真を配列に入れる
const useImg = new Array("https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-8/img/img_01.jpg",
    "https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-8/img/img_02.jpg", 
    "https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-8/img/img_03.jpg",
    "https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-8/img/img_04.jpg",
    "https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-8/img/img_05.jpg"
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