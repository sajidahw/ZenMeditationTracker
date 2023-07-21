// index.html converted to HomePage.js

import React from "react"
// home page is considered parent or tree root while the components are the granular child nodes

function HomePage(){
    return (
        <>
        <h2>Welcome to my MERN Portfolio!</h2>
          
                <article id="introduction" className="home">
                    <h3>An accumulation of technologies used are MongoDB, Express, React and Node.js</h3>
                    
                    <p>
                        It's been exciting learning the dual pieces of a website design: the backend and the frontend.</p>

                    <p>
                        For the frontend, since it involves a visual representation of organized data, HTML, CSS, and React using JS were used. To recap, HTML provides the structure of web content, whereas CSS is used for styling and web layout. React is a JavaScript library used for building user interfaces and which makes it easier to manage and update a site. Node enables us to execute JS outside a web browser, so we can run server-side code.
                    </p>

                    <p>
                        Backend allowed us to be able to store user data, retrieve, edit and also create content coming from a website into a database which we used MongoDB for. Mongoose is the library used for interacting with the MongoDB. We used a REST API for receiving HTTP requests from the frontend's React in the web browser.  
                        </p>

                    <p>
                        This is the first time, I've worked with a full stack app. It was very interesting learning about route handlers with HTTP methods to perform the CRUD operation of create, read, update and delete of web content being inputted from a website and stored in a database. React components and hooks were used to automatically navigate to a page after content was added, edited or deleted, as well as updating a state for when values changed or the initial loading of the website.
                        </p>

                    <p>
                        I'm looking forward to expanding my skills and becoming more comfortable with the technologies used.
                        </p>


                
                </article>

        </>
    );
}

export default HomePage;
