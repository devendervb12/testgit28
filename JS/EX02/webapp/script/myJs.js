function getLabel(id,message, color){
	
		var oEmpNameMsgLabel = document.getElementById(id);

		oEmpNameMsgLabel.innerText = message;
		oEmpNameMsgLabel.setAttribute("style", "color : "+color+"");
	
}

function checkEmpLength() {
	debugger;
	// get the value of EmpName and check the length
	var oEmpNameInput = document.getElementById("idEmp").value;

	if (oEmpNameInput.length === 0) {
		
			getLabel("idLEmp", "Name is Required", "Red");
	//	var oEmpNameMsgLabel = document.getElementById("idLEmp");

	//	oEmpNameMsgLabel.innerText = "Name is Required";
	//	oEmpNameMsgLabel.setAttribute("style", "color : red");
		//	oEmpNameMsgLabel.style.color = "Red";
	}
}

function validateFullName() {

	var oEmpNameInput = document.getElementById("idEmp").value;

	var regExp = /^[A-Z]{1}[a-z]{1,}\s[A-Z]{1}[a-z]{1,}$/;

	if (regExp.test(oEmpNameInput)) {
		
		getLabel("idLEmp", "Valid Name", "Green");
	} else{
		getLabel("idLEmp", "Invalid Name eg : Surender Naik", "Red");
	}

}


