import '../index.css';

(function(window) {
    let hoverSection = document.getElementById('app');
    hoverSection.addEventListener('mousemove', console.log);

    // let btn = document.getElementById('btn');
    // btn.addEventListener('click', console.log);

    window.unsubscribe = () => {
        console.log('unsubscribed');
        hoverSection.removeEventListener('mousemove', console.log);
    };
})(window);
