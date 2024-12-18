function checkQuiz() {
    var score = 0;
    var totalQuestions = 10;

    var correctAnswers = [
        { question: "Python est un langage _______ ?", answer: "interprété" },
        { question: "Quel symbole est utilisé pour commenter une ligne de code en Python ?", answer: "#" },
        { question: "En Python, comment afficher l'identifiant mémoire d'une variable x ?", answer: "print(id(x))" },
        { question: "Quel est le résultat de l’instruction type(20.0) en Python ?", answer: "float" },
        { question: "Quel est le résultat de l’instruction a=input('a=') en Python ?", answer: "Affichage du message \"a=\"" },
        { question: "Comment afficher une variable sous forme de nombre réel avec 3 chiffres après la virgule en utilisant .format() ?", answer: "{ :.3f}" },
        { question: "Soit a=''.join([''.join(list('KBBA'))]) ; quelle est le résultat de l'instruction print(tuple(a)) ?", answer: "('K', 'B', 'B', 'A')" },
        { question: "Soit D,*A = 1,(10,5),(5,) ; que va afficher l’instruction print(sum(A,tuple())) ?", answer: "(10,5,5)" },
        { question: "e={'kk','AAA','E'} ;Comment convertir e en une liste L, triée par ordre croissant selon le nombre de caractères de chaque chaîne ?", answer: "L=sorted(e, key=len)" },
        { question: "Soit print({---- for i in list(range(0,6,2))}); Par quoi remplacer le vide pour que le code affiche l'ensemble {(0, 0), (4, 4), (2, 2)} ?", answer: "tuple([i,i])" },
    ];

    for (var i = 1; i <= totalQuestions; i++) {
        var selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === correctAnswers[i - 1].answer) {
            score++;
        }
    }

    document.getElementById("score").innerHTML = `Vous avez obtenu ${score} sur ${totalQuestions}.`;

    var answersList = "";
    correctAnswers.forEach(function(item) {
        answersList += `<strong>${item.question}</strong><br>Réponse correcte : ${item.answer}<br><br>`;
    });
    document.getElementById("correctAnswers").innerHTML = answersList;

    document.getElementById("result").style.display = "block";
}
function addTestimonial(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const testimonial = document.getElementById('testimonial').value;

    const newTestimonial = document.createElement('div');
    newTestimonial.classList.add('testimonial');

    newTestimonial.innerHTML = `
        <p>"${testimonial}"</p>
        <p class="name">— ${name}</p>
    `;

    const container = document.querySelector('.container');
    container.insertBefore(newTestimonial, container.querySelector('h3'));

    document.getElementById('testimonial-form').reset();
    
    document.getElementById('status').innerText = "Merci pour votre témoignage !";
}


function animateProgressBar(id, maxValue) {
    let element = document.getElementById(id);
    let width = 0;
    let interval = setInterval(function() {
        if (width >= maxValue) {
            clearInterval(interval);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width + '%';
        }
    }, 30); 
}

document.addEventListener("DOMContentLoaded", function() {
    animateProgressBar("progress-html", 80);     
    animateProgressBar("progress-css", 75);      
    animateProgressBar("progress-js", 60);       
    animateProgressBar("progress-angular", 50);  
    animateProgressBar("progress-flask", 50);    
    animateProgressBar("progress-python", 85);   
    animateProgressBar("progress-c", 90);        
    animateProgressBar("progress-ia", 60);       
});
