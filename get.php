<?php
 $server = 'localhost'; 
 $login = 'k90228zt_test'; 
 $password = '12345qaz123QAZ'; 
 $name_bd = 'k90228zt_test';
$link=new mysqli($server,$login,$password,$name_bd);
$result=mysqli_query($link,"SELECT * FROM questions WHERE sum>0");
while($product=mysqli_fetch_assoc($result)){
    print_r(implode(';',$product));
 
}


