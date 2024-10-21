function calculateMarksheet() {
            
    var studentName = document.getElementById('student').value;
    var english = parseInt(document.getElementById('eng').value);
    var computer = parseInt(document.getElementById('comp').value);
    var physics = parseInt(document.getElementById('phy').value);
    var math = parseInt(document.getElementById('math').value);
    
    // Calculate total and percentage
    var totalMarks = english + computer + physics + math;
    var percentage = (totalMarks / 400) * 100;

    // if the students does'nt fill in a field 
  
    // Determine grade
    var grade;
    if(percentage >= 80){
        grade = "Congratulation! you got A+1🥈";
    }else if(percentage >= 70){
        grade = "Good!you got" + ' ' + "A🎀";
    }
    else if(percentage >= 60){
        grade = "you got" + ' ' + "B♥";
    }
    else{
        grade = "Sorry! You are Fail....😕";
    }


    // if the students does'nt fill in a field 
    if (studentName === "" || english === "" || computer === "" || physics === "" || math === ""){
        document.getElementById("result").innerHTML = `<h3>Please input Valid marks!</h3>`;
       }
       // Display the result
       else{
        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<p>Student Name: ${studentName}</p>
                               <p>Total Marks: ${totalMarks}/300</p>
                               <p>Percentage: ${percentage.toFixed(2)}%</p>
                               <p>Grade: ${grade}</p>`;
       }
}
