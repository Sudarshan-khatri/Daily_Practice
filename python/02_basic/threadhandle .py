import threading
import time


def  Number_thread():
    for _ in range(5):
        print(_)


def Square_thread():
    for i in range(5):
        print(f'square number:{i*i}')



# make the threading
t=threading.Thread(target=Number_thread)
m=threading.Thread(target=Square_thread)
t.start()
m.start()
# Wait for both threads to finish
t.join()
m.join()


# time.sleep(8)
# time.sleep(4)
