<?php
 $server = 'localhost'; // это остается
  $login = 'k90228zt_test'; // то что не нашел , ты скинул k90228zt_larkes хз то или нет (Логин для phpmyadmin)
  $password = '12345qaz123QAZ'; // то что не нашел , ты скинул $a6c15cqeevd хз то или нет (Пароль для phpmyadmin)
  $name_db = 'k90228zt_test'; // ставишь k90228zt_lolka (БД к которой подключаться, у тебя k90228zt_test)
  $link = new mysqli($server, $login, $password, $name_db); //Делаем подключение
  $link->set_charset("utf8mb4"); // Ставим кодировку
  $question = $_POST['question']; // Получем с ajax $_POST и берем оттуда данные о вопросе
  $arr_examination = mysqli_query($link, "SELECT * FROM `questions` WHERE question = '$question'"); // Делаем шаблон для проверки, есть ли унас такой вопрос
  $examination = mysqli_fetch_assoc($arr_examination); // Отправляем заропс для проверки
  $temp_value_question = $examination['question']; //Создаем переменную и присваиваем ей ответ сервера о запросе , то есть наш вопрос
  $temp_value_sum = $examination['sum'] + 1;//Создаем переменную и присваиваем ей ответ сервера о запросе , и увеличиваем сумму запрсоов
  if($examination == '') { // Если нашего вопроса в БД не существует
   print_r($question);
    $query_add_question = "INSERT INTO `questions` VALUES('$question','1')"; //  Делаем шаблон нового запроса, чтобы добавить вопрос в БД
    $result_add_question = $link->query($query_add_question); // Отправляем запрос на сервер 
  }
  else { // Если же все таки наш вопрос уже есть в Базе
    $query_update_sum = "UPDATE questions SET sum = '$temp_value_sum' WHERE question = '$temp_value_question'"; // Создаем шабло запрос , то есть для обновления суммы
    $result_update_sum = $link->query($query_update_sum); // Отправляем этот запрос
  };
  