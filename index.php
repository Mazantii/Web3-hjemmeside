<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scuffedbook</title>
    <link href="./resources/css/stylesheet.css" type="text/css" rel="stylesheet">
</head>
<body>
  <header>
    <headerleft>
    </headerleft>
    <headermiddle>
      <form class="login" action="index.php" method ="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <input type="submit" value="Submit">
     </form>

    </headermiddle>
    <headerright>
    </headerright>
  </header>
  <div id="main">
    <middle>

      <img class="image-container" src="/resources/images/middle container/vman stats.png" alt="Picture for main container">

      <input onclick="AddPicture(this)" id="add-photo" type="image" src="/resources/images/middle container/plus sign.png" name="Add picture">


    </middle>
    <vreklame>Venstre Reklame</vreklame>
    <hreklame>Højre Reklame</hreklame>
  </div>
  <footer>Footer</footer>
  <script src="/resources/javascript/javascript.js"></script>

  <!-- PHP for checking if user is logged in, and enabeling the appear script if so --!>
  <?php
      $username = $_POST["username"];
      $password = $_POST["password"];

        if($username == "john"){
          echo '<script>LoggedIn();</script>';
        }
        ?>
</body>
</html>