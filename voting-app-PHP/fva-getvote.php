<?php

include_once './db_connect.php';

$content = trim(file_get_contents("php://input"));
$decoded = json_decode($content, true);

if(!is_array($decoded)){
    throw new Exception('Received content contained invalid JSON!');
}

$userId = $decoded["SessionId"];
$userId = filter_var($userId, FILTER_SANITIZE_NUMBER_INT);
$fruitName = "";

$listOfFruits = mysqli_query($mysqli, "SELECT * FROM FRUITS WHERE FRUIT_ID in (SELECT VOTE_ITEM_ID from USERS where USER_ID=$userId)");
while ($fruit = mysqli_fetch_assoc($listOfFruits)) {
    $fruitName = $fruit["FRUIT_NAME"];
}
echo json_encode(array("FRUIT_NAME" => $fruitName));

?>