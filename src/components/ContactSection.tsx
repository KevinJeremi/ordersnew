'use client';

import { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulasi pengiriman form
            await new Promise(resolve => setTimeout(resolve, 1000));

            alert('Pesan berhasil dikirim! Terima kasih telah menghubungi kami.');

            // Reset form
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            alert('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section id="kontak" className="bg-light py-8 md:py-12 relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#3D8C95]/10 to-transparent rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#FF7A00]/10 to-transparent rounded-tl-full"></div>
            <div className="absolute top-1/4 right-10 w-6 h-6 rounded-full bg-[#FF7A00]/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 left-10 w-8 h-8 rounded-full bg-[#3D8C95]/20 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container-content relative z-10">
                <div className="text-center mb-12">

                    <h2 className="text-4xl font-bold mb-3">Mari Berkolaborasi</h2>

                </div>                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl group transition-all duration-500 border border-gray-100/50 backdrop-blur-sm relative z-10 p-8">
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF7A00]/5 to-transparent rounded-bl-full group-hover:from-[#FF7A00]/10 transition-all duration-500 -z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/5 via-transparent to-[#3D8C95]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div><h3 className="mb-6 text-2xl font-bold text-[#061E44] group-hover:text-[#FF7A00] transition-colors duration-300">Kirim Pesan</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-[#061E44] font-medium mb-2">Nama Lengkap</label>                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white relative z-10"
                                    placeholder="Masukkan nama lengkap Anda"
                                    required
                                    disabled={isSubmitting}
                                    autoComplete="name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-[#061E44] font-medium mb-2">Email</label>                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white relative z-10"
                                    placeholder="email@anda.com"
                                    required
                                    disabled={isSubmitting}
                                    autoComplete="email"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-[#061E44] font-medium mb-2">Pesan</label>                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white min-h-32 relative z-10 resize-none"
                                    rows={4}
                                    placeholder="Jelaskan kebutuhan proyek digital Anda"
                                    required
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-[#ea580c] hover:bg-[#ea580c]/90'
                                    } text-white`}
                            >
                                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                            </button>
                        </form>
                    </div>                    <div className="flex flex-col space-y-8">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl group transition-all duration-500 border border-gray-100/50 backdrop-blur-sm relative z-10 p-8">
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF7A00]/5 to-transparent rounded-bl-full group-hover:from-[#FF7A00]/10 transition-all duration-500 -z-10"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/5 via-transparent to-[#3D8C95]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                            <h3 className="mb-6 text-2xl font-bold text-[#061E44] group-hover:text-[#FF7A00] transition-colors duration-300">Informasi Kontak</h3>
                            <div className="space-y-6">
                                <div className="flex items-start group/item">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A00] to-[#FF7A00]/80 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>                                    <div className="select-text cursor-text" style={{ userSelect: 'text', WebkitUserSelect: 'text' }}>
                                        <h4 className="font-semibold text-[#061E44] mb-1 select-text">Email</h4>
                                        <p className="text-gray-600 select-text">teamorders2k25@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start group/item">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#3D8C95] to-[#3D8C95]/80 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>                                    <div className="select-text cursor-text" style={{ userSelect: 'text', WebkitUserSelect: 'text' }}>
                                        <h4 className="font-semibold text-[#061E44] mb-1 select-text">Telepon</h4>
                                        <p className="text-gray-600 select-text">+62 812 3456 7890</p>
                                    </div>
                                </div>


                            </div>                        </div>

                        <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl group transition-all duration-500 border border-gray-100/50 backdrop-blur-sm relative z-10 p-6">
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FF7A00]/5 to-transparent rounded-bl-full group-hover:from-[#FF7A00]/10 transition-all duration-500 -z-10"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/5 via-transparent to-[#3D8C95]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                            <h3 className="mb-6 text-xl font-bold text-[#061E44] group-hover:text-[#FF7A00] transition-colors duration-300">Ikuti Kami</h3>                            {/* Modern Social Links */}
                            <div className="grid grid-cols-2 gap-4">
                                <a href="https://www.instagram.com/teamorders25?igsh=YTJ5M2c0b3d2MXNj&utm_source=qr" target="_blank" rel="noopener noreferrer" className="group/social relative" aria-label="Instagram">
                                    <div className="w-full h-16 bg-gradient-to-br from-[#FF7A00]/10 to-[#FF7A00]/5 hover:from-[#FF7A00] hover:to-[#FF7A00]/80 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover/social:shadow-[#FF7A00]/25">
                                        <svg className="w-6 h-6 text-[#FF7A00] group-hover/social:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-center text-xs text-[#FF7A00] mt-2 font-medium">Instagram</p>
                                </a>
                                <a href="https://www.facebook.com/share/1CLDWp53W7/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="group/social relative" aria-label="Facebook">
                                    <div className="w-full h-16 bg-gradient-to-br from-blue-500/10 to-blue-600/5 hover:from-blue-500 hover:to-blue-600/80 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover/social:shadow-blue-500/25">
                                        <svg className="w-6 h-6 text-blue-600 group-hover/social:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24h11.494V14.706h-3.12v-3.62h3.12V8.413c0-3.09 1.892-4.787 4.651-4.787 1.325 0 2.465.098 2.8.142v3.25h-1.92c-1.505 0-1.794.716-1.794 1.77v2.32h3.588l-.467 3.62h-3.121V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-center text-xs text-blue-600 mt-2 font-medium">Facebook</p>
                                </a>



                                <a href="https://wa.me/6282195965483?text=Halo!%20Saya%20tertarik%20dengan%20layanan%20ORDERS.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut?" target="_blank" rel="noopener noreferrer" className="group/social relative" aria-label="WhatsApp">
                                    <div className="w-full h-16 bg-gradient-to-br from-green-500/10 to-green-600/5 hover:from-green-500 hover:to-green-600/80 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover/social:shadow-green-500/25">
                                        <svg className="w-6 h-6 text-green-600 group-hover/social:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488" />
                                        </svg>
                                    </div>
                                    <p className="text-center text-xs text-green-600 mt-2 font-medium">WhatsApp</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
