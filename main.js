student_name_array = [];
function submit()
{
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;
    student_name_array.push(name1);
    student_name_array.push(name2);
    student_name_array.push(name3);   
    student_name_array.push(name4);
    console.log(student_name_array);
    document.getElementById("display_name").innerHTML=student_name_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sorting_button").style.display="inline-block";
}
function sorting()
{
    student_name_array.sort();
    console.log(student_name_array);
    document.getElementById("display_name").innerHTML=student_name_array;
}