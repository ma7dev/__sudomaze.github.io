## Code Block

### Description

{% highlight nothing %}
{% raw %}
{% highlight {{ LANGUAGE }} linenos %}
{{ CODE }}
{% endhighlight %}
{% endraw %}
{% endhighlight %}

### Example

{% highlight nothing %}
{% raw %}
{% highlight python linenos %}
# import relevant libraries
import roslib
import rospy
import math

def mb_callback(msg):
  # Check if robot has reached goal
  if msg.status.status == 2 or msg.status.status == 4 or msg.status.status == 5 or msg.status.status == 6:
    print "Robot failed to reach waypoint!"
  elif msg.status.status == 3:
    print "Robot successfully reached waypoint!"
  
  pub.publish(waypoint)
{% endhighlight %}
{% endraw %}
{% endhighlight %}

### Output

{% highlight python linenos %}
# import relevant libraries
import roslib
import rospy
import math

def mb_callback(msg):
  # Check if robot has reached goal
  if msg.status.status == 2 or msg.status.status == 4 or msg.status.status == 5 or msg.status.status == 6:
    print "Robot failed to reach waypoint!"
  elif msg.status.status == 3:
    print "Robot successfully reached waypoint!"
  
  pub.publish(waypoint)
{% endhighlight %}