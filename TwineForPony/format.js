window.storyFormat({
  "name": "PonyTwine",
  "version": "0.0.1",
  "author": "Luke Rymarz",
  "description": "Export Twine 2 story in Ponysaurus format",
  "proofing": false,
  "source": '<html>
	<head>
		<title>{{STORY_NAME}}</title>
		<script type="text/javascript">
	var Twison={extractLinksFromText:function(t){var n=t.match(/\[\[.+?\]\]/g);return n?n.map(function(t){var n=t.match(/\[\[(.*?)\-\&gt;(.*?)\]\]/);return n?{name:n[1],link:n[2]}:(t=t.substring(2,t.length-2),{name:t,link:t})}):void 0},convertPassage:function(t){var n={text:t.innerHTML},a=Twison.extractLinksFromText(n.text);if(a&&(n.links=a),["name","pid","position","tags"].forEach(function(a){var e=t.attributes[a].value;e&&(n[a]=e)}),n.position){var e=n.position.split(",");n.position={x:e[0],y:e[1]}}return n.tags&&(n.tags=n.tags.split(" ")),n},convertStory:function(t){var n=t.getElementsByTagName("tw-passagedata"),a=Array.prototype.slice.call(n).map(Twison.convertPassage),e={passages:a};["name","startnode","creator","creator-version","ifid"].forEach(function(n){var a=t.attributes[n].value;a&&(e[n]=a)});var i={};return e.passages.forEach(function(t){i[t.name]=t.pid}),e.passages.forEach(function(t){t.links&&t.links.forEach(function(t){t.pid=i[t.link]})}),e},convert:function(){var t=document.getElementsByTagName("tw-storydata")[0],n=JSON.stringify(Twison.convertStory(t),null,2);document.getElementById("output").innerHTML=n}};window.Twison=Twison;		
		</script>
	</head>
	<body>
		<pre id="output">
		
		</pre>
		<div id="storyData" style="display: none;">
			{{STORY_DATA}}
		</div>
		<script>
			Twison.convert()
		</script>
	</body>
</html>'
});