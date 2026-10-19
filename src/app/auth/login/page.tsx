"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from 'lucide-react';

export default function Login() {
  const router = useRouter();


  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    console.log("Data Login Berhasil Ditangkap:", formData);

//login sakses
    router.push('/'); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md relative z-10">
        
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl"></div>

      
        <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 p-8 overflow-hidden">
          
      
          <a href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>

          
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-full flex items-center justify-center shadow-lg">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Welcome Back</h1>
          <p className="text-center text-gray-600 mb-8">Please sign in to your account.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
          
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

          
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-medium shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all hover:scale-[1.02]"
            >
              Sign In
            </button>

         
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="/auth/register" className="text-blue-600 font-medium hover:underline">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}