<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    if(!empty($_POST["send"])) {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $subject = $_POST["subject"];
        $message = $_POST["message"];
        $toEmail = "palamahawanrestobar@gmail.com";

        $mailHeaders = "Name: " . $name .
        "\r\n Email: " . $email .
        "\r\n phone: " . $phone .
        "\r\n subject: " . $subject .
        "\r\n message: " . $message . "\r\n";

        if (mail($toEmail, $name, $mailHeaders)) {
            $message = "Your Information is Received Successfully.";
        }
        

    }


 ?>


<div class="contact-form">
                <form action="/submit-contact-form" method="post" name="emailContact">
                 <h2>Connect With Us & Share Your Feedback</h2>                                     
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" required placeholder="Enter your full name">

                    <label for="email">Your Email</label>
                    <input type="email" id="email" name="email" required placeholder="Enter your email address">

                    <label for="phone">Your Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number">

                    <label for="subject">Subject (Optional)</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject of your message">

                    <label for="message">Your Message</label>
                    <textarea id="message" name="message" rows="4" required placeholder="Write your message here..."></textarea>

                    <button type="submit" name="send" value="Submit">Send Message</button>
                    <?php if(!empty($message)){ ?>
                    <div class="success">
                        <strong><?php echo $message; ?></strong>
                    </div>
                     <?php } ?>   
                </form>
</body>
</html>