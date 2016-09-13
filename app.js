var StaffMember = (function () {
    //Brings in info about the staff member
    function StaffMember(title, firstName, lastName, position) {
        this.url = "Images/Staff/" + firstName + " " + lastName + ".jpg";
        this.altText = "Image of " + title + " " + firstName + " " + lastName;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
    }
    //Generates a div containing an image,
    //and info about the staff member.
    StaffMember.prototype.getDiv = function () {
        //Creates div container and sets the
        //tagName so it can be easily referenced in bootstrap/css
        var div = document.createElement('div');
        div.tagName = "StaffMember";
        //creates image element and adds it to the container div
        var img = document.createElement('img');
        img.src = this.url;
        img.alt = this.altText;
        img.width = 112.5;
        img.height = 140;
        div.appendChild(img);
        //creates name div and adds it to the container div
        var nameDiv = document.createElement('div');
        nameDiv.textContent = this.title + " " + this.firstName + " " + this.lastName;
        div.appendChild(nameDiv);
        //creates position div and adds it to the container div
        var positionDiv = document.createElement('div');
        positionDiv.textContent = this.position;
        div.appendChild(positionDiv);
        //returns the container
        return div;
    };
    return StaffMember;
}());
var Main = (function () {
    function Main() {
    }
    //Main.main() is run when the body is finished loading
    //I'm using it like a main method from java.
    Main.main = function () {
        //Add staff members objects to an array
        //this method of adding users will need to be changed in future builds
        var staffMemberList = new Array();
        staffMemberList.push(new StaffMember("The Rev.", "Jack", "Cormack", "Head of Staff"));
        staffMemberList.push(new StaffMember("Pastor", "Andy", "Traister", "Commissioned Ruling Elder"));
        staffMemberList.push(new StaffMember("", "Susan", "Utz", "Music Director"));
        staffMemberList.push(new StaffMember("", "Rob", "Magallon", "Praise Music Leader"));
        staffMemberList.push(new StaffMember("", "Megan", "Broadus", "Wee Care Director"));
        //generates html elements for each staff member and adds them to the document body
        var index = 0;
        while (index < staffMemberList.length) {
            document.body.appendChild(staffMemberList[index].getDiv());
            index++;
        }
    };
    return Main;
}());
//# sourceMappingURL=app.js.map