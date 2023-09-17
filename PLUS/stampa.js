function stampa_vettore_uomini(){
	var corpopagina = document.getElementById('corpo-pagina');
	corpopagina.style.display = 'none';

/*
	//CREAZIONI ELEMENTI THEAD E TBODY
	//THEAD PER INTESTAZIONE
	//TBODY CONTIENE LE RIGHE E LE COLONNE DI INFORMAZIONI
	let thead = document.createElement('thead');
	let tbody = document.createElement('tbody');

	//AGGIUNGI ELEMENTI THEAD E TBODY ALLA TABELLA DEL DIV
	table.appendChild(thead);
	table.appendChild(tbody);
*/

	//CREAZIONI ELEMENTI THEAD E TBODY
	//TABLE PER TABELLA
	//THEAD PER INTESTAZIONE
	//TBODY CONTIENE LE RIGHE E LE COLONNE DI INFORMAZIONI	
	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let tbody = document.createElement('tbody');

	table.border="2"; //imposto il bordo della tabella
	table.appendChild(thead); //aggiungo thead alla tabella
	table.appendChild(tbody); //aggiungo tbody alla tabella

	//Aggiunge l'intera tabella al body
	document.getElementById('body').appendChild(table);





	// Creo elemento tr (riga), lo popolo con le informazioni in th e poi lo aggiungo all'elemento thead
	let row_1 = document.createElement('tr');
	let heading_0 = document.createElement('th');
	heading_0.innerHTML = "contatore i";
	let heading_1 = document.createElement('th');
	heading_1.innerHTML = "id_vip";
	let heading_2 = document.createElement('th');
	heading_2.innerHTML = "nome_vip";
	let heading_3 = document.createElement('th');
	heading_3.innerHTML = "cognome_vip";
	let heading_4 = document.createElement('th');
	heading_4.innerHTML = "nome_d_arte_vip";
	let heading_5 = document.createElement('th');
	heading_5.innerHTML = "sesso";
	let heading_6 = document.createElement('th');
	heading_6.innerHTML = "vittorie";
	let heading_7 = document.createElement('th');
	heading_7.innerHTML = "sconfitte";
	let heading_8 = document.createElement('th');
	heading_8.innerHTML = "punteggio_elo";
	let heading_9 = document.createElement('th');
	heading_9.innerHTML = "img_vip";

	row_1.appendChild(heading_0);
	row_1.appendChild(heading_1);
	row_1.appendChild(heading_2);
	row_1.appendChild(heading_3);
	row_1.appendChild(heading_4);
	row_1.appendChild(heading_5);
	row_1.appendChild(heading_6);
	row_1.appendChild(heading_7);
	row_1.appendChild(heading_8);
	row_1.appendChild(heading_9);
	thead.appendChild(row_1);

	
	// Creo elemento tr (riga),
	// lo popolo con le informazioni in td (cella) e poi lo aggiungo all'elemento tbody
	for (i = 0; i < vettore_immagini_M.length; i++) {
		let row_2 = document.createElement('tr');
		
		let row_2_data_0 = document.createElement('td');
		row_2_data_0.innerHTML = i;

		let row_2_data_1 = document.createElement('td');
		row_2_data_1.innerHTML = vettore_immagini_M[i].id_vip;
		
		let row_2_data_2 = document.createElement('td');
		row_2_data_2.innerHTML = vettore_immagini_M[i].nome_vip;
		
		let row_2_data_3 = document.createElement('td');
		row_2_data_3.innerHTML = vettore_immagini_M[i].cognome_vip;
		
		let row_2_data_4 = document.createElement('td');
		row_2_data_4.innerHTML = vettore_immagini_M[i].nome_d_arte_vip;
		
		let row_2_data_5 = document.createElement('td');
		row_2_data_5.innerHTML = vettore_immagini_M[i].sesso;
		
		let row_2_data_6 = document.createElement('td');
		row_2_data_6.innerHTML = vettore_immagini_M[i].vittorie;
		
		let row_2_data_7 = document.createElement('td');
		row_2_data_7.innerHTML = vettore_immagini_M[i].sconfitte;
		
		let row_2_data_8 = document.createElement('td');
		row_2_data_8.innerHTML = vettore_immagini_M[i].punteggio_elo;
		 //<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"> 
		let immagine = "<img src=\"" + vettore_immagini_M[i].img_vip + "\" width=\"200px\">";
		
		let row_2_data_9 = document.createElement('td');
		row_2_data_9.innerHTML = immagine;

		
		row_2.appendChild(row_2_data_0);
		row_2.appendChild(row_2_data_1);
		row_2.appendChild(row_2_data_2);
		row_2.appendChild(row_2_data_3);
		row_2.appendChild(row_2_data_4);
		row_2.appendChild(row_2_data_5);
		row_2.appendChild(row_2_data_6);
		row_2.appendChild(row_2_data_7);
		row_2.appendChild(row_2_data_8);
		row_2.appendChild(row_2_data_9);
		tbody.appendChild(row_2);
	}
}