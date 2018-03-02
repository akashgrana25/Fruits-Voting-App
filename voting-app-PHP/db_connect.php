<?php
header("Access-Control-Allow-Origin:*");
$mysqli = mysqli_connect("localhost", "root", "", "FruitVotersApp");
if ($mysqli->connect_error) {
header("Location:error.php?id=99");
exit();
}
mysqli_set_charset($mysqli, "utf8");

?>
