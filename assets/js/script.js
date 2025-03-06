document.addEventListener("DOMContentLoaded", function () {
    // Circular animation
    const container = document.querySelector(".background-circles");

    if (container) {
        for (let i = 1; i <= 50; i++) {
            let circle = document.createElement("div");
            circle.classList.add("circle");
            circle.style.animationDelay = `${i * 0.15}s`;
            container.appendChild(circle);
        }
    }

    // Video popup
    const videoPopup = document.getElementById("video-popup");
    const popupVideo = document.getElementById("popup-video");
    const closeBtn = document.querySelector(".close-btn");

    document.querySelectorAll(".icon-box").forEach(icon => {
        icon.addEventListener("click", function () {
            const videoSrc = this.getAttribute("data-video");
            if (popupVideo) {
                popupVideo.src = videoSrc;
                videoPopup.classList.add("show");
                popupVideo.play();
            }
        });
    });

    closeBtn.addEventListener("click", function () {
        videoPopup.classList.remove("show");
        setTimeout(() => {
            if (popupVideo) {
                popupVideo.pause();
                popupVideo.currentTime = 0;
                popupVideo.src = "";
            }
        }, 400);
    });

    videoPopup.addEventListener("click", function (event) {
        if (event.target === videoPopup) {
            videoPopup.classList.remove("show");
            setTimeout(() => {
                if (popupVideo) {
                    popupVideo.pause();
                    popupVideo.currentTime = 0;
                    popupVideo.src = ""; 
                }
            }, 400);
        }
    });
});


