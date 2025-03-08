function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const heightInFeet = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(heightInFeet) || heightInFeet <= 0) {
        document.getElementById("result").innerHTML = "Enter a valid value";
        return;
    }

    // Convert height from feet to meters
    const heightInMeters = heightInFeet * 0.3048;

    const bmi = (weight / (heightInMeters ** 2)).toFixed(2);
    let status = "";

    if (bmi < 18.5) status = "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) status = "Normal weight";
    else if (bmi >= 25 && bmi < 29.9) status = "Overweight";
    else status = "Obese";

    document.getElementById('result').innerHTML = `BMI: ${bmi} - ${status}`;
}
