import React from "react";

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <div>
            <label>Full name(*)</label>
            <div>
                <input type="text" name="name" pattern="[a-zA-Z ]+" required value={this.state.name} onChange={this.handleChange} />
            </div>
        </div> 
        <div>
            <label>Email address(*)</label>
            <div>
                <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required="required,email" value={this.state.email} onChange={this.handleChange} />
            </div>
        </div>
        <div>
            <label for="phone">Phone number</label>
            <div>
                <input type="tel" name="phone" pattern="[0-9+]+" value={this.state.phone} onChange={this.handleChange}/>
            </div>
        </div>
        <div>
            <label>Message(*)</label>
            <div>
                <textarea type="text" name="message" placeholder="Enter your message here..." maxlength="1000" 
                required="required" value={this.state.message} onChange={this.handleChange}></textarea>
            </div>
        </div> 
        <button class="button" type="submit">Send</button>
   </form> 
      );
    }
  }

  export default ContactForm;