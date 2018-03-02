<?php
include_once './db_connect.php';

$myArray = array();
$listOfFruits = mysqli_query($mysqli, "SELECT * FROM FRUITS ORDER BY VOTES DESC");
while($fruit = mysqli_fetch_assoc($listOfFruits)) {
    array_push($myArray, $fruit );
}
echo json_encode($myArray);

?>