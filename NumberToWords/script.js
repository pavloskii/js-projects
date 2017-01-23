

// Some (valid) examples:
// #			English
// 1			"One"
// 2			"Two"
// 11			"Eleven"
// 21			"Twenty one"
// 192			"One hundred ninety two"
// 1187		"One thousand one hundred eighty seven"
// 2000		"Two thousand"
// 21011		"Twenty one thousand eleven"
// 12341678	"Twelve million three hundred forty one thousand six hundred seventy eight"
// 128341679901 "One hundred twenty eight billion three hundred forty one million six hundred 
// seventy nine thousand nine hundred one"

// [*] It should notify the user accordingly if the value is not valid

// This homework is valid for both groups

// Good Luck,
// SW

// П.С. Втора стаза од домашната: Да се направи истата задача за македонски јазик
// #			Македонски
// 1			"Еден"
// 2			"Два"
// 11			"Единаесет"
// 21			"Дваесет и еден"
// 192			"Сто девеесет и два"
// 1187		"Илјада сто осумдесет и седум"
// 2000		"Две илјади"
// 21011		"Дваесет и една илјада единаесет"
// 12341678	"Дванаесет милиони триста четериесет и една илјада шестотини седумдесет и осум"
// 128341679901 "Сто дваесет и осум милијарди триста четериесет и еден милион шестотини седумдесет и 
// девет илјади девестотини и еден"

// console.log(inputNumber);

//Verify if the number is whole---------------------------
function isInt(num) {
    if (num % 1 == 0) {
        return true;
    }
    else {
        alert("The entered number is not a whole number")
        $("#input").val('');
        return false;
    }
};

//Verify the range of the number---------------------
function isValidRange(inputNumber) {
    if (inputNumber > 1 && inputNumber < 999999999999) {
        return true;
    }
    else {
        alert("The entered number is not in the range of 1 - 999,999,999,999")
        $("#input").val('');
        return false;
    }
};

//Number to words function-----------------------------
function numberToWords(num) {  

};

$("#button").click(function () {
    let inputNumber = $("#input").val();

    isInt(inputNumber);
    isValidRange(inputNumber);
    console.log(inputNumber);
});