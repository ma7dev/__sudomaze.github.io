import sys
import os.path
import glob
import time
for post in glob.glob("*.md"):
	# with is like your try .. finally block in this case
	with open(post, 'r') as file:
	# read a list of lines into data
		data = file.readlines()
	# now change the 2nd line, note that you have to add a newline
	data[1] = 'modified: '+str(time.ctime(os.path.getmtime(post)))+'\n'
	# and write everything back
	with open(post, 'w') as file:
		file.writelines( data )
