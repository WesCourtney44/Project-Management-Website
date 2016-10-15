window.onload = function () {
    WeeCare.main();
};

class WeeCare {
    public static main(): void {
        Populate.Header(document.getElementById("header"));
        Populate.Footer(document.getElementById("footer"));
    }
}
