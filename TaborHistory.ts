window.onload = function () {
    TaborHistory.main();
};

class TaborHistory {
    public static main(): void {
        Populate.Header(document.getElementById("header"));
        Populate.Footer(document.getElementById("footer"));
    }
}