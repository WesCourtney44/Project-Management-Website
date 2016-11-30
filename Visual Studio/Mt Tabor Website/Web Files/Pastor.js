window.onload = function () {
    Pastor.main();
};
var Pastor = (function () {
    function Pastor() {
    }
    Pastor.main = function () {
        Populate.Header(document.getElementById("header"));
        Populate.Footer(document.getElementById("footer"));
    };
    return Pastor;
}());
