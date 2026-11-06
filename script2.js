 let aray = [];

function user(firstname,lastname,age){

    if((firstname==="")||(lastname==="")||(age==="")){

       return "Please Fill Missing gaps...";
    }
    else if (age<1){
       return "Undefined ages..";

    }
    else{
         return "Welcome! " + firstname +" " + lastname +" (Ages:" + age + ")" ;

    }

}

function Submit(){
    
    let FistName = document.getElementById("FirstNAme").value;
    let LastName = document.getElementById("LastNAme").value;
    let Ages = document.getElementById("Ages").value;
    let all = user(FistName,LastName,Ages);
    document.getElementById("UserDisplay").innerText = all;

    if((FistName!=="")&&(LastName!=="")){

    let ob = {
        firstname: FistName,
        Lastname: LastName,
        ages:Ages
    };

      aray.push(ob);

    }
  
        let obb="";
        for (let i = 0;i < aray.length;i ++){

            let allbob = aray[i];

        

        obb +="<li>" + allbob.firstname +" "+ allbob.Lastname + " "+  allbob.ages +  "</li> ";

        }

     
    document.getElementById("UserFormDisplay").innerHTML = obb ;
    

}