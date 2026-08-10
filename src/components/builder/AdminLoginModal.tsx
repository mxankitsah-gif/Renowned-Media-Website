/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useBuilder } from '../../context/BuilderContext';
import { Shield, Lock, X, Check, KeyRound, Globe, ArrowRight } from 'lucide-react';

export const AdminLoginModal: React.FC = () => {
  const { isAdminModalOpen, closeAdminModal, loginAdmin } = useBuilder();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');

  if (!isAdminModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      loginAdmin();
      closeAdminModal();
    } else {
      setError('Please enter username and password.');
    }
  };

  const handleQuickLogin = () => {
    loginAdmin();
    closeAdminModal();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md font-sans">
      <div 
        className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button 
            onClick={closeAdminModal}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold text-blue-400 uppercase tracking-widest block">
                ADMINISTRATION BACKEND
              </span>
              <h3 className="text-xl font-extrabold tracking-tight">
                WordPress Admin Portal
              </h3>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Log in to the backend management panel to edit live site content, upload assets, and publish updates.
          </p>
        </div>

        {/* Modal Content / Form */}
        <div className="p-6 space-y-5">
          {error && (
            <div className="bg-red-50 text-red-700 text-xs font-semibold p-3 rounded-xl border border-red-200 flex items-center gap-2">
              <Lock className="w-4 h-4 shrink-0 text-red-500" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                Admin Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="admin"
                  required
                />
                <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="••••••••"
                  required
                />
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Authenticate WP-Admin</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-slate-200" />
            <span className="flex-shrink mx-3 font-mono text-[10px] text-slate-400 uppercase font-bold">OR QUICK ACCESS</span>
            <div className="flex-grow border-t border-slate-200" />
          </div>

          <button
            onClick={handleQuickLogin}
            type="button"
            className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-200"
          >
            <Shield className="w-4 h-4 text-blue-600" />
            <span>Launch WP Live Builder (1-Click Admin Login)</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Protected Backend Zone</span>
          <span className="text-emerald-600 font-bold flex items-center gap-1">
            <Check className="w-3 h-3" /> Live Visitor View Safe
          </span>
        </div>
      </div>
    </div>
  );
};
