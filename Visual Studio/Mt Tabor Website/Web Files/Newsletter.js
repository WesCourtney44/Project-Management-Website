window.onload = function () {
    Newsletter.main();
};
var Newsletter = (function () {
    function Newsletter() {
    }
    Newsletter.main = function () {
        Populate.Header(document.getElementById("header"));
        Populate.Footer(document.getElementById("footer"));
    };
    return Newsletter;
}());
