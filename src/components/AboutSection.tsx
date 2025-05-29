'use client';

export default function AboutSection() {
    return (
        <section id="tentang-kami" className="bg-light py-16 md:py-24">
            <div className="container-content">
                <div className="text-center mb-12">
                    <h2 className="mb-4">Tentang Kami</h2>
                    <p className="max-w-3xl mx-auto">
                        Order adalah perusahaan solusi digital yang berpengalaman dalam membangun produk digital berkualitas tinggi.
                        Dengan tim profesional yang berdedikasi, kami telah membantu berbagai bisnis untuk bertransformasi secara digital.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="card text-center">
                        <div className="text-3xl text-primary font-bold mb-2">250+</div>
                        <h3 className="text-xl mb-2">Proyek Selesai</h3>
                        <p className="text-medium">Berbagai proyek untuk klien dari berbagai industri</p>
                    </div>

                    <div className="card text-center">
                        <div className="text-3xl text-primary font-bold mb-2">50+</div>
                        <h3 className="text-xl mb-2">Klien Aktif</h3>
                        <p className="text-medium">Bisnis yang terus bekerja sama dengan kami</p>
                    </div>

                    <div className="card text-center">
                        <div className="text-3xl text-primary font-bold mb-2">10+</div>
                        <h3 className="text-xl mb-2">Tahun Pengalaman</h3>
                        <p className="text-medium">Pengalaman di industri teknologi informasi</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
