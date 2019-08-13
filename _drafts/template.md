---
layout: post
toc: true
title:  Pedestrian Tracking and Privacy Preservation
abstract:  This project has been a joint effort between the City of Portland and Dr. Fuxin Li.
tags: [Computer Vision, Artificial Intelligence]
status: finished
confidence: highly likely
importance: 3
---

# Introduction to Project
{% include built-in/hint.html content="The program <code>nvidia-smi</code> allows you to monitor your GPU utilization and can help you understand bottlenecks in your data pipeline. The average GPU utilization should usually be above 70-80%." %}

## Introduction
The software described in this document, Facial Detector and Obfuscator, is a project under the advisement of Chanho Kim (Georgia Tech) and Dr. Fuxin Li (Oregon State University). The client for this project is the City of Portland, which wants a proof of concept for a way to transform the data from their traffic cameras so the city may store the data without storing identifying information about the citizens in the footage. The software will be based largely on *YOLOv3*[[1]](#ref-1).

$$
\begin{align}
v(t_1) &= v(t_0) + \int_{t_0}^{t_1} a(t) dt \\  
x(t_1) &= x(t_0) + \int_{t_0}^{t_1} v(t) dt \\
\end{align}
$$

{% include built-in/table.html id="0" content="

| First Header  | Second Header | Third Header         |
| ------------- | ------------- | -------------------- |
| First row     | Data          | Very long data entry |
| Second row    | **Cell**      | *Cell*               |
| Third row     | Cell that spans across two columns   ||

" 
caption="attadad" %}

{% include built-in/pcode.html id="1" code="
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

{% include built-in/img.html id="1" url="https://www.gwern.net/images/silkroad/2012-christin-sr-dailysales.png" caption="[image description]" %}

[Figure 1](#img-1)
[table 1](#table-1)

{% include built-in/vid.html url="https://www.youtube.com/embed/DM0nkQxrpW0" %}

```python
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
```
<output>Using TensorFlow backend.</output>

{% include built-in/hint.html content="The program <code>nvidia-smi</code> allows you to monitor your GPU utilization and can help you understand bottlenecks in your data pipeline. The average GPU utilization should usually be above 70-80%." %}

> Ah! let not Censure term our fate our choice, / The stage but echoes back the public’s voice; The drama’s laws the drama’s patrons give, / For we that live to please must please to live.<br /> [Samuel Johnson](wikipedia.org/wiki/)(“Prologue at the Opening of Drury Lane Theatre”)

# Footnotes

<ol id="page-footnotes">
{% include built-in/note.html
    id="1"
    details="[source]"
%}
</ol>
