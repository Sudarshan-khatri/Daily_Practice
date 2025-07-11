#Dictionary are ordered changeable and doesn't allow duplicate

my_dict={
    'name':"sudarshan",
    'cast':"khatri",
    'id':7099,
    'grade':'Bachelor'
}

print(my_dict)
print(type(my_dict))
print(my_dict.keys())
print(my_dict.values())
print(my_dict.items())
my_dict.update({'gender':'male','age':34,'version':2})
print(my_dict)

my_key=my_dict.keys()
my_value=my_dict.values()

jeep=list(zip(my_key,my_value))
print(jeep)