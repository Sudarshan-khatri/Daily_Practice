import cv2 
import numpy as np

#define the videocapture from webcame
cap=cv2.VideoCapture(0)

while True:
    ret,frame=cap.read()

    #convert the rgb frame into hsv
    hsv=cv2.cvtColor(frame,cv2.COLOR_BGR2HSV)

    #define range of blur in hsv
    lower_blue=np.array([90,50,50])
    upper_blue=np.array([130,255,255])

    #define threshold to define the range of blue color
    mask=cv2.inRange(hsv,lower_blue,upper_blue)

    #bitwise mask and original image
    res=cv2.bitwise_and(frame,frame,mask=mask)



    cv2.imshow('Frame',frame)
    cv2.imshow('mask',mask)
    cv2.imshow('res',res)
    k = cv2.waitKey(5) & 0xFF
    if k==27:
        break

cv2.destroyAllWindows()