<?php
	//CONNESSIONE AL DATABASE
	/*$dbhost = "localhost";
	$user = "root";
	$password = "";
	$dbname="facemash_vip";

	$connessione = new mysqli($dbhost,$user,$password,$dbname);
	if($connessione->connect_error){
	    die("Connessione fallita".$connessione->connect_error);
	}

	//FUNZIONE SET_CHARSET PER RENDERE VISIBILI ACCENTI IN HTML
	$connessione->set_charset('utf8mb4');

	//QUERY E RICHIESTA AL DATABASE
	$query = "SELECT * FROM VIP";
	$risultato_query = $connessione->query($query);

	$array_vip = [];
	//SALVO IN UN ARRAY ASSOCIATIVO IL RISULTATO DELLA QUERY
	$array_vip = mysqli_fetch_all($risultato_query, MYSQLI_ASSOC);

	//CHIUDO CONNESSIONE
	$connessione->close();

	//PASSO L'ARRAY IN FORMATO JSON A JAVASCRIPT
	echo json_encode($array_vip);

	$fp = fopen('empdata.json', 'w');
	fwrite($fp, json_encode($emparray));
	fclose($fp);*/


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

	
	//OPPURE CON IL WHILE, SENZA MYSLI_FETCH_ALL

	//CONNESSIONE AL DATABASE
	$dbhost = "localhost";
	$user = "root";
	$password = "";
	$dbname="facemash_vip";

	$connessione = new mysqli($dbhost,$user,$password,$dbname);
	if($connessione->connect_error){
	    die("Connessione fallita".$connessione->connect_error);
	}

	//FUNZIONE SET_CHARSET PER RENDERE VISIBILI ACCENTI IN HTML
	$connessione->set_charset('utf8mb4');

	//QUERY E RICHIESTA AL DATABASE
	$query = "SELECT * FROM VIP";
	$risultato_query = $connessione->query($query);

	//CREO UN ARRAY (ASSOCIATIVO) PER CONTENERE LE QUERY
	$array_vip = array();
	while($row =mysqli_fetch_assoc($risultato_query)){
		$array_vip[] = $row;
	}

	//CHIUDO CONNESSIONE
	$connessione->close();

	//PASSO L'ARRAY IN FORMATO JSON A JAVASCRIPT
	echo json_encode($array_vip);

	$fp = fopen('empdata.json', 'w');
	fwrite($fp, json_encode($emparray));
	fclose($fp);
?>
