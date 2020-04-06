var words = [
    'ik ',
    'ben ',
    'een ',
    'javascript ',
    'developer '
];

words.forEach(word => {
    var node = document.createElement("button");
    node.onclick = function () {
        if(document.getElementById("text").value.charAt(document.getElementById("text").value.length-1) !== ' ' && document.getElementById("text").value.length !== 0){
            document.getElementById("text").value += ' '; 
        }
        document.getElementById("text").value += this.innerHTML
    };
    node.appendChild(document.createTextNode(word));
    document.getElementById("wordlist").appendChild(node);           
});

const undo = () => {
    const undo = document.getElementById("text").value.split(' ');
    console.log(undo);
    if(undo[undo.length-1] === ''){
        undo.pop();
    }
    undo.pop()
    
    document.getElementById("text").value = undo.join(' ');
}