// TopicsPage is formerly HomePage's content
// index.html converted to HomePage.js

import React from "react"

function TopicsPage() {
    return (
        <>
            <h2>Web Development Concepts</h2>
            <nav className="home-topics">
                <a href="#web-servers">Web Servers</a>
                <a href="#frontend-design">Frontend Design</a>
                <a href="#images">Optimizing Images</a>
                <a href="#css">Cascading Style Sheets</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#js">JavaScript</a>
            </nav>

            <article id="web-servers" className="home">
                <h3>About Web Servers</h3>
                <p>I was able to create the webpage by saving an index.html file on my laptop (client) which will then be hosted on the OSU Engr server for CRUD operations. The web browser then renders the "index" file after adding HTML tags and filling it with the information instructed to us within the module. An index.html is the main page of a website also known as the 'homepage' or home for the end user.
                </p>

                <p>
                    <strong>Development web tools displayed locally:</strong>
                    <code>index.html:</code> Status 200;
                    <code>main.css: </code>Status failed;
                    <code>main.js:</code> Status failed
                </p>

                <p>
                    <strong>Development web tools displayed on OSU Engr server:</strong>
                    <code>a1-wahdys/:</code>Status 200;
                    <code>extn-utils.html:</code> Status 200;
                    <code>extn-utils.js:</code> Status 200;
                    <code>favicon.ico:</code> Status 200;
                    <code>installHook.js:</code> Status 200;
                    <code>main.css:</code> Status 404;
                    <code>main.js:</code> Status 404.



                    <code>  favicon.ico</code> has a status of 200 because it is considered successful as it exists through the browser automatically  while main.css and main.js files do not exist and so the status is 404.
                </p>

                <p><strong>URL explanation</strong> for https://web.engr.oregonstate.edu/~wahdys/a1-wahdys/
                    <code>schema or protocol:</code> HTTPS;
                    <code>subdomain:</code> web.engr.;
                    <code>host domain:</code>  oregonstate.edu;
                    <code>resources-document file path:</code>  /~wahdys/a1-wahdys
                </p>
            </article>

            <article id="frontend-design" className="home">
                <h3>Frontend Design</h3>

                <p>
                    Frontend design is creating a website or an application (app) with the user in mind. In other words, the objective is to create a visually pleasant site through the use of complementary fonts, coordinating colors, minimal icons and compressed media files which do not take a long time to load. It is important to make visiting the website, a smooth experience for the user. This can be achieved through using a clean graphical user interface (GUI) and/or minimizing user interactivity to a simple experience. The 5 "E"s of usability is a guide to keep in mind when working with this topic.
                </p>


                <p><strong>The 5 "E"s of usability</strong></p>

                <dl>
                    <dt>Effective</dt>
                    <dd>Providing an experience which meets the user's goals.</dd>

                    <dt>Efficient</dt>
                    <dd>The Shortest steps possible for a user to perform a task.</dd>

                    <dt>Easy to navigate</dt>
                    <dd>Ensure the website is user-friendly for first time users.</dd>

                    <dt>Error-free</dt>
                    <dd>Eradicate any common errors and minimize potential roadblocks for the user.</dd>

                    <dt>Enjoyable/Engaging</dt>
                    <dd>Engage the needs of the user so that they will return to use the site.</dd>
                </dl>

                <p>
                    <strong>Page layout tags</strong> exist in HTML to section out code content into blocks. This ensures that there's a newline space between each "container" space, such as between the header, section, and footer. Several tags were described in the explorations for this module, such as <code>&lt;p&gt;</code> tags for paragraphs. Page layout elements include <code>&lt;headers&gt;</code> like a website banner, <code>&lt;nav&gt;</code> section links for navigating through the website into different pages, <code>&lt;main&gt;</code> to display primary content, <code>&lt;section&gt;</code> for thematic content, and <code>&lt;article&gt;</code> inside a section for individualizing themes. <code>&lt;aside&gt;</code> and <code>&lt;blockquote&gt;</code> are used to emphasize a quote. <code>&lt;figure&gt;</code> is used to display media like a picture or video. <code>&lt;div&gt;</code> is used for dynamic content. <code>&lt;footer&gt;</code> is used to include contact information or legal disclosures.
                </p>

                <p>
                    <code>Anchors</code> are an HTML element which uses a tag to help users to "jump" into a specific page or section without needlessly scrolling through. Content can be linked into different segments of the same page. Anchors can also connect content which resides in another folder or webpage, as well as through an external link through the use of the anchor tag and the file path. A link that has the <code>"https://www"</code> is considered an absolute URL, whereas the relative link will have the folder or page link.

                    The anchor element can also be used to create links for email addresses, phone numbers as well as media files.

                    The <code>'href'</code> attribute is usually used with the anchor tag. An <code>'ID'</code> attribute can also be used with a <code>href='#'</code> syntax.
                </p>
            </article>

            <article id="images" className="home">
                <h3>Optimizing Images</h3>
                <p>
                    There are 6 major specifications when using images online for a website. It's important that file names are descriptive so that internet search engine optimization (SEO) will be able to feature your content for a related internet search. Images can be large files, especially if using high resolution photographs. It's essential that such media images are compressed so that a user isn't waiting for it to load. Lossy compression can compromise an image's resolution, whereas Lossless does not.
                </p>

                <p>
                    Reducing an image size is encouraged by cropping out unnecessary memory space. It also enables the viewer to pay attention to a specific part of your image. There are specific file extensions used for particular images. For instance, JPGs are used for most online photos. If one uses an icon or a logo, these are considered "line-art" images, which are encoded as PNG or GIF. High resolution art or graphics with transparency use PNG.
                </p>

                <p>
                    Despite technology's advancement and the consumer drive for better technical specifications on products, most monitors are higher than the previous 72 pixels per inch. As consumers are utilizing fancier products and smartphone cameras, it is encouraged to provide multiple sizes of an image for viewable devices.
                </p>

                <p>
                    Lastly, RGB is the color mode for PNG, JPG, SVG and WebP while GIF uses an indexed format.
                </p>
            </article>

            <article id="css" className="home">
                <h3>Cascading Style Sheets</h3>
                <p>
                    Cascading Style Sheets, commonly referred to as, CSS, provides the visual "feel" of a website or an app. It's important to use CSS as it provides a branding image to your site, improves readability and usability for users to access different areas of the page. Providing CSS structure helps users understand where to find the information they are looking for.
                </p>
                <p>
                    You can style your website using 5 different ways with CSS. Embedded styling is used within the HTML code under the <code>&lt;head&gt;</code> element with the <code>&lt;style&gt;</code> tags. It is used when you want to provide an exemption on the HTML page. Next, Inline is used inside an HTML element with an attribute and value. An example is specifying a color within the <code>&lt;h1&gt;</code> element. This is rarely used and discouraged, but provides the overruling of previous rules. The third style is called JavaScript (JS) template literals because backticks are used like brackets within a function specifying the attribute and value in JS. Lastly, regular JS is used as a dot method or attribute syntax after describing which element's tag is being called on.
                </p>
            </article>

            <article id="forms" className="home">
                <h3>Forms</h3>
                <p>Forms can be created using HTML code with CSS styling. It is a way for website visitors to interact with the webmaster by sending their responses to information requested during a visit.</p>
                <p>In order to provide accessibility for all users, regardless of physical or mental disabilities, there are <code>6 major goals</code> to creating accessible forms. It is also mandated by the US Federal government as part of the Americans with Disabilities Acct Section 508.
                </p>

                <p>
                    <code>Clear instructions</code> provided above the form and within the labels are necessary. This helps users who use specialty equipment while on the internet to be able to understand what they can do. Placeholder values, on the other, tend to be more helpful for those who have good vision.
                </p>
                <p>
                    Explain <code>why</code> you are collecting information from your users. Clearly label <code>required fields</code>.
                </p>

                <p>
                    <code>Autofocus</code> the first input field, so a user can type information without a keyboard.
                </p>

                <p>
                    <code>Enable form controls</code> to use keyboards to type their information, as not everyone uses a mouse or trackpad.
                </p>

                <p>
                    To specify the order of tabbing through input forms, use <code>&lt;tabindex&gt;</code>, so users can prioritize entering information from the requested fields.
                </p>

                <p>
                    Verify that <code>validation messages</code> are screen-readable.
                </p>

                <p>
                    Next, we'll briefly review major <code>tags and attributes</code> pertinent for forms. The <code>&lt;form&gt;</code> sections an HTML form identifying where we are collecting information. It has the attributes of <code>action</code> to inform which URL (absolute or relative) is used to send the results to and the HTTP <code>method</code> regarding whether it is a <code>GET</code> (retrieve server information) or a <code>POST</code> (change server information). <code>&lt;label&gt;</code> element represents a data's purpose, and it's <code>for</code> attribute must match an input's <code>ID</code>. A label is akin to having a caption for an input field type.
                </p>

                <p>
                    <code>&lt;fieldset&gt;</code> sections out the form into thematic concepts, while <code>&lt;legend&gt;</code> provides a prompt for each grouping of the fieldset. <code>&lt;input&gt;</code> with <code>type=</code>allows us to solicit information which can be displayed in the forms of <code>email, checkboxes, and radio buttons</code>. You can also specify which of these input types are <code>required</code> through the attribute. All input types require an <code>id=, name= and value=</code> so that when the information is transmitted over we can match the responses to the queries. One can get fancy or more secure by providing additional attributes like <code>pattern=</code> in order to filter responses by information type such as password format checks, phone number checks, dates/time format checks and URL formats.
                </p>

                <p>Drop-down response selections use the <code>&lt;select&gt;</code> element. Each <code>&lt;option value=&gt;</code> provides a choice they can click to use. You can also use the <code>selected</code> attribute if you wanted to default a response.
                    For multiline comments, using the <code>&lt;textarea&gt;</code> gives a free text box for users to share their thoughts with you in freehand.
                </p>
                <p>
                    Lastly, upon completing a form, a user may submit their answers by clicking on the <code>&lt;button&gt;</code>.
                </p>

            </article>

            <article id="express" className="home">
                <h3>Express</h3>
                <p><code>Node</code> is a JavaScript (JS) runtime which enables developers to run JS outside the browser. It also is used to run JS on the server-side and to create JS server-side applications. When running JS files locally, we can run the files by employing <code>node fileName.js</code> within the directory.
                </p>
                <p>
                    <code>NPM</code>  is the package manager which makes it easier to install Node.js as well as to manage and share all dependent packages for a project. When running our webpages locally, we can run the files by employing <code>npm start</code> in our integrated terminal in Virtual Studio Code. This terminal command will refresh the local host defined URL to see the web page.
                </p>

                <p>
                    <code>Express</code> is a Node.js web application framework for building simple projects. It allows us to create a server where we can deploy our website and receive a form's response as it listens for the responses on a defined port from a virtual location on the server. The HTTP methods of GET, POST, DELETE affects transmitted data, while also defining the ports and URL routes and API usage.
                </p>

                <p>Using these <code>three technologies together</code> improves the web development experience by using a consistent JavaScript language for both client-side and server-side development, easy management of dependencies and a framework to build efficient and scalable web applications.</p>
            </article>

            <article id="js" className="home">
                <h3>JavaScript</h3>
                <p><code>JavaScript (JS)</code> has several data types: number, string, Boolean value, object, undefined and null. <code>Number:</code> Represents both integers and floating-point numbers. To prevent flimsy automatic conversion, it's imperative that we use built-in functions to convert between the different data types such as a string to a number using <code>parseInt()</code>
                    <code>String:</code> Represents sequences of characters such as words and sentences enveloped with <code>&lsquo;</code>single<code>&rsquo;</code> or <code>&quot;</code>double quotes.<code>&quot;</code>
                    <code>Boolean values:</code> Representing conditional logical values of true or false.
                    <code>Object:</code> are a set of name:value or property:value pairs. CRUD operations consist of create/add, read, update and delete object properties. An object's property is specified by using a '.' dot notation, as in <cite>"object.property"</cite>.
                    <code>Array:</code> consists of a collection of values of any data type. It also contains string properties. Elements are accessed using index notation such as [0] or ['0']. Common methods include .push() where one adds an element to the end of the array or .pop() which removes the last element and returns the number of array elements.
                    <code>Special values:</code> such as <code>undefined</code> when a value hasn't been assigned or <code>null</code>, a non-value.
                </p>
                <p>Objects, arrays and JSON are used in JS as follows:
                    <code>Objects</code> store data in key-value pairs where keys are strings and values can be of any data type. Objects can be created using the object literal notation '{ }' or constructor 'new Object()'.
                    <code>Arrays</code> store a collection of values of any data type. Arrays can also be created via '[]' or 'new Array()' constructor.
                    <code>JSON</code> is a format used to exchange data between applications. It is a string object often used between a client and a server or when storing data into a file. Methods to convert a JS object to a JSON string uses JSON.stringify() and to convert back to a JS object via JSON.parse().
                </p>

                <p>
                    Conditionals and loops help control the flow of a program's execution. <code>Conditionals</code> are 'if' statements which are used to execute a block of code only when a condition is true. Decisions can also be evaluated by using additional if statements known as 'else-if' or an 'else' statement, which is used as a catch-all. JS enables switch statements to be used, which replaces each 'if' branch with the matched value as a case statement. If matched, the program breaks.
                </p>
                <p>
                    <code>Loops</code> are used to repeat a block of code a number of times (<code>for loops</code>) or until a certain condition is met (<code>while loops</code>). A <code>do while</code> loop enables a loop body to run at least once before evaluating a condition. A <code>for..of</code> loop can be used for iterable values in a string or an array, while a <code>for..in</code> loop iterates over an object's properties. <code>break</code> and <code>continue</code> can be used to exit the loop or to skip to the next iteration of a loop.
                </p>

                <p><code>Object-oriented programming (OOP)</code> is when data is encapsulated within objects and methods are used to call on the object instead of accessing it directly. With modern JS, we use the keyword "class" to create a class with a function known as a constructor, which provides default properties for an object. New instances are created by using the keyword 'new'. CRUD operations are performed on the object using dot notation with its properties.

                </p>

                <p>
                    <code>Functional programming</code> is a programming paradigm that is based on using expressions and functions to declare and update data. In functional programming, functions are first-class citizens, which means that they can be passed as arguments to other functions, returned as values from other functions, and assigned to variables.
                </p>
            </article>

        </>
    );
}

export default TopicsPage;
