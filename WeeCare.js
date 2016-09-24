window.onload = function () {
    WeeCare.main();
};
var WeeCare = (function () {
    function WeeCare() {
    }
    WeeCare.main = function () {
        NavigationBar.populateNavBar(document.getElementById("navigation"));
    };
    return WeeCare;
}());
//# sourceMappingURL=WeeCare.js.map