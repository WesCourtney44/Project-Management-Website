window.onload = function () {
    Newsletter.main();
};

class Newsletter {
    public static main(): void {
        Populate.Header(document.getElementById("header"));
        Populate.Footer(document.getElementById("footer"));
    }
}
