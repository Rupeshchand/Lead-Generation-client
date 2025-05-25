import { useState } from 'react'

const LeadForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    console.log(formData)
    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100' style={{ marginTop: "80px" }}>
                <form className='shadow p-5' style={{ width: "40%" }} onSubmit={handleSubmit}>
                    <h3 className='text-center mb-4'>Lead Form</h3>
                    <div className='mb-3'>
                        <label htmlFor="name" className='form-label'>Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder='Enter name' required onChange={handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder='Enter email' required onChange={handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="company" className='form-label'>Company</label>
                        <input type="text" className="form-control" id="company" name="company" placeholder='Enter company (optional)' required onChange={handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="message" className='form-label'>Message</label>
                        <input type="text" className="form-control" id="message" name="message" placeholder='Enter message (optional)' required onChange={handleChange} />
                    </div>
                    <button type='submit' className='btn btn-dark'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default LeadForm