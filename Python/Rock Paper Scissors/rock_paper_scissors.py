import random


def compare(item1, item2):

    if item1 == "rock":
        if item2 == "rock":
            print("It's a tie!")
        elif item2 == "scissors":
            print("You won!")
        else:
            print("You lost")

    if item1 == "paper":
        if item2 == "paper":
            print("It's a tie!")
        elif item2 == "scissors":
            print("You lost!")
        else:
            print("You won!")

    if item1 == "scissors":
        if item2 == "scissors":
            print("It's a tie!")
        elif item2 == "paper":
            print("You won!")
        else:
            print("You lost!")


items = ["rock","paper","scissors"]
answer = ""

print("Welcome to rock, paper and scissors!\n")
while answer!= "quit":
    chosenItems = []
    answer = input("Choose your item:").strip().lower()
    if answer in items:
        chosenItems.append(answer)
        enemyAnswer = random.choice(items)
        chosenItems.append(enemyAnswer)
        print(chosenItems)
        compare(answer, enemyAnswer)
        chosenItems = []
    elif answer == "quit":
        break
    else:
        print("Unknown command.")
