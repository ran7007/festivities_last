
//햄버튼
document.addEventListener("DOMContentLoaded", () => {
    const ham = document.querySelector(".ham");
    const mgnb = document.querySelector(".mgnb");
    const overlay = document.createElement("div");
    const mainContent = document.querySelector(".main");
    const headerLogo = document.querySelector("#header h1");
    const menuItems = document.querySelectorAll(".mgnb li");


    // Create overlay for background dimming
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    ham.addEventListener("click", () => {
        const isActive = ham.classList.toggle("active");
        mgnb.classList.toggle("active", isActive);
        overlay.classList.toggle("active", isActive);
        mainContent.classList.toggle("dimmed", isActive);

        // 로고 숨김 처리
        headerLogo.style.opacity = isActive ? "0" : "1";
        headerLogo.style.pointerEvents = isActive ? "none" : "auto";

        // 각 항목에 지연 시간 추가
        if (isActive) {
            mgnbLogo.style.animationDelay = "0s";
            menuItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`; // 순차적 딜레이
            });
        } else {
            mgnbLogo.style.animationDelay = "0s";
            menuItems.forEach((item) => {
                item.style.animationDelay = "0s"; // 초기화
            });
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const slides = document.querySelectorAll(".swiper-slide");

        slides.forEach((slide) => {
            const arcRight = slide.querySelector(".arc_right");
            if (arcRight) {
                const slideHeight = slide.offsetHeight; // 슬라이드 높이 가져오기
                arcRight.style.height = `${slideHeight}px`; // 높이 동기화
            }
        });
    });

    // Close menu when overlay or menu item is clicked
    overlay.addEventListener("click", () => {
        ham.classList.remove("active");
        mgnb.classList.remove("active");
        overlay.classList.remove("active");
        mainContent.classList.remove("dimmed");
        headerLogo.style.opacity = "1";
        headerLogo.style.pointerEvents = "auto";

        mgnbLogo.style.animationDelay = "0s";

        menuItems.forEach((item) => {
            item.style.animationDelay = "0s"; // 초기화
        });
    });

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            ham.classList.remove("active");
            mgnb.classList.remove("active");
            overlay.classList.remove("active");
            mainContent.classList.remove("dimmed");
            headerLogo.style.opacity = "1";
            headerLogo.style.pointerEvents = "auto";

            mgnbLogo.style.animationDelay = "0s";
            menuItems.forEach((item) => {
                item.style.animationDelay = "0s"; // 초기화
            });
        });
    });
});



const arc_bott = new Swiper('.arc_bott', {
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    freeMode: false,
    breakpoints: {
        1700: {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    }
});

const wrapper = document.querySelector('.soc_sns .swiper-wrapper');
for (let i = 1; i <= 4; i++) {
    const clone = wrapper.children[i - 1].cloneNode(true); // 슬라이드 복제
    wrapper.appendChild(clone);
}
document.addEventListener('DOMContentLoaded', () => {
    const soc_sns = new Swiper('.soc_sns', {
        slidesPerView: 4,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: false
            },
            800: {
                slidesPerView: 1.5,
                spaceBetween: 10,
                centeredSlides: false
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 10,
                centeredSlides: false
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 10,
                centeredSlides: false
            },
            1620: {
                slidesPerView: 4,
                spaceBetween: 20,
                centeredSlides: false
            },
        },
        autoplay: {
            delay: 1900,
            disableOnInteraction: false,
        },
        freeMode: false
    });
});


//지도

let isDaumMapInitialized = false;

function initializeDaumMap() {
    if (!isDaumMapInitialized) {
        new daum.roughmap.Lander({
            "timestamp": "1737440504593",
            "key": "2muah",
            "mapWidth": "2000",
            "mapHeight": "1000"
        }).render();
        isDaumMapInitialized = true;
    }
}

document.getElementById('changeMapImageLink').addEventListener('click', function (e) {
    e.preventDefault();
    const mapImage = document.getElementById('mapImage');
    const daumMap = document.getElementById('daumRoughmapContainer1737440504593');
    const linkText = document.getElementById('changeMapImageLink');

    if (daumMap.style.display === 'none' || daumMap.style.display === '') {
        // 카카오 지도 표시
        daumMap.style.display = 'block';
        mapImage.style.display = 'none';
        linkText.textContent = '오시는 길 간단 보기';
        linkText.style.backgroundColor = '#1D2549';
        linkText.style.color = '#fff';

        initializeDaumMap();

    } else {
        // 카카오 지도 숨김
        daumMap.style.display = 'none';
        mapImage.style.display = 'block';
        linkText.textContent = '카카오 지도로 보기';
        linkText.style.backgroundColor = '';
        linkText.style.color = '';
    }
});
