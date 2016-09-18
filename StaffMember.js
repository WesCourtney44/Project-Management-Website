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
//# sourceMappingURL=StaffMember.js.map