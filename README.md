# Forms

The task is to create a react based application which Renders a form with the use of `react-router-dom` and contains Three Sections.

**Section 1** : This basically shows the form rendering and does not contain any submission handling. 

**Section 2** : This renders the same form but uses `useRef` hook for input and submissin handling.

**section 3** : This section also have the same form for as element but it's submission and input handling are powered by `useState`

**Form rendering Information**
-
The form should have an `id` of **info-form** along with the following input.
```
1. Full-Name should be there as input field with an id of "full_name".
2. Email input should be there with an id of "email".
3. Password input should be there with an id "password".
4. One ore field named Password-Confirmation should also be present with an id of "password_confirmation".
```
There should be a `Submit` button.
 
**Routes and Link Information**
-
- The first section should have an `id` of **form-link**
- The second section should have an id of **form-ref-link**.
- The third section should have the id as **form-state-link**.
