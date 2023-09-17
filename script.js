//VARIABILI GLOBALI
const elo_coefficient = 32;
const decimal_rounding = 2; //arrotondamento di due cifre decimali
var j = 2; //contatore dopo le prime due immagini fino alla fine del vettore
var k = 0; //contatore prime due immagini

var malevips = new Array();
var femalevips = new Array();
//il vettore vips è quello che li comprende tutti e lo includo nel file "VIP_JSON.js"

//varaibile scelta sesso vip (ne basta una)
var scelta_uomo = false;

const text_above_images = document.querySelector('.text-above-images');
//Variabili che consentono la gestione della schermata di scelta sesso dei VIP da votare
const male_choise_image = document.getElementById('man-img');
const female_choise_image = document.getElementById('woman-img');
const testotraimmagini2 = document.getElementById('testotraimmagini2');

//Variabili che consentono la gestione della prima immagine
const img1 = document.getElementById('img1');
const vip_info_list_1 = document.getElementById("vip_info_list_1");
const vip_info_list_1_name = document.getElementById("vip_info_list_1_name");
const vip_info_list_1_elo = document.getElementById("vip_info_list_1_elo");

//Variabili che consentono la gestione della seconda immagine
const img2 = document.getElementById('img2');
const vip_info_list_2 = document.getElementById("vip_info_list_2");
const vip_info_list_2_name = document.getElementById("vip_info_list_2_name");
const vip_info_list_2_elo = document.getElementById("vip_info_list_2_elo");

//Variabili che contengono il contenuto del div che contiene immagini e relative descrizioni
const img1block = document.getElementById('img1-block');
const img2block = document.getElementById('img2-block');
const testotraimmagini = document.getElementById('testotraimmagini');



//FUNZIONI GESTIONE PROGRAMMA
function prova(image, lista_info){
    image.src = vips[0].img_vip;
    lista_info.innerHTML = "<li>" + vips[0].nome_vip + " " + vips[0].cognome_vip + "</li><li>"+ vips[0].punteggio_elo + "</li>";
    //alert(lista_info);
    //alert(image.src);
}


function provali(image, firstlielement, secondlielement){
    image.src = vips[0].img_vip;
	firstlielement.innerText = vips[0].nome_vip + " " + vips[0].cognome_vip;
	secondlielement.innerText = 2000;
	//alert(firstlielement);
	//alert(secondlielement);
    //alert(image.src);
}


//modo per passare ad addEventListener una funzione con parametri!!
img1.addEventListener("click", function() {
    //prova(img1, lista_info_vip_1);
	//provali(img1, vip_info_list_1_name, vip_info_list_1_elo);
	images_upload(img1);
});

img2.addEventListener("click", function() {
    //prova(img2, lista_info_vip_2);
	//provali(img2, vip_info_list_2_name, vip_info_list_2_elo);
	images_upload(img2);

});

male_choise_image.addEventListener("click", function() {
    choice_men_o_women(male_choise_image);
});

female_choise_image.addEventListener("click", function() {
    choice_men_o_women(female_choise_image);
});









function male_and_female_vips_arrays(){
	var counter_array_male_vips = 0;
	var counter_array_female_vips = 0;

	for(i=0;i<vips.length;i++){
		if(vips[i].sesso == 'M'){
			malevips[counter_array_male_vips] = vips[i];
			counter_array_male_vips++;
		}else{
			femalevips[counter_array_female_vips] = vips[i];
			counter_array_female_vips++;
		}
	}
}



function single_image_upload(array, counter_array, image, namelielement, elolielement){
	//PASSO IL VALORE DEL VETTORE AGLI ELEMENTI (IL CONTROLLO DEL SESSO LO FACCIO FUORI DALLA FUNZIONE)
	
	//PASSO IMMAGINE VIP
	image.src = array[counter_array].img_vip;
	//alert(array.length);

	//VALUTO SE IL VIP HA IL NOME D'ARTE E STAMPO QUELLO SOTTO LA FOTO
	if(array[counter_array].nome_d_arte_vip == null){
		//IN QUESTO CASO ASSEGNO NOME E COGNOME
		namelielement.innerText = array[counter_array].nome_vip + " " + array[counter_array].cognome_vip;
	}else{
		//IN QUESTO CASO ASSEGNO NOME D'ARTE
		namelielement.innerText = array[counter_array].nome_d_arte_vip;
	}

	//PASSO PUNTEGGIO ELO
	elolielement.innerText = array[counter_array].punteggio_elo;
}



function first_two_images(){
	//CONTROLLO SESSO SCELTO
	if(scelta_uomo == true){
		//PASSO VETTORE UOMINI
		single_image_upload(malevips, k, img1, vip_info_list_1_name, vip_info_list_1_elo);
		k++;
		single_image_upload(malevips, k, img2, vip_info_list_2_name, vip_info_list_2_elo);
	}else{
		//PASSO VETTORE DONNE
		single_image_upload(femalevips, k, img1, vip_info_list_1_name, vip_info_list_1_elo);
		k++;
		single_image_upload(femalevips, k, img2, vip_info_list_2_name, vip_info_list_2_elo);
	}
}



function choice_men_o_women(image_clicked){
	//DEFINISCO I VETTORI DI UOMINI E DONNE
	male_and_female_vips_arrays();
	
	if(male_choise_image.id == image_clicked.id){
		//CARICO DATI UOMINI
		scelta_uomo = true;
	}else{
		//CARICO DATI DONNE
		scelta_uomo = false;
	}

	male_choise_image.style.display = 'none';
	testotraimmagini2.style.display = 'none';
	female_choise_image.style.display = 'none';

	img1block.style.display = 'inline';
	testotraimmagini.style.display = 'inline';
	img2block.style.display = 'inline';

	first_two_images();
}


function images_upload(image_clicked){
	if(scelta_uomo == true){
		if(j == malevips.length){
			img1block.style.display = 'none';
			img2block.style.display = 'none';
			text_above_images.style.display = 'none';
			testotraimmagini.innerText = "Gioco Finito";
			testotraimmagini.style.fontWeight = '900';
			return;
		}
	}else{
		if(j == femalevips.length){
			img1block.style.display = 'none';
			img2block.style.display = 'none';
			text_above_images.style.display = 'none';
			testotraimmagini.innerText = "Gioco Finito";
			testotraimmagini.style.fontWeight = '900';
			return;
		}
	}	

	//L'UTENTE HA SCELTO L'IMMAGINE 1
	if(img1.src == image_clicked.src){
		//STAMPO CHE VINCE IL VIP DELL'IMMAGINE 1
		//E PERDE IL VIP DELL'IMMAGINE 2
		///alert("CIAOOOOO");
		//alert(image_clicked + " BRAVO, HA VINTO:" + vip_info_list_1_name.textContent + " E HA PERSO: " + vip_info_list_2_name.textContent + " J: " + j);
		

		//AGGIORNO PUNTEGGI

		//AGGIORNO PUNTEGGIO CON VITTORIA DI IMG1
		let expected_score_img1 = expected_elo_score(parseFloat(vip_info_list_1_elo.textContent), parseFloat(vip_info_list_2_elo.textContent)); //funzione calcolo punteggio ELO atteso
		let updated_elo_score_img1 = elo_win_score(parseFloat(vip_info_list_1_elo.textContent), expected_score_img1, elo_coefficient); //funzione calcolo punteggio ELO per vittoria
		//vip_info_list_1_elo.innerText = updated_elo_score_img1;
		vip_info_list_1_elo.innerText = round(parseFloat(updated_elo_score_img1), decimal_rounding);

		//AGGIORNO PUNTEGGIO CON SCONFITTA DI IMG2
		let expected_score_img2 = expected_elo_score(parseFloat(vip_info_list_2_elo.textContent), parseFloat(vip_info_list_1_elo.textContent)); //funzione calcolo punteggio ELO atteso
		let updated_elo_score_img2 = elo_loss_score(parseFloat(vip_info_list_2_elo.textContent), expected_score_img2, elo_coefficient); //funzione calcolo punteggio ELO per vittoria
		//vip_info_list_1_elo.innerText = updated_elo_score_img1;
		vip_info_list_2_elo.innerText = round(parseFloat(updated_elo_score_img2), decimal_rounding);

		//CONTROLLO SESSO SCELTO
		if(scelta_uomo == true){
			//PASSO VETTORE UOMINI
			//CAMBIO L'IMMAGINE CHE PERDE, CIOÈ L'IMMAGINE 2
			single_image_upload(malevips, j, img2, vip_info_list_2_name, vip_info_list_2_elo);
			j++;
		}else{
			//PASSO VETTORE DONNE
			//CAMBIO L'IMMAGINE CHE PERDE, CIOÈ L'IMMAGINE 2
			single_image_upload(femalevips, j, img2, vip_info_list_2_name, vip_info_list_2_elo);
			j++;
		}
	}else{ //ALTRIMENTI L'UTENTE HA SCELTO L'IMMAGINE 2
		//STAMPO CHE VINCE IL VIP DELL'IMMAGINE 2
		//E PERDE IL VIP DELL'IMMAGINE 1
		//alert(image_clicked + " BRAVO, HA VINTO:" + vip_info_list_2_name.textContent + " E HA PERSO: " + vip_info_list_1_name.textContent + " J: " + j);
		

		//AGGIORNO PUNTEGGI

		//AGGIORNO PUNTEGGIO CON VITTORIA DI IMG2
		let expected_score_img2 = expected_elo_score(parseFloat(vip_info_list_2_elo.textContent), parseFloat(vip_info_list_1_elo.textContent)); //funzione calcolo punteggio ELO atteso
		let updated_elo_score_img2 = elo_win_score(parseFloat(vip_info_list_2_elo.textContent), expected_score_img2, elo_coefficient); //funzione calcolo punteggio ELO per vittoria
		//vip_info_list_1_elo.innerText = updated_elo_score_img1;
		vip_info_list_2_elo.innerText = round(parseFloat(updated_elo_score_img2), decimal_rounding);

		//AGGIORNO PUNTEGGIO CON SCONFITTA DI IMG1
		let expected_score_img1 = expected_elo_score(parseFloat(vip_info_list_1_elo.textContent), parseFloat(vip_info_list_2_elo.textContent)); //funzione calcolo punteggio ELO atteso
		let updated_elo_score_img1 = elo_loss_score(parseFloat(vip_info_list_1_elo.textContent), expected_score_img1, elo_coefficient); //funzione calcolo punteggio ELO per vittoria
		//vip_info_list_1_elo.innerText = updated_elo_score_img1;
		vip_info_list_1_elo.innerText = round(parseFloat(updated_elo_score_img1), decimal_rounding);


		//CONTROLLO SESSO SCELTO
		if(scelta_uomo == true){
			//PASSO VETTORE UOMINI
			//CAMBIO L'IMMAGINE CHE PERDE, CIOÈ L'IMMAGINE 1
			single_image_upload(malevips, j, img1, vip_info_list_1_name, vip_info_list_1_elo);
			j++;
		}else{
			//PASSO VETTORE DONNE
			//CAMBIO L'IMMAGINE CHE PERDE, CIOÈ L'IMMAGINE 1
			single_image_upload(femalevips, j, img1, vip_info_list_1_name, vip_info_list_1_elo);
			j++;
		}
	}
}




//FUNZIONI PER CALCOLO PUNTEGGIO ELO
function expected_elo_score(ra, rb){ //funzione calcolo punteggio ELO atteso
	//I parametri ra e rb rappresentano i punteggi dei due giocatori A e B
	//Nel nostro caso A e B sono i vip dell'immagine 1(A) e dell'immagine 2(B)
	//Math.pow(2, 3); //2 elevato alla 3

	let ea = 1 / (1 + Math.pow(10, (rb-ra) / 400));
	//ea significa Expected A, il punteggio atteso di A
	
	//Usiamo a per convenzione,
	//tanto la funzione verra applicata al giocatore b scambiando i parametri quando invocata

	//ritorniamo il punteggio atteso del giocatore
	return ea;
}

function elo_win_score(score, expected, k){ //funzione calcolo punteggio ELO per vittoria
	//il parametro score rappresenta il punteggio attuale del giocatore

	//in caso di vittoria il punteggio ottenuto (minuendo) vale 1

	//il parametro expected rappresenta il punteggio atteso
	//lo calcoliamo con la funzione "expected_elo_score(ra,rb)"

	//il parametro k rappresenta il coefficiente di variazione ELO
	//lo rappresentiamo con una variabile const settata a 32 (come su wikipedia)

	let win_score = score + k * (1 - expected);
	//attuale punteggio + coefficiente che moltiplica il punteggio ottenuto meno il punteggio atteso

	return win_score;
}

function elo_draw_score(score, expected, k){ //funzione calcolo punteggio ELO per pareggio
	//il parametro score rappresenta il punteggio attuale del giocatore

	//in caso di vittoria il punteggio ottenuto (minuendo) vale 0,5

	//il parametro expected rappresenta il punteggio atteso
	//lo calcoliamo con la funzione "expected_elo_score(ra,rb)"

	//il parametro k rappresenta il coefficiente di variazione ELO
	//lo rappresentiamo con una variabile const settata a 32 (come su wikipedia)

	let draw_score = score + k * (0.5 - expected);
	//attuale punteggio + coefficiente che moltiplica il punteggio ottenuto meno il punteggio atteso

	return draw_score;
}

function elo_loss_score(score, expected, k){ //funzione calcolo punteggio ELO per sconfitta
	//il parametro score rappresenta il punteggio attuale del giocatore

	//in caso di vittoria il punteggio ottenuto (minuendo) vale 0

	//il parametro expected rappresenta il punteggio atteso
	//lo calcoliamo con la funzione "expected_elo_score(ra,rb)"

	//il parametro k rappresenta il coefficiente di variazione ELO
	//lo rappresentiamo con una variabile const settata a 32 (come su wikipedia)

	let loss_score = score + k * (0 - expected);
	//attuale punteggio + coefficiente che moltiplica il punteggio ottenuto meno il punteggio atteso

	return loss_score;
}


function round(number, places) { //arrotonda di n cifre (places) date dall'utente
	return +(Math.round(number + "e+" + places)  + "e-" + places);
	//return +(Math.round(number + "e+2")  + "e-2");
}



