---
layout: default
title: Blog
permalink: /blog/
---

<ul class="posts">
	  {% for post in site.posts %}
	    	<div class="newh1"><a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></div>

	    	<div class="thumbnail-info">{{ post.date | date_to_string }}</div> 

	    	<p class="description">{{ post.content | truncatewords: 100 }}</p>

	    	<p><a href="{{ post.url }}">Read more</a></p>		
	{% endfor %}
</ul>
