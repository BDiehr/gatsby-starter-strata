import React from 'react'

export const ContactForm = () => (
  <section>
    <ul className="labeled-icons">
      <li>
        <h3 className="icon fa-envelope-o">
          <span className="label">Email</span>
        </h3>
        <a href="#">foxandthegremlin@gmail.com</a>
      </li>
      <li>
        <h3 className="icon fa-home">
          <span className="label">Address</span>
        </h3>
        Seattle, WA
      </li>
    </ul>
  </section>
)
