let availablekeywords = [
    'Birthday',
    'Wedding',
    'Sports',
    'Concert',
    'Cultural',
    'Destination',
    'Corporate Events',
    'College Events',
];
const resultbox = document.querySelector(".result-box");
const input = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.lenght){
        result = availableKeywords.filter((keyword)=>{
            keyword.tolowerCase().includes(input.tolowerCase());
        });
        console.log(result);
    }
    display(result);
}
function display(result){
    const content = result.map((list)=>{
        return "<li onclick = selectInput(this)>"+list+"</li>";
    });
    resultbox.innerHTML = "<ul>"+content.join('') +"</ul>";
}
function selectInput(list){
    inputBox.value = list.innerHTML
}