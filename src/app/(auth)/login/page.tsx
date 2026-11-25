"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // other checks
    setMessage("");
    setLoading(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <form 
      onSubmit={onSubmit} 
      className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold text-indigo-600">SAAKSHI</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Sign in to your workspace</h1>
        <p className="mt-2 text-sm text-slate-500">We’ll send you a secure sign-in link.</p>
        <label htmlFor="email" 
        className="mt-6 block text-sm font-medium">Email address</label>
        <input 
        id="email" 
        type="email" 
        required 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500" 
        placeholder="you@example.com" />
        <button 
        disabled={loading} 
        className="mt-4 w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white disabled:opacity-60">
        {loading ? "Sending..." : "Continue with email"}
        </button>
        {message && <p role="status" className="mt-4 text-sm text-slate-600">{message}</p>}
      </form>
    </main>
  );
}
