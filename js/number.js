window.onload = function() {
    "use strict";
    const user = prompt("주민번호를 입력하세요.");

    const Check1 = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];

    let result = 0;

    for (let i = 0; i < user.length - 1; i++) {
    let intUser = parseInt(user.substring(i, i + 1));
        result += Check1[i] * intUser;
    }

    let Check2 = 11 - (result % 11);

    if (Check2 > 9) {
        Check2 %= 10;
    }

    let lastUser = parseInt(user.substring(12));
    if (Check2 == lastUser) {
        document.getElementById('txt').innerHTML = "올바른 주민번호입니다.";
    } else {
        document.getElementById('txt').innerHTML = "올바른 주민번호가 아닙니다.";
    }
}