const question = [{
    'ques': "Which is the biggest continent in the world?",
    'a': "North America",
    'b': "Asia",
    'c': "Africa",
    'd': "Australia",
    'correct': "b"
},

{
    'ques': " Which is the largest ocean in the world?",
    'a': "Indian Ocean",
    'b': "Pacific Ocean",
    'c': "Arctic Ocean",
    'd': "Atlantic Ocean",
    'correct': "b"
},
{
    'ques': "Which is India’s first super computer?",
    'a': "Param8000",
    'b': "Param80000",
    'c': "Param800",
    'd': "Param8",
    'correct': "a",
}]

let index = 0;
let total = question.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = question[index];
    quesBox.innerText = `${index + 1}. ${data.ques}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}


const submitQuiz = () => {
    const data = question[index];
    const ans = getAnswer()
    console.log(ans, data.correct);
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h1> Thank you for playing Quiz</h1>
    <h2> ${right} / ${total} are correct</h2>
    </div>
    `
}


loadQuestion();