window.onload = function () {
    TaborHistory.main();
};

class TaborHistory {
    public static main(): void {
        NavigationBar.populateNavBar(document.getElementById("navigation"));
    }
}