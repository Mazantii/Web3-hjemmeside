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
        <input type="text" id="username" name="username"> <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"> <br>
        <input type="submit" value="Login">
        <input onclick="Logout()" type="button" value="logout">
     </form>
     <p><a href="create.php">Create Account </a></p>

    </headermiddle>
    <headerright>
    </headerright>
  </header>
  <div id="main">
    <middle>

      <input id="add-photo" type="file"  accept="image/*" onchange="AddPicture(this)" name="Add picture">

      <form action="upload.php" method="post" enctype="multipart/form-data">
        Select image to upload:
        <input type="file" name="fileToUpload" id="fileToUpload">
        <input type="submit" value="Upload Image" name="submit">
      </form>


    </middle>
    <vreklame>Venstre Reklame</vreklame>
    <hreklame>Højre Reklame</hreklame>
  </div>
  <footer>Footer</footer>
  <script src="/resources/javascript/javascript.js"></script>

  <!-- PHP for checking if user is logged in, and enabeling the appear script if so -->
  <?php
      $username = $_POST["username"];
      $password = $_POST["password"];

        if($username == "john"){
          echo '<script>LogIn();</script>';
        }
  ?>
</body>
</html>