window.onload = function () {
    WeeCare.main();
};
var WeeCare = (function () {
    function WeeCare() {
    }
    WeeCare.main = function () {
        Populate.Header(document.getElementById("header"));
        Populate.Footer(document.getElementById("footer"));
    };
    return WeeCare;
}());
//# sourceMappingURL=WeeCare.js.map