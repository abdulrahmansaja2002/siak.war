import Link from "next/link";

const BotIndex = () => (
  <main className="w-screen flex justify-center">
    <div className="w-4/5">
      <div className="text-8xl font-extrabold font-mono text-center m-5 p-4">
        SIAK-WAR Bot
      </div>
      <p className="text-2xl leading-10">
        Bot ini sejatinya bukan sepenuhnya buatan penulis, bahkan hampir sepenuhnya dibuat oleh{" "}
        <Link href="https://github.com/eaglescommander" className="hover:text-blue-800 underline">eaglescommander</Link>.
        Penulis hanya merubah berapa bagian menyesuaikan dengan pembaruan modul{" "}
        <Link href="https://pypi.org/project/selenium/" className="hover:text-blue-800 underline">selenium</Link>. Penulis juga merubah beberapa bagian untuk memudahkan penggunaan bot ini. Jika Anda ingin melihat kode asli dari bot ini, silahkan kunjungi{" "}
        <Link href="https://github.com/eaglescommander/SIAK-AXZ" className="hover:text-blue-800 underline">repositori</Link>{" "} milik eaglescommander. Anda bisa langsung melakukan clone dari repositori tersebut, atau melakukan fork jika Anda ingin melakukan perubahan. Dokumentasi kode asli tersebut dapat dibaca pada file
        README.md.
      </p>
      <p className="text-2xl leading-10">
        Untuk Bot yang sudah dimodifikasi oleh penulis, Anda bisa mendownloadnya di{" "}
        <Link href="/bot-scripts.zip" className="hover:text-blue-800 underline" >sini</Link>.
      </p>
      <div className="text-2xl py-3 leading-10">
        <h1 id="penting-">PENTING!!!</h1>
        <ol className="ps-6 list-disc">
          <li>
            Pastikan semua file sudah lengkap, berikut susunan file yang harus ada:
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
            <Link href="https://www.python.org/downloads/" className="hover:text-blue-800 underline" >di sini</Link>. Pilih versi Python 3.x.x (disarankan versi terbaru atau versi 3.11 keatas).
          </li>
          <li>
            Pastikan sudah menginstall semua library yang dibutuhkan. Buka terminal/command prompt, lalu ketikkan perintah berikut:
            <pre>
              <code>pip install -r requirements.txt</code>
            </pre>
          </li>
          <li>
            Pastikan sudah menginstall{" "}
            <Link href="https://www.google.com/chrome/" className="hover:text-blue-800 underline">Google Chrome</Link>.
          </li>
          <li>
            Pastikan sudah mendownload{" "}
            <Link href="https://chromedriver.chromium.org/downloads" className="hover:text-blue-800 underline">
              ChromeDriver
            </Link> {" "}
            dan memindahaknnya ke directory yang sama dengan script bot serta ubah namafilenya menjadi <code>chromedriver</code>. Pilih versi yang sesuai dengan versi Google Chrome yang Anda gunakan. Untuk mengetahui versi Google Chrome yang Anda gunakan, buka Google Chrome, lalu klik titik tiga di pojok kanan atas, lalu pilih <code>Help</code> &gt; <code>About Google Chrome</code>.
            <img
              src="/check-chrome-version.png"
              alt="Check Chrome Version"
              className="text-center m-auto"
            />
          </li>
          <li>
            Pastikan sudah mengisi file <code>credentials.txt</code> dan{" "} <code>matkuls.txt</code> dengan benar. Lihat penjelasan <Link href="#penjelasan-file-credentials-txt-dan-matkuls-txt" className="hover:text-blue-800 underline">di bawah</Link>.
          </li>
          <li>Pastikan kondisi jaringan internet Anda stabil.</li>
        </ol>
        <h2 id="cara-menjalankan">Cara Menjalankan</h2>
        <ol className="ps-6 list-decimal">
          <li>
            Untuk menjalankan script <code>blitzkrieg.py</code>, bisa dengan meg-klik 2x file blitzkrieg.py atau file blitzkrieg.run.bat (jika ada), atau bisa juga secara manual melalui terminal/command prompt, dengan menjalankan perintah berikut:
            <pre>
              <code>
                {" "}
                <span className="hljs-keyword">python</span> blitzkrieg.
                <span className="hljs-keyword">py</span>
              </code>
            </pre>
          </li>
          <li>
            Untuk menjalankan script <code>bushido.py</code>, bisa dengan meg-klik 2x file bushido.py atau file bushido.run.bat (jika ada), atau bisa juga secara manual melalui terminal/command prompt, dengan menjalankan perintah berikut:
            <pre>
              <code>
                {" "}
                <span className="hljs-keyword">python</span> bushido.
                <span className="hljs-keyword">py</span>
              </code>
            </pre>
          </li>
        </ol>
        <p>Note: </p>
        <ul className="ps-6 list-disc">
          <li>
            Jika Anda menjalankan script secara manual melalui terminal/command prompt, pastikan Anda berada di direktori yang tepat. Jika tidak, maka Anda akan mendapatkan error. Ikuti penjelasan <Link href="#cara-buka-terminal-direktori" className="hover:text-blue-800 underline" >di bawah</Link> jika anda belum familiar dengan command prompt
          </li>
          <li>
            Script <code>blitzkrieg.py</code> dan <code>bushido.py</code>{" "}memiliki algoritma yang berbeda. Silahkan jalankan kedua script untuk jaga-jaga, setidaknya ada satu script yang berhasil. Namun, sepengalaman penulis, script <code>bushido.py</code> yang lebih sering penulis gunakan. Untuk lebih jaga-jaga, boleh jalankan beberapa script yang sama secara bersamaan namun pastinya dengan terminal/command prompt yang berbeda.
          </li>
        </ul>
        <h3 id="penjelasan-file-credentials-txt-dan-matkuls-txt">
          Penjelasan file <code>credentials.txt</code> dan{" "}<code>matkuls.txt</code>
        </h3>
        <ul className="ps-6 list-disc">
          <li>
            <code>credentials.txt</code> berisi username dan password SIAK Anda, serta Display Name SIAK anda (biasanya terdapat di pojok kanan atas home SIAK). Formatnya adalah sebagai berikut:
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
                <img src="siak-display-name.png" alt="SIAK Display Name" />
              </div>
            </div>
          </li>
          <li>
            <code>matkuls.txt</code> berisi kode mata kuliah yang ingin Anda ambil. Formatnya adalah sebagai berikut:
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
            <ul className="ps-6 list-disc">
              <li>
                Kode mata kuliah dan SKS dipisahkan dengan tanda <code>-</code>{" "}(strip).
              </li>
              <li>
                Kode mata kuliah bisa di dapatkan dengan mengakses jadwal kuliah yang terdapat di halaman SIAK-NG dengan mengkilk{" "} <code>Jadwal</code> &gt; <code>Jadwal Kuliah</code> kemudian silahkan sesuaikan dengan tahun ajaran dan semester kelas yang anda inginkan, atau bisa langusng dengan menuju link{" "}
                <Link href="https://academic.ui.ac.id/main/Schedule/Index">
                  https://academic.ui.ac.id/main/Schedule/Index
                </Link>. Setelah itu silahkan klik mata kuliah yang ingin Anda ambil, lalu lihat pada URL, kode mata kuliah terdapat pada bagian akhir URL, setelah <code>cc=</code>. Contoh:{" "}
                <code>
                  https://academic.ui.ac.id/main/CoursePlan/ClassInfo?cc=724681
                </code>
                , maka kode mata kuliahnya adalah <code>724681</code> untuk kelas <code>Aljabar Linier C</code>. Jika anda kesusahan dengan cara ini, anda bisa menuju ke link <Link href="/matkul" className="hover:text-blue-800 underline">ini</Link>. Penulis sudah membuatkan form untuk mengenerate matkuls.txt sesuai dengan kelas yang dipilih.
              </li>
            </ul>
          </li>
        </ul>
        <h3 id="cara-buka-terminal-direktori">Cara membuka terminal/command prompt pada direktori yang kita inginkan (windows)</h3>
        <div>
          <div>
            <div>Cara 1: Langsung ke direktori</div>
            <p>Cara ini berlaku untuk pengguna Windows 11 atau Windows 10 yang sudah menginstall <Link href="https://apps.microsoft.com/detail/9N0DX20HK701?hl=id-ID&gl=US" className="hover:text-blue-800 underline">Windows Terminal</Link>. Untuk pengguna windows 11 tidak perlu menginstall lagi Windows Terminal karena sudah merupakan aplikasi bawaan Windows 11</p>
            <ul className="ps-6 list-decimal">
              <li>
                Buka folder yang berisi script bot, lalu klik kanan pada area kosong di dalam folder tersebut.
              </li>
              <li>
                Pilih <code>Open in Terminal</code> atau <code>Open in Command Prompt</code>.
                <img src="/open-in-terminal.png" alt="Open in Terminal" />
              </li>
            </ul>
          </div>
          <div>
          <div>Cara 2: Mengubah path direktori</div>
          <p>Cara ini bisa dilakukan untuk semua versi Windows</p>
          <ul className="ps-6 list-decimal">
            <li>
              Buka folder yang berisi script bot, lalu arahkan mouse ke path direktori yang terdapat di atas folder tersebut.
              <img src="/path-direktori.png" alt="Path Direktori" />
            </li>
            <li>
              Klik pada kolom tersebut, maka secara otomatis akan langsung terpilih semua path direktori tersebut. Kemudian ketikkan <code>cmd</code> lalu tekan enter. Maka akan langsung terbuka command prompt pada direktori tersebut.
              <img src="/cmd.png" alt="CMD" />
            </li>
          </ul>
          </div>
          <div>
            <div>
              Cara 3: Mengubah path direktori dengan command <code>cd</code> (change directory) pada command prompt
            </div>
            <p>Cara ini bisa dilakukan untuk semua versi Windows</p>
            <ul className="ps-6 list-decimal">
              <li>
                Buka command prompt, lalu ketikkan <code>cd</code> (change directory) lalu spasi, lalu drag folder yang berisi script bot ke command prompt, lalu tekan enter.
                <img src="/cd.png" alt="CD" />
              </li>
              <li>
                Selain itu, Anda juga bisa langsung mengetikkan path direktori secara manual. Contoh: <code>cd &quot;C:\Users\fulan\Documents\bot&quot;</code>. Untuk bisa mendapatkan path direktori secara manual, Anda bisa membuka folder yang berisi script bot, arahkan mouse ke path direktori yang terdapat di atas folder tersebut, lalu klik pada kolom tersebut, maka secara otomatis akan langsung terpilih semua path direktori tersebut. Kemudian copy dan paste ke command prompt. Pastikan anda membungkus path tersebut dengan tanda kutip ( &quot; ). Cobalah untuk menggunakan salah satu dari kutip dua ( &quot; ) atau kutip satu ( &apos; ).
                <img src="/path-direktori-blocked.png" alt="Path Direktori Blocked" />
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  </main>
);

export default BotIndex;
