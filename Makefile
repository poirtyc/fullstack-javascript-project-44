install: 
	npm ci

brain-games: 
	node bin/brain-games.js

brain-even: 
	node bin/brain-even.js

brain-gcd: 
	node bin/brain-gcd.js	

brain-calc: 
	node bin/brain-calc.js	
	
brain-progression: 
	node bin/brain-progression.js	

lint:
	npx eslint .

publish:
	npm publish --dry-run