window.onload = function () {
    Calendar.main();
};

class Calendar {
    public static main(): void {
        NavigationBar.populateNavBar(document.getElementById("navigation"));
    }
}