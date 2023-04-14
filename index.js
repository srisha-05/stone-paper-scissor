
function computer() {

    var a = ['✊', '✋', '✌️'];
    var b = Math.floor(Math.random() * 3);
    return a[b];
}
function user(x) {
    document.getElementById('uc').innerHTML = x;
    var c = computer();
    document.getElementById('cc').innerHTML = c;
    switch (x + c) {
        case '✊✌️':
        case '✋✊':
        case '✌️✋':
            document.getElementById('r').innerHTML = "USER WON!🎉";
            break;
        case '✌️✊':
        case '✊✋':
        case '✋✌️':
            document.getElementById('r').innerHTML = "COMPUTER WON!";
            break;
        case '✊✊':
        case '✌️✌️':
        case '✋✋':
            document.getElementById('r').innerHTML = "DRAW MATCH";
            break;

    }

}
