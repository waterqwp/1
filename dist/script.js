<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>猜拳遊戲</title>
<style>
    body {
        font-family: Arial, sans-serif;
        text-align: center;
    }
</style>
</head>
<body>

<h1>猜拳遊戲</h1>
<p>請選擇你的拳頭：</p>

<button onclick="play('rock')">石頭</button>
<button onclick="play('paper')">紙</button>
<button onclick="play('scissors')">剪刀</button>

<p id="result"></p>

<script>
function play(userChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result;
    if (userChoice === computerChoice) {
        result = "平手！";
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        result = "你贏了！";
    } else {
        result = "電腦贏了！";
    }

    document.getElementById('result').innerText = "你選擇了：" + userChoice + "，電腦選擇了：" + computerChoice + "，" + result;
}
</script>

</body>