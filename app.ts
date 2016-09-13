class StaffMember {
    url: string;
    altText: string;
    title: string;
    firstName: string;
    lastName: string;
    position: string;
    constructor(title: string, firstName: string, lastName: string, position: string) {
        this.url = "Images/Staff/" + firstName + " " + lastName + ".jpg";
        this.altText = "Image of " + title + " " + firstName + " " + lastName;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
    }
    public getDiv(): HTMLDivElement {
        let div: HTMLDivElement = document.createElement('div');
        div.tagName = "StaffMember";

        let img: HTMLImageElement = document.createElement('img');
        img.src = this.url;
        img.alt = this.altText;
        img.width = 112.5;
        img.height = 140;
        div.appendChild(img);

        let nameDiv: HTMLDivElement = document.createElement('div');
        nameDiv.textContent = this.title + " " + this.firstName + " " + this.lastName;
        div.appendChild(nameDiv);

        let positionDiv: HTMLDivElement = document.createElement('div');
        positionDiv.textContent = this.position;
        div.appendChild(positionDiv);

        return div;
    }
}

class Main {

    public static main(): void {

        //Add staff members objects
        let staffMemberList = new Array<StaffMember>();
        staffMemberList.push(new StaffMember("The Rev.", "Jack", "Cormack", "Head of Staff"));
        staffMemberList.push(new StaffMember("Pastor", "Andy", "Traister", "Commissioned Ruling Elder"));
        staffMemberList.push(new StaffMember("", "Susan", "Utz", "Music Director"));
        staffMemberList.push(new StaffMember("", "Rob", "Magallon", "Praise Music Leader"));
        staffMemberList.push(new StaffMember("", "Megan", "Broadus", "Wee Care Director"));

        let index: number = 0;
        while (index < staffMemberList.length) {
            document.body.appendChild(staffMemberList[index].getDiv());
            index++;
        }
        
    }
}