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
      number: 100,
      title: "Nta nshuti nziza nka Yesu",
      language: "Kinyarwanda",
      lyrics: `
      1
      Nta nshuti nziza nka Yesu,
      Atsemb’ ibyaha byacu.
      N’amahirwe kumwizera,
      Kukw atwuzuza na Se.
      Iyo tubabaye rwose,
      Dufit’ ishavu ryinshi,
      Adusohoza ku Mana,
      Yumv’ amaganya yacu.

      2
      Ni tugir’ ibyago byinshi,
      Tugatotezwa cyane,
      Byoye kuduter’ ubwoba,
      Tumwiringire rwose;
      Nta wundi wabidukiza,
      Abiduhemuraho.
      Yes’ az’ intege nke zacu,
      Jya wisung’ Uwiteka.

      3
      Ni tugir’ ishavu ryinshi,
      Tukababara rwose,
      Yesu ni w’ uturokora;
      Komez’ umwizigire.
      Ni bakugira ruvumwa,
      Wisung’ Umwami Yesu.
      Ntazagir’ ubw’ aguhana,
      Jy’ uhor’ umwizigiye.
      `,
    },
    {
      number: 133,
      title: "Nyemerera ngendane nawe",
      language: "Kinyarwanda",
      lyrics: `
      1
      Nyemerera ngendane nawe,
      Mana, nk’ukw Enoki yagenje.
      Nyoboresh’ ukuboko kwawe,
      unyerekez’ ah’ ushaka hose.
      Nubw’ inzir’ itagaragara,
      nkomeze njyane nawe, Mwami.

      2
      Nta bwo nahangara kugenda
      ntari kumwe nawe, Mukiza;
      Nagoswe n’abanz’ igihumbi;
      dor’ imitegw intaye hagati.
      Burije rwose, ntihabona;
      nkomeze njyane nawe, Mwami.

      3
      Ni nguma mu maboko yawe,
      sinzaba ncyitaye ku by’ isi;
      Nta kindi nziratana rwose.
      keretse wa musaraba wawe,
      Ngez’ ubwo nzager’ i Sioni;
      nkomeze njyane nawe, Mwami.
      `,
    },
    {
      number: 200,
      title: "Ur’ Uwera Wera, Man’ ikomeye",
      language: "Kinyarwanda",
      lyrics: `
      1
      Ur’ Uwera Wera,
      Man’ ikomeye !
      Mu gitondo tu
      jye tukuririmbira.
      Nubw’ ukomey’ u te,
      ugir’ imbabazi;
      I ngoma ya we
      nti za hanguka.
      2
      Ur’ Uwera Wera,
      abera bose
      Baguhimbazanya
      n’abamaraika!
      Ibyaremwe byose
      bikuramye, Mwami,
      Wahozeho,
      kand’ Uzahoraho.

      3
      Ur’ Uwera Wera,
      ubwiza bwawe,
      Nubwo butarebwa
      n’inkozi z’ibibi,
      Uhor’ ur Uwera,
      nta wundi mwahwana,
      Kukira neza,
      no gutungana.
      `,
    },
    {
      number: 1,
      title: "Ur’ Uwer’ Uwera, Mwami Mana yacu",
      language: "Kinyarwanda",
      lyrics: `
      1
      Ur’ Uwer’ Uwera,
      Mwami Mana yacu,
      Kare mugitondo
      tukuririmbire:
      Ur’ umunyambarag’
      ur’ umunyebambe;
      Ur’ ubutat’ uri
      n’ Iman’ imwe

      2
      Ur’ Uwer’ Uwera;
      dor’ abera bose,
      Baguhimbazanya
      n’ abamalayika,
      Tukuramye, Mwami, w
      ahozeho kera,
      Kand’ uriho,
      kand’ uzahoraho

      3
      Ur’ Uwer’ Uwera,
      kand’ ubgiza bgawe
      Burut’ uko bgarebga
      n’ abacumuye,
      Ni wowe wenyine
      wer’ urusha bose
      Ubuntu no gutungana kose

      4
      Ur’ Uwer’ Uwera,
      Mwami Mana yacu,
      Ibyaremwe byose
      biragusingiza:
      Ur’ umunyambarag’
      ur’ umunyebambe;
      Ingoma yawe
      ntizahanguka
      `,
    },
    {
      number: 15,
      title: "Urukundo rwa Yesu",
      language: "Kinyarwanda",
      lyrics: `
      1
      Urukundo rwa Yesu,
      Rwageze kuri twebwe;
      Rudukuraho rwose,
      Urubanza rwo gupfa.

      Gusubiramo
      Aradukunda, aradukunda,
      Aradukunda, Yesu Mutabazi.

      2
      Abatari bahabwa,
      Ubugingo bw’ iteka,
      Twihute tubabwire,
      Urukundo rwa Yesu.

      3
      Kuko yaradukunze,
      Yadupfiriye twese,
      Natwe dukunde dutyo,
      Abakiri mu byaha.

      4
      Aho Yes’ azazira,
      Aje kwim’ ingoma ye,
      Ni bwo tuzumv’ ijwi rye,
      Ati: Mwakoze neza.
      `,
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
      number: 371,
      title: "Kwathu Sipadziko",
      language: "Chewa",
      lyrics: `
      1 Kwathu sipadziko,
      ndingopitirira,
      Ndadzikundikira
      chuma Kumwambako;
      Mngelo akodola
      pakhomo la m'mwamba;
      Ndipo dziko lapansi
      sindyesa kwathu.

      Chorus
      Mbuye ndinu
      bwenzi langa ndithu,
      Ndichitenji ngati
      Kumwamba sikwathu?
      Mngelo akodola
      pakhomo la m'Mwamba,
      Ndipo dziko lapansi
      sindiyesa kwathu.

      2 Andiyembekeza,
      chinthuchi ndidziwa,
      Mpulumutsi wanga
      wandikhulukira;
      Adzandipyoletsa
      pamene ndafoka;
      Ndipo dziko lapansi
      sindiyesa kwathu

      3 Mayi watsogola
      ku Ulemerero,
      Ndifuna kugwira
      dzanja lake konko,
      Andidikiranso
      pakhomo la'Mwamba;
      Ndipo dziko lapansi
      sindiyesa kwathu.

      4 Mu ulemerero
      tidzakhala m'yaya,
      Oyera mtimawo
      ali kulamira;
      Ati, "Aleluya
      kwa Mlungu Wamphamvu"
      Ndipo dziko
      lapansi sindiyesa kwathu.
      `,
    },
    {
      title: "Chitha nchiani kund'yeretsa",
      number: 114,
      language: "chewa",
      lyrics: `
      1 Chitha nchiani kund'yeretsa?
      Mwazi wa Ambuye Yesu;
      Nchiani chindipulumutsa?
      Mwazi wa Ambuye Yesu.

      Chorus
      Chitsime ndi chokoma
      Chindiyeretsa bwino;
      Chinanso sindifuna,
      Mwazi wa Ambuye ndiwo.

      2 Mtanda m'mtima ndiyang'na,
      Mundisunge nthawi zonse
      Mwazi wa Ambuye Yesu;
      Ndi chikondi chomwechi.
      Ndikhululukidwa nawo
      Mwazi wa Ambuye Yesu.

      3 Zonse zina sizikwana,
      Mwazi wa Ambuye ndiwo;
      Ntchito zanga sinditama,
      Mwazi wa Ambuye ndiwo.

      4 Ndikhulupirira bwino
      Mwazi wa Ambuye Yesu;
      Chilungamo change ndicho
      Mwazi wa Ambuye Yesu.
      `,
    },
    {
      title: "Pokhala Mtendere",
      number: 158,
      language: "chewa",
      lyrics: `
      Pokhala mtendere mu mtimangamu,
      Pamene ndisaukanso,
      Pamene mavuto ndi akuludi,
      Moyo wangawu ngwabwinotu.

      Moyowo
      Ngwabwino,
      Moyo wanga ulitu bwino.

      2 Ngakhale Satana andizunza 'ne,
      Chilipo chitonthozacho;
      Chifundo cha Kristu anafera 'ne,
      Kundipatsa 'ne moyo wake.

      3 Uchimo unapachikidwa pomwe
      Pamtanda wa Yesu Mbuye;
      Machimo angawo anatherapo;
      Mbuye wanga, ndiyamika 'Nu.

      4 Ambuyathu, ndikhumba tsiku lija
      Limene ndidzaona 'Nu;
      Lipenga limveke, ndidzakondwatu
      Pakukomana ndi Yesuyo.
      `,
    },
    {
      title: "Senzani Mtanda Wanuwo",
      number: 31,
      language: "chewa",
      lyrics: `
      1 "Senzani mtanda wanuwu."
      Atero Yesu Mbuyathu;
      "Mukanditsata Inetu,
      Mudzikanize nokhanu."
      Aleluya, ndiye Yesu.

      2 "Sezani mtanda wanuwu."
      Musaopsedwe nawotu;
      Mphamvu za Yesu nzanunso;
      Limbani mtima wanuwo.
      Aleluya, ndiye Yesu.

      3 Senzani mtanda wanuwu."
      Bwanji manyazi mumva 'nu?
      Yesu anapiriratu,
      Kuti mupulumuketu.

      4 "Senzani mtanda wanuwu."
      Nawo muyende chetetu,
      Mutsogoledwe nawonso
      Kwanu Kumwamba komweko.

      5 "Senzani mtanda wanuwo."
      Tsatani Yesu m'njiramu;
      Iye wakusalemayo
      Ndiye alandiridwadi.
      `,
    },
    {
      title: "Sing'anga 'mkulu ndiye Yesu",
      number: 83,
      language: "chewa",
      lyrics: `
      1 Sing'anga 'mkulu ndiye Yesu,
      Mwana wa Mulungu;
      Asangalatsa achisoni,
      Ali wachifundo.

      Chorus
      Dzina la Yesu ndi lokoma,
      Dzina la Yesu lipambana,
      Dzina lake lakukonda,
      Yesu, inde Yesu.

      2 Zoipa zakhululukidwa,
      Yesu amatero;
      Tiyende bwino m'njira yake,
      Tilowemo lero.

      3 Nditama Nsembe ya Mulungu,
      Ndilandira Yesu;
      Ndikonda dzinalo labwino,
      Dzina lanu, Yesu.

      4 Akulu inu m'bwere nonse,
      Ana inu nomwe,
      Ambuye akuitanani,
      Bvomerani nonse.
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
    {
      number: 199,
      title: "What a Friend we have in Jesus",
      language: "English",
      lyrics: `
      1 What a Friend we have in Jesus
      All our sins and grief to bear!
      What a privilege to carry
      Everything to God in prayer!
      O what peace we often forfeit;
      O what needless pain we bear;
      All because we do not carry
      Everything to God in prayer.

      2 Have we trials and temptations?
      Is there trouble anywhere?
      We should never be discouraged;
      Take it to the Lord in prayer,
      Can we find a friend so faithful,
      Who will all our sorrows share?
      Jesus knows our every weakness;
      Take it to the Lord in prayer.

      3 Are we weak and heavy-laden,
      Cumbered with a load of care?
      Precious Savior, still our refuge__
      Take it to the Lord in prayer.
      Do thy friends despise, forsake thee?
      Take it to the Lord in prayer;
      In His arms He’ll take and shield thee,
      Thou wilt find a solace there.
      `,
    },
    {
      number: 362,
      title: "My hope is built on nothing less",
      language: "English",
      lyrics: `
      1 My hope is built on nothing less
      Than Jesu’s blood and righteousness;
      I date not trust the sweetest frame,
      But wholly lean on Jesu’s name.

      Chorus
      On Christ, the Solid Rock, I stand;
      All other ground is sinking sand,
      All other ground is sinking sand.

      2 When darkness seems to veil His
      face,
      I rest on His unchanging grace;
      In every high and stormy gale
      My anchor holds within the veil.

      3 His oath, His covenant, His blood,
      Support me in the ‘whelming flood;
      When all around my soul gives way,
      He then is all my hope and stay.

      4 When He shall come with trumpet
      sound,
      O may I then in Him be found,
      Clothed in His righteousness alone,
      Faultless to stand before His throne.
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
        <TabsList className="grid w-full grid-cols-3">
          {Object.entries(languageFlags).map(([lang, flag]) => (
            <TabsTrigger key={lang} value={lang}>
              <span className="mr-2">{flag}</span>
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <ScrollArea className="h-[70vh] w-full rounded-md border p-4">
        {songs[selectedLanguage]
          .sort((a, b) => a.number - b.number)
          .map((song) => (
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
