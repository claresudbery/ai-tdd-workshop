# LLM Golden Rules
 
1. Encourage the LLM to ask clarifying questions - eg "Ask any clarifying questions." at the end of every request.
2. Give the LLM examples that will help it to understand what you're asking
3. Be polite. Use "please" and "thank you".
4. Move in small steps. Big steps feel fast but they quickly slow you down.
5. Always start with tests. 
	- a. Ask the LLM to write tests before code.
	- b. Check and refine the tests.
	- c. See them fail MEANINGFULLY (eg a bad return value) before you make them pass
	- d. Ask the LLM to make the tests pass by implementing the solution.
	- e. Keep running all tests to make sure nothing is broken.
6. Ask the LLM to summarise conversations. Persist those summaries in files that sit in your project (project spec) and can be shared between projects (process files).
7. Use a starter character in each process file, so you can tell the LLM is reading and acting on your process files.
8. Throw things away! Often start again from scratch. Beware the sunk cost fallacy.
9. Regularly start a new chat context.
10. Don't write code (first draft) if the LLM can do it for you
11. Find ways of verifying whether you're really getting value - and beware confirmation bias (in either direction)
12. Try having two or more LLMs working in parallel
13. Ask the LLM for multiple options, with explanations of pros and cons, whenever you're exploring a new approach or technology