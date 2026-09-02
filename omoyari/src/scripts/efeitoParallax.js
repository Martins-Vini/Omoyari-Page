function efeitoParallax() {
    window.addEventListener('scroll', () => {
    const imgCelular = document.getElementById('img-celular');
    
    if (imgCelular) {
        let scrollPosition = window.scrollY;
      
        imgCelular.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }
});
}

export { efeitoParallax };