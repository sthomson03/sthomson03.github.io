<?php
if (isset($_POST['emailaddress'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "sthomson0812@gmail.com";
    $email_subject = "New portfolio website message";

    function problem($error)
    {
        echo "Sorry, there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br><br>";
        echo $error . "<br><br>";
        echo "Please go back and fix these errors.<br><br>";
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['firstname']) ||
        !isset($_POST['surname']) ||
        !isset($_POST['emailaddress']) ||
        !isset($_POST['subject'])
    ) {
        problem('We are sorry, but there appears to be a problem with the form you submitted.');
    }

    $fname = $_POST['firstname']; // required
    $sname = $_POST['surname']; // required
    $email = $_POST['emailaddress']; // required
    $message = $_POST['subject']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'The e-mail address you entered is not valid <br>';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $fname)) {
        $error_message .= 'The first name you entered does not appear to be valid.<br>';
    }

    if (!preg_match($string_exp, $sname)) {
        $error_message .= 'The surname you entered does not appear to be valid.<br>';
    }

    if (strlen($message) < 2) {
        $error_message .= 'The Message you entered do not appear to be valid.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Form details below.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "First name: " . clean_string($fname) . "\n";
    $email_message .= "Surname: " . clean_string($sname) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Message: " . clean_string($message) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

    <!-- include your success message below -->

    Thank you for contacting us. We will be in touch with you very soon.

<?php
}
?>