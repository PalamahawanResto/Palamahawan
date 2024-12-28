<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Define the recipient email address (your email address)
    $to = "palamahawanrestobar@gmail.com";  // Change this to your actual email address

    // Define the email subject
    $email_subject = "New Message from Contact Form: " . $subject;

    // Compose the email message
    $email_message = "Name: $name <br>";
    $email_message .= "Email: $email <br>";
    $email_message .= "Phone: $phone <br>";
    $email_message .= "Subject: $subject <br>";
    $email_message .= "Message: <br> $message <br>";

    // Use PHPMailer to send email
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  // Use Gmail's SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'palamahawanrestobar@gmail.com';  // Your Gmail address
        $mail->Password = 'qifi peyw cfxb ykpb';  // Use an app password if 2FA is enabled
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;  // Use port 587 for TLS

        // Recipients
        $mail->setFrom('palamahawanrestobar@gmail.com', $name);  // Sender's email
        $mail->addAddress($to);  // Recipient's email address

        // Content
        $mail->isHTML(true);  
        $mail->Subject = $email_subject;
        $mail->Body    = $email_message;

        // Send the email
        if ($mail->send()) {
            echo "<script>alert('Thank you for contacting us. Your message has been sent.'); window.location.href = 'index.html';</script>";
        }
    } catch (Exception $e) {
        echo "<script>alert('Mailer Error: " . $mail->ErrorInfo . "'); window.location.href = 'index.html';</script>";
    }
}
?>
