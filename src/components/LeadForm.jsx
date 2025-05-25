import { useState } from 'react'
import { BASE_URL } from '../utils/ServerURL'
import { validateEmail } from '../utils/validateEmail'

const LeadForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
    const [error, setError] = useState(null)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setError(null)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateEmail(formData.email)) {
            setError("Please enter a valid email")
            return
        }
        try {
            const res = await fetch(`${BASE_URL}/submit-lead`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
                credentials: 'include'
            })
            const response = await res.json()
            setFormData({ name: '', email: '', company: '', message: '' })
            window.location.href = "/"
        } catch (error) {
            console.log(error)
            setError("Please enter valid email format")
        }
    }
    console.log(formData)
    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100' style={{ marginTop: "80px" }}>
                <form className='shadow p-5' style={{ width: "40%" }} onSubmit={handleSubmit}>
                    <h3 className='text-center mb-4'>Lead Form</h3>
                    <div className='mb-3'>
                        <label htmlFor="name" className='form-label'>Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" required onChange={handleChange} value={formData.name}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" required onChange={handleChange} value={formData.email}/>
                    </div>
                    {error && <p className='text-danger'>{error}</p>}
                    <div className='mb-3'>
                        <label htmlFor="company" className='form-label'>Company</label>
                        <input type="text" className="form-control" id="company" name="company" placeholder="Enter company (optional)" onChange={handleChange} value={formData.company}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="message" className='form-label'>Message</label>
                        <input type="text" className="form-control" id="message" name="message" placeholder="Enter message (optional)" onChange={handleChange} value={formData.message}/>
                    </div>
                    <button type='submit' className='btn btn-dark'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default LeadForm