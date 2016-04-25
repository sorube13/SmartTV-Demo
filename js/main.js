
var para = document.createElement("p");
var node = document.createTextNode(WURFL.form_factor);
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);

if(WURFL.form_factor === "Desktop"){
	var vid1 = document.createElement("video");
	vid1.id = "localVideo";
	var vid2 = document.createElement("video");
	vid2.id = "remoteVideo";
	var element = document.getElementById("div1");
	element.appendChild(vid1);
	element.appendChild(vid2);
	// var para = document.createElement("p");
	// var node = document.createTextNode("This is a Computer.");
	// para.appendChild(node);
	// var element = document.getElementById("div1");
	// element.appendChild(para);
}else if(WURFL.form_factor === "Smart-TV"){
	var vid1 = document.createElement("video");
	vid1.id = "localVideo";
	var vid2 = document.createElement("video");
	vid2.id = "remoteVideo";
	var element = document.getElementById("div1");
	element.appendChild(vid1);
	element.appendChild(vid2);
} else{
	var para = document.createElement("p");
	var node = document.createTextNode("This is a Other.");
	para.appendChild(node);
	var element = document.getElementById("div1");
	element.appendChild(para);
}
