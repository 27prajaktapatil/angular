<?php
    header('Content-type: application/json');
    $errors = '';
    if(empty($errors))
    {
        $postdata = file_get_contents("php://input"); // here I have null
        $request = json_decode($postdata);  // here I have null checked in console
        $from_email = $request->email;
        $message = $request->message;
        $from_name = $request->name;
        $to_email = '27prajaktapatil@gmail.com';

        $contact = "<p><strong>Name:</strong> $from_name</p>
                                <p><strong>Email:</strong> $from_email</p>";
        $content = "<p>$message</p>";
        $website = 'My Wicked Awesome Website';
        $email_subject = "$website: Received a message from $from_name ";

        $email_body = '<html><body>';
        $email_body .= "$contact $content";
        $email_body .= '</body></html>';

        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        $headers .= "From: $from_email\n";
        $headers .= "Reply-To: $from_email";

        mail($to_email,$email_subject,$email_body,$headers);
        $response_array['status'] = 'success';
        $response_array['from'] = $from_email;
        $response_array['MESSAGE'] = $message;
        $response_array['POSTDATA'] = $postdata;
        $response_array['REQUEEST'] = $request;
        e

cho json_encode($response_array);
    echo json_encode($from_email);
    header($response_array);
    return $from_email;
} else {
    $response_array['status'] = 'error';
    echo json_encode($response_array);
    header('Location: /error.html');
}
?>