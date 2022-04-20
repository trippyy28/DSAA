list = [54, 62, 93, 17, 77, 31, 44, 55, 20]
alista = [54, 62, 93, 17]
alistb = [77, 31, 44, 55, 20]
mid = len(list)//2
left = list[:mid]
right = list[mid:]
print(mid,left,right)
[17, 20, 31, 44, 54, 55, 62, 77, 93]
[54,31,44,17,20]
[54, 62, 93, 17]
[77, 31, 44, 55, 20]

l =[2,3,4]
l.append(2)
print(l)