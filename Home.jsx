
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SaaSify</h1>
        <Button>Get Started</Button>
      </header>

      <main className="p-10 max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Launch Your SaaS in Minutes</h2>
          <p className="text-lg mb-6 text-gray-600">SaaSify helps you go from idea to income faster than ever before.</p>
          <Button size="lg">Start for Free</Button>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {["Easy Setup", "No Code Tools", "Subscription Management"].map((feature, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{feature}</h3>
                <p className="text-gray-600">Get up and running with minimal effort using powerful, intuitive tools.</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Pricing */}
        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">Simple Pricing</h2>
          <div className="inline-block border rounded-2xl p-8 shadow-md">
            <p className="text-4xl font-bold mb-2">$29/mo</p>
            <p className="text-gray-600 mb-4">Everything you need to build and launch</p>
            <Button>Subscribe Now</Button>
          </div>
        </section>
      </main>

      <footer className="text-center p-6 text-sm text-gray-500">
        © 2025 SaaSify Inc. All rights reserved.
      </footer>
    </div>
  );
}
