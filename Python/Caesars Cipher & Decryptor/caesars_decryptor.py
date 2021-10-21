from tkinter import *
from tkinter import font
from tkinter import ttk
from tkinter import messagebox

def decrypt(word, shift):
    new = ""
    for ch in word:
        asc = ord(ch)
        if asc == 97 or (asc == 98 and shift > 1) or (asc == 99 and shift > 2) or (asc == 100 and shift > 3):
            asc += 26
        if asc == 65 or (asc == 66 and shift > 1) or (asc == 67 and shift > 2) or (asc == 68 and shift > 3):
            asc += 26
        if asc == 48 or (asc == 49 and shift > 1) or (asc == 50 and shift > 2) or (asc == 51 and shift > 3):
            asc +=10
        asc -= shift
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
        txtNewPassword.insert(0,decrypt(str(inputPassword.get()).strip(),int(cmbShift.get())))


numbers = [1, 2, 3, 4]
bgColor = "#182336"
fgColor = "white"

root = Tk()
root.geometry("400x400")
root.config(bg=bgColor)

HEADING = "Caesars Decryptor"
root.title(HEADING)

mainFont = font.Font(family="Arial", size=20)

lblHeading = Label(root, text=HEADING, font=mainFont,bg=bgColor, fg=fgColor)
lblHeading.pack()

lbl1 = Label(root, text="Type password for decryption:", font=("Arial",14),bg=bgColor, fg=fgColor)
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

btnDecrpyt = Button(root, text="Decrypt", font=mainFont, command=btnClick)
btnDecrpyt.pack(pady=15)

lbl2 = Label(root, text="Decrypted password:", font=("Arial",14),bg=bgColor, fg=fgColor)
lbl2.pack()

inputNewPassword = StringVar()
txtNewPassword = Entry(root, textvariable=inputNewPassword, font=mainFont)
txtNewPassword.pack()
txtNewPassword.bind("<Key>", lambda x: "break")

root.mainloop()
