            var userGuess, word, wordList, myWordM, placeHolder = "";
            var guessesLeft = 12;;
            
            wordList = [ "halo" , "destiny" , "pong" , "snake", "battlefield" ];
            
            function begin(){
                word = wordList[Math.floor(Math.random() * wordList.length)];
                for(var i = 0; i < word.length; i++){
                    placeHolder += "_";
                }
                document.querySelector("#wordSpot").innerHTML = placeHolder;   
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
                 if(correct == false){
                        guessesLeft--;
                        document.querySelector("#guesses").innerHTML = "Guesses Remaining: " + guessesLeft;
                    }
                if(placeHolder == word || guessesLeft == 0){
                    guessesLeft = 12;
                    placeHolder = "";
                    document.querySelector("#guesses").innerHTML = "Guesses Remaining: " + guessesLeft;
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