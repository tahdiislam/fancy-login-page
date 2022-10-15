import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold my-3 text-emerald-400">Please Register</h1>
            
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
                        <h1 className="text-5xl font-extrabold dark:text-gray-50">Submit the form</h1>
                        <p className="my-8">
                            <span className="font-medium dark:text-gray-50">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
                        </p>
                        <form novalidate="" action="" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
                            <div>
                                <label for="name" className="text-sm sr-only">Your name</label>
                                <input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-emerald-400 dark:border-gray-700 p-2" />
                            </div>
                            <div>
                                <label for="lastname" className="text-sm sr-only">Email address</label>
                                <input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ring-emerald-400 dark:border-gray-700 p-2" />
                            </div>
                            <div>
                                <label for="password" className="text-sm sr-only">Password</label>
                                <input id="password" type="password" placeholder="Password" className="w-full rounded-md focus:ring focus:ring-emerald-400 dark:border-gray-700 p-2" />
                            </div>
                            <button type="submit" className="w-full py-2 font-semibold rounded dark:bg-emerald-400 dark:text-gray-900">Register</button>
                            <p><small>Log in <Link to='/login' className='text-emerald-400 underline cursor-pointer'>here</Link></small></p>
                        </form>
                    </div>
                    <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
                </div>
            </section>
        </div>
    );
};

export default RegisterPage;