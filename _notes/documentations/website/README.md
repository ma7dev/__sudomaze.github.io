---
layout: post
title:  README
permalink: /documentations/website/README
category: "Documentations"
tag: "Website"
render_with_liquid: true
---

## Math Rendering

### Code - Explained

{% highlight nothing %}
{% raw %}
$$

{{ CODE }}

$$
{% endraw %}
{% endhighlight %}

### Code - Example

{% highlight nothing %}
{% raw %}
$$

\int f^{-1}(x-x_a)\,dx

$$
{% endraw %}
{% endhighlight %}

### Output

$$

\int f^{-1}(x-x_a)\,dx

$$

## Notifications

### Code - Explained

{% highlight nothing %}
{% raw %}
{% include built-in/hint.html type="{{ TYPE }}" content="{{ NOTIFICATION }}" %}
{% endraw %}
{% endhighlight %}

### Code - Example

{% highlight nothing %}
{% raw %}
{% include built-in/hint.html type="primary" content="notification" %}
{% endraw %}
{% endhighlight %}

### Output

{% include built-in/hint.html type="primary" content="notification" %}

## Referencing in text

### Code - Explained

{% highlight nothing %}
{% raw %}
*{{ REFERENCE }}*[[{{ REFERENCE_ID }}]](#ref-{{ REFERENCE_ID }})
[Figure {{ FIGURE_ID }}](#img-{{ FIGURE_ID }})
[table {{ TABLE_ID }}](#table-{{ TABLE_ID }})
{% endraw %}
{% endhighlight %}

### Code - Example

{% highlight nothing %}
{% raw %}
*YOLOv3*[[1]](#ref-1)
[Figure 1](#img-1)
[table 1](#table-1)
{% endraw %}
{% endhighlight %}

### Output

*YOLOv3*[[1]](#ref-1)
[Figure 1](#img-1)
[table 1](#table-1)

## Table

### Code - Explained

{% highlight nothing %}
{% raw %}
{% include built-in/table.html id="{{ ID }}" content="{{ CONTENT }}" caption="{{ CAPTION }}" %}
{% endraw %}
{% endhighlight %}

### Code - Example

{% highlight nothing %}
{% raw %}
{% include built-in/table.html id="1" content="

| First Header  | Second Header | Third Header         |
| ------------- | ------------- | -------------------- |
| First row     | Data          | Very long data entry |
| Second row    | **Cell**      | *Cell*               |
| Third row     | Cell that spans across two columns   ||

" 
caption="attadad" %}
{% endraw %}
{% endhighlight %}

### Output

{% include built-in/table.html id="1" content="

| First Header  | Second Header | Third Header         |
| ------------- | ------------- | -------------------- |
| First row     | Data          | Very long data entry |
| Second row    | **Cell**      | *Cell*               |
| Third row     | Cell that spans across two columns   ||

" 
caption="attadad" %}

## Pseudocode Rendering

### Code - Explained

{% highlight nothing %}
{% raw %}
{% include built-in/pcode.html id="{{ ID }}" code="{{ CODE }}" %}
{% endraw %}
{% endhighlight %}

### Code - Example

{% highlight nothing %}
{% raw %}
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
{% endraw %}
{% endhighlight %}

### Output

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

## Image

### Code - Explained

{% highlight nothing %}
{% raw %}
{% include built-in/img.html id="{{ ID }}" url="{{ URL }}" caption="{{ CAPTION }}" %}
{% endraw %}
{% endhighlight %}

### Code - Example

{% highlight nothing %}
{% raw %}
{% include built-in/img.html id="1" url="https://www.gwern.net/images/silkroad/2012-christin-sr-dailysales.png" caption="I love it" %}
{% endraw %}
{% endhighlight %}

### Output

{% include built-in/img.html id="1" url="https://www.gwern.net/images/silkroad/2012-christin-sr-dailysales.png" caption="I love it" %}

## Video

### Code - Explained

{% highlight nothing %}
{% raw %}
{% include video id="{{ ID }}" provider="{{ PROVIDER }}" %}
{% endraw %}
{% endhighlight %}

### Code - Example

{% highlight nothing %}
{% raw %}
{% include video id="DM0nkQxrpW0" provider="youtube" %}
{% endraw %}
{% endhighlight %}

### Output

{% include video id="DM0nkQxrpW0" provider="youtube" %}

## Code

### Code - Explained

{% highlight nothing %}
{% raw %}
{% highlight {{ LANGUAGE }} linenos %}
{{ CODE }}
{% endhighlight %}
{% endraw %}
{% endhighlight %}

### Code - Example

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

## Quote

### Code - Explained

{% highlight nothing %}
{% raw %}
{% include built-in/quote.html quote="{{ QUOTE }}" footer="{{ FOOTER }}" %}
{% endraw %}
{% endhighlight %}

### Code - Example

{% highlight nothing %}
{% raw %}
{% include built-in/quote.html quote="
Ah! let not Censure term our fate our choice, / The stage but echoes back the public’s voice; The drama’s laws the drama’s patrons give, / For we that live to please must please to live.
"
footer="Samuel Johnson (\"Prologue at the Opening of Drury Lane Theatre\")"
%}
{% endraw %}
{% endhighlight %}

### Output

{% include built-in/quote.html quote="
Ah! let not Censure term our fate our choice, / The stage but echoes back the public’s voice; The drama’s laws the drama’s patrons give, / For we that live to please must please to live.
"
footer="Samuel Johnson (\"Prologue at the Opening of Drury Lane Theatre\")"
%}

## Footnotes

### Code - Explained

{% highlight nothing %}
{% raw %}
<ol id="page-footnotes">
{% include built-in/note.html id="{{ ID }}" details="{{ DETAILS }}"%}
...
{% include built-in/note.html id="{{ ID }}" details="{{ DETAILS }}"%}
</ol>
{% endraw %}
{% endhighlight %}

### Code - Example

{% highlight nothing %}
{% raw %}
<ol id="page-footnotes">
{% include built-in/note.html id="1" details="https://www.youtube.com/watch?v=Q8nhQSp__3s&list=WL&index=11"%}
{% include built-in/note.html id="2" details="https://www.youtube.com/watch?v=Q8nhQSp__3s&list=WL&index=11"%}
</ol>
{% endraw %}
{% endhighlight %}

### Output

<ol id="page-footnotes">
{% include built-in/note.html id="1" details="https://www.youtube.com/watch?v=Q8nhQSp__3s&list=WL&index=11"%}
{% include built-in/note.html id="2" details="https://www.youtube.com/watch?v=Q8nhQSp__3s&list=WL&index=11"%}
</ol>


