window.onload = function () {
    Staff.main();
};
var Staff = (function () {
    function Staff() {
    }
    Staff.main = function () {
        Populate.Header(document.getElementById("header"));
        this.populateStaff();
        this.appendStaffToElement(document.getElementById("container"));
        Populate.Footer(document.getElementById("footer"));
    };
    //Add staff members objects to an array
    Staff.populateStaff = function () {
        var staff = this.staffMemberList;
        staff.push(new StaffMember("The Rev.", "Jack", "Cormack", "Head of Staff"));
        staff.push(new StaffMember("Pastor", "Andy", "Traister", "Commissioned Ruling Elder"));
        staff.push(new StaffMember("", "Susan", "Utz", "Music Director"));
        staff.push(new StaffMember("", "Rob", "Magallon", "Praise Music Leader"));
        staff.push(new StaffMember("", "Megan", "Broadus", "Wee Care Director"));
    };
    //generates html elements for each staff member and adds them to the specified element
    Staff.appendStaffToElement = function (target) {
        var index = 0;
        var staff = this.staffMemberList;
        var indexStaff;
        var div;
        while (index < staff.length) {
            indexStaff = staff[index];
            div = indexStaff.getDiv();
            target.appendChild(div);
            index++;
        }
    };
    //Create Array to hold StaffMembers
    Staff.staffMemberList = new Array();
    return Staff;
}());
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
        div.className = "StaffMember";
        div.style.width = "183px";
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
