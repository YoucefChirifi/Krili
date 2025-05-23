// app/register/page.tsx
import React from 'react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
        <p className="text-center text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
