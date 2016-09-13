var StaffMember = (function () {
    function StaffMember(title, firstName, lastName, position) {
        this.url = "Images/Staff/" + firstName + " " + lastName + ".jpg";
        this.altText = "Image of " + title + " " + firstName + " " + lastName;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
    }
    StaffMember.prototype.getDiv = function () {
        var div = document.createElement('div');
        div.tagName = "StaffMember";
        var img = document.createElement('img');
        img.src = this.url;
        img.alt = this.altText;
        img.width = 112.5;
        img.height = 140;
        div.appendChild(img);
        var nameDiv = document.createElement('div');
        nameDiv.textContent = this.title + " " + this.firstName + " " + this.lastName;
        div.appendChild(nameDiv);
        var positionDiv = document.createElement('div');
        positionDiv.textContent = this.position;
        div.appendChild(positionDiv);
        return div;
    };
    return StaffMember;
}());
var Main = (function () {
    function Main() {
    }
    Main.main = function () {
        //Add staff members objects
        var staffMemberList = new Array();
        staffMemberList.push(new StaffMember("The Rev.", "Jack", "Cormack", "Head of Staff"));
        staffMemberList.push(new StaffMember("Pastor", "Andy", "Traister", "Commissioned Ruling Elder"));
        staffMemberList.push(new StaffMember("", "Susan", "Utz", "Music Director"));
        staffMemberList.push(new StaffMember("", "Rob", "Magallon", "Praise Music Leader"));
        staffMemberList.push(new StaffMember("", "Megan", "Broadus", "Wee Care Director"));
        var index = 0;
        while (index < staffMemberList.length) {
            document.body.appendChild(staffMemberList[index].getDiv());
            index++;
        }
    };
    return Main;
}());
//# sourceMappingURL=app.js.map