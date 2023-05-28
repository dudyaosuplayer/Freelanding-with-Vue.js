const app = Vue.createApp({
    data() {
        return {
            showList: false,
            screenWidth: window.innerWidth,
            activeBtn: 'buttonEng',
            updateTime: '',
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

