var mode,
    studies,
    work,
    skills;

function openNav() {
    $("#myNav").css('width', '100%');
}

function closeNav() {
    $("#myNav").css('width', '0%');
}

function changeMode() {
    if (mode == "L") mode = "D";
    else mode = "L";

    switch (mode) {
        case "L":
            $('body').css({
                'background-color': '#D2C2DC',
                'color': 'black'
            });
            break;
        case "D":
            $('body').css({
                'background-color': '#555555',
                'color': 'white'
            });
            break;
        default:
            alert("Erreur !");
            break;
    }
}

$('#showMenu').on('click', function() {
    openNav();
})

$('.overlay-content').on('click', function() {
    closeNav();
})

$('#changeTheme').on('click', function() {
    changeMode();
})

$(window).on('load', function() {
    changeMode();
})