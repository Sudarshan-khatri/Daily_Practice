import cv2
import numpy as np


#define the path of the image
image_path=r"D:\Daily_practice\python\numpy\p3.jpg"

#read the image 
img_read=cv2.imread(image_path)

# check the image is read properly or not and display the image_path \
if img_read is None:
    print(f'Image is not read properly')
else:
    img_resize=cv2.resize(img_read,(500,600))
    change_color=cv2.cvtColor(img_resize,cv2.COLOR_HSV2BGR)
    cv2.imshow('Image',change_color)

cv2.waitKey(0)
cv2.destroyAllWindows()