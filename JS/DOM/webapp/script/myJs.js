 // access Employee name label
 var empLabel = document.getElementById("idLempName");
 
 console.log(empLabel);
 
/*  <p>
        		<label> Gender:</label>
                <input placeholder='Enter Gender'>
        </p>*/
        
function createGender(){
	
	var gPara = document.createElement("p");
	
	var gLabel = document.createElement("label");
	
	var lText = document.createTextNode("Gender :");
	
	var gInput = document.createElement("input");
	
       gInput.setAttribute("placeholder", "Enter Gender");
	
	
	gLabel.appendChild(lText);
	
	gPara.appendChild(gLabel);
	gPara.appendChild(gInput);
		
	console.log(gPara);	
	
return gPara;
}
debugger;
var gPara = createGender();

document.getElementsByTagName("form")[0].appendChild(gPara);

//parentNode.insertBefore(newNode, referenceNode);

var insertedNode = document.getElementsByTagName("form")[0].insertBefore(gPara, document.getElementsByTagName("form")[0].children[2]);











