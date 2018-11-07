# Workshop 12: Async JS

So far, when we've been writing code, everything we write runs in order - one
line after the other, with some jumping around for functions. This is called
synchronous execution - each line waits for the previous line to finish before
it gets run itself. Sometimes, and especially in JavaScript, that's not always
the case. Sometimes, we want a line of code to start some slow thing off, and
then carry on running through the rest of the code whilst we wait for it. This
means our code can run out-of-order - known as asynchronous execution, or async
for short.

Make sure this repo has been forked, cloned, and you've run `npm install`.

## Part 1

Watch the screencast here, and make notes. Code along with the screen cast and
experiment with the code snippets as you go!

## Part 2

Open `test/facts.test.js` and read the code carefully. There are some tasks and
unimplemented tests inside. Run `npm test`. You should see something like:

```
  GET /facts/random
    ✓ returns a 200 status code
    ✓ returns the fact id
    - returns ths fact content

  GET /facts/:factId
    - returns 200 when the fact exists
    ✓ returns the fact with id 1
    - returns the fact with id 5
    - returns 404 if the fact does not exist


  3 passing (21ms)
  4 pending
```

Here, we have a new type of response. Some of our tests have a `-` next to them
rather than a tick or a cross, and they've been counted at the bottom as
`pending`. That's because we've written the description of the test, but no test
code - an `it(...)` with no `function`. Adding those is your job!

Work through the tasks in that file adding tests. You should be able to run all
your tests against the API.

## Part 3

Start implementing your API tests for the To Dos API!