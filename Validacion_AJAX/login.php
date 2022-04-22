<?php
$username="Chema";
$password="usuario";
$user=isset($_GET['usuario'])? $_GET['usuario']: $_POST['usuario'];
$pass=isset($_GET['clave'])? $_GET['clave']: $_POST['clave'];
if ($user==$username && $pass==$password) {
echo 'pass';
} else {
echo 'fail';
}
?>