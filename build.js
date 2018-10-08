const { readFileSync, writeFileSync } = require('fs');

const source = readFileSync('dist/foo.es5.js', 'utf-8');

writeFileSync('dist/index.html', `
<body>
<script>
var source = ${JSON.stringify(source)};
var blob = new Blob([source], {type: 'application/javascript'});
var url = URL.createObjectURL(blob);
var tag = document.createElement('script');
tag.src = url;
document.body.appendChild(tag);
</script>
Hello world.
</body>
`);
