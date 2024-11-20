"use client"

import { LoginFormData, loginSchema } from "@/schemas/loginSchema"
import api from "@/services/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const login = async (data: LoginFormData) => {
    try {
      await api.post("/sessions", data).then((response) => {
        console.log(response.data)
        if (response.data.error) {
          alert("Login failed")
          return
        }
        alert("Login successful")
      })
    } catch (error) {
      console.error(error)
      alert("Login failed")
    }
  }

  return (
    <div className="w-full flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit((data) => login(data))}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="login" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="login"
            type="text"
            placeholder="Email"
            {...register("login")}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 transition-colors duration-300"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 transition-colors duration-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition-all"
        >
          Login
        </button>
      </form>
    </div>
  )
}
