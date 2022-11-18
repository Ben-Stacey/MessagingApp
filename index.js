first = ['Obviously', 'The', 'Undoubtly']
second = ['big', 'slow', 'round']
third = ['man', 'cat', 'mouse']

function firstWord(first){
    index = Math.floor(Math.random(0, first.length))
    console.log(index)
    word = first[index]
    return word
}

function secondWord(second){
    index = Math.floor(Math.random(0, first.length))
    word = second[index]
    return word
}

function thirdWord(third){
    index = Math.floor(Math.random(0, first.length))
    word = third[index]
    return word
}

console.log(firstWord(first) + ' ' + secondWord(second) + ' ' + thirdWord(third) + '!')