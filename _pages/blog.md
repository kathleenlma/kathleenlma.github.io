---
layout: default
title: Blog
permalink: /blog/
---
<!--
<h2>{{ page.title }}</h2>
<ul class="posts">

	  {% for post in site.posts %}
	    <li><span>{{ post.date | date_to_string }}</span> » <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></li>
	  {% endfor %}
	</ul>
-->



<ul class="posts">

	  {% for post in site.posts %}

	    	<div class="newh1"><a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></div>

	    	<div class="thumbnail-info">{{ post.date | date_to_string }}</div> 

	  {% endfor %}
</ul>
