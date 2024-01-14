import { useState, useEffect } from "react";

import axios from "axios";

import Link from "next/link";

import Dropdown from "@/components/Dropdown.jsx";
import Checkbox from "@/components/Checkbox.jsx";
import DownloadButton from "@/components/DownloadButton";
import Modal from "@/components/Modal";

const Loading = () => <p>Loading...</p>;
const Error = () => <p>Terjadi error</p>;
const Matkul = () => {
  const [matkuls, setMatkuls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [html, setHtml] = useState("");
  const [selectedMatkul, setSelectedMatkul] = useState([]);
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);

  const postHtmlJadwal = async () => {
    try {
      const { data } = await axios.post("/api/parse", { html });
      setMatkuls(data);
      setLoading(false);
      // console.log(data);
      setSelectedMatkul(
        data.map((matkul) => {
          return {
            tipe: matkul.tipe,
            matkuls: matkul.matkuls.map((mk) => {
              return {
                kode: mk.kode,
                nama: mk.nama,
                sks: mk.sks,
                added: false,
                kelas: null,
              };
            }),
          };
        })
      );
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  // if (loading) return <Loading />;
  // if (error) return <Error />;

  const updateSelectedMatkulKelas = (tipe, matkul, kelasKey) => {
    const newMatkuls = [...selectedMatkul];
    console.log(matkul, kelasKey);
    const matkulTipeIndex = newMatkuls.findIndex((mk) => mk.tipe === tipe);
    const matkulIndex = newMatkuls[matkulTipeIndex].matkuls.findIndex(
      (mk) => mk.kode === matkul.kode
    );
    const kelas = matkuls[matkulTipeIndex].matkuls[matkulIndex].kelas.find(
      (k) => k.key === kelasKey
    );
    newMatkuls[matkulTipeIndex].matkuls[matkulIndex].kelas = kelas;
    // !newMatkuls[matkulTipeIndex].matkuls[matkulIndex].kelas[kelasIndex].selected;
    setSelectedMatkul(newMatkuls);
  };

  const getSelectedMatkulKelas = (tipe, matkul) => {
    const matkulTipeIndex = selectedMatkul.findIndex((mk) => mk.tipe === tipe);
    const matkulIndex = selectedMatkul[matkulTipeIndex].matkuls.findIndex(
      (mk) => mk.kode === matkul.kode
    );
    const kelas = selectedMatkul[matkulTipeIndex].matkuls[matkulIndex].kelas;
    return (
      kelas && {
        label: `${kelas.nama}`,
        value: kelas.key,
      }
    );
  };

  const updateSelectedMatkul = (tipe, matkul) => {
    const newMatkuls = [...selectedMatkul];
    const matkulTipeIndex = newMatkuls.findIndex((mk) => mk.tipe === tipe);
    const matkulIndex = newMatkuls[matkulTipeIndex].matkuls.findIndex(
      (mk) => mk.kode === matkul.kode
    );
    newMatkuls[matkulTipeIndex].matkuls[matkulIndex].added =
      !newMatkuls[matkulTipeIndex].matkuls[matkulIndex].added;
    setSelectedMatkul(newMatkuls);
  };
  const generateTextOutput = () => {
    const matkuls = selectedMatkul
      ?.filter(
        (mk) => mk.matkuls.filter((mk) => mk.added && mk.kelas).length > 0
      )
      .map((mk) => {
        return mk.matkuls
          .filter((mk) => mk.added && mk.kelas)
          .map((mk) => {
            return `${mk.kelas.key},${mk.kelas.nama.replace("Kelas ", "")}`;
          });
      });
    let matkulsFlat = [];
    matkuls.forEach((mk) => {
      matkulsFlat = matkulsFlat.concat(mk);
    });
    console.log(matkulsFlat);
    return matkulsFlat.join("\n");
  };
  const totalPilihan = (tipe) => {
    if (tipe) {
      return selectedMatkul
        ?.filter((mk) => mk.tipe === tipe)[0]
        ?.matkuls.filter((mk) => mk.added && mk.kelas).length;
    } else {
      return selectedMatkul?.filter(
        (mk) => mk.matkuls.filter((mk) => mk.added && mk.kelas).length > 0
      ).length;
    }
  };
  return (
    <div className="m-auto w-4/5">
      <form action="" method="post">
        <Modal
          title="Cara mendapatkan HTML jadwal SIAK"
          showModal={showModal}
          setShowModal={setShowModal}
        >
          <div className="text-lg">
            <p>
              1. Buka jadwal SIAK-NG. Pergi ke menu <code>Jadwal {">"} Jadwal Kuliah</code>, atau bisa juga dengan mengakses{" "}
              <Link href="https://academic.ui.ac.id/main/Schedule/Index" className="text-blue-600 hover:font-bold cursor-pointer">
                  link ini
              </Link>
              .
              <img src="/tab-jadwal-siak.png" alt="Tab Jadwal SIAK" />
            </p>
            <p>
              2. Klik kanan pada halaman tersebut, lalu pilih{" "}
              <code>View Page Source</code>.
              <img src="/option-jadwal-siak.png" alt="Option Jadwal SIAK" />
            </p>
            <p>
              3. Copy seluruh isi halaman tersebut, lalu paste pada kolom di tertera pada tab ini. Berikut tampilan contoh page source yang sudah di copy:
              <img src="/page-source-jadwal-siak.png" alt="Jadwal SIAK's Page Source" />
            </p>
            <p>
              4. Klik tombol <code>Parse</code> untuk mengenerate daftar mata kuliah yang bisa anda ambil.
            </p>
            <p>
              5. Setelah itu, anda bisa memilih mata kuliah yang ingin anda ambil, lalu klik tombol <code>Download matkuls.txt</code> untuk mendownload file <code>matkuls.txt</code> yang berisi daftar mata kuliah yang anda pilih.
            </p>
          </div>
        </Modal>
        <div className="margin-auto text-center p-2">
          <label htmlFor="html-jadwal" className="text-xl font-mono">
            HTML jadwal SIAK{" "}
            <span
              className="text-blue-600 hover:font-bold cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              ⓘ
            </span>
          </label>
        </div>
        <textarea
          name="html-jadwal"
          id="html-jadwal"
          placeholder="Tempel page source dari jadwal SIAK anda..."
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          className="text-black w-full border min-h-72 font-mono leading-4 p-3 outline-none min-w-full bg-white"
        />
        <div>
          <button
            type="button"
            className=" bg-blue-200 px-6 p-1 rounded-md "
            onClick={postHtmlJadwal}
          >
            Parse
          </button>
        </div>
      </form>
      <div className="margin-auto text-center p-2">
        <div className="text-xl font-mono">Mata Kuliah</div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 border-e border-black pe-2">
          <div className="flex items-center p-4 py-3 space-x-2 bg-neutral-10 w-full border rounded-md bg-white border-gray-500">
            <input
              className="w-full outline-none text-sm opacity-80 bg-white"
              placeholder="Cari Kelas..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            ></input>
          </div>
          {matkuls.map((matkul) => (
            <div>
              <div className="font-bold p-2">{matkul.tipe}</div>
              {matkul.matkuls
                .filter((mk) =>
                  mk.nama.toLowerCase().includes(filter.toLowerCase())
                )
                .map((mk) => (
                  <div className="border border-1 p-3 m-2">
                    <div className="py-2">
                      <Checkbox
                        label={`${mk.kode} - ${mk.nama} (${mk.sks} SKS)`}
                        id={mk.kode}
                        checked={mk.added}
                        onChange={() => updateSelectedMatkul(matkul.tipe, mk)}
                      />
                    </div>
                    <div>
                      <Dropdown
                        name={`${mk.kode} - ${mk.nama}`}
                        options={mk.kelas.map((kelas) => ({
                          label: `${kelas.nama}`,
                          value: kelas.key,
                        }))}
                        onSelectedChange={(option) =>
                          updateSelectedMatkulKelas(
                            matkul.tipe,
                            mk,
                            option.value
                          )
                        }
                        selected={getSelectedMatkulKelas(matkul.tipe, mk)}
                      />
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
        <div className="w-1/2 ps-2">
          <div className="flex justify-between">
            <div className="font-bold">
              Matkul yang dipilih ({totalPilihan() ?? 0} total dipilih)
            </div>
            <DownloadButton
              textOutput={generateTextOutput()}
              outputName="matkuls.txt"
              label="Download matkuls.txt"
              className="px-2 rounded-full bg-green-600 hover:bg-green-400 text-white"
            />
          </div>
          <div className="p-1">
            {selectedMatkul?.map((matkul) => (
              <div className="font-bold">
                <div>{`${matkul.tipe} (${totalPilihan(
                  matkul.tipe
                )} dipilih)`}</div>
                <div>
                  {matkul.matkuls
                    .filter((mk) => mk.added && mk.kelas)
                    .map((mk) => (
                      <div className="border p-2 m-2 rounded-sm font-semibold">
                        <div>{`${mk.kode} - ${mk.nama} (${mk.sks} SKS)`}</div>
                        <div>
                          <div>
                            <div>{mk.kelas?.nama}</div>
                            <div>
                              <div>Dosen pengajar:</div>
                              <div>
                                {mk.kelas?.dosen.map((dosen) => (
                                  <div>{dosen}</div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <div>Jadwal dan ruangan:</div>
                              <div>
                                {mk.kelas?.jadwal.map((jadwal) => (
                                  <div>{`- ${jadwal[0]}, ${jadwal[1]}`}</div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matkul;
