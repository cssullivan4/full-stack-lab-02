var myFriends = ['Heidi','Sean','Edi','Madeline','Zdravka'];

for (var i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i].toUpperCase() + ': ');
    for (var j = 99; j > 0; j--) {
        if (j > 2) {
            console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' + myFriends[i] + ' strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file!');
        } else if (j === 2) {
            console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' + myFriends[i] + ' strikes one out, clears it all out, ' + (j-1) + ' line of code in the file!');
        } else {
            console.log('1 line of code in the file, 1 line of code; ' + myFriends[i] + ' strikes one out, clears it all out, no more lines of code in the file!');
        }
    }
};