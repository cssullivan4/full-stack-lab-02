var myFriends = ['Heidi','Sean','Edi','Madeline','Zdravka'];

for (var f = 0; f < myFriends.length; f++) {
    console.log(myFriends[f] + ': ');
    for (var n = 99; n > 1; n--) {
       console.log([n] + ' lines of code in the file, ' + [n] + ' lines of code; ' + myFriends[f] + ' strikes one out, clears it all out, ' + [n] + ' lines of code in the file!');
    } if (n = 1) {
       console.log('1 line of code in the file, 1 line of code; ' + myFriends[f] + ' strikes one out, clears it all out, no more lines of code in the file!');
    } else
       console.log('No more lines of code in the file? No more lines of code! Strike a key, indent a statement, we need more lines of code in the file!');
   }