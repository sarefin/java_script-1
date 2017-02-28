function clickText (form) {
    var a =form.inputbox.value;
    
if(a>=80&&a<=100)
	alert("your grading is 	A+");

else if(a>=70&&a<=79)
	alert("your grading is A");
else if(a>=60&&a<=69)
	alert("your grading is A-");
else if(a>=50&&a<=59)
	alert("your grading is B");
else if(a>=40&&a<=49)
	alert("your grading is C");
else if(a>=33&&a<=39)
	alert("your grading is D");
else 
	alert("your grading is F");
}