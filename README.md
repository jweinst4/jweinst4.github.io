****
please send all feedback related to your experience with my project to jweinst4@gmail.com
I would love to hear anything you have to say, good or bad.  Thanks!
****

1) How to Play
2) Additional Information
3) Credits

1 - How to Play:

Click the "GET DATA" button on the top left of the screen.  You will see a question in black text on the left side of the screen.  You will also see pink boxes with no text in them, and additionally pink boxes with the individual letters A through Z.

You can "Spin Wheel", and then click one of the letters to guess that letter.  If your guess is one of the letters in the answer, you will win $200 for however many letters there are in the answer.  However, if you guess a vowel, you won't get any money.

If you guess a correct letter, you go again, otherwise it's the other players turn.  If you end up guessing the last letter in the answer, you get an additional $500 for completing the puzzle.

Example:  The topic is "What is the name of the best baseball team in New York?"
You will see seven blank pink boxes, and pink boxes with the letters A through Z.  If you click the letter "E", you will see
_ _ _ _ E E _

You won't get any money because you guessed a vowel.  But you did guess a correct letter, and therefore get to go again.  Next turn, maybe you guess a "K", and you will get $200 because you guessed a correct letter. You will then see
_ _ _ K E E _

Players keep going until they get it wrong, at which point it is the other players turn.  Players keep guessing until all of the letters in the answer are guessed.  In the example above, the answer would be "YANKEES", and whoever guessed the last correct letter would get an additional $500.

Play 3 rounds, or 5 rounds, or 50 rounds, whatever you'd like!


2 - Additional Information:

I wanted to go with a trivia API because you can do a lot of interesting things with trivia data.  I decided to make Wheel of Fortune as a way for me to do something semi-complex.  At first, I actually spent some resource time connecting to both a Star Wars and the OMDB API, though ended up not using either of them in my project.

I knew I wanted to start with the wheel, so I went online and found a circle divided into sections (see credits).  I had already done some animations using the draw() function so it wasn't too hard to make the wheel start to move.  It was also fun figuring out how to imitate a wheel accelerating quickly, and then slowing down gradually.

I then started creating the board from the API connection I had already established with the Open Trivia DB.  I received a single question and answer from the API pull.  I counted the number of characters and spaces in the answer, and created a box div for each of those characters and appended it to the div I created to hold the answer boxes, i.e. the "board" div.  I then created div's for A through Z and appended them below the answer letters in a div called letterInputArea.

Creating all of the on click logic between the letter inputs, the board answers, and the player toggles was the most complex part of the process. It wasnt necessarily the longest part, but certainly the part with the most complex decision tree.  There are lots of colors that toggle depending on if the answer was right or wrong, and a new round or not, etc.

I also found that some of the characters in the question and answer were non-English or characters I didn't want displayed, so I looped through each character in both the question and answer, and asked for a new Q&A if there were any annoying characters.  I also took a styling shortcut here and only accepted answers with 10 characters or less, so as to not mess up the styling.  Given more time this would be my first fix.

Making the audio clips was the fun part, bringing to a conclusion what was a fun and thought-provoking first project.  If I had another week I would improve my reactiveness as my time wasn't spent in that area.  I also have a ton of repetitive or even unused code as well, I would guess I could cut over 10% of the total lines given more time.  I also should have used toggleClass in multiple places where instead I wrote verbose code.

Lastly, there were 2 things that I really wanted to get working before presentation, but ultimately I wasn't able to.  I was kind of getting the "Solve Puzzle" button working, where the user can type in letters to guess the answer as opposed to repetitively spinning and guessing one letter at a time.  I was able to get the user to "Solve Puzzle" once without bugs, but for some reason if they do it again in later rounds it doesn't work correctly.  I would be able to figure this out given more time.

The one that got away was having a responsive wheel, meaning if the wheel lands on $100, the question would actually be worth $100.  If they land on $600, the question would be worth that much.  I wasn't able to accurately get the (x,y) coordinates of the section of the circle that lands where the red triangle is pointing.  I tried multiple processes and researched but ultimately I think that I was trying to get the (x,y) coordinates while the draw function was still executing.  However, that's just my own guess, I'm not actually sure why I wasnt able to get these points.

3 - Credits and Links:

Thanks to multiple classmates who helped throughout all steps of development.  Thanks to General Assembly teachers who helped throughout all steps of development.

My live project:
https://jweinst4.github.io/

Open Trivia DB API:
https://opentdb.com/api_config.php

Circle with 12 sections:
https://stackoverflow.com/questions/29006214/how-to-divide-a-circle-into-12-equal-parts-with-color-using-css3-javascript

Background1:
https://wallpaperscraft.com/download/landscape_art_road_127350/5120x2880

Background2:
https://www.shutterstock.com/video/clip-29530201-cartoon-nature-landscape-animation-loop-colorful-hills

Wheel of Fortune Logo:
https://www.wheeloffortune.com/

Triangle on Spinner:
https://css-tricks.com/the-shapes-of-css/

Randomly Shuffle multiple arrays:
https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php

Fair Use of movie, TV and audio clips from youtube


