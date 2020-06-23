## Footnotes

### Description

{% highlight nothing %}
{% raw %}
<ol id="page-footnotes">
{% include built-in/note.html id="{{ ID }}" details="{{ DETAILS }}"%}
</ol>
{% endraw %}
{% endhighlight %}

### Example

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