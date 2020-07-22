function changePlaceholder() {
    const input = document.querySelector("#mail");
    window.addEventListener('resize', function(){
        if (window.innerWidth < 995) {
            input.setAttribute('placeholder', 'Подпишитесь на новости');
        } 
        else {
            input.setAttribute('placeholder', 'Подпишитесь на новости для большей информации');
        }
    });
}

changePlaceholder();