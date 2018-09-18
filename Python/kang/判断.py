# 1，定义一个整数变量记录年龄
age: int = int(input("请输入年龄："))
if 20 >= age >= 18:
    print("瞎鸡巴搞")
elif age == 1:
    print("几把")
else:
    print("乱搞")

a = 1
b = 20
if a == 1:
    print(a)
    if b == 2:
        print(b)
    else:
        print("懒觉")
