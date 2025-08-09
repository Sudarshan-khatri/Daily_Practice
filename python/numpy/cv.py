import cv2
from matplotlib import pyplot as plt

#path of image
impath=r"D:\Daily_practice\python\numpy\pht.png"
v_path=r"D:\Daily_practice\python\numpy\vd1.mp4"
#read the image
# img=cv2.imread(impath)
# plt.imshow(img,cmap="gray",interpolation='bicubic')
# if img is None:
#     print("No image is found")
# else:
#     cv2.imshow("Image",img)
#     cv2.waitKey(0)
#     cv2.destroyAllWindows()

# capture the video:
# cap=cv2.VideoCapture(0)
# while True:
#     ret,frame=cap.read()

#     if ret is None:
#         print("video is not captured")
#         break

#     cv2.imshow("video",frame)

# cap.release()
# cv2.destroyAllWindows()

# run the capture video
cap=cv2.VideoCapture(1)
four_cc=cv2.VideoWriter_fourcc(*'xvid')
out=cv2.VideoWriter('output.avi',four_cc,20.0,(640,480))
while True:
    ret,frame=cap.read()
    gray=cv2.cvtColor(frame,cv2.COLOR_RGB2GRAY)
    if ret is None:
        print("video is not captured")
        break
    out.write(gray)

    cv2.imshow("video",gray)
    if cv2.waitKey(1) & 0xff==ord('q'):
        break


cap.release()
out.release()
cv2.destroyAllWindows()