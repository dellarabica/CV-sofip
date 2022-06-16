var mode,
    regexNom = /^\w[A-z\-]{3,}\040[A-z\-]{3,}$/,
    regexMail = /^[a-z][a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]{2,3}$/,
    isOpen = false;

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
            $('.overlay').css({
                'background-color': '#7ADEFF',
                'color': 'black'
            });
            $('.overlay a').css({
                'color': 'black'
            });
            $('.table').css({
                'color': 'black'
            });
            break;
        case "D":
            $('body').css({
                'background-color': '#555555',
                'color': 'white'
            });
            $('.overlay').css({
                'background-color': '#888888'
            });
            $('.overlay a').css({
                'color': 'white'
            });
            $('.table').css({
                'color': 'white'
            });
            break;
        default:
            alert("Erreur !");
            break;
    }
}

function checkNom(valEntree) {

    if (valEntree == '') {
        alert('Le champ "Nom" est vide !');
        return false;
    } else {
        if (regexNom.test(valEntree)) {
            return true;
        } else {
            return false;
        }
    }

}

function checkMail(valEntree) {
    if (valEntree == '') {
        alert('Le champ "Email" est vide !"');
        return false;
    } else {
        if (regexMail.test(valEntree)) {
            return true;
        } else {
            return false;
        }
    }
}

function checkObj(valEntree) {
    if (valEntree == '') {
        alert('Le champ "Objet" est vide !"');
        return false;
    } else {
        return true;
    }
}

function checkCont(valEntree) {
    if (valEntree == '') {
        alert('Le champ "Contenu" est vide !"');
        return false;
    } else {
        return true;
    }
}

function checkAll() {
    var checkAll = new Array(
        checkNom($("#inputName").val()),
        checkMail($("#inputMail").val()),
        checkObj($("#inputObj").val()),
        checkCont($("#inputCont").val()));

    if ($.inArray(false, checkAll) != -1) {
        alert('Au moins un des champs sont incorrects.');
    } else {
        window.location = 'mailto:' + $("#inputMail").val() + '?subject=' + $("#inputObj").val() + '&body=' + $("#inputCont").val();
    }
}

function getAge(date) {
    var diff = Date.now() - date.getTime();
    var age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
}

function loadAbout(abt) {
    $('#aboutMe > tbody:last-child').append(
        '<tr><td class="leftTableAbout">Addresse</td><td>' + abt.address + '<br/>' + +abt.cp + ' ' + abt.city + '</td></tr>' +
        '<tr><td class="leftTableAbout">Date de naissance</td><td>' + abt.birth + ' <br/>(' + getAge(new Date(2002, 10, 8)) + ' ans)</td></tr>' +
        '<tr><td class="leftTableAbout">Numéro de téléphone</td><td>' + abt.phone + '</td></tr>' +
        '<tr><td class="leftTableAbout">Moyen(s) de transport</td><td>' + abt.move + '</td></tr>'
    );
}

function loadStudies(stu) {
    for (let i = 0; i < stu.length; i++) {
        $('#stu').append('<div class="col-md-3 col-lg-3 col-sm-6 col-xs-12">' +
            '<table class = "table table-borderless">' +
            '<tr><td rowspan="5"><img src="' + stu[i].img + '" class="img-fluid d-block mx-auto"/></td><td id="date">' + stu[i].date + '</td></tr>' +
            '<tr><td>' + stu[i].nom + '</td></tr>' +
            '<tr><td>' + stu[i].ecole + ', ' + stu[i].lieu + '</td></tr>' +
            '<tr><td>' + stu[i].details + '</td></tr>' +
            '</table></div>'
        );
    }
}

function loadExp(exp) {
    for (let i = 0; i < exp.length; i++) {
        $('#wrk').append('<div class="col-md-6 col-lg-6 col-sm-6 col-xs-12 mx-auto">' +
            '<table class = "table table-borderless">' +
            '<tr><td id="date">' + exp[i].periode + '</td></tr>' +
            '<tr><td>' + exp[i].intitule + '</td></tr>' +
            '<tr><td>' + exp[i].entreprise + ', ' + exp[i].lieu + '</td></tr>' +
            '<tr><td>' + exp[i].descriptif + '</td></tr>' +
            '</table></div>'
        );
    }
}

function loadSkills(ski) {
    $('#skl').append('<div class="col-md-5 col-lg-5 col-sm-12 col-xs-12 m-auto">' +
        '<table class = "table table-borderless">' +
        '<tr><td colspan="2" id="date">Programmation</td></tr>' +
        '<tr><td><img src="' + ski['prog'].HTML_img + '"/></td><td><img src="' + ski['prog'].CSS_img + '"/></td></tr>' +
        '<tr><td><img src="' + ski['prog'].JS_img + '"/></td><td><img src="' + ski['prog'].CSharp_img + '"/></td></tr>' +
        '<tr><td><img src="' + ski['prog'].PHP_img + '"/></td><td><img src="' + ski['prog'].SQL_img + '"/></td></tr>' +
        '</table></div>' +
        '<div class="col-md-5 col-lg-5 col-sm-12 col-xs-12 m-auto">' +
        '<table class = "table table-borderless">' +
        '<tr><td colspan="2" id="date">Langues</td></tr>' +
        '<tr><td><img src="' + ski['languages'].FR_img + '"/></td><td>' + ski['languages'].FR + '</td></tr>' +
        '<tr><td><img src="' + ski['languages'].EN_img + '"/></td><td>' + ski['languages'].EN + '</td></tr>' +
        '<tr><td><img src="' + ski['languages'].GE_img + '"/></td><td>' + ski['languages'].GE + '</td></tr>' +
        '</table></div>'
    );
}

$('#header').on('click', function() {
    switch (isOpen) {
        case false:
            openNav();
            isOpen = true;
            break;
        case true:
            closeNav();
            isOpen = false;
            break;
        default:
            break;
    }

})

$('.overlay-content').on('click', function() {
    closeNav();
})

$('#changeTheme').on('click', function() {
    changeMode();
})

$(window).on('load', function() {
    changeMode();
    fetch('json/data.json').then(function(response) { return response.json(); })
        .then(function(json) {
            loadStudies(json.diplome);
            loadExp(json.exppro);
            loadSkills(json.skills);
            loadAbout(json.aboutme);
        });
})

$('#sendMail').click(function() {
    checkAll();
});