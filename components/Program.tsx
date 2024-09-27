import { ScrollArea } from "./ui/scroll-area";

const ProgramItem: React.FC<{ title: string; details: string | string[] }> = ({
  title,
  details,
}) => (
  <div className="mb-4">
    <h3 className="text-[#8B4513] font-serif font-semibold text-lg">{title}</h3>
    {Array.isArray(details) ? (
      <ul className="list-disc list-inside pl-4">
        {details.map((detail, index) => (
          <li key={index} className="text-[#5D4037] font-serif">
            {detail}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-[#5D4037] font-serif">{details}</p>
    )}
  </div>
);

export const Program: React.FC = () => (
  <ScrollArea className="w-full rounded-md border-2 border-[#D4AF37] p-6 bg-[#FDF8E7]">
    <h2 className="text-sm font-bold text-[#8B4513] font-serif text-center opacity-75">
      Kigali Send Off Program for late
    </h2>
    <h1 className="text-2xl font-bold text-[#8B4513] font-serif my-2 text-center">
      Zhondi Kwame Phiri
    </h1>
    <h3 className="text-center text-[#8B4513]">27 September 2024, 06:30PM</h3>

    <ProgramItem title="MC" details="Charles" />
    <ProgramItem title="Opening Prayer" details="Wasac Rep" />
    <ProgramItem
      title="Songs"
      details={["Chichewa", "English", "Kinyarwanda"]}
    />
    <ProgramItem title="Testimonials" details="" />
    <ProgramItem
      title="Wasac"
      details={["Remarks by CEO", "Remarks by Eric - Colleague & Friend"]}
    />
    <ProgramItem title="GHA" details="Ruth" />
    <ProgramItem title="Malawi Community" details="Theodore" />
    <ProgramItem title="Vision City Leader" details="Gloria" />
    <ProgramItem title="Songs" details="" />
    <ProgramItem title="A Message from Mwayi" details="" />
    <ProgramItem title="Sermon" details="Pr. Amos" />
    <ProgramItem title="Announcements & Vote of Thanks" details="Kondwani" />
    <ProgramItem title="Closing Hymn" details="" />

    <div className="mt-8 p-4 bg-[#FFF8DC] border border-[#D4AF37] rounded-lg">
      <h3 className="text-[#8B4513] font-serif font-semibold text-lg mb-2">
        Streaming Link
      </h3>
      <p className="text-[#5D4037] font-serif">
        Please join us via{" "}
        <a
          className="underline"
          href="https://us06web.zoom.us/j/85263757129?pwd=cxIT4IL1Cxp3FnIublg2BJ10XaGH8B.1"
        >
          Zoom Here
        </a>
      </p>
    </div>

    <div className="mt-8 p-4 bg-[#FFF8DC] border border-[#D4AF37] rounded-lg">
      <h3 className="text-[#8B4513] font-serif font-semibold text-lg mb-2">
        RSVP
      </h3>
      <p className="text-[#5D4037] font-serif">Angela: +250 784 294 075</p>
      <p className="text-[#5D4037] font-serif">Ruth: +250 788 312 902</p>
    </div>
  </ScrollArea>
);
