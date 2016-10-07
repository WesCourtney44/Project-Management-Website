window.onload = function () {
    Calendar.main();
};

class Calendar {
    public static main(): void {
        Populate.Header(document.getElementById("header"));
        Populate.Footer(document.getElementById("footer"));
    }
}