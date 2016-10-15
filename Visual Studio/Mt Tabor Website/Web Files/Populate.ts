
class Populate {
    
    public static Header(target: HTMLElement): void {
        let imgUrl: string = "images/MtTaborChurch.png";

        let html: string = "";
        html += "<div class=\"clearfix\">";
        html += "<div class=\"logo\">";
        html += "<a href=\"index.html\">";
        html += "<img src=\"" + imgUrl + "\" alt=\"LOGO\" height=\"52\" width=\"362\">";
        html += "</a>";
        html += "</div>";
        html += "<ul id=\"navigation\" class=\"navigation\">";
        html += "</ul>";
        html += "</div>";

        target.innerHTML = html;
        this.NavBar(document.getElementById("navigation"));
    }

    public static Footer(target: HTMLElement): void {
        let html: string = "";
        html += "<div class=\"clearfix\">";
        html += "<div class=\"section\">";
        html += "<h4>Latest News</h4>";
        html += "<p> This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. You can remove any link. </p>";
        html += "</div>";
        html += "<div class=\"section contact\">";
        html += "<h4>Contact Us</h4>";
        html += "<p><span>Address:</span>918 Mt. Tabor Road, New Albany, IN 47150 </p>";
        html += "<p><span>Phone:</span> (812)-944-7858 </p>";
        html += "<p><span>Email:</span> taborchurch@mw.twcbc.com </p>";
        html += "</div>";
        html += "<div class=\"section\">";
        html += "<h4>SEND US A MESSAGE</h4>";
        html += "<p> If you're having problems editing this website template, then don't hesitate to ask for help on the Forums. </p>";
        html += "<a href=\"http://www.freewebsitetemplates.com/misc/contact/\" class=\"subscribe\">Click to send us an email</a>";
        html += "</div>";
        html += "</div>";
        html += "<div id=\"footnote\">";
        html += "<div class=\"clearfix\">";
        html += "<div class=\"connect\">";
        html += "<a href=\"http://freewebsitetemplates.com/go/facebook/\" class=\"facebook\"></a>";
        html += "<a href=\"http://freewebsitetemplates.com/go/twitter/\" class=\"twitter\"></a>";
        html += "<a href=\"http://freewebsitetemplates.com/go/googleplus/\" class=\"googleplus\"></a>";
        html += "<a href=\"http://pinterest.com/fwtemplates/\" class=\"pinterest\"></a>";
        html += "</div>";
        html += "<p> © Copyright 2023 Manes Winchester. All Rights Reserved. </p>";
        html += "</div>";
        html += "</div>";
        target.innerHTML = html;
    }

    public static NavBar(target: HTMLElement): void {
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