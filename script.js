function showPage(pageId) {
    // Скрыть все страницы
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // Показать нужную
    const targetPage = document.getElementById(pageId + 'Page');
    if (targetPage) targetPage.classList.add('active');
    
    // Обновить активный таб
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.page === pageId) {
            tab.classList.add('active');
        }
    });
}

// Навесить обработчики на табы
document.querySelectorAll('.tab-item').forEach(tab => {
    tab.addEventListener('click', () => {
        const page = tab.dataset.page;
        showPage(page);
    });
});

// Кнопка битвы
document.getElementById('fightBtn')?.addEventListener('click', () => {
    alert('⚔️ Битва началась!');
    setTimeout(() => {
        alert('🏆 Победа! +15 рейтинга');
    }, 500);
});