function toggleLanguage() {
    const checkbox = document.getElementById('language-toggle');
    let currentLang = localStorage.getItem('language') || 'ru';
    let newLang = checkbox.checked ? 'ua' : 'ru';
    if (currentLang !== newLang) {
        localStorage.setItem('language', newLang);
        applyLanguage();
    }
}

function applyLanguage() {
    const lang = localStorage.getItem('language') || 'ru';
    document.documentElement.lang = lang;

    fetch('translations/translation.json')
        .then(response => response.json())
        .then(translations => {
            const page = document.body.getAttribute('data-page');
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(element => {
                const key = element.getAttribute('data-i18n');
                element.innerHTML = translations[lang][page][key];
            });
        });

    const checkbox = document.getElementById('language-toggle');
    checkbox.checked = (lang === 'ua');
    document.querySelector('.current-lang').textContent = checkbox.checked ? 'UA' : 'RU';
}

document.addEventListener('DOMContentLoaded', applyLanguage);
document.getElementById('language-toggle').addEventListener('change', toggleLanguage);
