document.addEventListener("DOMContentLoaded", function() {
    let overlay = document.getElementById("transition-overlay");

    // ページロード時にフェードイン
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 1s ease-in-out";
        document.body.style.opacity = "1";
    }, 300);

    // ページ遷移時のエフェクト
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            let href = this.href;
            
            // 光のエフェクトを発動 & フェードアウト
            overlay.style.opacity = "1";
            setTimeout(() => {
                document.body.style.opacity = "0";
                setTimeout(() => {
                    window.location.href = href;
                }, 500); // フェードアウト後に遷移
            }, 500); // 光のエフェクトの時間
        });
    });
});

#transition-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(0,0,0,1) 100%);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease-in-out;
    z-index: 9999;
}