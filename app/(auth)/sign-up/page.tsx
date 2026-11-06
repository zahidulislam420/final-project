"use client"

import Link from "next/link"
import { useState } from "react"
import logo from "@/app/images/logo.png"
import Image from "next/image"
import { authClient } from "@/lib/auth-client"

const signUpFields = [
  { id: "fullName", type: "text", placeholder: "Full name", label: "Full Name" },
  { id: "email", type: "email", placeholder: "Email address", label: "Email" },
  { id: "password", type: "password", placeholder: "Create password", label: "Password" },
  { id: "confirmPassword", type: "password", placeholder: "Confirm password", label: "Confirm Password" },
]

export default function SignUpPage() {

const handleSignUp = async () => {
    const { data: signUpResponse, error } = await authClient.signUp.email({
    name: formData.fullName,
    email: formData.email,
    password: formData.password,
    callbackURL: "/",
});

console.log(signUpResponse, error)
}


  const [formData, setFormData] = useState<{
    fullName: string
    email: string
    password: string
    confirmPassword: string
  }>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sign Up form data:", formData)
    // Integrate authentication functionality here
  }

  return (
    <div className="min-h-svh bg-[#0a0a0a] text-white flex items-center justify-center px-6 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/10 w-4 h-4 bg-[#6366f1] rounded-full blur-md animate-blob" />
        <div className="absolute top-1/3 left-4/5 w-6 h-6 bg-[#a855f7] rounded-full blur-md animate-blob" style={{ animationDelay: "2000ms" }} />
        <div className="absolute top-1/2 left-1/5 w-3 h-3 bg-[#6366f1] rounded-full blur-sm animate-blob" style={{ animationDelay: "4000ms" }} />
        <div className="absolute top-3/4 left-3/5 w-5 h-5 bg-[#a855f7] rounded-full blur-md animate-blob" style={{ animationDelay: "1000ms" }} />
        <div className="absolute top-4/5 left-1/8 w-4 h-4 bg-[#6366f1] rounded-full blur-sm animate-blob" style={{ animationDelay: "3000ms" }} />
        <div className="absolute top-1/5 left-2/3 w-3 h-3 bg-[#a855f7] rounded-full blur-sm animate-blob" style={{ animationDelay: "5000ms" }} />
        <div className="absolute top-2/3 left-1/10 w-5 h-5 bg-[#6366f1] rounded-full blur-md animate-blob" style={{ animationDelay: "6000ms" }} />
        <div className="absolute top-9/10 left-4/5 w-4 h-4 bg-[#a855f7] rounded-full blur-md animate-blob" style={{ animationDelay: "7000ms" }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="flex justify-center mb-10">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="HireLoop" className="h-8 w-auto" width={40} height={40} />
          </Link>
        </div>

        <div className="bg-[#111827] border border-[#2a2a2a] rounded-2xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-2">Create account</h2>
          <p className="text-gray-400 text-sm mb-8">Join HireLoop to find your dream job</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {signUpFields.map((field) => (
              <div key={field.id} className="space-y-2">
                <label htmlFor={field.id} className="block text-xs font-medium text-gray-400 uppercase tracking-wider">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] transition-colors text-sm"
                />
              </div>
            ))}

            <div className="flex items-center gap-2 cursor-pointer select-none text-sm text-gray-400 mb-6">
              <input type="checkbox" className="w-4 h-4 rounded border-[#2a2a2a] bg-[#0a0a0a] text-[#6366f1] focus:ring-[#6366f1]" />
              <span className="text-sm">
                I agree to the{" "}
                <Link href="/terms" className="text-[#6366f1] hover:text-[#818cf8] transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-[#6366f1] hover:text-[#818cf8] transition-colors">
                  Privacy Policy
                </Link>
              </span>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-full font-medium py-3 text-sm shadow-lg hover:from-[#4f46e5] hover:to-[#9333ea] transition-all active:scale-95">
              Create Account
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#2a2a2a]">
            <p className="text-center text-sm text-gray-400 mb-4">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-[#6366f1] hover:text-[#818cf8] font-medium transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
