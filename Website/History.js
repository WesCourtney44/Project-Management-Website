window.onload = function () {
    History.main();
};
var History = (function () {
    function History() {
    }
    History.main = function () {
        NavigationBar.populateNavBar(document.getElementById("navigation"));
    };
    return History;
}());
//# sourceMappingURL=History.js.map