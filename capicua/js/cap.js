window.onload = function()
{


	var capicua = function(num)
	{
		
		//console.log(num);
		for (var i = 1, a = "1"; i <= num; i++) {
			console.log((a) + " X " +  (a) + " = " + Number(a) * Number(a));
			a += "1";
			//console.log(i);
		}
	};

	nom_div("rango").addEventListener('change', function(event)
	{
		//nom_div("txtrango").innerHTML= this.value;
		//imprimeTriangulo()
		capicua(this.value);
	});

	function nom_div(div) 
	{
		return document.getElementById(div);

	}
	

};