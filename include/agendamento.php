<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$email = $_POST["appointment_email"]; 
$nome = $_POST["appointment_name"]; 
$tel = $_POST["appointment_tel"];
$med = $_POST["appointment_med"];
//$mensagem = $_POST["appointment_message"];


require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

  	// Inicia o phpMailer
	$mail = new PHPMailer;


	$mail->isSMTP();                                     // Set mailer to use SMTP
	$mail->Host = 'smtp.ancoraacupuntura.com.br';            // Specify main and backup SMTP servers
	$mail->SMTPSecure = false; // Define se é utilizado SSL/TLS - Mantenha o valor "false"
	$mail->SMTPAutoTLS = false; // Define se, por padrão, será utilizado TLS - Mantenha o valor "false"
	$mail->SMTPAuth = true;                              // Enable SMTP authentication
	$mail->Username = 'caroline@ancoraacupuntura.com.br';              // SMTP username
	$mail->Password = 'Ancora2020@';                           // SMTP Senha
	$mail->Port = 587;                                  // TCP port to connect to
 
    
	try{

		// Pegar o email do remetente
		$mail->AddReplyTo($_POST["appointment_email"]);
		// Email e nome do contato
		$mail->setFrom('$appointment_email', '$nome');
		// emmail do destinatario
		$mail->addAddress('caroline@ancoraacupuntura.com.br', 'Ancora Acupuntura');
		// tipo do email
		$mail->Subject = 'Contato Pré-agendamento';
		$mail->isHTML(true);
		// corpo da mensagem
		$body .= "<b>Nome: </b>".$nome;
		$body .= "<br><b>E-mail: </b>".$_POST["appointment_email"]; 
		$body .= "<br><b>Telefone: </b>".$_POST["appointment_tel"];
		$body .= "<br><b>Especialidade Selecionada: </b>".$_POST["appointment_med"];
		//$body .= "<br />"."<b>Mensagem: </b>".$_POST["appointment_message"];
		$mail->Body = $body;
		// Se o send retornar false é porque deu falha ao enviar
		// $mail->send();
		// return ["success" => true, "text" => "Mensagem enviada com sucesso!"];
		if($mail->send()){
			echo "<script>window.location='../index.html'; alert('$nome, sua mensagem foi enviada com sucesso! Estaremos retornando em breve');</script>";
		}


	}
	catch(Exception $e) {
      echo 'A mensagem não pôde ser enviada.';
      echo 'Erro do remetente: ' . $mail->ErrorInfo;
	 }
  
     
?>

