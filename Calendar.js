window.onload = function () {
    Calendar.main();
};
var Calendar = (function () {
    function Calendar() {
    }
    Calendar.main = function () {
        NavigationBar.populateNavBar(document.getElementById("navigation"));
    };
    return Calendar;
}());
//# sourceMappingURL=Calendar.js.map