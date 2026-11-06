
"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import logo from "@/app/images/logo.png"
import { authClient } from "@/lib/auth-client"

const signInFields = [
  {
    id: "email",
    type: "email",
    placeholder: "Email address",
    label: "Email",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Password",
    label: "Password",
  },
]

export default function SignInPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [rememberMe, setRememberMe] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  // Handle Sign In
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Show Form Data in Console
    console.log("Sign In form data:", formData)

    setError("")
    setLoading(true)

    try {
      const { data, error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        rememberMe: true,
        callbackURL: "/",
      })

      // Show Authentication Response
      console.log("Sign In response:", data, error)

      if (error) {
        setError(error.message || "Invalid email or password.")
        return
      }

      if (data) {
        console.log("Sign In successful!")
        router.push("/")
        router.refresh()
      }
    } catch (err) {
      console.error("Sign In error:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-svh bg-[#0a0a0a] text-white flex items-center justify-center px-6 pb-24 relative overflow-hidden">

      {/* Background Animation */}
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

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="HireLoop"
              className="h-8 w-auto"
              width={40}
              height={40}
            />
          </Link>
        </div>

        {/* Sign In Card */}
        <div className="bg-[#111827] border border-[#2a2a2a] rounded-2xl p-8 shadow-2xl">

          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome back
          </h2>

          <p className="text-gray-400 text-sm mb-8">
            Sign in to your HireLoop account
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Input Fields */}
            {signInFields.map((field) => (
              <div key={field.id} className="space-y-2">

                <label
                  htmlFor={field.id}
                  className="block text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  {field.label}
                </label>

                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  required
                  autoComplete={
                    field.id === "email" ? "email" : "current-password"
                  }
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] transition-colors text-sm"
                />

              </div>
            ))}

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">

              <label className="flex items-center gap-2 cursor-pointer select-none text-sm text-gray-400">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-[#2a2a2a] bg-[#0a0a0a] text-[#6366f1] focus:ring-[#6366f1]"
                />

                <span>Remember me</span>
              </label>

              <Link
                href="/forgot-password"
                className="text-sm text-[#6366f1] hover:text-[#818cf8] transition-colors"
              >
                Forgot password?
              </Link>

            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                <p className="text-sm text-red-400 text-center">
                  {error}
                </p>
              </div>
            )}

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-full font-medium py-3 text-sm shadow-lg hover:from-[#4f46e5] hover:to-[#9333ea] transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

          </form>

          {/* Sign Up Link */}
          <div className="mt-8 pt-6 border-t border-[#2a2a2a]">

            <p className="text-center text-sm text-gray-400 mb-4">
              Don't have an account?{" "}

              <Link
                href="/sign-up"
                className="text-[#6366f1] hover:text-[#818cf8] font-medium transition-colors"
              >
                Sign up
              </Link>
            </p>

          </div>

        </div>
      </div>
    </div>
  )
}
