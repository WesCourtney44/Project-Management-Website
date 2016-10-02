window.onload = function () {
    TaborHistory.main();
};
var TaborHistory = (function () {
    function TaborHistory() {
    }
    TaborHistory.main = function () {
        Populate.Header(document.getElementById("header"));
        Populate.Footer(document.getElementById("footer"));
    };
    return TaborHistory;
}());
//# sourceMappingURL=TaborHistory.js.map