window.onload = function () {
    Index.main();
};

class Index {
    public static main(): void {
        Populate.Header(document.getElementById("header"));
        Populate.Footer(document.getElementById("footer"));
    }
}