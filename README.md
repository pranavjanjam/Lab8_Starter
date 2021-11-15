# Lab 8 - Starter

Pranav Janjam

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
   * We would fit our automated tests within a Github action that runs whenever code is pushed. This is so that every time code is being pushed, it is tested without doubt. This way, no one can "forget" to test their code.

2. Would you use an end to end test to check if a function is returning the correct output?
   * No, unit testing would be better for checking if a function is returning the correct output.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   * No, I would not use a unit test to test the “message” feature of a messaging application. This is because the "message" feature would interact with other features and components of the app, which is not ideal for unit testing.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   * Yes, I would use a unit test to test the “max message length” feature of a messaging application. This is because the “max message length” feature is one single minor feature of the app, which is ideal for unit testing.