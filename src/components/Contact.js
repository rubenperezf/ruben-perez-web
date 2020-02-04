const React = require('react')
const WufooForm = require('react-wufoo-embed');

function Contact() {
    return (
        <div className="contact-container">
            <h1>Please contact me</h1>
            <p>I will answer.</p>
            <WufooForm userName="rubenperezf" formHash="z9i59kq1d2ty9u" header="hide"/>
        </div>
        
    )
}

export default Contact