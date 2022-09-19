import React from 'react';
import { useState } from 'react';
import Navbar from '../../SharedPage/Navbar';

import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

    //Error & Loading Message
    if (error || Gerror) {
        return (
            <div><p>Error: {error.message}</p> </div>
        );
    }

    if (loading || Gloading) {
        return <p>Loading...</p>;
    }

    //Create User By Using Email & Password
    const handleSignUp = e => {
        e.preventDefault();
        console.log(name, email, password);

        createUserWithEmailAndPassword(email, password);
    };

    return (
        <div>

            <div className='w-1/2 mx-auto my-10 border-2 text-center py-10 bg-slate-200'>
                <h2 className='text-center text-3xl text-indigo-700 font-bold'>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <input
                        onBlur={e => setName(e.target.value)}
                        type="text"
                        placeholder="Fullname"
                        className="input input-bordered w-full max-w-md mt-4" />

                    <input
                        onBlur={e => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full max-w-md mt-4" />

                    <input
                        onBlur={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full max-w-md mt-4" />

                    <button
                        type='submit'
                        className="btn btn-primary w-full max-w-md mt-4">Sign Up</button>
                </form>
                <div className="divider">OR</div>

                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-primary w-full max-w-md mt-4">Continue with Google</button>
            </div>


        </div>
    );
};

export default SignUp;