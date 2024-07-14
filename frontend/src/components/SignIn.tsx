import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase.config';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 

export default function SignIn () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { currentUser } = useAuth() ?? {};

    useEffect(() => {
        if (currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate]);

    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            console.log(userCredential)
            if (!currentUser) {
                console.log('User is not yet set immediately after login');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex justify-center flex-col items-center bg-custom-black w-[320px] h-[500px] rounded-xl'>
            <h1 className='my-6 text-2xl font-bold text-white'>Welcome Back!</h1>
            <input
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                className='mt-6 h-[40px] rounded p-4'
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                className='mt-6 h-[40px] rounded p-4'
            />
            <button onClick={handleSignIn} className='bg-white mt-6 h-[40px] w-[70px] rounded '>Sign In</button>
        </div>
    )
}