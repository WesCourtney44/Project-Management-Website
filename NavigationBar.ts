//Adds the navigation bar when everything is ready.
window.onload = function () {
    NavigationBar.populateNavBar();
};

class NavigationBar {
    public static populateNavBar(): void {
        let target: HTMLElement = document.getElementById("navigation");
        target.appendChild(new Link("Home", "Index.html").getLi());
        target.appendChild(new Link("History", "TaborHistory.html").getLi());
        target.appendChild(new Link("Calendar", "Calendar.html").getLi());
        target.appendChild(new Link("Staff", "Staff.html").getLi());
        target.appendChild(new Link("Wee Care", "WeeCare.html").getLi());
    }
}

class Link {
    text: string;
    url: string;
    constructor(text: string, url: string) {
        this.text = text;
        this.url = url;
    }
    public getLi(): HTMLLIElement {
        let li: HTMLLIElement = document.createElement('li');
        let a: HTMLAnchorElement = document.createElement('a');
        a.textContent = this.text;
        a.href = this.url;
        li.appendChild(a);
        return li;
    }
}