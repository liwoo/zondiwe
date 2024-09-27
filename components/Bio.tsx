import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export default function Bio() {
  return (
    <Card className="bg-[#FDF8E7] border-2 border-[#D4AF37]">
      <CardContent>
        <div className="text-center my-8">
          <h1 className="text-2xl font-bold text-[#8B4513] font-serif mb-4">
            In Loving Memory of
          </h1>
          <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37]">
            <Image
              src="/images/zhondiwe.png"
              alt="Zondiwe"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-[#8B4513] font-serif mb-2">
            Zhondiwe Kwame Phiri
          </h2>
          <p className="text-xl text-[#5D4037] font-serif">
            18 August, 1980 - 21 September, 2024
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
