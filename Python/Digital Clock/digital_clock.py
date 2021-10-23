from tkinter import *
from tkinter.ttk import *
from time import strftime
from datetime import *


root = Tk()
root.title("Digital Clock")
root.geometry("400x100")
root.config(background="black")

BG_COLOR = "black"
FG_COLOR = "lightgreen"


def time():
    current_time = strftime('%H:%M:%S')
    current_date = strftime("%b %d %Y.")
    lbl.config(text=current_time)
    lbl_date.config(text=current_date)
    lbl.after(1000, time)


lbl = Label(root, font=('Orbitron Regular',40,'bold'), background=BG_COLOR,foreground=FG_COLOR)
lbl_date = Label(root, font=('Orbitron Regular',14,'bold'),background=BG_COLOR,foreground=FG_COLOR)
lbl.pack(anchor='center')
lbl_date.pack(anchor='s')

time()
mainloop()