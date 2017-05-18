            var userGuess, word, wordList, myWordM, placeHolder = "",letterUsed = [];
            var guessesLeft = 12;
            
            wordList = [ "halo" , "destiny" , "pong" , "snake", "battlefield" ];
            
            function begin(){
                word = wordList[Math.floor(Math.random() * wordList.length)];
                for(var i = 0; i < word.length; i++){
                    placeHolder += "_";
                }
                document.querySelector("#wordSpot").innerHTML = placeHolder; 
                if(word === wordList[0]){
                    document.querySelector("#hint").innerHTML = "First wide spread online multiplayer shooter";
                }
                else if(word === wordList[1]){
                    document.querySelector("#hint").innerHTML = "One of the first wide spread Massive Multiplayer Online Shooters";
                }
                else if(word === wordList[2]){
                    document.querySelector("#hint").innerHTML = "One of the first video games ever, was the first sports video game ever.";
                }
                else if(word === wordList[3]){
                    document.querySelector("#hint").innerHTML = "One of the first phone games.";
                }
                else if(word === wordList[4]){
                    document.querySelector("#hint").innerHTML = "Shooter that broke the limits to the available options in shooter video games.";
                }
            }
            
            function check(){
                var correct = false;
                for(var i = 0; i < word.length; i++){
                    if(userGuess == word.substring(i, i + 1)){
                        correct = true;
                        placeHolder = placeHolder.substring(0, i) + userGuess + placeHolder.substring(i + 1, placeHolder.length + 1);
                        document.querySelector("#wordSpot").innerHTML = placeHolder;
                    }
                }
                letterUsed.push(userGuess);
                document.querySelector("#letter").innerHTML = letterUsed;
                 if(correct == false){
                        guessesLeft--;
                        document.querySelector("#guesses").innerHTML = guessesLeft;
                    }
                if(placeHolder == word){
                    if(word == wordList[0]){
                    document.getElementById("image").classList.remove('image2');
                    document.getElementById("image").classList.remove('image3');
                    document.getElementById("image").classList.remove('image4');
                    document.getElementById("image").classList.remove('image5');
                    document.getElementById("image").classList.add('image1');
                    }
                    else if(word == wordList[1]){
                    document.getElementById("image").classList.remove('image1');
                    document.getElementById("image").classList.remove('image3');
                    document.getElementById("image").classList.remove('image4');
                    document.getElementById("image").classList.remove('image5');
                    document.getElementById("image").classList.add('image2');
                    }
                    else if(word == wordList[2]){
                    document.getElementById("image").classList.remove('image2');
                    document.getElementById("image").classList.remove('image1');
                    document.getElementById("image").classList.remove('image4');
                    document.getElementById("image").classList.remove('image5');
                    document.getElementById("image").classList.add('image3');
                    }
                    else if(word == wordList[3]){
                    document.getElementById("image").classList.remove('image2');
                    document.getElementById("image").classList.remove('image3');
                    document.getElementById("image").classList.remove('image1');
                    document.getElementById("image").classList.remove('image5');
                    document.getElementById("image").classList.add('image4');
                    }
                    else if(word == wordList[4]){
                    document.getElementById("image").classList.remove('image2');
                    document.getElementById("image").classList.remove('image3');
                    document.getElementById("image").classList.remove('image4');
                    document.getElementById("image").classList.remove('image1');
                    document.getElementById("image").classList.add('image5');
                    }
                }
                if(placeHolder == word || guessesLeft == 0){
                    guessesLeft = 12;
                    placeHolder = "";
                    document.querySelector("#guesses").innerHTML = guessesLeft;
                    begin();
                    document.onkeyup = function(event){
                        userGuess = event.key;
                        check();
                    }
                }
            }
            begin();
             document.onkeyup = function(event){
                    userGuess = event.key;
                    check();
                }