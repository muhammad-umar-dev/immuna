import React from 'react'

import { Formik } from 'formik'
import * as Yup from 'yup';

const SignupForm = (props) => {
    const { id, firstName, lastName, password, role, email, access, isUpdate, setIsUpdate, addRows, updatedtableData } = props
    console.log("we are at form First Name", firstName, "Last Name", lastName, "Password", password, "Role", role, "Email", email
        , 'access', access)
    return (
        <Formik
            initialValues={{
                id: isUpdate ? id : "",
                firstName: isUpdate ? firstName : '',
                lastName: isUpdate ? lastName : '',
                email: isUpdate ? email : '',
                password: isUpdate ? password : '',
                role: isUpdate ? role : '',
                access: isUpdate ? access : '',
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(10, 'Last name must be at least 10 characters')
                    .min(3, 'First name must be at least 3 characters')
                    .required('First name is required'),
                lastName: Yup.string()
                    .max(10, 'Last name must be at least 10 characters')
                    .min(3, 'Last name must be at least 3 characters')
                    .required('Last name is required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required("Email is required"),
                password: Yup.string()
                    .min(8, 'Password must be at least 8 characters')
                    .required('Pasword is required'),
                role: Yup.string()
                    .oneOf(['admin', 'vistor', 'accounts', 'hr'])
                    .required("Role is required"),
                access: Yup.string()
                    .required("Access is required")

            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {

                    if (updatedtableData.findIndex(item => item.email === values.email) === -1) {
                        addRows(values)
                        setIsUpdate(false)
                        alert(JSON.stringify(values, null, 2));

                        resetForm({ values: "" })
                        setSubmitting(false);
                    } else if (isUpdate === true) {
                        if (updatedtableData.findIndex(item => item.email === values.email) !== -1) {
                            addRows(values)
                            setIsUpdate(false)
                            alert(JSON.stringify(values, null, 2));

                            resetForm({ values: "" })
                            setSubmitting(false)
                        } else {
                            alert("Email already  exist and can't be change")
                        }

                    } else {
                        alert("Email Already Exists")
                    }

                }, 400)
            }}
            enableReinitialize
        >
            {
                formik => (
                    <div className='flex w-full h-full'>
                        <form className='flex flex-col justify-center items-center w-full' onSubmit={formik.handleSubmit}>
                            {/* {JSON.stringify(formik.values, null, 2)}
                            {JSON.stringify(formik.errors, null, 2)} */}
                            <div className='flex items-center justify-evenly flex-col lg:flex-row  my-3 w-full'>
                                <div className='flex flex-col justify-center items-center my-2 w-1/2'>
                                    <input
                                        className='flex  h-12 lg:w-[450px] lg:h-[65px] rounded-full  bg-gray-light-0  font-normal text-sm px-8 py-4 justify-center items-center outline-none'
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        placeholder="Enter your first name"
                                        {...formik.getFieldProps('firstName')}
                                    />
                                    <div className='h-2'>{formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}</div>
                                </div>
                                <div className='flex flex-col justify-center items-center my-2 w-1/2'>
                                    <input
                                        className='flex  h-12 lg:w-[450px] lg:h-[65px] rounded-full  bg-gray-light-0  font-normal text-sm px-8 py-4 justify-center items-center outline-none'
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        placeholder="Enter your last name"

                                        {...formik.getFieldProps('lastName')}
                                    />
                                    <div className=''>{formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}</div>
                                </div>
                            </div>
                            <div className='flex items-center justify-evenly flex-col lg:flex-row my-3 w-full'>
                                <div className=' flex flex-col justify-center items-center my-2 w-1/2'>
                                    <input
                                        className='flex  h-12 lg:w-[450px] lg:h-[65px] rounded-full  bg-gray-light-0  font-normal text-sm px-8 py-4 justify-center items-center outline-none '
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        {...formik.getFieldProps('password')}
                                    />

                                    <div className='h-2'> {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}</div>
                                </div>
                                <div className='flex flex-col justify-center items-center my-2 w-1/2'>
                                    <input
                                        className='flex  h-12 lg:w-[450px] lg:h-[65px] rounded-full  bg-gray-light-0  font-normal text-sm px-8 py-4 justify-center items-center outline-none'
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        {...formik.getFieldProps('email')}
                                    />
                                    <div className='h-2'>{formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}</div>
                                </div>
                            </div>
                            <div className=' flex items-center justify-evenly flex-col lg:flex-row my-3 w-full'>

                                <div className='flex flex-col justify-center items-center my-2 w-1/2'>
                                    <select
                                        className='form-select form-select-lg mb-3  flex  h-12 lg:w-[450px] lg:h-[65px] rounded-full  bg-gray-light-0  font-normal text-sm px-8 py-2 justify-center items-center outline-none '
                                        id="role"
                                        name="role"
                                        type="dropdown"
                                        // value={formik.values.role}
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        {...formik.getFieldProps('role')}

                                    >
                                        <option value="">Select your Role</option>
                                        <option value="vistor">Vistor</option>
                                        <option value="admin">Admin</option>
                                        <option value="accounts">Account</option>
                                        <option value="hr">HR</option>
                                    </select>
                                    <div className='h-2'>{formik.touched.role && formik.errors.role ? <div>{formik.errors.role}</div> : null}</div>
                                </div>

                                <div className='flex flex-col justify-center items-center my-2 w-1/2'>
                                    <select
                                        className='form-select form-select-lg mb-3 flex  h-12 lg:w-[450px] lg:h-[65px] rounded-full  bg-gray-light-0  font-normal text-sm px-8 py-2 justify-center items-center outline-none '
                                        id="access"
                                        name="access"
                                        type="dropdown"

                                        {...formik.getFieldProps('access')}
                                    >
                                        <option value="none">None</option>
                                        <option value="level1">Level1</option>
                                        <option value="level2">Level2</option>
                                        <option value="level3">Level3</option>
                                    </select>
                                    <div className='h-2'>{formik.touched.access && formik.errors.access ? <div>{formik.errors.access}</div> : null}</div>
                                </div>
                            </div>

                            <div>
                                <button className='flex h-12 lg:w-[450px] lg:h-[65px] rounded-full justify-center items-center outline-none bg-blue-0  text-white font-mono font-medium my-3 px-auto ' type="submit" >Submit</button>
                            </div>

                        </form>
                    </div>
                )
            }
        </Formik>

    )
}

export default SignupForm
