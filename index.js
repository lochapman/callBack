function callBackOne(issue , reaction) {
issue('actual issue');
reaction('DONT TALK BACK TO ME!');
}
function dontTalkBack() {
console.log('it really hurts');
}

function feelsWorthless() {
console('relatable, right?');
}

callBackOne(dontTalkBack, feelsWorthless);