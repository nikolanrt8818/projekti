import random


def get_word():
    word = random.choice(words)
    return word.upper()


def display_hangman(tries):
    stages = [
        """
        --------
        |      |
        |      o 
        |     /|\\
        |     / \\
        |    
        -
        """,
        """
        --------
        |      |
        |      o 
        |     /|\\
        |     /
        |      
        -
        """,
        """
        --------
        |      |
        |      o 
        |     /|\\
        |      
        |    
        -
        """ 
        ,
        """
        --------
        |      |
        |      o 
        |     /|
        |      
        |    
        -
        """,
        """
        --------
        |      |
        |      o 
        |      |
        |      
        |    
        -
        """,
        """
        --------
        |      |
        |      o 
        |      
        |      
        |    
        -
        """,
        """
        --------
        |      |
        |       
        |      
        |      
        |    
        -
        """
    ]

    return stages[tries]


def play(word):
    mask = "_" * len(word)
    guessed = False
    guessed_letters = []
    guessed_words = []
    tries = 6
    print("Let's play Hangman!")
    print(display_hangman(tries))
    print(mask) 
    print("\n")

    while not guessed and tries > 0:
        guess = input("Guess a letter or a word:").upper()

        # slova
        if len(guess) == 1 and guess.isalpha():
            if guess in guessed_letters:
                print("You already guessed that letter, ", guess)
            elif guess not in word:
                print(guess, " is not in the word.")
                tries -=1
                guessed_letters.append(guessed)
            else:
                print("Correct, ", guess, " is in the word.")
                guessed_letters.append(guess)

                word_as_list = list(mask)
                indexes = [i for i, letter in enumerate(word) if letter == guess]
                for index in indexes:
                    word_as_list[index] = guess
                mask = "".join(word_as_list)
                if "_" not in mask:
                    guessed = True
        # rec
        elif len(guess) == len(word) and guess.isalpha():
            if guess in guessed_words:
                print("You already guessed that word ",guess)
            elif guess!=word:
                print("Wrong, "+ guess + " is not a word.")
                tries -= 1
                guessed_words.append(guess)
            else:
                guessed = True
                mask = word

        else:
            print("Not a valid guess!")

        print(display_hangman(tries))
        print(mask) 
        print("\n")

    if guessed:
        print("Congrats, you guessed the word!")
    else:
        print("You ran out of tries, the secret word is: "+word+".")


words = ["cookbook", "phonebook","refrigerator","container","astronaut","governor","watermill","annihilation"]


word = get_word()
play(word)
while input("Play again? (Y/N)") == "Y":
    word = get_word()
    play(word)