function login()
    //Email: Medsgiggles //Error Message: Your email is incorrect
    //Password: Group5 //Error Message: Your password is incorrect
    {
    let Email = document.getElementById("Email").value;
    console.log("You enter:" + " " + Email);

    let Password = document.getElementById("Password").value;
    console.log("You enter:" + " " + Password);

     let Full = document.getElementById("Full").value;
    console.log("You enter:" + " " + Full);

  
     if (Email === "Medsgiggles" && Password === "Group5") {
        console.log("Your email and password is correct!");
        erroremail.innerHTML = "Your email and password is incorrect";
        errorpasswordandemail.innerHTML = "Your email and password is incorrect!";
     

    } else if (Email !== "Medsgiggles") {
        console.log("Your email is incorrect");
        erroremail.innerHTML = "Your email is incorrect";
        
    } else if (Password !== "Group5") {
      console.log("Your password is incorrect");
        errorpassword.innerHTML = "Your password is incorrect";
    }
    }  