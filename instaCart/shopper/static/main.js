var email;  var lastname; var firstname; var regionName; var phoneNumber; var phoneType; var over21;
function validateEmail() {
    var x = document.getElementById("email").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var region = document.getElementById("region").value;
    var phone = document.getElementById("phone").value;
    var phone_type = document.getElementById("phone_type").value;
    var over_21 = document.getElementById("over_21").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if(fname.length < 1){
        alert("first name is required");
    }else if(lname.length <1){
        alert("last name is required");
    }else if(region.length <1){
        alert("region is required");
    }else if(phone.length <1){
        alert("phone is required");
    }else if(phone_type.length <1){
        alert("phone type is required");        
    }else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }else{
        email = x;
        lastname=lname;
        firstname=fname;
        regionName= region;
        phoneNumber = phone;
        phoneType = phone_type;
        over21 = over_21;
        var ele = document.getElementById("continue");
        ele.setAttribute("data-toggle","modal");
        ele.setAttribute("data-target","#agreementModal");
        ele.setAttribute("data-dismiss","modal");
        //console.log(email);
    }

}

function addAttribute(){
    var form = document.getElementById("form");
    var x = document.createElement("INPUT");
    x.setAttribute("type", "hidden");
    x.setAttribute("name","first_name");
    x.setAttribute("value", firstname);
    form.appendChild(x);

    var input2 = document.createElement("INPUT");
    input2.setAttribute("type", "hidden");
    input2.setAttribute("name","last_name");
    input2.setAttribute("value", lastname);
    form.appendChild(input2);


    var emailInput = document.createElement("INPUT");
    emailInput.setAttribute("type", "hidden");
    emailInput.setAttribute("name","email");
    emailInput.setAttribute("value", email);
    form.appendChild(emailInput);

    var regioninput = document.createElement("INPUT");
    regioninput.setAttribute("type", "hidden");
    regioninput.setAttribute("name","region");
    regioninput.setAttribute("value", regionName);
    form.appendChild(regioninput);

    var phoneInput = document.createElement("INPUT");
    phoneInput.setAttribute("type", "hidden");
    phoneInput.setAttribute("name","phone");
    phoneInput.setAttribute("value", phoneNumber);
    form.appendChild(phoneInput);

    var phoneTypeInput = document.createElement("INPUT");
    phoneTypeInput.setAttribute("type", "hidden");
    phoneTypeInput.setAttribute("name","phone_type");
    phoneTypeInput.setAttribute("value", phoneType);
    form.appendChild(phoneTypeInput);

    var over21Input = document.createElement("INPUT");
    over21Input.setAttribute("type", "hidden");
    over21Input.setAttribute("name","over_21");
    over21Input.setAttribute("value", over21Input);
    form.appendChild(over21Input);
    
    console.log(x);
}