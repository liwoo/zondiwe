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

const songs = {
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
      number: 1,
      title: "Mulungu Wathu",
      language: "Chewa",
      lyrics: "Mulungu wathu ndi wabwino...\n(Rest of the lyrics)",
    },
    {
      number: 2,
      title: "Yesu Ndiye M'busa",
      language: "Chewa",
      lyrics: "Yesu ndiye m'busa wabwino...\n(Rest of the lyrics)",
    },
  ],
  tumbuka: [
    {
      number: 1,
      title: "Chiuta Withu",
      language: "Tumbuka",
      lyrics: "Chiuta withu ndi muweme...\n(Rest of the lyrics)",
    },
    {
      number: 2,
      title: "Yesu Ndi Mliska",
      language: "Tumbuka",
      lyrics: "Yesu ndi mliska muweme...\n(Rest of the lyrics)",
    },
  ],
  english: [
    {
      number: 1,
      title: "Our God",
      language: "English",
      lyrics: "Our God is good...\n(Rest of the lyrics)",
    },
    {
      number: 2,
      title: "Jesus is the Shepherd",
      language: "English",
      lyrics: "Jesus is the good shepherd...\n(Rest of the lyrics)",
    },
  ],
};

const languageFlags = {
  kinyarwanda: "🇷🇼", // Rwanda flag
  chewa: "🇲🇼", // Malawi flag (Chewa is spoken in Malawi)
  tumbuka: "🇲🇼", // Malawi flag (Tumbuka is also spoken in Malawi)
  english: "🇬🇧", // UK flag for English
};

const LyricsModal = ({ song, isOpen, onClose }) => (
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

const SongSheet = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("kinyarwanda");
  const [selectedSong, setSelectedSong] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openLyrics = (song) => {
    setSelectedSong(song);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4">
      <Tabs
        value={selectedLanguage}
        onValueChange={setSelectedLanguage}
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

const ZondiweFuneralWebsite = () => {
  const [activeTab, setActiveTab] = useState("bio");

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
      <h1 className="text-2xl font-bold text-center my-4">Zondiwe's Funeral</h1>
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
