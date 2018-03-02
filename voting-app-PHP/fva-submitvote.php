<?php
include_once './db_connect.php';

$content = trim(file_get_contents("php://input"));
$decoded = json_decode($content, true);

if(!is_array($decoded)){
    throw new Exception('Received content contained invalid JSON!');
}

$fruitId =  $decoded["FRUIT_ID"];
$userId = $decoded["SessionId"];
$fruitId = filter_var($fruitId, FILTER_SANITIZE_NUMBER_INT);
$userId = filter_var($userId, FILTER_SANITIZE_NUMBER_INT);

$updateUsers = mysqli_query($mysqli, "UPDATE USERS SET VOTE_ITEM_ID=$fruitId WHERE USER_ID=$userId");
$getFruits = mysqli_query($mysqli, "SELECT * FROM FRUITS WHERE FRUIT_ID=$fruitId");
$fruit = mysqli_fetch_assoc($getFruits);
$fruitVotes = $fruit["VOTES"] + 1;
$updateFruit = mysqli_query($mysqli, "UPDATE FRUITS SET VOTES=$fruitVotes WHERE FRUIT_ID=$fruitId");

echo json_encode(array("Status" => true, "fruit_id" => "$updateFruit ", "updated_users" => "$updateUsers"));

?>
