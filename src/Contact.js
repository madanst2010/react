import React from "react";
const Contact = () => {
   return(
       <>
       <small>Enter message (optional) and click button "Send"</small>
<div class="wrapper centered">
  <article class="letter">
    <div class="side">
      <h1>Contact us</h1>
      <p>
        <textarea placeholder="Your message"></textarea>
      </p>
    </div>
    <div class="side">
      <p>
        <input type="text" placeholder="Your name" />
      </p>
      <p>
        <input type="email" placeholder="Your email" />
      </p>
      <p>
        <button id="sendLetter">Send</button>
        <div class="envelope front"></div>
  <div class="envelope back"></div>
      </p>
    </div>
  </article>
  <div class="envelope front"></div>
  <div class="envelope back"></div>
</div>
<p class="result-message centered">Thank you for your message</p>

       </>
   );
       
    }
    


export default Contact;