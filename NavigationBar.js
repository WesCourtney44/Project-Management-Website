var NavigationBar = (function () {
    function NavigationBar() {
    }
    NavigationBar.populateNavBar = function (target) {
        target.appendChild(new Link("Home", "Index.html").getLi());
        target.appendChild(new Link("History", "TaborHistory.html").getLi());
        target.appendChild(new Link("Calendar", "Calendar.html").getLi());
        target.appendChild(new Link("Staff", "Staff.html").getLi());
        target.appendChild(new Link("Wee Care", "WeeCare.html").getLi());
    };
    return NavigationBar;
}());
var Link = (function () {
    function Link(text, url) {
        this.text = text;
        this.url = url;
    }
    Link.prototype.getLi = function () {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.textContent = this.text;
        a.href = this.url;
        li.appendChild(a);
        return li;
    };
    return Link;
}());
//# sourceMappingURL=NavigationBar.js.map