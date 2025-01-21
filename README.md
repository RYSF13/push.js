# push.js
Make your HTML tidier.  
This is an extremely lightweight JavaScript project, cause the compressed code is only `327` bytes!  
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
var scriptList=["core.js", "widgets.js", "extra.js"];
push(scriptList);
</script>
```

# Usage
```javascript
push("script.js");
/* or */
push(["a.js", "b.js", "c.js", ...]);
//Simple as these!
```
> Now it can add an array of script files' urls directly
