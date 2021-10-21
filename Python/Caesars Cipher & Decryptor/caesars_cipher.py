from tkinter import *
from tkinter import font
from tkinter import ttk
from tkinter import messagebox


def encrypt(word, shift):
    new = ""
    for ch in word:
        asc = ord(ch)
        if asc == 122 or (asc == 121 and shift > 1) or (asc == 120 and shift > 2) or (asc == 119 and shift > 3):
            asc -= 26
        if asc == 90 or (asc == 89 and shift > 1) or (asc == 88 and shift > 2) or (asc == 87 and shift > 3):
            asc -= 26
        if asc == 57 or (asc == 56 and shift > 1) or (asc == 55 and shift > 2) or (asc == 54 and shift > 3):
            asc -=10
        asc += shift
        new += chr(asc)

    return new

def btnClick():
    if inputPassword.get() == "":
        messagebox.showerror(HEADING, "Please enter your password.")
        txtPassword.focus()
    elif not inputPassword.get().isalnum():
        messagebox.showerror(HEADING, "Please use only letters and numbers.")
        txtPassword.focus()
    elif cmbShift.get() == "":
        messagebox.showerror(HEADING, "Please choose shift number.")
        cmbShift.focus()
    else:
        txtNewPassword.delete(0,END)
        txtNewPassword.insert(0,encrypt(str(inputPassword.get()).strip(),int(cmbShift.get())))


numbers = [1, 2, 3, 4]
bgColor = "#182336"
fgColor = "white"

root = Tk()
root.geometry("400x400")
root.config(bg=bgColor)

HEADING = "Caesars Cipher"
root.title(HEADING)

mainFont = font.Font(family="Arial", size=20)

lblHeading = Label(root, text=HEADING, font=mainFont,bg=bgColor, fg=fgColor)
lblHeading.pack()

lbl1 = Label(root, text="Type password for encryption:", font=("Arial",14),bg=bgColor, fg=fgColor)
lbl1.pack()

inputPassword = StringVar()
txtPassword = Entry(root, textvariable=inputPassword, font=mainFont)
txtPassword.pack()

lbl3 = Label(root, text="Shift numbers:", font=("Arial",14),bg=bgColor, fg=fgColor)
lbl3.pack()

cmbShift = ttk.Combobox(root, font=mainFont ,width=3)
cmbShift.pack()
cmbShift["values"] = numbers
cmbShift.bind("<Key>", lambda x: "break")

btnEncrpyt = Button(root, text="Encrypt", font=mainFont, command=btnClick)
btnEncrpyt.pack(pady=15)

lbl2 = Label(root, text="New password:", font=("Arial",14),bg=bgColor, fg=fgColor)
lbl2.pack()

inputNewPassword = StringVar()
txtNewPassword = Entry(root, textvariable=inputNewPassword, font=mainFont)
txtNewPassword.pack()
txtNewPassword.bind("<Key>", lambda x: "break")

root.mainloop()




