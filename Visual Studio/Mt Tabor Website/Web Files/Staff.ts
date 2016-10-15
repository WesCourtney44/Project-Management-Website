window.onload = function () {
    Staff.main();
};

class Staff {
    //Create Array to hold StaffMembers
    static staffMemberList: Array<StaffMember> = new Array<StaffMember>();

    public static main(): void {
        Populate.Header(document.getElementById("header"));
        this.populateStaff();
        this.appendStaffToElement(document.getElementById("container"));
        Populate.Footer(document.getElementById("footer"));
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

class StaffMember {
    url: string;
    altText: string;
    title: string;
    firstName: string;
    lastName: string;
    position: string;

    //Brings in info about the staff member
    constructor(title: string, firstName: string, lastName: string, position: string) {
        this.url = "Images/Staff/" + firstName + " " + lastName + ".jpg";
        this.altText = "Image of " + title + " " + firstName + " " + lastName;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
    }

    //Generates a div containing an image,
    //and info about the staff member.
    public getDiv(): HTMLDivElement {
        //Creates div container and sets the
        //tagName so it can be easily referenced in bootstrap/css
        let div: HTMLDivElement = document.createElement('div');
        div.tagName = "StaffMember";

        //creates image element and adds it to the container div
        let img: HTMLImageElement = document.createElement('img');
        img.src = this.url;
        img.alt = this.altText;
        img.width = 112.5;
        img.height = 140;
        div.appendChild(img);

        //creates name div and adds it to the container div
        let nameDiv: HTMLDivElement = document.createElement('div');
        nameDiv.textContent = this.title + " " + this.firstName + " " + this.lastName;
        div.appendChild(nameDiv);

        //creates position div and adds it to the container div
        let positionDiv: HTMLDivElement = document.createElement('div');
        positionDiv.textContent = this.position;
        div.appendChild(positionDiv);

        //returns the container
        return div;
    }
}