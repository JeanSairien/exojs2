/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
/**
 * Exercices sur les nombres et les caluls mathématiques
 */

/*ex1*/
function tailleString(chaine){
	var Taille = ("string de plusieur caracteres ");
 	var size = (Taille.length);
 		return size;
};

/*ex2*/
function remplaceCar(chaine,before,after){
	
	var	result = chaine.replace('e', ' ');
	return(result); 
};

/*ex3*/
function concatString(chaine1,chaine2){
	
	return chaine1+chaine2;

};

/*ex4*/
function afficherCar(){
	var chaine1 = 'Ces exercices sont super!';
	var result = chaine1.charAt(4);
	return(result);
};

/*ex5*/
function afficherNCar(chaine1){
	var result = chaine1.slice(0,9);
	return(result);
};

/*ex6*/
function majusculeString(chaine1){
	var result = chaine1.toUpperCase();
	return(result);

};

/*exo7*/

function SupprEspaceString(chaine){
	var result =chaine.trim(chaine);
	return(result);
};

/*exo8*/

function IsString(chaine){
	if(typeof chaine ==='string'){
		return true;
	}
		else{

			return false;
		}

	};



/*exo9*/

function AfficherExtensionString(chaine){
	return chaine.substring(chaine.lastIndexOf(".") +1); 

};

/*exo10*/

function NombreEspaceString(chaine){
	var result = chaine.split(' ').length - 1 ;
		return result;

};

/*exo11*/

function calculPuissance(x,y){
	return result = Math.pow(x, y);
	  	

};

function valeurAbsolue(nbr){
return result =  Math.abs(nbr);


};


/*function valeurAbsolueArray(tab){
	var tab = tab.length;
	var result = [0,4];
	for(var i=0; i <= tab; i++){
		var result= Math.abs(tab.i);	
	}

	return result ;

	
};*/

function valeurAbsolueArray(tab){
	return tab.map(valeurAbsolue);
	 
	


};

/*exo bonus1 1*/
function InverseString(chaine){
	return result = chaine.split('').reverse().join('');
	

};

/*exo bonus1 2*/
function minusculeString(chaine1){
	var result = chaine1.toLowerCase();
	return result ;



};
/*exo bonus 1.3*/
/*function countDistinctCar(str){
	var result = str.split("").filter(function(str , i ,x){
	return x.indexOf(str) === i;	
});
	return result.length;


};*/

/*function countDistinctCar(str){
	var car ="";
	var cpt = 0;
	for(i=0;i<6;i++){
		if(car!=tab[i]){
			car = tab[i];
			cpt++; 

		}
		return cpt;
	}


};*/


function countDistinctCar(texte){
	var lettre ="";
	var tab = texte.split("");
		tab.sort();
	var count= 0;
	for(var i=0	;i < texte.length;i++){
		if( lettre != tab[i]){
			count++;	
			lettre = tab[i];	
		}
	}
	return count;
};





/*exo bonus2.1*/ 
/*function surfaceCercle(5){;
	var r = 5;
	var pi = 3.14
	return math.pi*(r*r);
}*/

