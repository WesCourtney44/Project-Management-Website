window.onload = function () {
    Index.main();
};

class Index {
    public static main(): void {
        NavigationBar.populateNavBar(document.getElementById("navigation"));
    }
}