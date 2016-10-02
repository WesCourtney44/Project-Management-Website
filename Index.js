window.onload = function () {
    Index.main();
};
var Index = (function () {
    function Index() {
    }
    Index.main = function () {
        Populate.Header(document.getElementById("header"));
        Populate.Footer(document.getElementById("footer"));
    };
    return Index;
}());
//# sourceMappingURL=Index.js.map