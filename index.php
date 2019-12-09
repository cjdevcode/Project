<?php

// Demand a GET parameter
// check the $_GET variable to see if the user's name is set and if the user's name is not present
if (!isset($_GET['name']) || strlen($_GET['name']) < 1 ) {
    die('Name parameter missing');
}

if (strpos($_GET['name'], '@') === false ) {
    die('Name parameter is wrong');
}

// If the user requested logout go back to index.php
if (isset($_POST['logout']) ) {
    header('Location: index.php');
    return;
}

try {
    require_once "pdo.php";
}
catch(PDOException $e){
    echo "Please contact Customer Support.";
    die();
}

// resistant to HTML Injection attempts
$name = htmlentities($_GET['name']);
$status = false;  // If we have no POST data
$status_color = 'red';

// Check to see if we have some POST data, if we do process it
if (isset($_POST['mileage']) && isset($_POST['year']) && isset($_POST['make'])) {
    // If either mileage or year field is not nummeric
    if (!is_numeric($_POST['mileage']) || !is_numeric($_POST['year']) ) {
        $status = "Mileage and year must be numeric";
    }
    // if make field is empty
    else if (strlen($_POST['make']) < 1){
        $status = "Make is required";
    }
    else {
        // resistant to HTML Injection attempts
        $make = htmlentities($_POST['make']);
        $year = htmlentities($_POST['year']);
        $mileage = htmlentities($_POST['mileage']);
        // resistant to SQL Injection attempts
        $stmt = $pdo->prepare('
            INSERT INTO autos (make, year, mileage) 
            VALUES (:make, :year, :mileage)
        ');

        $stmt->execute(array(
            ':make' => $make, 
            ':year' => $year,
            ':mileage' => $mileage)
        );

        $status = 'Record inserted';
        $status_color = 'green';
    }
}

$autos = [];
$all_autos = $pdo->query("SELECT * FROM autos");

while ($row = $all_autos->fetch(PDO::FETCH_OBJ) ) {
    $autos[] = $row;
}

?>
<!DOCTYPE html>
<html>
<head>
<?php require_once "bootstrap.php"; ?>
<title>Lee-Pin Shing's Automobiles Database</title>
</head>
<body>
<div class="container">
<h1>Tracking Autos for <?php echo $name; ?></h1>
<?php
// Note triple not equals and think how badly double
// not equals would work here...
if ( $status !== false ) {
    // Look closely at the use of single and double quotes
    echo('<p style="color:'.$status_color.';">'.htmlentities($status)."</p>\n");
}
?>
<form method="POST">
<label for="make">Make:</label>
<input type="text" name="make" id="make" size="60"><br/>
<br/>
<label for="year">Year:</label>
<input type="text" name="year" id="year"><br/>
<br/>
<label for="mileage">Mileage:</label>
<input type="text" name="mileage" id="mileage"><br/>
<br/>
<input type="submit" value="Add">
<input type="submit" name="logout" value="Logout">
</form>

<h2>Automobiles</h2>
<?php if(!empty($autos)) : ?>
<ul>
<?php foreach($autos as $auto) : ?>
<li>
<?php echo $auto->year; ?> <?php echo $auto->make; ?> &#47; <?php echo $auto->mileage; ?> 
</li>
<?php endforeach; ?>
</ul>
<?php endif; ?>
</div>
</body>
</html>