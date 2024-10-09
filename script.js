














const promoVideos = document.querySelectorAll('.promo_video');

    promoVideos.forEach(promoVideo => {
        let isDown = false; // Флаг нажатия кнопки мыши
        let startX; // Начальная позиция мыши
        let scrollLeft; // Начальная позиция прокрутки

        promoVideo.addEventListener('mousedown', (e) => {
            isDown = true; // Устанавливаем флаг нажатия на true
            promoVideo.classList.add('active');
            startX = e.pageX - promoVideo.offsetLeft; // Получаем начальную позицию
            scrollLeft = promoVideo.scrollLeft; // Получаем текущее положение прокрутки
        });

        promoVideo.addEventListener('mouseleave', () => {
            isDown = false; // При выходе устанавливаем флаг на false
            promoVideo.classList.remove('active');
        });

        promoVideo.addEventListener('mouseup', () => {
            isDown = false; // Устанавливаем флаг на false при отпускании кнопки
            promoVideo.classList.remove('active');
        });

        promoVideo.addEventListener('mousemove', (e) => {
            if (!isDown) return; // Если кнопка мыши не нажата, выходим
            e.preventDefault(); // Отменяем стандартное поведение
            const x = e.pageX - promoVideo.offsetLeft; // Получаем текущую позицию
            const scroll = (x - startX) * 1.5; // Вычисляем прокрутку
            promoVideo.scrollLeft = scrollLeft - scroll; // Прокручиваем контейнер
        });
    });

    const projectVideo = document.querySelectorAll('.project-container');

    projectVideo.forEach(projectVideo => {
        let isDown = false; // Флаг нажатия кнопки мыши
        let startX; // Начальная позиция мыши
        let scrollLeft; // Начальная позиция прокрутки

        projectVideo.addEventListener('mousedown', (e) => {
            isDown = true; // Устанавливаем флаг нажатия на true
            projectVideo.classList.add('active');
            startX = e.pageX - projectVideo.offsetLeft; // Получаем начальную позицию
            scrollLeft = projectVideo.scrollLeft; // Получаем текущее положение прокрутки
        });

        projectVideo.addEventListener('mouseleave', () => {
            isDown = false; // При выходе устанавливаем флаг на false
            projectVideo.classList.remove('active');
        });

        projectVideo.addEventListener('mouseup', () => {
            isDown = false; // Устанавливаем флаг на false при отпускании кнопки
            projectVideo.classList.remove('active');
        });

        projectVideo.addEventListener('mousemove', (e) => {
            if (!isDown) return; // Если кнопка мыши не нажата, выходим
            e.preventDefault(); // Отменяем стандартное поведение
            const x = e.pageX - projectVideo.offsetLeft; // Получаем текущую позицию
            const scroll = (x - startX) * 1.5; // Вычисляем прокрутку
            projectVideo.scrollLeft = scrollLeft - scroll; // Прокручиваем контейнер
        });
    });