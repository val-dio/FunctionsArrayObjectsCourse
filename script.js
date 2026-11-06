let visitor = [];
function greet(name,age){
    if ((age==="")||(name==="")){
     return "Please fill the space";
    }
     if(age>=18){
        return "Hello " + name + "Your " + age + " ages is enough";
    }
    else{
        return "Hello " + name + "Your " + age + " ages is low";
    } 
}

function update(){
    let name=document.getElementById("name").value;
    let age=document.getElementById("ages").value;
    let greeting=greet(name,age);
    document.getElementById("greeting").innerText=greeting;

    if ((name !=="") || (age !=="")){

        let guest = {
            guestName: name,
            guestAge: age
        };

        visitor.push(guest);

    }

    let list = "";
    for (let i = 0; i < visitor.length; i++){

        let currentGuest = visitor[i];

        list += "<li> 👤" + currentGuest.guestName + "(Age:" + currentGuest.guestAge + ") </li>";
    }
    document.getElementById("visitors").innerHTML = list;
}

