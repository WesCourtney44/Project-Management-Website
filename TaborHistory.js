window.onload = function () {
    TaborHistory.main();
};
var TaborHistory = (function () {
    function TaborHistory() {
    }
    TaborHistory.main = function () {
        NavigationBar.populateNavBar(document.getElementById("navigation"));
    };
    return TaborHistory;
}());
//# sourceMappingURL=TaborHistory.js.map