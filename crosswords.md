---
layout: page
title: Crosswords
---
Over the past couple years I've gotten pretty into crosswords. I thought it'd be fun to try making my own.
You can download the .puz files and open them in your crossword app of choice ([here's a web interface](https://www.crosswordnexus.com/solve/)).
This is a new hobby for me, so I'd love to hear any feedback you have!
{% for puzzle in site.data.crosswords %}
- [{{puzzle.name}}]({{puzzle.file}}) ({{puzzle.date}})
{% endfor %}

