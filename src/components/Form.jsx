import Input from "./Input"

const Form = () => {
    return (
        <>
            <h2 className="text-center">Student Form</h2>
            <Input
                type="text"
                id="fname"
                className="form-control"
                placeholder="first name"
            />

            <Input
                type="text"
                id="lname"
                className="form-control"
                placeholder="Last name"
            />

            <Input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email Address"
            />

            <Input
                type="number"
                id="phone"
                className="form-control"
                placeholder="Phone number "
            />
        </>
    )
}

export default Form
