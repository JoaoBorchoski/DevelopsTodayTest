import LoginForm from "@/components/Login"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="w-full flex flex-col items-center justify-center py-8 bg-blue-600 shadow-lg">
        <h1 className="text-4xl text-white font-semibold">Login Page</h1>
        <Link href="/" className="px-8 py-2 rounded-md bg-gray-100 mt-4 text-xl hover:bg-gray-200 transition">
          Home
        </Link>
      </div>

      <div className="flex-1 flex">
        <LoginForm />
      </div>
    </div>
  )
}
