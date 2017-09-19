<?php
	include "class.phpmailer.php";

	if(!empty($_POST['name'])) { $message_text .= "<p><b>Name : </b>".$_POST['name']."</p>"; }
	if(!empty($_POST['email'])) { $message_text .= "<p><b>Email : </b>".$_POST['email']."</p>"; }
	if(!empty($_POST['message'])) { $message_text .= "<p><b>Message : </b>".$_POST['message']."</p>"; }

	$subject = "Message from eurox.io"; // Тема письма
	$send_email = "wen2333@gmail.com";
	$message_body = "
		<h2>".$subject."</h2>".$message_text;

	$mail = new PHPMailer();
	$mail->CharSet = 'UTF-8';
	$mail->From = $_POST['name'];
	$mail->FromName = $_POST['name'];
	$mail->AddAddress($send_email);
	$mail->IsHTML(true);
	$mail->Subject = $subject;
	$mail->Body = $message_body;
	$mail->Send();

?>
