window.onload = function () {
    Calendar.main();
};
var Calendar = (function () {
    function Calendar() {
    }
    Calendar.main = function () {
        Populate.Header(document.getElementById("header"));
        Populate.Footer(document.getElementById("footer"));
    };
    return Calendar;
}());
//# sourceMappingURL=Calendar.js.map