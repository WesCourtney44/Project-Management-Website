//Runs the Main.main() method
window.onload = function () {
    Main.main();
};
var Main = (function () {
    function Main() {
    }
    //Main.main() is run when the body is finished loading
    //I'm using it like a main method from java.
    Main.main = function () {
        this.populateStaff();
        this.appendStaffToElement(document.getElementById("container"));
    };
    //Add staff members objects to an array
    Main.populateStaff = function () {
        var staff = this.staffMemberList;
        staff.push(new StaffMember("The Rev.", "Jack", "Cormack", "Head of Staff"));
        staff.push(new StaffMember("Pastor", "Andy", "Traister", "Commissioned Ruling Elder"));
        staff.push(new StaffMember("", "Susan", "Utz", "Music Director"));
        staff.push(new StaffMember("", "Rob", "Magallon", "Praise Music Leader"));
        staff.push(new StaffMember("", "Megan", "Broadus", "Wee Care Director"));
    };
    //generates html elements for each staff member and adds them to the specified element
    Main.appendStaffToElement = function (target) {
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
    Main.staffMemberList = new Array();
    return Main;
}());
//# sourceMappingURL=app.js.map