import React from 'react'

import "../styles/FormStyles.css";

const Form = () => {
    return (
      <div>
        <form action="https://formspree.io/f/xlekroay" method="POST">
          <label>Username</label>
          <input type="text" name="username" required></input>
          <label>Email</label>
          <input type="email" name="email" required></input>
          <label>Phone</label>
          <input type="number" nam="phone" required></input>
          <label>Message</label>
          <textarea rows="6" placeholder="Type your message" name="message" required />
          <button className="btn">Submit</button>
        </form>
      </div>
    )
  }




export default Form

// import React from 'react'
// import styled from "styled-components";

// const Form = () => {
//   const Wrapper = styled.section ``;
//   return (
//       <Wrapper>
//         <div className='container'>
//           <div className='contact-form'>
//             <form action="#" method='POST'>
//               <input type="text" name="username" placeholder="username" autoComplete="off" required />
//               <input type="email" name="email" placeholder="email" autoComplete="off" required />
//               <textarea name="message" cols="30" autoComplete="off" required ></textarea>
//             </form>
//           </div>
//         </div>
//       </Wrapper>
//   )
// }

// export default Form
