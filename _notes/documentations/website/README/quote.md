## Quote

### Description

{% highlight nothing %}
{% raw %}
{% include built-in/quote.html quote="{{ QUOTE }}" footer="{{ FOOTER }}" %}
{% endraw %}
{% endhighlight %}

### Example

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