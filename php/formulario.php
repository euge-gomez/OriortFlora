<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$country = $_POST['country'];
$cursoType = $_POST['cursoType'];
$alfabeto = $_POST['alfabeto'];
$msg = $_POST['msg'];

$header = header ("Location: ../index.html");


$email = "Nombre: " . $name . ",\r\n";
$email .= "Nacionalidad: " . $country . ",\r\n";
$email .= "Email: " . $diremail . ",\r\n";
$email .= "Teléfono: " . $phone . ",\r\n";
$email .= "Tipo de curso: " . $cursoType . ",\r\n";
$email .= "Reconoce el alfabeto: " . $alfabeto . ",\r\n";
$email .= "Mensaje: " . $msg . ",\r\n";

$para = "oriort.flora@gmail.com";
$asunto = "Email enviado desde el sitio web Oriort.Flora"


mail($para, $asunto, utf8_decode($email));
?>