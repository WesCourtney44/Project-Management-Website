
class Main {
    //Create Array to hold StaffMembers
    static staffMemberList: Array<StaffMember> = new Array<StaffMember>();
    
    //Main.main() is run when the body is finished loading
    //I'm using it like a main method from java.
    public static main(): void {
        this.populateStaff();
        this.appendStaffToElement(document.getElementById("container"));
    }

    //Add staff members objects to an array
    public static populateStaff(): void {
        let staff: Array<StaffMember> = this.staffMemberList;
        staff.push(new StaffMember("The Rev.", "Jack", "Cormack", "Head of Staff"));
        staff.push(new StaffMember("Pastor", "Andy", "Traister", "Commissioned Ruling Elder"));
        staff.push(new StaffMember("", "Susan", "Utz", "Music Director"));
        staff.push(new StaffMember("", "Rob", "Magallon", "Praise Music Leader"));
        staff.push(new StaffMember("", "Megan", "Broadus", "Wee Care Director"));
    }

    //generates html elements for each staff member and adds them to the specified element
    public static appendStaffToElement(target: HTMLElement): void {
        let index: number = 0;
        let staff: Array<StaffMember> = this.staffMemberList;
        let indexStaff: StaffMember;
        let div: HTMLDivElement;
        while (index < staff.length) {
            indexStaff = staff[index];
            div = indexStaff.getDiv();
            target.appendChild(div);
            index++;
        }
    }
}