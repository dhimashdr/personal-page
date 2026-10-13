const opps = [
    {
        job: "Graphic Designer",
        desc: "Membuka posisi untuk graphic designer. Mampu untuk membuat desain feed media sosial, desain cetak, dan desain non-cetak.",
        exp: [
            "Graphic Designer, Departemen Matematika UGM (2025)",
            "Departemen Media, KMFM UGM (2023)"
        ]
    },
    {
        job: "Pembuatan Website",
        desc: "Membuka jasa untuk pembuatan website dengan Next.js atau Wordpress. Selengkapnya akan diperbarui di laman diverse.web.id (coming soon)",
        exp: [
            "Staff Media bag. Web Developer, LMNas UGM (2024)"
        ]
    },
    {
        job: "Pengolahan Data",
        desc: "Membuka jasa untuk melakukan uji statistik, uji hipotesis, dan prediksi machine learning. Dilengkapi dengan interpretasi dan visualisasi (jika diperlukan).",
        exp: [
            ""
        ]
    },
    {
        job: "Tutor Matematika",
        desc: "Membuka posisi sebagai tutor matematika untuk tingkat SMP/SMA. Membantu mengajari materi yang kurang dipahami murid. Bisa trial terlebih dahulu.",
        exp: [
            ""
        ]
    },
]

export default function Opportunities(){
    return <div className="flex flex-col gap-8">
        {opps.map((e, i) => {
            return <div key={i} className="flex flex-col bg-linear-90 from-foreground/16 to-foreground/8 p-4 md:p-8">
            <h1 className="font-bold text-2xl">{e.job}</h1>
            <p className="text-sm">{e.desc}</p>
            <br />
            <p className="text-xs font-light text-lime-400">pengalaman :</p>
            {e.exp.map((f, i) => {
                return <p key={i} className="text-xs font-semibold">- {f}</p>
            })}
        </div>    
        })}    
    </div>
}

export function ReachMe(){
    return <div>
        <p className="text-sm text-center">
            If you are interested, you can reach me through <span className="font-bold text-lime-400">dhimashdr@gmail.com</span> or WhatsApp <a href="https://wa.me/6285812780604" className="font-bold text-lime-400">(62 858 1278 0604)</a>
        </p>
    </div>
}