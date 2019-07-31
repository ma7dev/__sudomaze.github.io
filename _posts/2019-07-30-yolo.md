---
layout: post
toc: true
title:  "[title]"
tags: [hot, summer]
display: "[image path]"
permalink: /posts/yolo
use_math: true
---

[Introduction]


# Introduction
## Introduction
### Introduction
#### Introduction

dasdasdasdasdasd aas asdasdasdasdqwd qwdasd  qwd qwd qw dqwd qwd qd 

adasd qwqdqw dqwd qwd qw dwqdqwd qwqw dqwd qwd qdq $P$

$$
\begin{align}
v(t_1) &= v(t_0) + \int_{t_0}^{t_1} a(t) dt \\  
x(t_1) &= x(t_0) + \int_{t_0}^{t_1} v(t) dt \\
\end{align}
$$

{% include table.html id="1" content="

| First Header  | Second Header | Third Header         |
| :------------ | :-----------: | -------------------: |
| First row     | Data          | Very long data entry |
| Second row    | **Cell**      | *Cell*               |
| Third row     | Cell that spans across two columns  ||

" 
caption="attadad" %}

{% include pseudocode.html id="1" code="
\begin{algorithm}
\caption{Quicksort}
\begin{algorithmic}
\PROCEDURE{Quicksort}{$A, p, r$}
    \IF{$p < r$} 
        \STATE $q = $ \CALL{Partition}{$A, p, r$}
        \STATE \CALL{Quicksort}{$A, p, q - 1$}
        \STATE \CALL{Quicksort}{$A, q + 1, r$}
    \ENDIF
\ENDPROCEDURE
\PROCEDURE{Partition}{$A, p, r$}
    \STATE $x = A[r]$
    \STATE $i = p - 1$
    \FOR{$j = p$ \TO $r - 1$}
        \IF{$A[j] < x$}
            \STATE $i = i + 1$
            \STATE exchange
            $A[i]$ with     $A[j]$
        \ENDIF
        \STATE exchange $A[i]$ with $A[r]$
    \ENDFOR
\ENDPROCEDURE
\end{algorithmic}
\end{algorithm}
" %}

{% include 1-image.html id="1" url="/public/images/[image path]" caption="[image description]" %}

[Figure 1](#img-1)
[table 1](#table-1)

{% highlight python %}
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

# References
{:.mt-2}

{% include reference.html
    id="1"
    details="[source]"
    url="[link]" 
%}