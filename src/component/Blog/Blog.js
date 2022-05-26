import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto">
            <div class="card mt-5 bg-base-100 shadow-xl">
  <div class="card-body">
    <h3 className="font-semibold text-2xl">Question 1: How will you improve the performance of a React Application?</h3>
    <p className="text-xl">Answer: In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:
Keeping component state local where necessary.Memoizing React components to prevent unnecessary re-renders.Code-splitting in React using dynamic import().Windowing or list virtualization in React.Lazy loading images in React.
</p>
  </div>
  
</div>

<div class="card mt-5 bg-base-100 shadow-xl">
  <div class="card-body">
    <h3 className="font-semibold text-2xl">Question 2: What are the different ways to manage a state in a React application?</h3>
    <p className="text-xl">Answer: There's one state management solution that I've personally tried to implement for as long as I've been using React, and with the release of React hooks (and massive improvements to React context) this method of state management has been drastically simplified.
We often talk about React components as lego building blocks to build our applications, and I think that when people hear this, they somehow think this excludes the state aspect. The "secret" behind my personal solution to the state management problem is to think of how your application's state maps to the application's tree structure 

</p>
  </div>
  
</div>


<div class="card mt-5 bg-base-100 shadow-xl">
  <div class="card-body">
    <h3 className="font-semibold text-2xl">Question 3: How does prototypical inheritance work?</h3>
    <p className="text-xl">Answer: JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.
Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).
JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.
 

</p>
  </div>
  
</div>

<div class="card mt-5 bg-base-100  shadow-xl">
  <div class="card-body">
    <h3 className="font-semibold text-2xl">Question 4: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). className="text-xl" Why you do not set products = [...] instead, you use the setProducts</h3>
    <p className='text-xl'>Answer:
A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later. If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that right now!

 

</p>
  </div>
  
</div>
<div class="card mt-5 bg-base-100 shadow-xl">
  <div class="card-body">
    <h3 className="font-semibold text-2xl">Question 5: What is a unit test? Why should write unit tests?</h3>
    <p className="text-xl"> Answer: Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class. Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.It simplifies the debugging process.

 

</p>
  </div>
  
</div>


 


            </div>
        </div>
    );
};

export default Blog;