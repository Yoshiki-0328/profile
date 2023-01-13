'USE STRICT';

const $topBtn = document.getElementById('js-topBtn');

// スクロールボタンの表示・非表示
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>500){
        $topBtn.classList.remove('hidden');
    }else{
        $topBtn.classList.add('hidden');
    }
});

// トップボタンへのスクロール
$topBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});


const $clickBtns = document.querySelectorAll('.flex li a');
console.log($clickBtns);

// 押した項目の位置を取得し、スクロールする
$clickBtns.forEach(clickBtn =>{
    clickBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        const targetId = clickBtn.hash;
        const targetElement = document.querySelector(targetId);
        
        const targetY =window.pageYOffset + targetElement.getBoundingClientRect().top;
        window.scrollTo({
            top:targetY,
            behavior:"smooth"
        });
    });
});
