import cv2
import numpy as np

img1=np.zeros((100,100),dtype=np.int8)
img2=np.zeros((100,100),dtype=np.int8)

e1=cv2.getTickCount()
#bitwise operation 
bitwise_and=cv2.bitwise_and(img1,img2)
bitwise_or=cv2.bitwise_or(img1,img2)
bitwise_xor=cv2.bitwise_xor(img1,img2)
bitwise_not=cv2.bitwise_not(img1)


#display the image
cv2.imshow("Image1",img1)

cv2.imshow("Image2",img2)

cv2.imshow("Bitwise_and",bitwise_and)
 
cv2.imshow("Bitwise_or", bitwise_or)

cv2.imshow("Bitwise_xor", bitwise_xor)

cv2.imshow("Bitwise_Not",bitwise_not)
e2=cv2.getTickCount()
time=(e2-e1)/cv2.getTickFrequency()    
print(time)


cv2.waitKey(0)
cv2.destroyAllWindows()
