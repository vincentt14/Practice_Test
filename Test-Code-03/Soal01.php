<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .biru {
      background-color: skyblue;
    }
  </style>
  <title>Soal01</title>
</head>

<body>
  <table border="1" cellpadding="10" cellspacing="0">
    <?php for ($i = 1; $i <= 3; $i++): ?>
      <?php if ($i % 2 === 0): ?>
        <tr class="biru">
        <?php else: ?>
        <tr>
        <?php endif; ?>
        <?php for ($j = 1; $j <= 5; $j++): ?>
          <td>
            <?="$i, $j"; ?>
          </td>
        <?php endfor; ?>
      </tr>
    <?php endfor; ?>
  </table>
</body>

</html>