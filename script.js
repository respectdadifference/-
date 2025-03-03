document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 2s";
        document.body.style.opacity = "1";
    }, 500);
});

document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 2s";
        document.body.style.opacity = "1";
    }, 500);

    // ギャラリー画像のフェードイン
    let images = document.querySelectorAll(".gallery-container img");
    images.forEach((img, index) => {
        img.style.opacity = "0";
        setTimeout(() => {
            img.style.transition = "opacity 1s ease-in-out";
            img.style.opacity = "1";
        }, 1000 + index * 500);
    });
});

