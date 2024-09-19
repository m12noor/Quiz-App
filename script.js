const questions = [
    {
        'que': 'Which of the following is a markup language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'XML',
        'ans': 'a'
    },
    {
        'que': 'Which of the following is used for styling web pages?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'SQL',
        'ans': 'b'
    },
    {
        'que': 'Which language is used for web development and handles the behavior of web pages?',
        'a': 'Python',
        'b': 'Java',
        'c': 'JavaScript',
        'd': 'C++',
        'ans': 'c'
    },
    {
        'que': 'Which of the following is a backend language?',
        'a': 'JavaScript',
        'b': 'PHP',
        'c': 'CSS',
        'd': 'HTML',
        'ans': 'b'
    },
    {
        'que': 'Which of these is a database query language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'SQL',
        'd': 'JavaScript',
        'ans': 'c'
    }
];

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById('quesBox');
const optionsInput = document.querySelectorAll('.option');

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    const data = questions[index];
    quesBox.innerHTML = `${index + 1}) ${data.que}`;
    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;

  
    reset();

    console.log(data);
};

const submitQuiz = () => {
    const ans = getAnswer();
    if (ans === questions[index].ans) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
};

const getAnswer = () => {
    let answer;
    optionsInput.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const reset = () => {
    optionsInput.forEach(input => {
        input.checked = false;
    });
};

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <h3>Quiz Completed!</h3>
        <h2>${right} / ${total} are correct</h2>
    `;
};

loadQuestion();

document.getElementById('submitButton').addEventListener('click', submitQuiz);
