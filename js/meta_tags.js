function updateMetaTags(language, pageKey) {
    fetch(`meta_tags/${language}.json`)
        .then(response => response.json())
        .then(translations => {
            if (translations[pageKey]) {
                document.title = translations[pageKey].title;
                document.querySelector('meta[name="description"]').setAttribute('content', translations[pageKey].description);
                document.querySelector('meta[name="keywords"]').setAttribute('content', translations[pageKey].keywords);
            }
        })
        .catch(error => console.error('Error loading translations:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('language-toggle');
    const pageKey = document.documentElement.getAttribute('data-page');
    
    
    let language = localStorage.getItem('language') || 'ru';
    updateMetaTags(language, pageKey);

    
    toggle.checked = language === 'ua';  
    
    toggle.addEventListener('change', function () {
        language = toggle.checked ? 'ua' : 'ru';
        localStorage.setItem('language', language);
        updateMetaTags(language, pageKey); 
    });
});