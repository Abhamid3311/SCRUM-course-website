import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Navbar from '../../SharedPage/Navbar';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
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

    //Login By Using Email & Password
    const handleSignUp = e => {
        e.preventDefault();
        console.log(email, password);

        signInWithEmailAndPassword(email, password);
    };

    return (
        <div>

            <div className='w-1/2 mx-auto my-10 border-2 text-center py-10 bg-slate-200'>
                <h2 className='text-center text-3xl text-indigo-700 font-bold'>Login</h2>
                <form onSubmit={handleSignUp}>
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
                        className="btn btn-primary w-full max-w-md mt-4">Login</button>
                </form>
                <div className="divider">OR</div>

                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-primary w-full max-w-md mt-4">Continue with Google</button>
            </div>


        </div>
    );
};

export default Login;