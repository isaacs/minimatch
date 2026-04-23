# Thesis: Optimize AST globstar matching

The '**/*.js' pattern uses globstar which likely involves recursive matching in the AST code. Profile the AST.match() method to identify hot paths. Look for redundant string operations, unnecessary array allocations, or repeated regex compilations in the globstar matching logic. Optimize the most expensive operations.
