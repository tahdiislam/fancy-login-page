import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()


const RegisterPage = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    //sign in with google 
    const handleGoogleSignIn = () => {
        setSuccess(false)
        setError('')
        signInWithPopup(auth, googleProvider)
         .then(result => {
            const user = result.user
            setSuccess(true)
            console.log(user);
         })
         .catch(error => {
            setError(error.message)
            console.error(error);
         })
    }
    // github sign in
    const handleGithubSignIn = () => {
        setSuccess(false)
        setError('')
        signInWithPopup(auth, githubProvider)
         .then(result => {
            const user = result.user;
            setSuccess(true)
            console.log(user);
         })
         .catch(error => {
            setError(error.message)
            console.log(error);
         })
    }
    // form submit
    const handleFormSubmit = e => {
        e.preventDefault()
    }
    return (
        <div>
            <h1 className="text-3xl font-semibold my-3 text-emerald-400">Please Register</h1>
            
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
                        <h1 className="text-5xl font-extrabold dark:text-gray-50 my-6">Submit the form</h1>
                        <form onSubmit={handleFormSubmit} action="" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
                            <div>
                                <label htmlFor="name" className="text-sm sr-only">Your name</label>
                                <input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-emerald-400 dark:border-gray-700 p-2" />
                            </div>
                            <div>
                                <label htmlFor="lastname" className="text-sm sr-only">Email address</label>
                                <input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ring-emerald-400 dark:border-gray-700 p-2" />
                            </div>
                            <div>
                                <label htmlFor="password" className="text-sm sr-only">Password</label>
                                <input id="password" type="password" placeholder="Password" className="w-full rounded-md focus:ring focus:ring-emerald-400 dark:border-gray-700 p-2" />
                            </div>
                            <button type="submit" className="w-full py-2 font-semibold rounded dark:bg-emerald-400 dark:text-gray-900 border-emerald-50 
                            focus:bg-emerald-500 focus:text-gray-600">Register</button>
                            <button onClick={handleGoogleSignIn} type="submit" className="w-full py-2 font-semibold rounded dark:bg-emerald-400 dark:text-gray-900 border-emerald-50 
                            focus:bg-emerald-500 focus:text-gray-600 flex justify-center"><img className='h-7' src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png" alt="" /></button>
                            <button onClick={handleGithubSignIn} type="submit" className="w-full py-2 font-semibold rounded dark:bg-emerald-400 dark:text-gray-900 border-emerald-50 
                            focus:bg-emerald-500 focus:text-gray-600 flex justify-center"><img className='h-7' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt="logo img" /></button>
                            <p><small>Log in <Link to='/login' className='text-emerald-400 underline cursor-pointer'>here</Link></small></p>
                            <span>{success && <small className='text-green-500'>Account created successfully</small>}</span>
                            <span>{error && <small className='text-red-500'>{error.split('Firebase:').join('')}</small>}</span>
                        </form>
                    </div>
                    <img src="https://images.unsplash.com/photo-1665472832769-c8bffec9296f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTg0NTE5MA&ixlib=rb-1.2.1&q=80&w=480" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
                </div>
            </section>
        </div>
    );
};

export default RegisterPage;