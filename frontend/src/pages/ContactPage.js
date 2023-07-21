
import React, {useState} from "react";

function ContactPage() {
    const [firstlast, setName] = useState('');
    const [email, setEmail] = useState("");

    return (
    <>
        <h2>Your Contact Information</h2>
            <article className="">
                <h3 className="contact">Let us know how we're doing!</h3>
                <p className="contact-p">We'd appreciate it if you can fill this form out, so we can reach out to you in the future.</p>

                <form>
                    <fieldset>
                        <legend>Introduce yourself...</legend>
        
                            <label>First and Last name:
                            <input type="text" value={firstlast}
                                onChange={e => setName(e.target.value)} />
                            </label>

                            <label>Email address:
                            <input type="text" value={email}
                                onChange={e => setEmail(e.target.value)} />
                            </label>
                        
                            <button onClick={e => {
                                setEmail(e.target.value);
                                alert(`Hi, ${firstlast}! We will contact you at ${email} to solicit your feedback.`);
                                e.preventDefault();
                            }}>Submit
                            </button>
                        
                        </fieldset>
                </form>
          </article>
    </>
    );
  }
  
  export default ContactPage;