from tkinter import *
from tkinter import messagebox
from tkinter import font
import random
import string
import re

# generisanje i unos sifre
def generate(size= 10, chars= string.ascii_lowercase + string.ascii_uppercase + string.digits):
    txtPassword.delete(0,END)
    txtPassword.insert(0,''.join(random.choice(chars) for _ in range(size))) 
    showPass()


def enter(password):
    if len(password) < 8:
        messagebox.showerror(HEADING, "Your password must contain at least 8 characters!")
    elif re.search("[A-Z]", password) is None:
        messagebox.showerror(HEADING, "Your password must contain at least one capital letter!")
    else:
        messagebox.showinfo(HEADING, "Your password is strong and safe!")

# prikaz i sakrivanje sifre
def showPass():
    if chShow.get() == 0:
        txtPassword.config(show="*")
    else:
        txtPassword.config(show="")
    

root = Tk()

HEADING = "Password Generator & Validator"
B_COLOR = "#003F63"
F_COLOR = "#F2B138"
BTN_COLOR = "#353D40"

root.config(bg=B_COLOR)
root.title(HEADING)


# elementi
mainFont = font.Font(family="Tahoma", size=20)

lblHeading = Label(root, text=HEADING, font=mainFont)
lblHeading.grid(row=0, column=0, columnspan=2)
lblHeading.config(bg=B_COLOR, fg=F_COLOR)

inputPassword = StringVar()
txtPassword = Entry(root, textvariable=inputPassword, font=mainFont)
txtPassword.grid(row=1, column=0, columnspan=2)
txtPassword.config(bg="#D9D9D9")

btnEnter = Button(root, text="Enter", font=mainFont, command=lambda: enter(str(inputPassword.get())))
btnEnter.grid(row=2, column=0)
btnEnter.config(bg=BTN_COLOR, fg=F_COLOR)

btnGenerate = Button(root, text="Generate", font=mainFont, command=lambda: generate())
btnGenerate.grid(row=2, column=1)
btnGenerate.config(bg=BTN_COLOR, fg=F_COLOR)

chShow = IntVar()
chbShow = Checkbutton(root, text="Show password", font=mainFont, onvalue=1, offvalue=0, variable=chShow, command=lambda: showPass())
chbShow.grid(row=3, column=0, columnspan=2)
chbShow.config(bg=B_COLOR, fg=F_COLOR)

showPass()

root.mainloop()