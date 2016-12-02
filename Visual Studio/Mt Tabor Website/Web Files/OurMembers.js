window.onload = function () {
    OurMembers.main();
};
var OurMembers = (function () {
    function OurMembers() {
    }
    OurMembers.main = function () {
        Populate.Header(document.getElementById("header"));
        Populate.Footer(document.getElementById("footer"));
    };
    return OurMembers;
}());
