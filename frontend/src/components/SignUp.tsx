import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { useNavigate } from 'react-router-dom';

export default function SignUp () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userCredential)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='flex justify-center flex-col items-center bg-custom-black w-[320px] h-[500px] rounded-xl'>
            <h1 className='my-6 text-2xl font-bold text-white'>Create your account</h1>
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
            <button onClick={handleSignUp} className='bg-white mt-6 h-[40px] w-[70px] rounded '>Create</button>
        </div>
    );
}