window.addEventListener('load', function () {
    // 1-ый запуск.
    foo();

    window.addEventListener('resize', foo);
});

function foo() {
    let input = document.querySelector("#mail");

    if (window.innerWidth < 995) {
        input.setAttribute('placeholder', 'Подпишитесь на новости');
    } else {
        input.setAttribute('placeholder', 'Подпишитесь на новости для большей информации');
    }
}