function magic(texts, userName, userAge){
    console.log(texts)
    return  `${userName}, ${userAge}`;
}


const name = 'pawel';
const age = 37;

//tagged template literal string
const sentence = magic`${name}${age}`;

console.log(sentence)