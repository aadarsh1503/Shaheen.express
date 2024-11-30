import React, { useState } from 'react';
import EmailSection from '../Hero/EmailSection';

// Collapsible Section Component
const CollapsibleSection = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-DarkBlue">
      <div className="font-roboto lg:max-w-7xl bg-white lg:mx-auto mb-4">
        {/* Header */}
        <div
          className="flex bg-YellowLight lg:px-4 outline-white border outline-1 lg:w-[1280px] lg:py-2 cursor-pointer items-center"
          onClick={toggleSection}
        >
          <div className="text-2xl lg:mr-3">{isOpen ? '-' : '▼'}</div>
          <div className="font-bold text-lg">{title}</div>
        </div>
        {/* Content */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'h-full' : 'max-h-0'
          }`}
        >
          {isOpen && (
            <div className="text-start lg:mt-4 lg:px-8 border-yellow-400">
              <div className="p-4 font-roboto">{description}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-dgreen font-sans text-white py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <h1 className="lg:text-7xl text-2xl font-poppins font-bold mb-2">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Collapsible Sections */}
      <div className="py-20 bg-DarkBlue font-roboto">
        <CollapsibleSection
          title="PENGANTAR"
          description={
            <>
             
              <p>
              Pemberitahuan Privasi berikut ini menjelaskan bagaimana Kami PT Swift Shipment Solutions dan/atau afiliasinya, termasuk namun tidak terbatas pada PT Paket Anak Bangsa dan/atau PT Swift Logistics Solutions dan/atau PT GoTo Solusi Niaga (“GTL”) memperoleh, mengumpulkan, menyimpan, menguasai, menggunakan, mengolah, menganalisa, memperbaiki, melakukan pembaruan, menampilkan, menguumkan, mentransfer, mengungkapkan dan melindungi Data Pribadi yang diproses oleh GTL (“Pemrosesan Data Pribadi”).
              </p>
              <br />
              <p>
              Pemberitahuan Privasi ini berlaku bagi seluruh pengguna aplikasi seluler dan/atau situs web (termasuk https://www.gtl.id) dan layanan, termasuk namun tidak terbatas pada layanan pengiriman dengan GTL dan pelaksanaan pemenuhan barang pesanan, jasa pengiriman barang dan pembelian barang pesanan (“Layanan”),
              </p>
              <br />
              <p>
              Pemberitahuan Privasi ini disediakan dalam format berlapis sehingga Anda dapat mengklik ke area tertentu yang tersedia di bawah ini. Harap baca Pemberitahuan Privasi ini secara menyeluruh untuk memastikan bahwa Anda memahami praktik perlindungan data Kami. Agar lebih mudah dimengerti, Kami sudah merangkum poin-poin pentingnya di bagian ringkasan. Kecuali ditentukan lain, semua istilah dalam huruf kapital yang digunakan dalam Pemberitahuan Privasi ini akan memiliki arti yang sama dengan istilah tersebut dalam Syarat dan Ketentuan yang berlaku antara Anda dan GTL.
              </p>
            </>
          }
        />

        <CollapsibleSection
          title="RINGKASAN"
          description={
            <>

              <p className=" mt-2 font-sans font-semibold">
               Data apa yang Kami proses?
              </p>
              <br />
              <p>
              Kami memproses Data Pribadi yang dibutuhkan untuk menyediakan Layanan sebagai Pemroses Data. Data Pribadi ini merupakan yang Kami terima dari pihak yang mengumpulkan Data Pribadi (“Klien”) dan memberikannya kepada Kami untuk kepentingan pemberian Layanan.
              </p>
              <p className=" mt-2 font-sans font-semibold">
              Bagaimana Kami menggunakan data?
              </p>
              <br />
              <p>
              Setelah Kami menerima Data Pribadi dari Klien Kami, Kami menggunakan Data Pribadi yang Kami terima tersebut untuk mengelola dan mengatur, berkomunikasi dengan pengirim, memenuhi pesanan atas barang dan penerimaan barang, dan yang paling penting adalah untuk menyediakan Layanan.
              </p>
              <p className=" mt-2 font-sans font-semibold">
              Dengan siapa Kami membagi data?
              </p>
              <br />
              <p>
              Apabila diperlukan, Kami mungkin dapat membagikan Data Pribadi yang Kami terima dari Klien Kami dengan pihak lain yang tentunya memiliki kerja sama dengan Kami untuk penyelenggaraan Layanan, contohnya adalah para mitra logistik Kami.
              </p>
              <p className=" mt-2 font-sans font-semibold">
              Berapa lama Kami menyimpan data?
              </p>
              <br />
              <p>
              Kami memproses Data Pribadi sesuai dengan instruksi dari Klien Kami atau sebagaimana diwajibkan oleh hukum yang berlaku.
              </p>
              <p className=" mt-2 font-sans font-semibold">
              Bagaimana cara subyek data untuk melaksanakan hak atas data pribadinya?
              </p>
              <br />
              <p>
              Apabila subyek data hendak melaksanakan hak atas data pribadinya, Kami dapat mengarahkan subyek data untuk menghubungi Klien terkait Kami. Kami akan melaksanakan permintaan pemenuhan hak subyek data berdasarkan instruksi yang Kami terima dari Klien terkait Kami.
              </p>
              <p className=" mt-2 font-sans font-semibold">
              Hubungi Kami
              </p>
              <br />
              <p>
              Apabila Anda memiliki pertanyaan, perhatian atau keluhan, dapat menghubungi Kami melalui rincian kontak yang dapat ditemukan pada bagian Hubungi Kami.
              </p>
              <p className=" mt-2 font-sans font-semibold">
              Bagaimana Kami akan memberitahukan Anda terkait perubahan?
              </p>
              <br />
              <p>
              Kami akan mengubah Pemberitahuan Privasi ini dari waktu ke waktu dan memberikan pemberitahuan melalui situs web Kami.
              </p>
              <br />
              <p>
              Penjelasan lebih lanjut tentang hal di atas dapat dibaca pada bagian di bawah ini.
              </p>
              {/* Add other terms here as needed */}
            </>
          }
        />

        <CollapsibleSection
          title="DATA PRIBADI APA YANG KAMI PROSES"
          description={
            <>
              <p className="font-sans mt-2 font-semibold">
              Jenis-jenis Data Pribadi Yang Kami Proses
              </p>
              <br />
              <p>
              “Data Pribadi” berarti informasi yang mengidentifikasi atau dapat digunakan untuk mengidentifikasi, menghubungi, atau menemukan orang atau perangkat yang terkait dengan informasi tersebut. Data Pribadi termasuk, namun tidak terbatas pada, nama, alamat, nomor telepon. Selain itu, sejauh informasi lain, termasuk profil pribadi, dan/atau pengenal unik, dikaitkan atau digabungkan dengan Data Pribadi, maka data tersebut juga merupakan Data Pribadi.
              </p>
              <br />
              <p>
              Jenis Data Pribadi yang Kami proses sesuai dengan yang Kami butuhkan untuk menyediakan Layanan, sebagai Pemroses Data.
              </p>
              <br />
              <p>
              Sepanjang diizinkan oleh peraturan perundang-undangan yang berlaku dan sesuai instruksi dari klien Kami, Kami dapat memproses, jenis-jenis berbeda dari Data Pribadi, yang telah Kami kategorikan sebagai berikut:              </p>
          <br />
          <p>a. Data Identitas termasuk nama pemesan barang, nama pengirim barang dan penerima barang.</p>
           <p>b. Data Kontak termasuk alamat pengirim barang dan penerima barang; nomor telepon dan/atau nomor hp pengirim barang dan penerima barang.</p>
           <p>c. Data Lokasi termasuk informasi lokasi geografis pengirim, titik koordinat, live location dan penerima barang.</p>
           <br />
           <p className="font-sans mt-2 font-semibold">
              2. Jika klien menyediakan Data Pribadi yang tidak lengkap
              </p>
              <br />
              <p>Jika Kami perlu memproses Data Pribadi berdasarkan hukum, atau berdasarkan ketentuan sebuah perjanjian yang Kami miliki dengan Klien, dan Klien memilih untuk tidak menyediakan Data Pribadi tersebut atau menyediakan Data Pribadi yang tidak lengkap, Kami mungkin tidak dapat menyediakan layanan dan melaksanakan perjanjian yang Kami miliki atau sedang dalam proses untuk disepakati dengan Klien.</p>
              <br />
              <p>Kami akan memproses Data Pribadi sebagaimana adanya (as is) yang disediakan kepada kami. Klien bertanggung jawab untuk melakukan verifikasi dan memastikan akurasi Data Pribadi yang disediakan kepada Kami.</p>
  
              <p className="font-sans mt-2 font-semibold">
              3. Bagaimana Kami Mengumpulkan Data Pribadi Anda
              </p>
              <br />
              <p>Data Pribadi yang Kami proses untuk keperluan pelaksanaan Layanan Kami peroleh langsung dari Klien Kami. Kami juga melakukan pengumpulan Data Pribadi untuk memproses ketertarikan penggunaan Layanan atau keluhan melalui situs kami dan/atau kami terima melalui email layanan pelanggan yang telah kami sediakan.</p>
               
              <p className="font-sans mt-2 font-semibold">
              4. Bagaimana subjek data melaksanakan haknya terhadap datanya?
              </p>
              <br />
              <p>Pengirim dan penerima barang, sebagai subjek data, mungkin memiliki berbagai hak sehubungan dengan Data Pribadi mereka berdasarkan hukum yang berlaku .</p>
  <br />
             
             <p>Pengirim dan penerima barang, sebagai subjek data, mungkin memiliki berbagai hak sehubungan dengan Data Pribadi mereka berdasarkan hukum yang berlaku.</p>
             <br />
  <p>Kami dapat mengarahkan untuk menghubungi Klien terkait, agar mereka dapat menyampaikan permintaan pelaksanaan hak mereka secara langsung kepada Klien Kami.</p>
  </>
          }
        />

        <CollapsibleSection
          title="GROUP D"
          description={
            <>
              <strong className="text-3xl mt-10">DAP – Delivered at Place</strong>
              <p className="text-3xl mt-2 font-semibold">
                DELIVERED TO LOCATION (named destination location).
              </p>
              <p>
                The seller completes their obligations and ends their liability
                when they place the goods at the disposal of the buyer, on the
                date or within the period agreed, at a place of destination
                indicated other than a terminal, ready to be unloaded from the
                transport vehicle and not cleared for import. Usable in any mode
                of transport.
              </p>
              {/* Add more sub-terms and details here */}
            </>
          }
        />
      </div>

      {/* Email Section */}
      <EmailSection />
    </div>
  );
};

export default PrivacyPolicy;
