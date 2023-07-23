import "./ContactFormStyle.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Send a Message to us!!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Contact Number" />
        <textarea placeholder="message" rows="4"></textarea>
        <button>Sent Message</button>
      </form>
    </div>
  );
}
export default ContactForm;
