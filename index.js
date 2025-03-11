// Скрипт для выделения активной ссылки в меню
document.addEventListener("scroll", () => {
    // Получаем все секции и элементы меню
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Определяем текущую секцию
    let currentSection = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - (sectionHeight / 3)) {
            currentSection = section.getAttribute("id");
        }
    });

    // Удаляем класс 'active' у всех ссылок и добавляем только для текущей
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

// Скроллинг при клике на пункт меню
document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Отменяем стандартный переход по ссылке
        const targetId = link.getAttribute('href'); // Получаем id секции
        const targetSection = document.querySelector(targetId);

        // Прокручиваем страницу к соответствующей секции
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start', // Прокрутка к началу секции
        });
    });
});