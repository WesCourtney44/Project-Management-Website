window.onload = function () {
    OurMembers.main();
};

class OurMembers {
    public static main(): void {
        Populate.Header(document.getElementById("header"));
        Populate.Footer(document.getElementById("footer"));
    }
}
