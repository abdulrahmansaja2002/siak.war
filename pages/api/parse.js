// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DOMParser } from "xmldom"

// ignore warning log
console.warn = () => { }
class MatkulKelas {
  constructor(kode, nama, sks, dosen, jadwal) {
    this.kode = kode
    this.nama = nama
    this.sks = sks
    this.dosen = dosen
    this.jadwal = jadwal
    this.key = this.key()
  }

  key() {
    return `${this.kode}-${this.sks}`
  }
}

class Matkul {
  constructor(kode, nama, sks, kelas) {
    this.kode = kode
    this.nama = nama
    this.sks = sks
    this.kelas = kelas
  }
}

const parseAllMatkul = (table) => {
  const isHead = (row) => row.getElementsByTagName('th').length > 0
  const getAllRows = (table) => table.getElementsByTagName('tr')
  // taken from https://stackoverflow.com/questions/22015684/zip-arrays-in-javascript#answer-22015930
  const zip = (a, b) => Array.from(Array(Math.max(b.length, a.length)), (_, i) => [a[i], b[i]]);
  const innerHTML = (el) => {
    let ret = "";
    const cs = el.childNodes;
    let l = cs.length;
    for (let i = 0; i < l; i++) {
      ret += cs[i].toString().replace(`xmlns="http://www.w3.org/1999/xhtml"`, "");
    }
    return ret;
  }
  const matkuls = []
  const rows = getAllRows(table)
  for (let i = 2; i < rows.length; i++) {
    // console.log(rows.item(i).getElementsByTagName('td').length, rows[i].childNodes[1].toString());
    if (isHead(rows.item(i))) {
      const kode = rows[i].childNodes[1].textContent.split("-")[0].trim()
      const nama = rows[i].childNodes[1].childNodes[1].textContent
      const sks = rows[i].childNodes[1].childNodes[2].textContent.split("(")[1].trim().split("SKS")[0].trim()
      const kelas = []
      const matkul = new Matkul(kode, nama, sks, kelas)
      matkuls.push(matkul)
    } else {
      const tds = rows.item(i).getElementsByTagName('td')
      const nama = tds[1].textContent.trim()
      const kode = tds[1].childNodes[1].attributes['0'].value.split("cc=")[1]
      const matkul = matkuls[matkuls.length - 1]
      let matkulKelas;
      if (tds.length === 7) {
        const jadwal = innerHTML(tds[4]).split("<br />")
        const ruang = innerHTML(tds[5]).split("<br />")
        const dosen = innerHTML(tds[6]).split("<br />")
        matkulKelas = new MatkulKelas(kode, nama, matkul.sks, dosen, zip(jadwal, ruang))
      } else if (tds.length === 5) {
        const jadwal = tds[3].textContent
        const dosen = innerHTML(tds[4]).split("<br />")
        matkulKelas = new MatkulKelas(kode, nama, matkul.sks, dosen, jadwal)
      } else {
        const jadwal = tds[3].textContent
        const dosen = "-"
        matkulKelas = new MatkulKelas(kode, nama, matkul.sks, dosen, jadwal)

      }
      matkul.kelas.push(matkulKelas)
    }
  }
  return matkuls
}

const getTipeMatkulKelas = (h3) => {
  return h3.textContent.split("[")[0].trim()
}
export default function handler(req, res) {
  const body = req.body
  const parser = new DOMParser()
  const doc = parser.parseFromString(body.html, 'text/html')
  const h3s = doc.getElementsByTagName('h3')
  const tables = doc.getElementsByTagName('table')
  const allAvallableKelas = []
  for (let i = 0; i < h3s.length; i++) {
    const h3 = h3s.item(i)
    h3.getElementsByTagName('a')
    const tipeKelas = getTipeMatkulKelas(h3)
    const matkuls = parseAllMatkul(tables.item(i+1))
    allAvallableKelas.push({
      "tipe": tipeKelas,
      matkuls
    })
  }
  res.status(200).json(allAvallableKelas)
}
  