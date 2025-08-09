import cv2
import numpy as np



imPath1=r"D:\Daily_practice\python\numpy\p3.png"
imPath2=r"D:\Daily_practice\python\numpy\p2.jpg"
imgread=cv2.imread(imPath1)
imgread2=cv2.imread(imPath2)
# imresize=cv2.resize(imgread,(900,399))
if imgread is None or imgread2 is None:
    print('Image not detected')
else:
    print(f'Shape of Image::\nImgshape::{imgread.shape}\nImagshape::{imgread2.shape}')
    height,width=imgread2.shape[:2]
    imgread=cv2.resize(imgread,(height,width))



    # px=imgread[100,100]
    # crop=imgread[100:150,140:200]
    # print(crop)
    # h,w=imgread.shape[:2]
    # center=(w//2,h//2)
    # matrix=cv2.getRotationMatrix2D(center,45,1)
    # rotated=cv2.warpAffine(imgread,matrix,(w,h))
    # flp=cv2.flip(imgread,0)
    # change1=cv2.cvtColor(imgread,cv2.COLOR_BGR2GRAY)
    # change2=cv2.cvtColor(imgread,cv2.COLOR_HLS2BGR)
    # cv2.line(imgread,(10,20),(400,600),(233,67,78),2)
    # cv2.circle(imgread,(150,150),60,(143,221,50),4)
    # cv2.ellipse(imgread,(150,350),(340,222),45,0,360,(232,123,232),50)
    # pts = np.array([[220, 320], [320, 400], [120, 400]], dtype=np.int32)
    # cv2.polylines(imgread,[pts],True,(122,122,232),56)
    # Convert grayscale to BGR if needed

    if len(imgread.shape) == 2:
        imgread = cv2.cvtColor(imgread, cv2.COLOR_GRAY2BGR)
    if len(imgread2.shape) == 2:
        imgread2 = cv2.cvtColor(imgread2, cv2.COLOR_GRAY2BGR)

    #perform the arithmetic operation in image
    if imgread2.shape!=imgread.shape:
        print("Dimension not match")
    else:
        imadd=cv2.add(imgread,0.7,imgread2,0.3,0)
        cv2.imshow("Image",imadd)
        cv2.waitKey(0)
        cv2.destroyAllWindows()


# vdo=cv2.VideoCapture(0)
# while True:
#     ret,frame=vdo.read()

#     if not ret:
#         print("Video not captured !!!!")
#         break
#     else:
#         cv2.line(frame,(10,20),(400,600),(233,67,78),2)
#         cv2.circle(frame,(150,150),60,(143,221,50),4)
#         cv2.ellipse(frame,(150,350),(340,222),45,0,360,(232,123,232),50)
#         pts = np.array([[220, 320], [320, 400], [120, 400]], dtype=np.int32)
#         cv2.polylines(frame,[pts],True,(122,122,232),56)
#         cv2.imshow("video",frame)
#         if cv2.waitKey(1) & 0xff==ord('q'):
#             break
# vdo.release()
# cv2.destroyAllWindows()
