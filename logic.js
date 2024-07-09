function calculateBMI() {

    var weightInput = document.getElementById("weight")

    var heightInput = document.getElementById("height")
    

    var resultDiv = document.getElementById("result")


    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);
    var gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        resultDiv.innerHTML = "Please select your gender.";
        return;
    }
    gender = gender.value;




    if (isNaN(weight) || isNaN(height)) {
        resultDiv.innerHTML = "Please enter valid height and weight.";
        return;
    }

    var bmi = weight / ((height / 100) ** 2);
    var category = "";
    if (gender == "male") {
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 25) {
            category = "Normal weight";
        } else if (bmi < 30) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

    }
    else if(gender == "female") {
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 24) {
            category = "Normal weight";
        } else if (bmi < 29) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

    }
    else{
       
            category = "Unknown gender";
        
    }

    


    resultDiv.innerHTML = "Your BMI is " + "<br>" + bmi.toFixed(2) + " <br>" + category + "";
}

function resetBMI() {


    document.getElementById("my_form").reset()

}


