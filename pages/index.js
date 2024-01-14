import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">pages/index.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}

export default Home = () => (
  <main className='w-screen flex justify-center'>
    <div className="w-4/5 m-auto">
      <div className='font-mono text-8xl text-center font-extrabold p-5'>SIAK-WAR</div>
      <div className='border rounded-md p-3 my-5 shadow-lg'>
        <div className='text-3xl font-bold py-1'>
          Apa itu SIAK WAR?
        </div>
        <div className='text-2xl p-1 ps-4 leading-10'>
          SIAK WAR adalah sebuah event dimana mahasiswa UI berlomba-lomba untuk mendapatkan kelas mata kuliah yang diinginkan. Kenapa harus di sebut SIAK WAR? Ya.., itu hanya penamaan para mahasiswa untuk event pengisian IRS yang sangat chaos :D. Jadi seakan-akan kita sedang berperang untuk mendapatkan kelas yang diinginkan, HAHAHAHAHA.
        </div>
      </div>
      <div className='border rounded-md p-3 my-5 shadow-lg'>
        <div className='text-3xl font-bold py-1'>
          Kapan event SIAK WAR terjadi?
        </div>
        <div className='text-2xl p-1 ps-4 leading-10'>
          Sebenarnya SIAK WAR terjadi sepanjang jadwal pengisian IRS berlangsung. Biasanya sekitar 10 hari. Tapi, untuk event SIAK WAR yang sesungguhnya terjadi pada hari pertama pengisian IRS. Karena pada hari pertama pengisian IRS, semua mahasiswa UI berlomba-lomba untuk mendapatkan kelas yang diinginkan. Jika kita memulai pengisian IRS setelah hari pertama, maka kita akan kesulitan untuk mendapatkan kelas yang diinginkan karena pasti sudah penuh. Kita hanya bisa mendapatkan kelas yang tersisa.
        </div>
      </div>
      <div className='border rounded-md p-3 my-5 shadow-lg'>
        <div className='text-3xl font-bold py-1'>
          Bagaimana cara mengikuti event SIAK WAR?
        </div>
        <div className='text-2xl p-1 ps-4 leading-10'>
          <p>
            Untuk mengkuti SIAK WAR sebenarnya sangat sederhana, kita cukup menuju kehalaman pengisian IRS. Halaman ini bisa diakses setelah kita login ke SIAK-NG. Kemudian menuju ke tab IRS {`>`} Isi/Ubah IRS atau bisa langsung ke link <a href="https://academic.ui.ac.id/main/CoursePlan/CoursePlanEdit">ini</a> (pastikan sudah login terlebih dahulu). Jika waktu pengisian IRS sudah tiba, maka kita akan langsung bisa memilih kelas yang kita inginkan. Jika sudah selesai, maka kita hanya perlu menekan tombol "Simpan IRS" yang terdapat di bagian paling bawah halaman pengisian IRS. Setelah itu, maka kita akan melihat semua kelas yang sudah kita pilih. Mudah kan? :D. HAHAHAHAHA
          </p>
          <p>
            Namun, semua itu hanya terjadi kalau hanya anda yang mengisi IRS di hari itu :D. Sejatinya, kita pasti akan melakukan pengisian IRS bersamaan dengan mahasiswa lainnya, terlebih jika kita menargetkan mendapatkan kelas yang kita inginkan, maka kita harus mengisi IRS diawal waktu ketika pengisian IRS sudah dibuka. Nah, untuk bisa menang pengsian IRS, perlu ada ritual khusus yang biasa dilakukan para Mahasiswa, secara khusus penulis sendiri :D, HAHAHAHAHA. Ritualnya kurang lebih adalah sebagai berikut:
          </p>
          <ol className='list-disc ps-4'>
            <div className='px-2 py-1'>
              <li>Mempersiapkan mental dan kesabaran yang sangat tinggi</li>
              <p>Ketika mengisi IRS, tidak ada jaminan bisa berjalan sebagaimana yang kita bayangakan, sat set sat set, selesai :D, HAHAHAHAHA. Tidak semudah itu. Kita pasti mengalami isu-isu sepeti SIAK-NG down, error, lost connection, laptop nge hang, dll, seakan akan kita sedang berperang request :D. Jadi, kita harus mempersiapkan mental dan kesabaran yang sangat tinggi agar bisa bertahan dengan berbagai cobaan dan rintangan selama pengisian IRS berlangsung.</p>
            </div>
            <div className='px-2 py-1'>
              <li>Mempersiapkan strategi yang matang</li>
              <p>Salah satu strategi pengsian IRS adalah dengan melakukan riset terhadap kelas yang kita inginikan. Jadi sebelum hari-H pengsian IRS, pastikan kita sudah melihat semua jadwal kelas yang rencana akan kita ambil. Pastikan jadwal yang dipilih tidak bentrok dengan kelas lain (coba susun jadwal di website <a href='https://susunjadwal.cs.ui.ac.id/'>susunjadwal</a>). Silahkan buat beberapa plan untuk mengantisipasi jika ternyata kita gagal mendaptkan kelas yang kita inginkan. Jika kita mendapati salah satu kelas atau beberapa kelas yang kita pilih dimana kita berada urutan setelah kapasitas, jangan langsung memilih untuk mengganti kelas tersebut. Biasanya akan ada mahasiswa lain yang mengganti kelasnya atau extensi kapasitas kelas atau bisa juga pihak akademis fakultas mentolerir posisi tersebut. Namun kasus ini terjadi jika posisi kita tidak terlalu jauh dari kapasitas kelas, mungkin sekitar 10 posisi setelah kapasistas. Sisanya kita bisa mempertimbangkan untuk mengambil kelas lain.</p>
            </div>
            <div className='px-2 py-1'>
              <li>Mempersiapkan semua resource yang dibutuhkan</li>
              <p>Untuk mengisi IRS, kita membutuhkan beberapa resource yang harus kita siapkan. Pertama, kita harus mempersiapkan laptop yang bisa digunakan untuk mengisi IRS, jangan lupa untuk memastikan battery laptop dalam kondisi penuh, bila perlu persiapkan juga charger agar laptop tiak mati saat sedang digunakan. Kedua, kita harus mempersiapkan koneksi internet yang stabil. Pastikan koneksi kita cukup kencang karena kita akan berlomba dengan mahasiswa lain, jika koneksi kita tidak stabil, ada kemungkinan kita bakal tidak bisa memasuki laman pengisian IRS karena request kita terlambat di response. Ketiga, kita boleh mempersiapkan makanan dan minuman yang bisa menemani kita selama pengisian IRS berlangsung :D.</p>
            </div>
            <div className='px-2 py-1'>
              <li>Mempersiapkan diri untuk tidak tidur</li>
              <p>Pastikan kita benar-benar siap sebelum pengisian IRS dimualai. Usahakan kita sudah persiapan minimal sekitar 30 menitan untuk menghindari hal-hal diluar perkiraan kita. </p>
            </div>
            <div className='px-2 py-1'>
              <li>Jangan lupa berdo'a</li>
              <p>Dari semua usaha yang kita sudah persiapkan, pastilah tidak ada yang bisa mengubah keputusan Tuhan. Jadi, jangan lupa untuk berdoa sebelum pengisian IRS dimulai, semoga Tuhan memberikan yang terbaik untuk kita.</p>
            </div>
          </ol>
        </div>
      </div>
      <div className='border rounded-md p-3 my-5 shadow-lg'>
        <div className='text-3xl font-bold py-1'>
          Apakah ada tips dan trik untuk mengikuti event SIAK WAR?
        </div>
        <div className='text-2xl p-1 ps-4 leading-10'>
          <p>
            Tentu saja ada. Sebenarnya jika melakukan ritual yang sudah dijelaskan diatas, itu sudah termasuk tips dan trik untuk mengikuti event SIAK WAR. Namun, ada beberapa hal lain yang mengkin bisa memperbesar kemungkinan kita bisa menang dalam event SIAK WAR. Berikut adalah beberapa tips dan trik yang bisa kita lakukan (berdasarkan pengalaman penulis :D ) :
          </p>
          <ol className='list-disc ps-4'>
            <div className='px-2 py-1'>
              <li>Cobalah memulai sebelum waktu yang di jadwalkan</li>
              <p>Secara umum, jadwal yang tertulis pada laman pengisian IRS (terlihat ketika waktu pengsian masih tertutup) sekitar pukul 09.00 pagi sampai lewat pukul 23.59 malam hari waktu SIAK. Namun, biasanya pengisian IRS sudah terbuka sebelum jam 09.00 waktu SIAK. Jadi, cobalah untuk spam request ke laman pengisian IRS sejak sekitar 20 menit sebelum pengisian normal IRS (sekitar 08.40 waktu SIAK).</p>
            </div>
            <div className='px-2 py-1'>
              <li>Lakukan refresh halaman dengan disertai dengan login ulang</li>
              <p>Jika ingin meastikan halaman pengisian IRS sudah benar-benar terupdate, lakukan proses logout dan login setiap kali kita melakukan refresh halaman. </p>
            </div>
            <div className='px-2 py-1'>
              <li>Buka beberapa tab browser</li>
              <p>Jika kita ingin mengantisipasi jika terjadi error pada salah satu tab browser, kita bisa membuka beberapa tab browser untuk mengantisipasi hal tersebut. Metode ini juga bisa kita gunakan untuk memisahkan tab untuk halam login dan halaman pengisan IRS. Hal ini dapat menghemat waktu kita untuk berpindah dari halaman Home ke halam pengisian IRS. Jadi, satu halaman bertindak untuk melakukan proses login dan logout satu halaman lagi bertindak untuk sebagai tempat pengisian IRS.</p>
            </div>
            <div className='px-2 py-1'>
              <li>Coba refresh dulu sebelum login lagi</li>
              <p>Terkadang ada beberapa request yang belum bisa tersampaikan ke server, biasanya akan muncul tampilan "request timeout" atau "lost connection". Jika hal ini terjadi, cobalah untuk melakukan refresh halaman terlebih dahulu sebelum melakukan login ulang. Jika session dan data sebelum terjadi peristiwa tersebut masih tersimpan di browser, maka kita bisa menghemat waktu tanpa perlu melakukan login ulang.</p>
            </div>
            <div className='px-2 py-1'>
              <li>Simpan data login di browser</li>
              <p>Jika kita sudah melakukan login, kita bisa memilih untuk menyimpan data login di browser. Hal ini akan mempermudah kita untuk melakukan login ulang jika terjadi error atau lost connection. Jika browser sudah menyimpan data login kita, maka kita hanya perlu menekan tombol login tanpa perlu memasukkan username dan password lagi karena browser akan secara otomatis memasukkan data login kita.</p>
            </div>
            <div className='px-2 py-1'>
              <li>Gunakan fitur pencarian browser</li>
              <p>Jangan melakukan pencarian kelas secara manual dengan scroling. Hal ini bisa memakan waktu yang cukup lama. Gunakan fitur pencarian browser untuk mempercepat proses pencarian kelas. Biasanya fitur pencarian browser bisa diakses dengan menekan tombol <code>Ctrl + F</code> pada keyboard. Kemudian langsung saja ketikan nama kelas yang dicari pada kolom pencarian yang muncul. Kita tidak perlu megarahkan mouse ke input pencarian karena ketika kita menekan shortcut <code>Ctrl + F</code>, secara otomatis kursor akan berada di kolom pencarian.</p>
            </div>
            <div className='px-2 py-1'>
              <li>Manfaatkan beberapa shortcut keyboard</li>
              <p>Mengetahui beberapa shortcut umum pada keyboard juga bisa mempercepat proses pengisian IRS. Kita bisa menggunakan <code>Ctrl + End</code> untuk bisa langsung menuju ke posisi paling bawah halaman. Hal ini sangat berguna untuk menyimpan IRS yang sudah kita pilih karena tombol simpan IRS berada di bagian paling bawah halaman. Jika shorcut tidak bekerja atau keyboard yang kita gunakan tidak memiliki tombol <code>End</code>, gunakan scrolbar yang berada disebelah kanan browser agar bisa dengan mudah mengesernya ke posisi paling bawah. Kita juga bisa menggunakan <code>Ctrl + Home</code> untuk bisa langsung menuju ke posisi paling atas halaman. Kita juga bisa menggunakan <code>Ctrl + Tab</code> untuk bisa langsung berpindah tab browser. Hal ini sangat berguna untuk memisahkan tab browser untuk halaman login dan halaman pengisian IRS. Gunakan tombol <code>F5</code> atau shortcut <code>Ctrl + R</code> / <code>Ctrl + Shift + R</code> untuk melakukan refresh halaman.</p>
            </div>
            <div className='px-2 py-1'>
              <li>Latih jari-jari anda</li>
              <p>Untuk bisa melakukan proses pencarian dengan cepat, kita perlu membiasakan jari-jari kita untuk bisa menekan tombol-tombol keyboard dengan cepat. Setidaknya, kita terbiasa dengan posisi dari tombol untuk kelas yang kita pilih jika kita tidak sempat untuk bisa mengingat semua posisi tombol pada keyboard.</p>
            </div>
            <div className='px-2 py-1'>
              <li>[HACK!!!] Gunakan script untuk mengisi IRS secara otomatis :D</li>
              <p>Jika anda adalah seorang programmer, anda bisa membuat script automation untuk bisa melakukan pengisian IRS secara otomatis. Berdasarkan pengalaman dari penulis, posisi penempatan komponen pada halaman SIAK cukup mudah untuk mendapatkan polanya. Namun, anda setidaknya harus pernah minimal sekali mengikuti event SIAK-WAR agar bisa mengetahui keseluruhan alur yang terjadi. Setelah itu, anda bisa membuat semua jenis kemungkinan yang harus dilewati agar script yang anda buat bisa berjalan dengan baik. Jika anda tidak ada pengalaman dengan membuat script automation atau belum pernah mengikuti event SIAK-WAR, anda bisa menggunakan script yang sudah disediakan oleh penulis. Script ini dibuat dengan menggunakan bahasa pemrograman Python. Script ini bisa anda gunakan untuk mengisi IRS secara otomatis. Silahkan akses link <a href="/bot" className='hover:underline hover:text-blue-800'>berikut</a> untuk mendapatkan infromasi terkait script tersebut.</p>
            </div>
          </ol>
        </div>
      </div>
    </div>
  </main>
)