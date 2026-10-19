"use client"

import { useState } from "react";
import { useRouter } from 'next/navigation'; // 
import { Eye, EyeOff, User, Mail, Lock, ArrowLeft, Check }  from "lucide-react";

export default function Register() {
  //baris untuk menampilkn sandi
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //cklis persetujuannb
  const [acceptedTerm, setAcceptedTerm] = useState(false);

  //Data form
  const [formData, setFormData] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  });

  const router = useRouter();

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah reload halaman

    if (!acceptedTerm) {
      alert("Wajib centang syarat dan ketentuan");
      return;
    }

    if (formData.password !== formData.confirmPassword || formData.password === '') {
       alert("Password tidak cocok atau kosong");
       return;
    }

    console.log(formData);
    router.push('/auth/logout');
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md relative z-10">
        {/* Latar Belakang Kotak (Card) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl"></div>

        {/* Kotak Register Utama */}
        <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 p-8 overflow-hidden">
           {/* Konten selanjutnya dimasukkan di sini */}

           <a href="/auth/login" className="notflex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to login
          </a>

          {/* Ikon User Bulat */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-full flex items-center justify-center shadow-lg">
              <User className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Judul Form */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Create account</h1>
          <p className="text-center text-gray-600 mb-8">Join us today. It takes only a few steps.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Bagian Input Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="username"
                  placeholder="Your full name"
                  value={formData.username}
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
                  type={showPassword ? "text" : "password"} // Logika mata
                  name="password"
                  placeholder="Your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/* Tombol Togle Mata */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3"
                >
                  {showPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="term"
                checked={acceptedTerm}
                onChange={(e) => setAcceptedTerm(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="term" className="text-sm text-gray-600">
                I agree to terms and conditions
              </label>
            </div>

            <button
              type="submit"
              disabled={!acceptedTerm} // Tombol mati jika tak centang
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-medium shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Register
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account? <a href="/auth/login" className="text-blue-600 hover:underline">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
