import sys
import os.path
import glob
import time
for post in glob.glob("_posts/*.md"):
	with open(post, 'r') as file:
		data = file.readlines()
	data[1] = 'modified: '+str(time.ctime(os.path.getmtime(post)))+'\n'
	with open(post, 'w') as file:
		file.writelines( data )

for post in glob.glob("_posts/blogs/*.md"):
	with open(post, 'r') as file:
		data = file.readlines()
	data[1] = 'modified: '+str(time.ctime(os.path.getmtime(post)))+'\n'
	with open(post, 'w') as file:
		file.writelines( data )

for post in glob.glob("_posts/notes/*.md"):
	with open(post, 'r') as file:
		data = file.readlines()
	data[1] = 'modified: '+str(time.ctime(os.path.getmtime(post)))+'\n'
	with open(post, 'w') as file:
		file.writelines( data )
