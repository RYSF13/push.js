# push.js
Make your HTML tidier.
Before use `push.js` :
```html
<script src="core.js"></script>
<script src="widgets.js"></script>
<script src="extra.js"></script>
<!-- ... -->
```
After:
```html
<script src="../js/push.min.js"></script>
<script>
var scriptList=["core.js","widgets.js","extra.js"];
for(i=0;i<scriptList.length;i++;)push(scriptList[i]);
</script>
```

# Usage
```javascript
push("script.js");//Simple as this!
```
