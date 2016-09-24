window.onload = function () {
    Index.main();
};
var Index = (function () {
    function Index() {
    }
    Index.main = function () {
        NavigationBar.populateNavBar(document.getElementById("navigation"));
    };
    return Index;
}());
//# sourceMappingURL=Index.js.map