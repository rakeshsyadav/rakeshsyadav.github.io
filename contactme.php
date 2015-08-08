<?php
   
    $email_to = "rakeshsyadav@hotmail.com";
 
    $email_subject = "Email From Contact Form";
    $contactName = $_POST['contactName']; // required
 
    $contactEmail = $_POST['contactEmail']; // required
 
    $contactSubject = $_POST['contactSubject']; // not required
 
    $contactMessage = $_POST['contactMessage']; // required
    $headers = "From:$contactEmail\r\n"; 

 
 mail($email_to, $email_subject, $contactName, $contactMessage, $headers);  
 echo "Thank you for contacting me.";

 
?>