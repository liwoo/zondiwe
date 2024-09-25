"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Song {
  number: number;
  title: string;
  language: string;
  lyrics: string;
}

type Languages = "kinyarwanda" | "chewa" | "english";

const songs: Record<Languages, Song[]> = {
  kinyarwanda: [
    {
      number: 1,
      title: "Imana Yacu",
      language: "Kinyarwanda",
      lyrics: "Imana yacu ni nziza...\n(Rest of the lyrics)",
    },
    {
      number: 2,
      title: "Yesu Ni Umwungeri",
      language: "Kinyarwanda",
      lyrics: "Yesu ni umwungeri mwiza...\n(Rest of the lyrics)",
    },
  ],
  chewa: [
    {
      number: 102,
      title: "Tanthwe Longambika",
      language: "Chewa",
      lyrics: `
      1 Thanthwe long'ambikatu,
      Ndibisale momwemu!
      Madzi ndipo mwaziwo
      Zotuluka m'nthitimo
      Zonditsuke m'mtima mbuu!
      Zindilimbikitsetu.

      2 Ntchito zanga zonsezo
      Sizikondweretsa 'Nu;
      Ndikazigwiritsadi,
      Ndikalira nsonizi,
      Zonse sizikwanazi,
      Koma Yesu yekhayo.

      3 M'manja mopanda kanthu,
      Mtanda ndingogwiradi;
      'Maliseche mbveke 'ne;
      Ndili ndekha, msunge 'ne;
      Ndithawire m'mtsinjewo
      Munditsuke m'mtimamo.

      4 M'moyo uno kunsiku
      Pena ndimwaliratu,
      M'mene ndidzakwerako
      Tionane masowo;
      Thanthwe long'ambikatu
      Ndibisale momwemu.
      `,
    },
    {
      number: 191,
      title: "Ntchito yonse yakeyo",
      language: "Chewa",
      lyrics: `
      1 Ntchito yonse yakeyo
      Yatha m'dziko linoli;
      Mlendo wafikatuko
      Pokocheza leroli.

      Chorus
      'Tate, mwa kusunga kwanu
      Timusiya mwana wanu.
      'Tate, mwa kusunga kwanu
      Timusiya mwana wanu.

      2 Yatha misoziyo,
      Zobisika zonse mbee!
      Aweruza bwinoko
      Ndiye Wolungamayo.

      3 Komwe Mbusa kwawoko
      Atengera nkhosa zonse,
      Zake asungiramo
      Zosaopa kanthu konse.

      4 Onse akulapawo
      Ayang'ana mtanda wake;
      Aphunzira komweko
      Zonse za kukonda kwake.

      5 Dothili kudothilo,
      Pfumbili kupfumbi tere;
      Mpaka adzadzukanso
      Timusiya mumtendere.
      `,
    },
    {
      number: 193,
      title: "Ntchito yonse yakeyo",
      language: "Chewa",
      lyrics: `
      1 Kwathu sipadziko, ndingopitirira,
      Ndadzikundikira chuma
      Kumwambako;
      Mngelo akodola pakhomo la
      m'mwamba;
      Ndipo dziko lapansi sindyesa
      kwathu.

      Mbuye ndinu bwenzi langa ndithu,
      Ndichitenji ngati Kumwamba
      sikwathu?
      Mngelo akodola pakhomo la
      m'Mwamba,
      Ndipo dziko lapansi sindiyesa
      kwathu.

      2 Andiyembekeza, chinthuchi
      ndidziwa,
      Mpulumutsi wanga wandikhulukira;
      Adzandipyoletsa pamene ndafoka;
      Ndipo dziko lapansi sindiyesa kwathu

      3 Mayi watsogola ku Ulemerero,
      Ndifuna kugwira dzanja lake konko,
      Andidikiranso pakhomo la'Mwamba;
      Ndipo dziko lapansi sindiyesa kwathu.

      4 Mu ulemerero tidzakhala m'yaya,
      Oyera mtimawo ali kulamira;
      Ati, "Aleluya kwa Mlungu Wamphamvu"
      Ndipo dziko lapansi sindiyesa
      kwathu.
      `,
    },
  ],
  english: [
    {
      number: 1,
      title: "Rock of Ages",
      language: "English",
      lyrics: `
      Rock of Ages, cleft for me,
      Let me hide myself in Thee;
      Let the water and the blood,
      From Thy riven side which flowed,
      Be of sin the double cure,
      Save me from its guilt and power.

      Not the labor of my hands
      Can fulfill Thy law’s demands;
      Could my zeal no respite know,
      Could my tears forever flow,
      All could never sin erase,
      Thou must save, and save by grace.

      Nothing in my hands I bring,
      Simply to Thy cross I cling;
      Naked, come to Thee for dress,
      Helpless, look to Thee for grace:
      Foul, I to the fountain fly,
      Wash me, Savior, or I die.

      While I draw this fleeting breath,
      When mine eyes shall close in death,
      When I soar to worlds unknown,
      See Thee on Thy judgment throne,
      Rock of Ages, cleft for me,
      Let me hide myself in Thee.`,
    },
    {
      number: 2,
      title: "Blessed Assurance",
      language: "English",
      lyrics: `
      Blessed assurance, Jesus is mine;
      Oh, what a foretaste of glory divine!
      Heir of salvation, purchase of God,
      Born of His Spirit, washed in His blood.

      Chorus
      This is my story, this is my song,
      Praising my Savior all the day long.
      This is my story, this is my song,
        Praising my Savior all the day long.

      Perfect submission, perfect delight,
      Visions of rapture now burst on my sight;
      Angels descending, bring from above
      Echoes of mercy, whispers of love.

      Perfect submission, all is at rest,
      I in my Savior am happy and blest;
      Watching and waiting, looking above,
      Filled with His goodness, lost in His love.
      `,
    },
    {
      number: 3,
      title: "Jesus Paid it All",
      language: "English",
      lyrics: `
      1 I hear the Savior say,
      "Thy strength indeed is small,
      Child of weakness, watch and pray,
      Find in Me thine all in all."

      Refrain:
      Jesus paid it all,
      All to Him I owe;
      Sin had left a crimson stain,
      He washed it white as snow.

      2 Lord, now indeed I find
      Thy pow'r and Thine alone,
      Can change the leper's spots
      And melt the heart of stone. [Refrain]

      3 For nothing good have I
      Where-by Thy grace to claim;
      I'll wash my garments white
      In the blood of Calv'ry's Lamb. [Refrain]

      4 And when, before the throne,
      I stand in Him complete,
      "Jesus died my soul to save,"
      My lips shall still repeat. [Refrain]
      `,
    },
  ],
};

const languageFlags: Record<Languages, string> = {
  kinyarwanda: "🇷🇼", // Rwanda flag
  chewa: "🇲🇼", // Malawi flag (Chewa is spoken in Malawi)
  english: "🇬🇧", // UK flag for English
};

interface LyricsModalProps {
  song: Song;
  isOpen: boolean;
  onClose: () => void;
}

const LyricsModal: React.FC<LyricsModalProps> = ({ song, isOpen, onClose }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>
          {song.title} ({song.language})
        </DialogTitle>
      </DialogHeader>
      <ScrollArea className="h-[70vh] w-full p-4">
        <pre className="whitespace-pre-wrap">{song.lyrics}</pre>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

const SongSheet: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<Languages>("kinyarwanda");
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openLyrics = (song: Song) => {
    setSelectedSong(song);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4">
      <Tabs
        value={selectedLanguage}
        onValueChange={(value: string) =>
          setSelectedLanguage(value as Languages)
        }
        className="w-full mb-4"
      >
        <TabsList className="grid w-full grid-cols-4">
          {Object.entries(languageFlags).map(([lang, flag]) => (
            <TabsTrigger key={lang} value={lang}>
              <span className="mr-2">{flag}</span>
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <ScrollArea className="h-[70vh] w-full rounded-md border p-4">
        {songs[selectedLanguage].map((song) => (
          <Card
            key={song.number}
            className="mb-2 cursor-pointer"
            onClick={() => openLyrics(song)}
          >
            <CardHeader>
              <CardTitle>
                {song.number}. {song.title}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </ScrollArea>
      {selectedSong && (
        <LyricsModal
          song={selectedSong}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

const ZondiweFuneralWebsite: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"bio" | "songsheet" | "program">(
    "bio"
  );

  const renderContent = () => {
    switch (activeTab) {
      case "bio":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Biography</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Biography content coming soon...</p>
            </CardContent>
          </Card>
        );
      case "songsheet":
        return <SongSheet />;
      case "program":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Program</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Program content coming soon...</p>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center my-4">
        Zondiwe&apos;s Funeral
      </h1>
      <div className="flex justify-around mb-4">
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "bio"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("bio")}
        >
          Bio
        </button>
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "songsheet"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("songsheet")}
        >
          Songsheet
        </button>
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "program"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("program")}
        >
          Program
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default ZondiweFuneralWebsite;
