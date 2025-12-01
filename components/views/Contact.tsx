import React, { useState } from 'react';
import { Send, MapPin, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. This is a demo form.');
  };

  return (
    <div className="bg-white flex flex-col lg:flex-row min-h-screen">
      {/* Contact Info Sidebar */}
      <div className="w-full lg:w-[40%] border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-neutral-100 p-8 lg:p-16 lg:pl-10 flex flex-col justify-between">
        <div>
          <h2 className="font-display font-black text-5xl mb-12">LET'S<br/>TALK</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <Mail className="mt-1" />
              <div>
                <p className="text-xs font-bold uppercase text-neutral-500 mb-1">Email</p>
                <a href="mailto:tjezionek2000@gmail.com" className="text-xl font-bold hover:underline">tymonjezionekweb@gmail.com</a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <MapPin className="mt-1" />
              <div>
                <p className="text-xs font-bold uppercase text-neutral-500 mb-1">Headquarters</p>
                <p className="text-xl font-medium">Gdańsk, Polska</p>
                <p className="text-sm text-neutral-600">Dostępny zdalnie</p>
              </div>
            </div>

             <div className="flex gap-4 items-start">
              <Clock className="mt-1" />
              <div>
                <p className="text-xs font-bold uppercase text-neutral-500 mb-1">Office Hours</p>
                <p className="text-xl font-medium">Mon - Fri: 09:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/*<div className="mt-12 lg:mt-0 p-6 border-2 border-black bg-white">
           <h3 className="font-bold mb-2">BOOK A CALL</h3>
           <p className="text-sm mb-4">Schedule a free 15-minute consultation to discuss your vision.</p>
           <button className="w-full bg-black text-white py-3 font-bold hover:bg-neutral-800 transition-colors">
             BOOK NOW
           </button>
        </div>
        */}
      </div>

      {/* Form Section */}
      <div className="flex-1 p-8 lg:p-16">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-12">
           <div className="space-y-2">
                <p className="text-2xl font-display font-bold">01. Jak się nazywasz?</p>
                <input 
                    type="text" 
                    placeholder="Nazwa Firmy"
                    className="w-full bg-transparent border-b-2 border-neutral-300 focus:border-black outline-none py-4 text-xl transition-colors placeholder:text-neutral-300"
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                />
            </div>

            <div className="space-y-2">
                <p className="text-2xl font-display font-bold">02. Jak możemy się skontaktować?</p>
                <input 
                    type="email" 
                    placeholder="twoj@email.com"
                    className="w-full bg-transparent border-b-2 border-neutral-300 focus:border-black outline-none py-4 text-xl transition-colors placeholder:text-neutral-300"
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                />
            </div>

            <div className="space-y-2">
                <p className="text-2xl font-display font-bold">03. Przedstaw nam swoją wizję.</p>
                <textarea 
                    rows={4}
                    placeholder="Opisz krótko projekt, swoje cele i oczekiwany termin realizacji..."
                    className="w-full bg-transparent border-b-2 border-neutral-300 focus:border-black outline-none py-4 text-xl transition-colors placeholder:text-neutral-300 resize-none"
                    required
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                />
            </div>

            <button type="submit" className="group flex items-center gap-4 text-2xl font-display font-black hover:gap-6 transition-all">
                WYŚLIJ <Send className="w-6 h-6" />
            </button>
        </form>
      </div>
    </div>
  );
};