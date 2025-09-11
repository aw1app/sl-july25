import { useState } from "react";


function BasicFormHandling() {

    const [formValues, setFormValues] = useState(
        {
            name: "",
            email: "",
            message: "",
        }
    );


    const [errors, setErrors] = useState(
        {
        name: false,
        email: false,
        message: false,
    });



    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormValues({ ...formValues, [name]: value });
        setErrors({ ...errors, [name]: false });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let formValid = true;
        const errorsCopy = { ...errors };
        
        for (const field in formValues) {
            if (!formValues[field]) { // check for blank feilds
                formValid = false;
                errorsCopy[field] = true;
            }
        }
        
        // Basic email validation
        if (formValues.email && !/\S+@\S+\.\S+/.test(formValues.email)) {
            formValid = false;
            errorsCopy.email = true;
        }

        setErrors(errorsCopy);
        
        if (formValid) {
            console.log("Form submitted with values: ", formValues);
        }
    };



     return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formValues.name} onChange={ handleChange} />
                {errors.name && <div className="error" style={{color: 'red'}}>Please enter your name</div>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={formValues.email} onChange={handleChange} />
                {errors.email && <div className="error" style={{color: 'red'}}>Please enter a valid email address</div>}
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={formValues.message} onChange={handleChange} />
                {errors.message && <div className="error" style={ {color: 'red'} }>Please enter a message</div>}
            </div>
            <button type="submit">Submit</button>

        <p>Email in State variable formValues : {formValues.email}</p>

        </form>
    );


}


export default BasicFormHandling;