import { data } from "../lib/data";
import { useNavigate } from "react-router-dom";

const SMEListSection = () => {
  const navigate = useNavigate();
  const handleClick = (slug: string) => {
    navigate(`/umkm/${slug}`);
  };

  return (
    <section
      className="container text-center py-15 space-y-7 sm:space-y-10"
      id="list"
    >
      <div className="text-sm sm:text-lg text-primary flex flex-center mx-auto gap-2.5">
        <div className="animate-shake-slow">✨</div>Dampak Nyata
      </div>
      <h2 className="text-[24px] sm:text-[64px] font-recoleta sm:leading-[70px] max-w-[900px] mx-auto">
        Kisah Keunggulan Lokal
      </h2>
      <p className="text-[12px] sm:text-sm sm:max-w-[400px] max-w-[300px] mx-auto opacity-70">
        Bersama UMKM pilihan, kami membuktikan bahwa produk lokal dengan
        storytelling yang tepat mampu menembus batas pasar digital.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-10 text-left">
        {data.map((item, index) => {
          return (
            <div
              className="space-y-2 cursor-pointer group"
              key={index}
              // TAMBAHKAN: Event onClick yang memanggil handleClick
              onClick={() => handleClick(item.slug)}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.nama}
                  className=" object-cover group-hover:scale-105 transition-all duration-500 w-full aspect-square"
                />
              </div>
              <div className="font-recoleta text-[24px] mt-5">{item.nama}</div>
              <p className="line-clamp-1 text-base opacity-60">
                {item.deskripsi_singkat}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SMEListSection;
