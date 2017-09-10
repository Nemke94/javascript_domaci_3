var cene = [5, 145, 69, 56, 13, 456, 78, 4, 30];
var manjeOd50 = [];
var veceOd50 = [];
var zbir = 0;


for (var i = 0; i < cene.length; i++) 
{
	if (cene[i] <= 50)
	{
		manjeOd50.push(cene[i] + (cene[i] * (18 / 100)));
		
	}
	else
	{
		veceOd50.push(cene[i] + (cene[i] * (8 / 100)));
		
	}
}

for (var i = 0; i < cene.length; i++) 
{
	if (cene[i] <= 50)
	{
		zbir = zbir + cene[i] + (cene[i] + (cene[i] * (18 / 100)));
		
	}
	else
	{
		zbir = zbir + cene[i] +(cene[i] + (cene[i] * (8 / 100)));
		
	}
}

console.log("Manje od 50 + porez (18%): ", manjeOd50);
console.log("Vece od 50 + porez (8%): ", veceOd50);
console.log("Ukupna cena: ", zbir);