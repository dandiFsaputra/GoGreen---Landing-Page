/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "hijau-utama" : '#00AA13',
        "Hitam-utama" : '#121111',
        "Biru-utama" : '#29ABE2',
        "Putih-utama" : '#F5F5F5',
        "Abu-garis" : '#E3E3E3',
        "Abu-utama" : '#B8B8B8',
        "Footer" : '#101820',
      },
      fontFamily: {
        "MaisonNeueBold" : ['MaisonNeue-Bold'],
        "MaisonNeueDemi" : ['MaisonNeue-Demi'],
        "MaisonNeueMedium" : ['MaisonNeue-Medium']
      },
    },
  },
  plugins: [],
}

