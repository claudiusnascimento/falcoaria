<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $name . ' - ' . $email . ' - ' . $_POST['message'];

// O remetente deve ser um e-mail do seu domínio conforme determina a RFC 822.
// O return-path deve ser ser o mesmo e-mail do remetente.
$headers = "MIME-Version: 1.1\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";
$headers .= "From: contato@centrodefalcoariafoz.com.br\r\n"; // remetente
$headers .= "Reply-To: " . $email . "\r\n" .
$headers .= "Return-Path: ". $email ."\r\n"; // return-path

$envio = mail("contato@centrodefalcoariafoz.com.br", "Contato enviado do Site", $message, $headers);
 
if($envio) {
    echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso']);
} else {
    echo json_encode(['success' => false, 'message' => 'Erro ao enviar a mensagem. Tente mais tarde']);
}

?>