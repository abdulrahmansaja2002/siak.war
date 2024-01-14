const BotIndex = () => (
  <main className="w-screen flex justify-center">
    <div className="w-4/5">
      <div className="text-8xl font-extrabold font-mono text-center m-5 p-4">
        SIAK-WAR Bot
      </div>
      <p className="text-2xl leading-10">
        Bot ini sejatinya bukan sepenuhnya buatan penulis, bahkan hampir
        sepenuhnya dibuat oleh{" "}
        <a href="https://github.com/eaglescommander>" className="hover:text-blue-800 underline">eaglescommander</a>.
        Penulis hanya merubah berapa bagian menyesuaikan dengan pembaruan modul{" "}
        <a href="https://pypi.org/project/selenium/" className="hover:text-blue-800 underline">selenium</a>. Penulis juga
        merubah beberapa bagian untuk memudahkan penggunaan bot ini. Jika Anda
        ingin melihat kode asli dari bot ini, silahkan kunjungi{" "}
        <a href="https://github.com/eaglescommander/SIAK-AXZ" className="hover:text-blue-800 underline">repositori</a>{" "}
        milik eaglescommander. Anda bisa langsung melakukan clone dari
        repositori tersebut, atau melakukan fork jika Anda ingin melakukan
        perubahan. Dokumentasi kode asli tersebut dapat dibaca pada file
        README.md.
      </p>
      <p className="text-2xl leading-10">
        Untuk Bot yang sudah dimodifikasi oleh penulis, Anda bisa mendownloadnya di{" "}
        <a href="/bot-scripts.zip" className="hover:text-blue-800 underline" >sini</a>.
      </p>
      <div className="text-2xl py-3 leading-10">
        <h1 id="penting-">PENTING!!!</h1>
        <ol className="ps-6 list-disc">
          <li>
            Pastikan semua file sudah lengkap, berikut susunan file yang harus
            ada:
            <ul className="list-decimal ps-6">
              <li>
                <code>blitzkrieg.py</code>
              </li>
              <li>
                <code>blitzkrieg.run.bat</code> (opsional)
              </li>
              <li>
                <code>bushido.py</code>
              </li>
              <li>
                <code>bushido.run.bat</code> (opsional)
              </li>
              <li>
                <code>chromedriver.exe</code>
              </li>
              <li>
                <code>credentials.txt</code>
              </li>
              <li>
                <code>matkuls.txt</code>
              </li>
              <li>
                <code>requirements.txt</code>
              </li>
            </ul>
          </li>
          <li>
            Pastikan sudah menginstall Python di komputer Anda. Download{" "}
            <a href="https://www.python.org/downloads/" className="hover:text-blue-800 underline" >di sini</a>. Pilih versi
            Python 3.x.x (disarankan versi terbaru atau versi 3.11 keatas).
          </li>
          <li>
            Pastikan sudah menginstall semua library yang dibutuhkan. Buka
            terminal/command prompt, lalu ketikkan perintah berikut:
            <pre>
              <code>
                {" "}
                pip <span class="hljs-keyword">install</span> -r
                requirements.txt
              </code>
            </pre>
          </li>
          <li>
            Pastikan sudah menginstall{" "}
            <a href="https://www.google.com/chrome/" className="hover:text-blue-800 underline">Google Chrome</a>.
          </li>
          <li>
            Pastikan sudah mendownload{" "}
            <a href="https://chromedriver.chromium.org/downloads" className="hover:text-blue-800 underline">
              ChromeDriver
            </a> {" "}
            dan memindahaknnya ke directory yang sama dengan script bot serta ubah namafilenya menjadi <code>chromedriver</code>. Pilih versi yang sesuai dengan versi Google Chrome yang Anda
            gunakan. Untuk mengetahui versi Google Chrome yang Anda gunakan,
            buka Google Chrome, lalu klik titik tiga di pojok kanan atas, lalu
            pilih <code>Help</code> &gt; <code>About Google Chrome</code>.
            <img
              src="/check-chrome-version.png"
              alt="Check Chrome Version"
              className="text-center m-auto"
            />
          </li>
          <li>
            Pastikan sudah mengisi file <code>credentials.txt</code> dan{" "}
            <code>matkuls.txt</code> dengan benar. Lihat penjelasan di bawah.
          </li>
          <li>Pastikan kondisi jaringan internet Anda stabil.</li>
        </ol>
        <h2 id="cara-menjalankan">Cara Menjalankan</h2>
        <ol>
          <li>
            Untuk menjalankan script <code>blitzkrieg.py</code>, bisa dengan
            meg-klik 2x file blitzkrieg.py atau file blitzkrieg.run.bat (jika
            ada), atau bisa juga secara manual melalui terminal/command prompt,
            dengan menjalankan perintah berikut:
            <pre>
              <code>
                {" "}
                <span class="hljs-keyword">python</span> blitzkrieg.
                <span class="hljs-keyword">py</span>
              </code>
            </pre>
          </li>
          <li>
            Untuk menjalankan script <code>bushido.py</code>, bisa dengan
            meg-klik 2x file bushido.py atau file bushido.run.bat (jika ada),
            atau bisa juga secara manual melalui terminal/command prompt, dengan
            menjalankan perintah berikut:
            <pre>
              <code>
                {" "}
                <span class="hljs-keyword">python</span> bushido.
                <span class="hljs-keyword">py</span>
              </code>
            </pre>
          </li>
        </ol>
        <p>Note: </p>
        <ul>
          <li>
            Jika Anda menjalankan script secara manual melalui terminal/command
            prompt, pastikan Anda berada di direktori yang tepat. Jika tidak,
            maka Anda akan mendapatkan error.
          </li>
          <li>
            script <code>blitzkrieg.py</code> dan <code>bushido.py</code>{" "}
            memiliki algoritma yang berbeda. Silahkan jalankan kedua script
            untuk jaga-jaga, setidaknya ada satu script yang berhasil. Namun,
            sepengalaman penulis, script <code>bushido.py</code> yang lebih
            sering penulis gunakan. Untuk lebih jaga-jaga, boleh jalankan
            beberapa script yang sama secara bersamaan namun pastinya dengan
            terminal/command prompt yang berbeda.
          </li>
        </ul>
        <h3 id="penjelasan-file-credentials-txt-dan-matkuls-txt-">
          Penjelasan file <code>credentials.txt</code> dan{" "}
          <code>matkuls.txt</code>
        </h3>
        <ul>
          <li>
            <code>credentials.txt</code> berisi username dan password SIAK Anda.
            Formatnya adalah sebagai berikut:
            <div className="border p-4 rounded-lg ">
              <div>
                <code>username</code>
              </div>
              <div>
                <code>password</code>
              </div>
              <div>
                <code>Display Name</code>
              </div>
            </div>
            Contoh:
            <div className="border p-4 rounded-lg ">
              <div>
                <code>fulan</code>
              </div>
              <div>
                <code>fulan123</code>
              </div>
              <div>
                <code>Fulan bin Fulan</code>
              </div>
            </div>
          </li>
          <li>
            <code>matkuls.txt</code> berisi kode mata kuliah yang ingin Anda
            ambil. Formatnya adalah sebagai berikut:
            <div className="border p-4 rounded-lg ">
              <div>
                <code>kode_matkul1-sks,nama_kelas_matkul1</code>
              </div>
              <div>
                <code>kode_matkul2-sks,nama_kelas_matkul2</code>
              </div>
              <div>
                <code>kode_matkul3-sks,nama_kelas_matkul3</code>
              </div>
            </div>
            Contoh:
            <div className="border p-4 rounded-lg ">
              <div>
                <code>12345-3,Matkul 1</code>
              </div>
              <div>
                <code>67890-2,Matkul 2</code>
              </div>
              <div>
                <code>13579-3,Matkul 3</code>
              </div>
            </div>
            Note:
            <ul>
              <li>
                Kode mata kuliah dan SKS dipisahkan dengan tanda <code>-</code>{" "}
                (strip).
              </li>
              <li>
                Kode mata kuliah bisa di dapatkan dengan mengakses jadwal kuliah
                yang terdapat di halaman SIAK-NG dengan mengkilk{" "}
                <code>Jadwal</code> &gt; <code>Jadwal Kuliah</code> kemudian
                silahkan sesuaikan dengan tahun ajaran dan semester kelas yang
                anda inginkan, atau bisa langusng dengan menuju link{" "}
                <a href="https://academic.ui.ac.id/main/Schedule/Index">
                  https://academic.ui.ac.id/main/Schedule/Index
                </a>
                . Setelah itu silahkan klik mata kuliah yang ingin Anda ambil,
                lalu lihat pada URL, kode mata kuliah terdapat pada bagian akhir
                URL, setelah <code>cc=</code>. Contoh:{" "}
                <code>
                  https://academic.ui.ac.id/main/CoursePlan/ClassInfo?cc=724681
                </code>
                , maka kode mata kuliahnya adalah <code>724681</code> untuk
                kelas <code>Aljabar Linier C</code>. Jika anda kesusahan dengan
                cara ini, anda bisa menuju ke link <a href="/matkul" className="hover:text-blue-800 underline">ini</a>. Penulis
                sudah membuatkan form untuk mengenerate matkuls.txt sesuai
                dengan kelas yang dipilih.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </main>
);

export default BotIndex;
