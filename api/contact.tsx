import React, { useState } from 'react';
import { Send, MapPin, Mail, Clock, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // 👇 WKLEJ SWOJE DANE Z EMAILJS TUTAJ 👇
    const serviceID = 'service_kg9k0qy';   // np. service_z93xxxx
    const templateID = 'template_ici8h0c'; // np. template_8d2xxxx
    const publicKey = 'xSYOvarW4LsKeEg7k3Dwk';   // np. WjKS82_... (z zakładki Account)

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Tymon', // Twoje imię, które pojawi się w mailu
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset statusu po 5 sekundach
        setTimeout(() => setStatus('idle'), 5000);
      }, (err) => {
        console.log('FAILED...', err);
        setStatus('error');
      });
  };

  return (
    <div className="bg-white flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar z danymi kontaktowymi */}
      <div className="w-full lg:w-[40%] border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-neutral-100 p-8 lg:p-16 lg:pl-10 flex flex-col justify-between">
        <div>
          <h2 className="font-display font-black text-5xl mb-12">LET'S<br/>TALK</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <Mail className="mt-1" />
              <div>
                <p className="text-xs font-bold uppercase text-neutral-500 mb-1">Email</p>
                <a href="mailto:tymonjezionekweb@gmail.com" className="text-xl font-bold hover:underline">tymonjezionekweb@gmail.com</a>
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
      </div>

      {/* Sekcja Formularza */}
      <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full space-y-12">
           <div className="space-y-2">
                <p className="text-2xl font-display font-bold">01. Jak się nazywasz?</p>
                <input 
                    type="text" 
                    name="name"
                    placeholder="Nazwa Firmy / Imię i Nazwisko"
                    className="w-full bg-transparent border-b-2 border-neutral-300 focus:border-black outline-none py-4 text-xl transition-colors placeholder:text-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                    disabled={status === 'loading' || status === 'success'}
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                />
            </div>

            <div className="space-y-2">
                <p className="text-2xl font-display font-bold">02. Jak możemy się skontaktować?</p>
                <input 
                    type="email" 
                    name="email"
                    placeholder="twoj@email.com"
                    className="w-full bg-transparent border-b-2 border-neutral-300 focus:border-black outline-none py-4 text-xl transition-colors placeholder:text-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                    disabled={status === 'loading' || status === 'success'}
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                />
            </div>

            <div className="space-y-2">
                <p className="text-2xl font-display font-bold">03. Przedstaw nam swoją wizję.</p>
                <textarea 
                    name="message"
                    rows={4}
                    placeholder="Opisz krótko projekt, swoje cele i oczekiwany termin realizacji..."
                    className="w-full bg-transparent border-b-2 border-neutral-300 focus:border-black outline-none py-4 text-xl transition-colors placeholder:text-neutral-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                    disabled={status === 'loading' || status === 'success'}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                />
            </div>

            <div className="pt-4">
                <button 
                    type="submit" 
                    disabled={status === 'loading' || status === 'success'}
                    className="group flex items-center gap-4 text-2xl font-display font-black hover:gap-6 transition-all disabled:opacity-50 disabled:hover:gap-4 disabled:cursor-not-allowed"
                >
                    {status === 'loading' ? (
                        <>WYSYŁANIE <Loader2 className="w-6 h-6 animate-spin" /></>
                    ) : (
                        <>WYŚLIJ <Send className="w-6 h-6" /></>
                    )}
                </button>

                {/* Komunikaty statusu */}
                {status === 'success' && (
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-sm">
                        <p className="font-bold">Dziękujemy!</p>
                        <p>Wiadomość została wysłana pomyślnie. Wrócimy do Ciebie najszybciej jak to możliwe.</p>
                    </div>
                )}
                
                {status === 'error' && (
                    <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-sm">
                        <p className="font-bold">Błąd wysyłki</p>
                        <p>Sprawdź konfigurację EmailJS (uprawnienia Gmail) lub spróbuj później.</p>
                    </div>
                )}
            </div>
        </form>
      </div>
    </div>
  );
};