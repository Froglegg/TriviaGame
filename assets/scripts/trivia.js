   var losses = 3;

   var random;

   let questionList = [];

   // quiz questions from http://www.funtrivia.com/playquiz/quiz3760672b0ce70.html

   let quiz = [{
           q: {
               question: "Who or what is Black Shuck ?",
               possibleAnswers: ["Pit pony", "Ghost of a 19th-century chimney sweep", "Ghost ship", "Spectral dog"],
               answer: "Spectral dog",
               info: "He takes the form of a huge black dog, and prowls along dark lanes and lonesome field footpaths, where, although his howling makes the hearer's blood run cold, his footfalls make no sound. You may know him at once, should you see him, by his fiery eye; he has but one, and that, like the Cyclops', is in the middle of his head. But such an encounter might bring you the worst of luck: it is even said that to meet him is to be warned that your death will occur before the end of the year. So you will do well to shut your eyes if you hear him howling; shut them even if you are uncertain whether it is the dog fiend or the voice of the wind you hear. Should you never set eyes on our Black Shuck you may perhaps doubt his existence, and, like other learned folks, tell us that his story is nothing but the old Scandinavian myth of the black hound of Odin, brought to us by the Vikings who long ago settled down on the Norfolk coast."
           }
       },

       {
           q: {
               question: "The dead must walk the heavenly road to reach the afterlife. What must they cross before they can finish their journey ?",
               possibleAnswers: ["River Styx", "Bridge of Souls", "Ley Lines", "Power spots"],
               answer: "Bridge of Souls",
               info: "The rainbow has enchanted people for centuries, with its arc of beautiful colors, and stories of Leprechauns and their post of gold at the end of the rainbow. However, some cultures believe that the rainbow is also the path departed souls take on their journey to heaven. Some cultures call this the ladder to heaven, but it is more commonly known as 'The Bridge of Souls'."

           }
       },

       {
           q: {
               question: "In Scottish folklore these are kindly spirits, also known as the bwca in Wales. Although the Welsh equivalent are known to be a little mean, their Scottish counterparts are friendly. What are these friendly creatures ?",
               possibleAnswers: ["Brownie", "Kelpie", "Sprite", "Elf"],
               answer: "Brownie",
               info: "Brownies are said to be helpful little creatures that take up residence in a family home, there are happy to do the unfinished housework the family leave. As long as the family feed the Brownie and do not take advantage of his good nature, he will be happy to stay and carry on working."
           }
       },

       {
           q: {
               question: "What is a Buruburu ?",
               possibleAnswers: ["A Ghost", "Etheric plane", "An Entity", " Residual Haunting"],
               answer: "A Ghost",
               info: "Japanese mythology has some very disturbing ghost stories, and the Buruburu is no exception. Thought to lurk in dense, wooded areas and sometimes graveyards, it takes the form of an old one-eyed person that attaches itself to the victim's spine. In most cases the victim dies of fright, in some less severe cases the victim just feels chilled to the bone."
           }
       },

       {
           q: {
               question: "The first recorded pseudopods were attributed to Eusapia Palladno in 1894. What are pseudopods ?",
               possibleAnswers: ["Muscle reading", "Palmistry reading", "False limbs", "Near - death experience"],
               answer: "False limbs",
               info: "These limbs were thought to be made of ectoplasm. During a séance the medium, in a trance like state can radiate a thick looking cheese cloth like substance from certain orifices of her body, mainly the mouth. It is said that this is an indication the medium has made contact with spirit world."
           }
       },

       {
           q: {
               question: "Podomancy, deals with what part of the human body ?",
               possibleAnswers: ["Hands", "Nose", "Eyes", "Feet"],
               answer: "Feet",
               info: "The palm of the hand according to fortune tellers in China and Persia is not the only way to tell your fortune and reveal your destiny. It was believed that a person's feet were the 'Symbol of the Soul' and would also reveal the characteristics of a person."
           }
       },

       {
           q: {
               question: "What are Ignis Fatuus, often seen as blueish or yellow flames or candle light in the countryside at night and considered to be an omen of death ?",
               possibleAnswers: ["Spirit Orbs", "Spectral Lights", "Fireflies", "Fairy Fire Rings"],
               answer: "Spectral Lights",
               info: "If you're unlucky enough to be lost in the woods beware of these spectral lights they will lead you from the path especially if you're travelling alone. The lights are thought to be souls of the dead looking for redemption for past sins; some are just lost souls looking for the way to heaven. However, to see these lights are a bad omen and death is said to follow."
           }
       },

       {
           q: {
               question: "Hippomancy, was a form of divination using what animal ?",
               possibleAnswers: ["Bear", "Hippopotamus", "Horse", "Wolf"],
               answer: "Horse",
               info: "Among the Celts of England and Ireland, their horses served more than one purpose, especially if the horse was white. It was believed the horse could predict the future by its movements. The way it walks, whether it leads with the right or left foreleg, the head movements, even neighing were all taking into account and interpreted to predict the likely outcome for future events, like crop growing, family life and the outcome of future battles."
           }
       },

       {
           q: {
               question: "The Menehune, a race of small people who once lived on the Hawaiian Islands were often described as what ?",
               possibleAnswers: ["Imps", "Tree Sprites", "Goblins", "Fairies"],
               answer: "Fairies",
               info: "Before the Hawaiian settlers arrived the area was said to be occupied by the Menehune. Believed to be between four inches to two feet high, these creatures inhabited the island according to folklore for centuries and were at first thought to be dwarfs."
           }
       },

       {
           q: {
               question: "The incubus, a male spirit or demon that disturbs the sleep of women, often subjects them to nightmares or unwanted sexual advances.What is the name of the female equivalent of an incubus ?",
               possibleAnswers: ["Leviatthan", "Naamah", "Succubus", "Asag"],
               answer: "Succubus",
               info: "These female demons are said to disturb the sleep of a man and initiate sexual intercourse with him. Unlike the incubus, whose attentions are terrifying and unwanted by the female victim, when the succubus attacks the male sometimes welcomed the advances."
           }
       }
   ];

   function getRndInt(max) {
       return Math.floor(Math.random() * Math.floor(max));
   }

   function quizFunc() {
       $("#lossesDiv").html("<p>Attempts remaining: " + losses + "</p>");
       $("#questionsDiv").empty();
       $("#answersDiv").empty();
       x = true;
       do {
           random = getRndInt(10);
           if (questionList.indexOf(quiz[random]) == -1 && questionList.length < quiz.length) {
               questionList.push(quiz[random]);
               $("#questionDiv").html("<p>" + quiz[random].q.question + "</p");
               for (i = 0; i < quiz[random].q.possibleAnswers.length; i++) {
                   console.log(quiz[random].q.possibleAnswers[i]);
                   $("#answersDiv").append("<a class='answerOption button1'>" + quiz[random].q.possibleAnswers[i] + "</a><br><br>");
               }
               x = false;
               break;
           } else if (questionList.length == quiz.length) {
               alert("you win!");
               questionList = [];
               break;
           } else if (losses <= 0) {
               //    alert("you lose!");
               //    questionList = [];
               //    gameOver();
               //    break;
           } else {
               // console.log("this shouldnt' log");
           }
       }
       while (x = true);
   }

   $("#answersDiv").on('click', ".answerOption", function() {
       console.log($(this).html());
       var thisAnswer = ($(this).html());
       var thisQuestionAnswer = quiz[random].q.answer;
       if (thisAnswer == thisQuestionAnswer) {
           alert("correct answer!");
           time = 30;
           thisAnswer = "";
           thisQuestionAnswer = "";
           quizFunc();
           startClock();
       } else if (losses <= 1) {
           alert("wrong! " + quiz[random].q.info);
           alert("you lose!");
           questionList = [];
           gameOver();

       } else {
           alert("wrong! " + quiz[random].q.info);
           thisAnswer = "";
           thisQuestionAnswer = "";
           losses--;
           quizFunc();
       }


   });