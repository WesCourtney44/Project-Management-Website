window.onload = function () {
    Pastor.main();
};

class Pastor {
    public static main(): void {
        Populate.Header(document.getElementById("header"));
        Populate.Footer(document.getElementById("footer"));
    }
}
