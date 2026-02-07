import React, { useState } from 'react';
import { Shield, Cpu, Network, ChevronRight, CheckCircle } from 'lucide-react';

function App() {
    const [email, setEmail] = useState('');

    const handleContact = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you. Enterprise deployment team will contact you shortly.");
        setEmail('');
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white">
            {/* Navigation */}
            <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold mr-3">
                                A
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">A2AC LLC</span>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#solutions" className="text-sm font-medium hover:text-cyan-400 transition-colors">Solutions</a>
                            <a href="#protocol" className="text-sm font-medium hover:text-cyan-400 transition-colors">Q Protocol</a>
                            <a href="#partners" className="text-sm font-medium hover:text-cyan-400 transition-colors">Partners</a>
                            <a href="#contact" className="text-sm font-medium hover:text-cyan-400 transition-colors">Contact</a>
                        </div>
                        <div>
                            <a href="https://philhills.com" className="text-xs font-mono text-cyan-500 hover:text-cyan-300 border border-cyan-900 bg-cyan-950/30 px-3 py-1.5 rounded-full transition-all">
                                View Live Swarm →
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative overflow-hidden pt-20 pb-32">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none opacity-50" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-800 bg-blue-900/30 text-blue-300 text-xs font-medium mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
                        Accepting Enterprise Partners
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                        Standardizing Agent<br />
                        Communication.
                    </h1>

                    <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        A2AC LLC provides the certified infrastructure for <strong>interoperable agent swarms</strong>.
                        Secure, observable, and governed by the constitutional <strong>Q Protocol</strong>.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <a href="#contact" className="px-8 py-3.5 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors shadow-lg shadow-white/10 flex items-center">
                            Request Enterprise Access <ChevronRight className="ml-2 w-4 h-4" />
                        </a>
                        <a href="#protocol" className="px-8 py-3.5 rounded-lg border border-slate-700 bg-slate-900/50 hover:bg-slate-800 transition-colors">
                            Documentation
                        </a>
                    </div>
                </div>
            </div>

            {/* Trusted By Grid (simulated) */}
            <div className="border-y border-slate-800 bg-slate-900/50 py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Trusted Infrastructure For</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders forlogos */}
                        <div className="font-bold text-xl">Google Cloud <span className="text-xs font-normal border border-slate-600 rounded px-1 ml-1">PARTNER</span></div>
                        <div className="font-bold text-xl">A2AC Core</div>
                        <div className="font-bold text-xl">Cube Protocol</div>
                        <div className="font-bold text-xl">Sentinels</div>
                    </div>
                </div>
            </div>

            {/* Feature Grid */}
            <div id="solutions" className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group">
                            <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Network className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Universal Interoperability</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Connect disparate agents across clouds. Our A2AC standard enables seamless discovery, handshake, and task delegation between AWS, GCP, and local agents.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all group">
                            <div className="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Shield className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Constitutional Governance</h3>
                            <p className="text-slate-400 leading-relaxed">
                                The Q Protocol introduces "Layer Q" — verifiable, human-monitored governance for autonomous systems. Enforce compliance before code execution.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all group">
                            <div className="w-12 h-12 bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Cpu className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Semantic Memory</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Replace brittle prompt context with the Cube Protocol. Structured, compressed, and signed knowledge blocks that persist across sessions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Deep Technical Section */}
            <div id="protocol" className="py-24 border-t border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built for the <span className="text-cyan-400">Agentic Future</span></h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-white">Google Cloud Native</h4>
                                    <p className="text-slate-400 text-sm">Deployed on Cloud Run with full IAM integration. Use your existing GCP credits.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-white">Zero-Trust Architecture</h4>
                                    <p className="text-slate-400 text-sm">Every inter-agent message is cryptographically signed and audited by Sentinel nodes.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-white">Standardized Agent Cards</h4>
                                    <p className="text-slate-400 text-sm"><code>agent.json</code> discovery protocol allows instant capability negotiation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-900 border border-slate-700 rounded-lg p-6 font-mono text-xs md:text-sm text-slate-300 shadow-2xl relative">
                        <div className="absolute top-0 left-0 w-full h-8 bg-slate-800 rounded-t-lg flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="mt-6 space-y-2">
                            <div className="text-slate-500"># A2AC Handshake Protocol v1.0</div>
                            <div><span className="text-purple-400">POST</span> /v1/agent/negotiate</div>
                            <div>{"{"}</div>
                            <div className="pl-4"><span className="text-blue-400">"agent_id"</span>: <span className="text-green-300">"did:a2ac:enterprise:001"</span>,</div>
                            <div className="pl-4"><span className="text-blue-400">"capabilities"</span>: ["compute", "reasoning"],</div>
                            <div className="pl-4"><span className="text-blue-400">"signature"</span>: <span className="text-yellow-300">"0x9f8a2b3c..."</span></div>
                            <div>{"}"}</div>
                            <div className="text-green-400 mt-4">&gt;&gt; 200 OK (Session Established)</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact / CTA */}
            <div id="contact" className="py-24">
                <div className="max-w-3xl mx-auto px-4 bg-slate-900 rounded-2xl border border-slate-800 p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to deploy?</h2>
                    <p className="text-slate-400 mb-8">Join the A2AC Enterprise Partner Program. Get exclusive access to the Q Protocol SDK and managed Sentinel nodes.</p>

                    <form onSubmit={handleContact} className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="work@company.com"
                            className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit" className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                            Get Access
                        </button>
                    </form>
                    <p className="mt-4 text-xs text-slate-500">
                        Compliance: SOC2 Type II Pending. Google Cloud Partner Network Applicant.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-slate-800 bg-slate-950 py-12">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-white font-bold text-xs">A</div>
                        <span>© 2026 A2AC LLC. All rights reserved.</span>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Security</a>
                        <a href="#" className="hover:text-white transition-colors">Google Partner Status</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
