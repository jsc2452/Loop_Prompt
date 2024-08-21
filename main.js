function reverse() {
    var str1 = document.getElementById("firstStr").value;
    var splitStr1 = str1.split("");
    //alert("split = " + splitStr1);
    var reverse = splitStr1.reverse();
    //alert("reverse = " + reverse);
    var joinStr1 = reverse.join("");
    //alert("join = " + joinStr1);

    
    
    if (str1 == joinStr1) {
        document.getElementById("palin").innerHTML = "This is a palin";
    }
    else {
        document.getElementById("palin").innerHTML = "This is not a palin";
    }
}
   
function reverse2() {
    var str1 = document.getElementById("secondStr").value;
    var splitStr1 = str1.split("");
    //alert("split = " + splitStr1);
    var reverse = splitStr1.reverse();
    //alert("reverse = " + reverse);
    var joinStr1 = reverse.join("");
    //alert("join = " + joinStr1);

    
    if (str1 == joinStr1) {
        document.getElementById("palin2").innerHTML = "This is a palin";
    }
    else {
        document.getElementById("palin2").innerHTML = "This is not a palin";
    }
}

function check() {

    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var zipCode = document.getElementById("zipCode").value;
    var combinedName = fName + " " + lName;

    if (combinedName.length > 20) {

        if (zipCode.length == 5) {
            alert("Information is valid.")
        }
        else {
            alert("Zipcode needs to be five digits.")
        }
    }

    else {
        alert("Length has to be more than twenty.")
    }
 
}

function promptLoop() {
    let continueLoop = true;

    while (continueLoop) {
        // Prompt user for a string
        let userInput = prompt("Enter a string (or leave empty to quit):");
        console.log(userInput)
        // If the user leaves the box empty exit the loop
        if (userInput == null || userInput == "" ) {
            alert("Exiting the loop.");
            continueLoop = false;
        }
        else if (userInput == reverse3(userInput)) {
            alert("This is a palin")
        }

        else {
            
            alert("You entered: " + userInput);
   
        }
    
    }
}

function reverse3(str1) {
    
    var splitStr1 = str1.split("");
    //alert("split = " + splitStr1);
    var reverse = splitStr1.reverse();
    //alert("reverse = " + reverse);
    var joinStr1 = reverse.join("");
    //alert("join = " + joinStr1);

    return joinStr1;
    
    
}