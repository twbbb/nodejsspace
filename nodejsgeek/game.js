module.exports = (playerAction) => {

    // let playerAction = process.argv[process.argv.length - 1];

    let random = Math.random() * 3;
    let computerAction = '';
    if (random < 1) {
        computerAction = 'rock';
    } else if (random > 2) {
        computerAction = 'paper';
    } else {
        computerAction = 'scissor';
    }

    if (playerAction == computerAction) {
        console.log('平局');
        return 0;
    }

    if ((playerAction == 'rock' && computerAction == 'scissor') ||
        (playerAction == 'paper' && computerAction == 'rock') ||
        (playerAction == 'scissor' && computerAction == 'paper')
    ) {
        console.log('你赢了');
        return 1;
    } else {
        console.log('你输了');
        return -1;
    }
}