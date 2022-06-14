var mode,
    studies,
    work,
    skills,
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
            })
            break;
        default:
            alert("Erreur !");
            break;
    }
}

function checkNom(valEntree) {
    if (regexNom.test(valEntree)) {
        $("#cNom").text("Pass");
        return true;
    } else {
        $("#cNom").text("Fail");
        return false;
    }
}

function checkMail(valEntree) {
    if (regexMail.test(valEntree)) {
        $("#cMail").text("Pass");
        return true;
    } else {
        $("#cMail").text("Fail");
        return false;
    }
}

function checkAll() {
    var checkAll = new Array(checkNom($("#name").val()), checkPrenom($("#surname").val()), checkNum($("#numMember").val()), checkAdr($("#address").val()), checkCity($("#city").val()), checkCP($("#code").val()), checkMail($("#mail").val()), checkTel($("#phone").val()));

    if ($.inArray(false, checkAll) != -1) {
        return false;
    } else {
        return true;
    }
}

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'json/data.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
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
    loadJSON(function(response) {
        // Parse JSON string into object
        console.log(JSON.parse(response))
    })
})

$('#sendMail').click(function() {
    checkAll();
    //$('#formId').attr('action', 'page1');
});