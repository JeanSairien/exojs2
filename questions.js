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
function remplaceCar(chaine){
	
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


function valeurAbsolueArray(tab){
	var result = tab[];
	for(){

	return result = Math.abs(tab);

	}
};