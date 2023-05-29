const app = Vue.createApp({
    data() {
        return {
            showList: false,
            screenWidth: window.innerWidth,
            activeBtn: 'buttonEng',
            updateTime: '',
            menuItems: [
                { id: 1, link: '#home', text: 'Home' },
                { id: 2, link: '#about_me', text: 'About me' },
                { id: 3, link: '#skills', text: 'Skills' },
                { id: 4, link: '#portfolio', text: 'Portfolio' },
                { id: 5, link: '#contacts', text: 'Contacts' }
            ],
            socialsImg: [
                { id: 1, src: 'linkedin.svg', alt: 'LinkedIn' },
                { id: 2, src: 'insta.svg', alt: 'Instagram' },
                { id: 3, src: 'behance.svg', alt: 'Behance' },
                { id: 4, src: 'dribble.svg', alt: 'Dribble' }
            ],
            portfolioItems: [
                { id: 1, src: 'homepage.jpg', alt: 'Fashion store Homepage', text: 'Online fashion store - Homepage' },
                { id: 2, src: 'reebok_web.jpg', alt: 'Reebok Landing', text: 'Reebok Store - Concept' },
                { id: 3, src: 'braun.jpg', alt: 'Braun Landing', text: 'Braun Landing Page - Concept' }, 
            ],
            progs: [
                {
                    id: 1,
                    image: "img/ps.svg",
                    alt: "Adobe Photoshop",
                    name: "Adobe <br> Photoshop",
                    stars: [
                      { id: 1, image: "img/star.svg", width: 26, height: 26, alt: "Filled star" },
                      { id: 2, image: "img/star.svg", width: 26, height: 26, alt: "Filled star" },
                      { id: 3, image: "img/star.svg", width: 26, height: 26, alt: "Filled star" },
                      { id: 4, image: "img/star.svg", width: 26, height: 26, alt: "Filled star" },
                      { id: 5, image: "img/gray-star.svg", width: 26, height: 26, alt: "Empty star" }
                    ]
                  },
                  {
                    id: 2,
                    image: "img/ilus.svg",
                    alt: "Adobe Illustrator",
                    name: "Adobe <br> Illustrator",
                    stars: [
                      { id: 1, image: "img/star.svg", width: 26, height: 26, alt: "Filled star" },
                      { id: 2, image: "img/star.svg", width: 26, height: 26, alt: "Filled star" },
                      { id: 3, image: "img/star.svg", width: 26, height: 26, alt: "Filled star" },
                      { id: 4, image: "img/gray-star.svg", width: 26, height: 26, alt: "Empty star" },
                      { id: 5, image: "img/gray-star.svg", width: 26, height: 26, alt: "Empty star" }
                    ]
                  },
                  {
                    id: 3,
                    image: "img/ae.svg",
                    alt: "Adobe After Effects",
                    name: "Adobe <br> After Effects",
                    stars: [
                      { id: 1, image: "img/star.svg", width: 26, height: 26, alt: "Filled star" },
                      { id: 2, image: "img/star.svg", width: 26, height: 26, alt: "Filled star" },
                      { id: 3, image: "img/star.svg", width: 26, height: 26, alt: "Filled star" },
                      { id: 4, image: "img/star.svg", width: 26, height: 26, alt: "Filled star" },
                      { id: 5, image: "img/gray-star.svg", width: 26, height: 26, alt: "Empty star" }
                    ]
                  },
                  {
                    id: 4,
                    image: "img/figma.svg",
                    alt: "Figma",
                    name: "Figma",
                    stars: [
                      { id: 1, image: "img/star.svg", width: 26, height: 26, alt: "Filled star" },
                      { id: 2, image: "img/star.svg", width: 26, height: 26, alt: "Filled star" },
                      { id: 3, image: "img/star.svg", width: 26, height: 26, alt: "Filled star" },
                      { id: 4, image: "img/star.svg", width: 26, height: 26, alt: "Filled star" },
                      { id: 5, image: "img/gray-star.svg", width: 26, height: 26, alt: "Empty star" }
                    ]
                  },
            ]
        }
    },
    computed: {
        shouldShowList() {
            return this.screenWidth > 450; // Возвращает true, если ширина экрана больше 450, иначе false
          }
    },
    mounted() {
        this.updateTime = this.getCurrentTime(); // Установка времени при загрузке страницы
        setInterval(() => {
            this.updateTime = this.getCurrentTime(); // Обновление времени каждую минуту
        }, 60000);
        window.addEventListener('resize', this.handleResize); // Слушатель события resize, нужен для динамического вычисления ширины экрана
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        getCurrentTime() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            return `${hours}:${minutes}`;
        }, // Вычисление текущего времени
        toggleList() {
                this.showList = !this.showList
        }, // Функция, показывающая и убирающая заголовок при нажатии на бургер в мобильной верстке
        handleResize() {
            this.screenWidth = window.innerWidth
        }, // Присвоение переменно значения ширины экрана
        setActiveBtn(btn) {
            this.activeBtn = btn
        } // Функция для изменения цвета кнопок RU | ENG при нажатии на них
    }
});


app.mount('#app')

