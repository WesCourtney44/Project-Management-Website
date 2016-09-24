window.onload = function () {
    WeeCare.main();
};

class WeeCare {
    public static main(): void {
        NavigationBar.populateNavBar(document.getElementById("navigation"));
    }
}
