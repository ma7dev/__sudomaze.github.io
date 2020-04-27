## Alert 

### Description

{% highlight nothing %}
{% raw %}
{% include built-in/alert.html type="{{ TYPE }}" content="{{ NOTIFICATION }}" %}
{% endraw %}
{% endhighlight %}

### Example

{% highlight nothing %}
{% raw %}
{% include built-in/alert.html type="primary" content="primary" %}
{% include built-in/alert.html type="secondary" content="secondary" %}
{% include built-in/alert.html type="success" content="success" %}
{% include built-in/alert.html type="danger" content="danger" %}
{% include built-in/alert.html type="warning" content="warning" %}
{% include built-in/alert.html type="info" content="info" %}
{% include built-in/alert.html type="light" content="light" %}
{% include built-in/alert.html type="dark" content="dark" %}
{% endraw %}
{% endhighlight %}

### Output

{% include built-in/alert.html type="primary" content="primary" %}
{% include built-in/alert.html type="secondary" content="secondary" %}
{% include built-in/alert.html type="success" content="success" %}
{% include built-in/alert.html type="danger" content="danger" %}
{% include built-in/alert.html type="warning" content="warning" %}
{% include built-in/alert.html type="info" content="info" %}
{% include built-in/alert.html type="light" content="light" %}
{% include built-in/alert.html type="dark" content="dark" %}