<?php
	$dbhost="localhost";
	$user="root";
	$password="";
	$dbname="facemash_vip";

	$connessione = new mysqli($dbhost,$user,$password,$dbname);
	if($connessione->connect_error){
		die("Connessione fallita".$connessione->connect_error);
	}

	$connessione->set_charset('utf8mb4');

	$query="SELECT * FROM VIP";
	$risultatoquery=$connessione->query($query);

	//$var_id = 0;

//('Abbie','Cornish','F',0,0,1400,'img'),

	
		while($row=$risultatoquery->fetch_assoc()){
			echo "(".$row['id_vip'].",'".$row['nome_vip']."','".$row['cognome_vip']."','".$row['sesso']."',".$row['vittorie'].",".$row['sconfitte'].",".$row['punteggio_elo'].",'".$row['img_vip']."'),";
			echo "<br>";
		}
	

/*

	if($risultatoquery->num_rows>0){
		echo "<table border=2>";
		echo "<thead>";
			echo "<th>id_vip</th>";
			echo "<th>nome_vip</th>";
			echo "<th>cognome_vip</th>";
			echo "<th>nome_d_arte_vip</th>";
			echo "<th>sesso</th>";
			echo "<th>vittorie</th>";
			echo "<th>sconfitte</th>";
			echo "<th>punteggio_elo</th>";
			echo "<th>img_vip</th>";
			echo "<th>NUOVA_img_vip</th>";
		echo "</thead>";
		echo "<tbody>";
		while($row=$risultatoquery->fetch_assoc()){
			//$var_id++;
			$percorso = "immagini/";
			$var_id = $row['id_vip'];
			$estensione = ".jpg";

			$nuovaimg_vip = $percorso.$var_id.$estensione;

			$queryupdate = "UPDATE VIP
							SET img_vip = '" . $nuovaimg_vip . "'
							WHERE id_vip = '" . $var_id . "'";
			
			//$risultatoqueryupdate=$connessione->query($queryupdate);

			echo "<tr>";
			echo "<td>".$row['id_vip']."</td>";
			echo "<td>".$row['nome_vip']."</td>";
			echo "<td>".$row['cognome_vip']."</td>";
			echo "<td>".$row['nome_d_arte_vip']."</td>";
			echo "<td>".$row['sesso']."</td>";
			echo "<td>".$row['vittorie']."</td>";
			echo "<td>".$row['sconfitte']."</td>";
			echo "<td>".$row['punteggio_elo']."</td>";
			echo "<td>".$row['img_vip']."</td>";
			echo "<td>".$nuovaimg_vip."</td>";
			//echo "<td><img src=\"".$row['immagine_bandiera_regione']."\" width=200px></td>";
			echo "</tr>";
		}
		echo "</tbody>";
		echo "</table>";
	}else{
		echo"Non ci sono regioni presenti nel database";
	}
*/
	$connessione->close();

?>