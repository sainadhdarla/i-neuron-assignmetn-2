function student_grade(marks)
{

switch (true)
{
case marks >= 90 && marks <=100:
    console.log("S-GRADE")
    break;

case marks >=80 && marks<90:
    console.log("A-GRADE")
    break;

case marks >=70 && marks<80:
    console.log("B-GRADE")
    break;

case marks >= 60 && marks<70:
    console.log("C-GRADE")
    break;

case marks >=50 && marks<60:
    console.log("D-GRADE")
    break;

case marks >=40 && marks<50:
    console.log("E-GRADE")
    break;

case marks >= 0 && marks<40:
    console.log("FAILED")
    break;

default:
    console.log("INVALID MARKS")
    break;

}
}
student_grade(39)