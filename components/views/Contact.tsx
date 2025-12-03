import React, { useState } from 'react';
import { Send, MapPin, Mail, Clock, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next'; // <--- IMPORT

export const Contact: React.FC = () => {
  const { t } = useTranslation(); // <--- HOOK
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Tymon',
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => setStatus('idle'), 5000);
      }, (err) => {
        console.error('FAILED...', err);
        setStatus('error');
      });
  };

  return (
    <div className="bg-white flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar z danymi kontaktowymi */}
      <div className="w-full lg:w-[40%] border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-neutral-100 p-8 lg:p-16 lg:pl-10 flex flex-col justify-between">
        <div>
          <h2 className="font-display font-black text-5xl mb-12">
            {t('contact.title_1')}<br/>{t('contact.title_2')}<span className="text-[#0D79F2]">.</span>
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <Mail className="mt-1" />
              <div>
                <p className="text-xs font-bold uppercase text-neutral-500 mb-1">{t('contact.info.email')}</p>
                <a href="mailto:tymonjezionekweb@gmail.com" className="text-xl font-bold hover:underline">tymonjezionekweb@gmail.com</a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <MapPin className="mt-1" />
              <div>
                <p className="text-xs font-bold uppercase text-neutral-500 mb-1">{t('contact.info.hq')}</p>
                <p className="text-xl font-medium">{t('contact.info.hq_loc')}</p>
                <p className="text-sm text-neutral-600">{t('contact.info.hq_remote')}</p>
              </div>
            </div>

             <div className="flex gap-4 items-start">
              <Clock className="mt-1" />
              <div>
                <p className="text-xs font-bold uppercase text-neutral-500 mb-1">{t('contact.info.hours')}</p>
                <p className="text-xl font-medium">{t('contact.info.hours_val')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sekcja Formularza */}
      <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full space-y-12">
           <div className="space-y-2">
                <p className="text-2xl font-display font-bold">{t('contact.form.name_label')}</p>
                <input 
                    type="text" 
                    name="name"
                    placeholder={t('contact.form.name_placeholder')}
                    className="w-full bg-transparent border-b-2 border-neutral-300 focus:border-black outline-none py-4 text-xl transition-colors placeholder:text-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                    disabled={status === 'loading' || status === 'success'}
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                />
            </div>

            <div className="space-y-2">
                <p className="text-2xl font-display font-bold">{t('contact.form.email_label')}</p>
                <input 
                    type="email" 
                    name="email"
                    placeholder={t('contact.form.email_placeholder')}
                    className="w-full bg-transparent border-b-2 border-neutral-300 focus:border-black outline-none py-4 text-xl transition-colors placeholder:text-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                    disabled={status === 'loading' || status === 'success'}
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                />
            </div>

            <div className="space-y-2">
                <p className="text-2xl font-display font-bold">{t('contact.form.msg_label')}</p>
                <textarea 
                    name="message"
                    rows={4}
                    placeholder={t('contact.form.msg_placeholder')}
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
                        <>{t('contact.form.btn_sending')} <Loader2 className="w-6 h-6 animate-spin" /></>
                    ) : (
                        <>{t('contact.form.btn_send')} <Send className="w-6 h-6" /></>
                    )}
                </button>

                {/* Komunikaty statusu */}
                {status === 'success' && (
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-sm">
                        <p className="font-bold">{t('contact.form.success_title')}</p>
                        <p>{t('contact.form.success_msg')}</p>
                    </div>
                )}
                
                {status === 'error' && (
                    <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-sm">
                        <p className="font-bold">{t('contact.form.error_title')}</p>
                        <p>{t('contact.form.error_msg')}</p>
                    </div>
                )}
            </div>
        </form>
      </div>
    </div>
  );
};