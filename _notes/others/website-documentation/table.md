## Table

### Description

{% highlight nothing %}
{% raw %}
{% include built-in/table.html id="{{ ID }}" content="{{ CONTENT }}" caption="{{ CAPTION }}" %}
{% endraw %}
{% endhighlight %}

### Example

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