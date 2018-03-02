<?php

include_once './db_connect.php';

$content = trim(file_get_contents("php://input"));
$decoded = json_decode($content, true);

if (!is_array($decoded)) {
    throw new Exception('Received content contained invalid JSON!');
}


$username = $decoded["username"];
$password = $decoded["password"];
$username = trim($username);
$password = trim($password);
$username = stripslashes($username);
$password = stripslashes($password);

if (isset($username) && isset($password)) {

    $userlogin = mysqli_query($mysqli, "SELECT * FROM USERS WHERE USER_NAME='$username' and PASSWORD='$password'");

    if (mysqli_num_rows($userlogin) == 1) {
        $user = mysqli_fetch_assoc($userlogin);
        echo json_encode(array('status' => true, 'SessionId' => $user['USER_ID'], 'message' => 'User has successfully logged in!', 'user' => $username));
    } else {
        echo json_encode(array('status' => false, 'message' => 'Please provide a valid set of username and password!'));
    }
} else {
    echo json_encode(array('status' => false, 'message' => 'Please provide a valid set of username and password!'));

}
