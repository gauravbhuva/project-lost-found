import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';
import { login } from '@/redux-store/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import BlankLayout from '@/Layout/BlankLayout';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.authReducer)

    console.log("===>user", user);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleShowPass = () => {
        if (showPass) {
            setShowPass(false)
        } else {
            setShowPass(true)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const data = await dispatch(login(formData)).unwrap();
            
            const token = data?.data?.token
            localStorage.setItem("token",token)
            
            navigate('/')

            toast.success(data?.message);


            // const res = await api.post('/auth/login',formData);


        } catch (error) {
            if (error) {
                toast.error(error?.message || "Login failed.");
            }
        } finally {
            setIsLoading(false)
        }

    };

    return (
        <BlankLayout>        
            <div className="max-w-md mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="bg-white shadow rounded-lg p-8">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Login to Your Account</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                            required
                        />
                    </div>
                    <div className='relative'>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type={showPass ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                            required
                        />
                        {!showPass ? <Eye
                            className='h-4 w-4 absolute top-9 right-2 cursor-pointer z-10'
                            onClick={handleShowPass}
                        />
                            :
                            <EyeOff
                                className='h-4 w-4 absolute top-9 right-2 cursor-pointer z-10'
                                onClick={handleShowPass}
                            />
                        }

                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-medium text-primary hover:text-primary-dark">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
        </BlankLayout>

    );
}