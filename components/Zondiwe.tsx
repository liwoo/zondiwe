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
import { ChevronRight } from "lucide-react";
import { Languages, Song, songs } from "@/data/songs";
import Bio from "./Bio";

const languageFlags: Record<Languages, string> = {
  rwanda: "🇷🇼",
  chewa: "🇲🇼",
  english: "🇬🇧",
};

interface LyricsModalProps {
  song: Song;
  isOpen: boolean;
  onClose: () => void;
}

const LyricsModal: React.FC<LyricsModalProps> = ({ song, isOpen, onClose }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-[425px] bg-[#FDF8E7] border-2 border-[#D4AF37]">
      <DialogHeader>
        <DialogTitle className="text-[#8B4513] font-serif">
          {song.title} ({song.language})
        </DialogTitle>
      </DialogHeader>
      <ScrollArea className="h-[70vh] w-full p-4">
        <pre className="whitespace-pre-wrap text-[#5D4037] font-serif">
          {song.lyrics}
        </pre>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

const SongListItem: React.FC<{ song: Song; onClick: () => void }> = ({
  song,
  onClick,
}) => (
  <div
    className="flex items-center justify-between p-3 mb-2 bg-[#FFF8DC] border border-[#D4AF37] rounded-lg cursor-pointer hover:bg-[#FFE4B5] transition-colors duration-200"
    onClick={onClick}
  >
    <div className="flex-1">
      <div className="text-sm text-[#8B4513] font-serif">{song.number}</div>
      <div className="text-[#5D4037] font-serif font-semibold">
        {song.title}
      </div>
    </div>
    <ChevronRight className="text-[#D4AF37]" size={20} />
  </div>
);

const SongSheet: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Languages>("rwanda");
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openLyrics = (song: Song) => {
    setSelectedSong(song);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Tabs
        value={selectedLanguage}
        onValueChange={(value: string) =>
          setSelectedLanguage(value as Languages)
        }
        className="w-full mb-4"
      >
        <TabsList className="grid w-full grid-cols-3 bg-[#FDF8E7]">
          {Object.entries(languageFlags).map(([lang, flag]) => (
            <TabsTrigger
              key={lang}
              value={lang}
              className="text-[#8B4513] font-serif"
            >
              <span className="mr-2">{flag}</span>
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <ScrollArea className="w-full rounded-md border-2 border-[#D4AF37] p-4">
        {songs[selectedLanguage]
          .sort((a, b) => a.number - b.number)
          .map((song) => (
            <SongListItem
              key={song.number}
              song={song}
              onClick={() => openLyrics(song)}
            />
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
        return <Bio />;
      case "songsheet":
        return <SongSheet />;
      case "program":
        return (
          <Card className="bg-[#FDF8E7] border-2 border-[#D4AF37]">
            <CardHeader>
              <CardTitle className="text-[#8B4513] font-serif text-2xl">
                Order of Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#5D4037] font-serif">
                Program content coming soon...
              </p>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-[#FDF8E7] min-h-screen">
      <div className="flex justify-around mb-4">
        {["bio", "songsheet", "program"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-semibold font-serif ${
              activeTab === tab
                ? "text-[#D4AF37] border-b-2 border-[#D4AF37]"
                : "text-[#8B4513]"
            }`}
            onClick={() => setActiveTab(tab as "bio" | "songsheet" | "program")}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      {renderContent()}
    </div>
  );
};

export default ZondiweFuneralWebsite;
