import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Mengizinkan akses dev resources dari IP lokal Anda
  allowedDevOrigins: [
    '10.240.108.134',
    '10.240.108.134:3000',
  ],

  /* Masukkan opsi konfigurasi Next.js lainnya di bawah ini jika ada */
};

export default nextConfig;