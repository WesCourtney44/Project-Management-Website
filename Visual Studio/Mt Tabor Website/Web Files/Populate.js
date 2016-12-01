var Populate = (function () {
    function Populate() {
    }
    Populate.Header = function (target) {
        var imgUrl = "images/MtTaborChurch.png";
        var html = "";
        //////////////////////////////////////////////////////
        html += "<div class=\"clearfix\">";
        html += "<div class=\"logo\">";
        html += "<a href=\"index.html\">";
        html += "<img src=\"" + imgUrl + "\" alt=\"LOGO\" height=\"52\" width=\"362\">";
        html += "</a>";
        html += "</div>";
        html += "<ul id=\"navigation\" class=\"navigation\">";
        html += "</ul>";
        html += "</div>";
        //////////////////////////////////////////////////////
        target.innerHTML = html;
        this.NavBar(document.getElementById("navigation"));
    };
    Populate.Footer = function (target) {
        var html = "";
        //////////////////////////////////////////////////////
        html += "<div class=\"clearfix\">";
        html += "	<div class=\"section\">";
        html += "		<h4>Social Media</h4>";
        html += "		<ul class=\"socialUl\">";
        html += "            <li class=\"socialMedia\"><a href=\"https://www.facebook.com/MountTaborPresbyterianChurch/\"><img src=\"Images/SocialMedia/facebook.png\" /></a></li>";
        html += "            <li class=\"socialMedia\"><a href=\"https://www.youtube.com/channel/UCCInd4l3fg1uMT3Izqu_wbw\"><img src=\"Images/SocialMedia/youtube.png\" /></a></li>";
        html += "        </ul>";
        html += "	</div>";
        html += "	<div class=\"section contact\">";
        html += "		<h4>Contact Us</h4>";
        html += "		<p><span>Address:</span> 918 Mt. Tabor Road, New Albany, IN 47150 </p>";
        html += "		<p><span>Phone:</span> (812)-944-7858 </p>";
        html += "		<p><span>Email:</span> taborchurch@mw.twcbc.com </p>";
        html += "	</div>";
        html += "	<div class=\"section\">";
        html += "		<h4>Newsletter</h4>";
        html += "		<p> If you would like to keep up with our latest news and events, you can sign up for our email newsletter! </p>";
        html += "		<a href=\"Newsletter.html\" class=\"subscribe\" style=\"color:#806f6f;\">Click here to sign up</a>";
        html += "	</div>";
        html += "</div>";
        html += "<div id=\"footnote\">";
        html += "	<div class=\"clearfix\">";
        html += "		<div class=\"connect\">";
        html += "			<a href=\"http://freewebsitetemplates.com/go/facebook/\" class=\"facebook\"></a>";
        html += "			<a href=\"http://freewebsitetemplates.com/go/twitter/\" class=\"twitter\"></a>";
        html += "			<a href=\"http://freewebsitetemplates.com/go/googleplus/\" class=\"googleplus\"></a>";
        html += "			<a href=\"http://pinterest.com/fwtemplates/\" class=\"pinterest\"></a>";
        html += "		</div>";
        html += "		<p> © Copyright Mt Tabor Church 2016. </p>";
        html += "	</div>";
        html += "</div>";
        //////////////////////////////////////////////////////
        target.innerHTML = html;
    };
    Populate.NavBar = function (target) {
        target.appendChild(new Link("Home", "Index.html").getLi());
        target.appendChild(new Link("History", "TaborHistory.html").getLi());
        target.appendChild(new Link("Calendar", "Calendar.html").getLi());
        target.appendChild(new Link("Staff", "Staff.html").getLi());
        target.appendChild(new Link("Wee Care", "WeeCare.html").getLi());
    };
    return Populate;
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
