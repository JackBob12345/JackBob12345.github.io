var word123 = {
    "Привет": "zib zib",
    "Пока": "zeb zeb",
    "Как дела": "zet",
    "Хорошо": "zab zub",
    "Что": "zorb",
    "Ок": "zob",
    "Люблю": "ziblob",
    "Земля": "zibtubi",
    "Школа": "zibskob",
    "Марс": "zoblord",
    "Ад": "biz",
    "Тупой": "zobo",
    "Дом": "buz",
    "Город": "ziby",
    "Да": "zeb",
    "Нет": "zib",
    "Я": "zi",
    "Тебя": "ziby",
    "Ты": "bi",
    "Минута": "zibuto",
    "Животное": "zibenim",
    "Инопланетяне": "Zibisig",
    "Человек": "zibrab",
    "Телефон": "zibibon",
    "Иду": "zibu",
    "Пойду": "zabu",
    "Скоро": "zoob",
    "Го": "zo",
    "Круто": "zibubo",
    "Крутой": "zibubi",
    "Не": "zez",
    "Кто": "zereb",
    "Он": "zlor",
    "Она": "zlir",
    "Оно": "zler",
    "Они": "zlur",
    "Глупый": "zikor"
};

function search() {
    var input = prompt("Введите слово для поиска:");
    if (word123[input]) {
        alert(word123[input]);  // Вывод перевода
    } else {
        alert("Слово не найдено в словаре");
    }
}
// Объект для хранения переводов (слова поменяны местами)
var word1234 = {
    "zib zib": "Привет",
    "zeb zeb": "Пока",
    "zet": "Как дела",
    "zab zub": "Хорошо",
    "zorb": "Что",
    "zob": "Ок",
    "ziblob": "Люблю",
    "zibtubi": "Земля",
    "zibskob": "Школа",
    "zoblord": "Марс",
    "biz": "Ад",
    "zobo": "Тупой",
    "buz": "Дом",
    "ziby": "Город",
    "zeb": "Да",
    "zib": "Нет",
    "zi": "Я",
    "ziby": "Тебя",
    "bi": "Ты",
    "zibuto": "Минута",
    "zibenim": "Животное",
    "Zibisig": "Инопланетяне",
    "zibrab": "Человек",
    "zibibon": "Телефон",
    "zibu": "Иду",
    "zabu": "Пойду",
    "zoob": "Скоро",
    "zo": "Го",
    "zibubo": "Круто",
    "zibubi": "Крутой, крутая",
    "zez": "Не",
    "zereb": "Кто",
    "zlor": "Он",
    "zlir": "Она",
    "zler": "Оно",
    "zlur": "Они",
    "zikor": "Глупый, глупая, глупое"
};

// Функция для поиска перевода
function search2() {
    var input = prompt("Введите слово для поиска:");
    if (word1234[input]) {
        alert(word1234[input]);  // Вывод перевода
    } else {
        alert("Слово не найдено в словаре");
    }
}
