# 🔍 Learning React Components
This is the first time I am using Vite and I find it a lot faster than Create React App. I am building these projects alongside Freecodecamp's react projects series with John Smilga. I learned a lot and the most importan point is that it is drastically different to learn about languages in seperate lessons (small chunks) than to see those lessons in action while building projects.

## How to Run the Project
Since I am not making a netlify site with this project, it can be cloned instead:
1. Clone the repository: git clone <forked-repo-url>
2. Install dependencies using `npm install`.
3. Start the development server with `npm run dev`.
4. Uncomment components one-by-one in the `<App/>` to see what they do. 

# 📜 List of Projects:

**1- Birthday Component**
    This was a nice and simple start to building a react component. I learneed a great deal about the structure of data here. I learned how We pass objects to components as props, whether we pass the entire object or we pass thier properties using spread operator. 

**2- Tours Component**
The useCallback is not part of the project but I am still using it to memoiz the function. I learned about if(!response.ok) handles network related issues, when the status code is 404 or 500. The catch in try/catch statement will catch any errors, even the ones that are thrown when response is not ok. I am also using inline destruturing, I am more comfortable with spread operator and destructuring properties in the function parameter. I also learned about "prop passing", there was not a need for contextAPI in this case, because we weren't using nested child components and we could simply pass the parent's state as a prop. 

**3- Reviews Component**
I used react icons in this project for the first time. Again, I learned about stale state, and using the callback function of the state setter function. To create a circular array, I used a modulo operator. Glad I learned about it when I was making the weather app in plain Javascript. 

**4- Accordion Component**
This was somewhat a similar experience to building the accordion in Javascript. For any events on the window object, I learned that we can place them in usEffect in react. And the importance of clearing those events as before firing up the new ones. I also learned about lifting the state up, so I removed the state from a child component and lifted it up to the parent component. 

**5- Menu Component**
In this component, I learned the syntax of how to give two classes while using css modules. And of course, string interpolation is a lot simpler than concatenation. I also learned how we can pick categories from the data set. If we have 'lunch' category appearing several times, we can use Set() to grab the unique values. The advantage of using this method is that if we add any new items to the data with a different category, it will be picked up by the Set() method.

**6- Tabs Component**
I found this project to be tough, especially when I was trying to apply a "fade-in" effect with opacity. While working on this component, I learned that there are two ways to trigger css animations when the component re-renders. One is to have a state change and associate a css class (like with a ternanry operator) with it. And the other is to add the key prop to the parent element, like div or article, so react can create a new one every time the key prop changes. Because react only re-renders the content, not the elements holding the content on re-renders. 

**7- Slider Component**
I remember struggling a lot when I was learning javascript and I had two buttons in one div, along with images that needed to slide. And I wanted the buttons to be on either sides of the div. They did it seamlessly in this project! An important point I have learned is when children elements are positioned absolutely to parent, the parent element needs to have a height. I thought this was a bit similar to the Reviews project. But in reviews we were only rendering one 'review' at a time. Here, we have the entire data sitting in a horizontal line and we hide the rest of it with the overflow property, and that way only the data that is in th div shows. One thing I learned was adding flags to control how the useEffect should run. The index and personIndex were very hard to grasp. The index was just a counter. We are saying, if the index/counter is 1 or 4 or 8 etc, find that number in the personIndex and then apply the css class to that. It was also very tough for me to picture a circular array! And think of the next slides, and last slides. 

**8- LoremIpsum Component**
The Freecodecamp's project does not use an API, but I decided to use **BaconApi** for this project. This was a fun project, I learned that even if the input element accepts numbers (e.target.value), when we save it in react's state, it is actually a string and we need parseInt to change it into a number. 

**8- ColorGen Component**
We used a JavaScript Library called **Values.js** here. An important point here was, when we recieved the object from the library with the rgba value, we can pass it as an inline style to render the colors! We used navigator.clipboard.writeText() to add compying to clipboard option to our color divs. Another error I saw was an extra comma in the name of the color that we were using on the color box, it turns out, join() was not enough for that, and to correctly represent the name of the color on its repective box, we needed to use spread operator. 

**8- GroceryList Component**
Out of all of the projects, I found this one to be the most challenging one. placing the localStorage in useState was quite new for me. I have made this project in JavaScript as well, we had different functions to handle any list changes. But in React, useEffect was taking care of everything! 

**8, 9, 10- Navbar, SideBar and Stripe Component**
Once I struggle with the css of the navbar, sidebar and stripe navbars were easier to follow. Navbar is still not as good. Sidebar however is working seamlessly. I am gladd that in the next few projects with smilga, I will find Bootstrap! because designing nav from scratch is hard work! But I am glad I did it. 

**11- Cart Component**
After struggling with navbar, this was quite a breeze. We used useReducer() here. I learned Redux with codecademy, and I wish I found this project before learning redux. We are also using contextAPI here. I also learned an important lesson here, If we are using a condition to alter the values in an array somehow, we need to also return the values that have not changed. This took care of a huge bug hiding in plain sight. 

**📒 Personal Notes:**

💥 These projects really did help me in learning how React components are created and how we can add JS into these components

💥 I learned about the structure of the projects and using css modules along with the syntax

💥 Without these projects I would not have been able to move forward with bigger projects 

### 🔮 Future Learning
I plan to continue practicing reac projects. These projects also have left a lot of room for understanding and I will be going back to understand all of the gotcha moments again.  

### 😊 Contact me
If you have any suggestions or want to share knowledge about React hooks, feel free to reach out!

🌟 GitHub: uroobaCodes 🌟 Email: urooba.codes@gmail.com
