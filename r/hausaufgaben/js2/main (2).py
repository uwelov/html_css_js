import random
my_win=0
pc_win=0
lvl=1
while (my_win<3 and pc_win<3):
  print("------------------------lvl",str(lvl),"------------------------")
  lvl+=1
  i = input("Выберите предмет\nкамень\nножницы\nбумага\nОтвет:")
  pc = random.choice(["камень","ножницы","бумага"])
  if i=="камень":
    if pc=="ножницы":
      print("You Win")
      my_win+=1
    elif pc=="бумага":
      print("You lose")
      pc_win+=1
    else:
      print("Lol")
      lvl-=1
  elif i=="ножницы":
    if pc=="бумага":
      print("You Win")
      my_win+=1
    elif pc=="камень":
      print("You lose")
      pc_win+=1
    else:
      print("Lol")
      lvl-=1
  elif i=="бумага":
    if pc=="камень":
      print("You Win")
      my_win+=1
    elif pc=="ножницы":
      print("You lose")
      pc_win+=1
    else:
      print("Lol")
      lvl-=1
  else:
    print("Error 404:)")
  
if(my_win>pc_win):
  print("You Winner")
else:
  print("You Loser")
