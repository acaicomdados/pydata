"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Zap,
  Mic,
  Star,
  Linkedin,
  Instagram,
  Twitter,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function PyDataParaPage() {
  const [selectedEvent, setSelectedEvent] = useState("2025");

  const siteURL = "https://raw.githubusercontent.com/acaicomdados/pydata/refs/heads/main/public/";

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const events = {
    "2025": {
      title: "I Meetup PyData Pará",
      subtitle: "Primeira edição no Pará",
      date: "Sábado, 06/09/2025",
      time: "9h às 13h",
      location: "CESUPA - Campus José Malcher",
      attendees: "",
      status: "upcoming",
      keynotes: [
        {
          name: "Prof. Claudio Bonel",
          // title: "Vibe Coding e AI Pair programming",
          // company: "Company",
          talk: "Vibe Coding e AI Pair programming",
          time: "09:05 – 09:45",
          photo: siteURL  + "public/claudio-bonel.jpeg?height=200&width=300&text=Prof.+Claudio+Bonel",
          // description: "description",
          linkedin: "https://linkedin.com/in/bonel",
          instagram: "https://instagram.com/",
          twitter: "https://twitter.com/",
        },
        {
          name: "Closing Keynote Speaker",
          // title: "Arquitetura base para o sucesso de um projeto de dados",
          // company: "Company",
          talk: "Arquitetura base para o sucesso de um projeto de dados",
          time: "12:00 – 12:40",
          photo: siteURL + "public/artemisia-weyl.jpeg?height=200&width=300&text=Closing+Keynote+Speaker",
          // description: "description",
          linkedin: "https://linkedin.com/in/arteweyl",
          instagram: "https://instagram.com/",
          twitter: "https://twitter.com/",
        },
      ],
      speakers: [
        // {
        //   name: "Palestra 1",
        //   title: "Palestra 1",
        //   company: "Tech Corp",
        //   talk: "Palestra 1",
        //   time: "11:00 - 11:40",
        //   photo: "/placeholder.svg?height=150&width=150&text=Ana+Silva",
        //   linkedin: "https://linkedin.com/in/ana-silva",
        //   instagram: "https://instagram.com/ana_silva_data",
        //   twitter: "https://twitter.com/ana_silva_data",
        // }
      ],
      sponsors: {
        gold: [
          {
            name: "Gold Sponsor",
            logo: siteURL + "/placeholder.svg?height=80&width=200&text=Gold+Sponsor+1",
            website: "https://empresa-gold-1.com",
          },
        ],
        silver: [
          // {
          //   name: "Silver Sponsor 1",
          //   logo: siteURL + "/placeholder.svg?height=60&width=150&text=Silver+1",
          //   website: "https://empresa-prata-1.com",
          // },
          {
            name: "EasyGestor",
            logo: siteURL + "logos/easygestor.png?height=60&width=150&text=EasyGestor",
            website: "https://www.instagram.com/easygestor",
          },
        ],
        bronze: [
          {
            name: "Empresa Bronze 1",
            logo: siteURL + "/placeholder.svg?height=50&width=120&text=Bronze+1",
            website: "https://empresa-bronze-1.com",
          }
        ],
        community: [
          // {
          //   name: "GruPy Pará",
          //   logo: siteURL + "/placeholder.svg?height=40&width=100&text=Python+PA",
          //   website: "https://www.linkedin.com/company/108233214/admin/dashboard/",
          // },
          {
            name: "Elas Na Tecnologia",
            logo: siteURL + "logos/elas-na-tecnologia.png?height=60&width=150&text=Elas+Na+Tecnologia",
            website: "https://www.linkedin.com/company/elasnatecnologia/",
          },
          {
            name: "Manas Digitais",
            logo: siteURL + "logos/manas-digitais.png?height=60&width=150&text=Manas+Digitais",
            website: "https://www.instagram.com/manasdigitais/",
          },
          {
            name: "PyLadies Manaus",
            logo: siteURL + "logos/pyladies-manaus.png?height=60&width=150&text=PyLadies+Manaus",
            website: "https://www.instagram.com/pyladiesmanaus/",
          },
          {
            name: "Meninas das Geotecnologias",
            logo: siteURL + "logos/meninas-das-geotecnologias.png?height=60&width=150&text=Meninas+das+Geotecnologias",
            website: "https://www.instagram.com/meninasdageo/",
          },
          {
            name: "Comunidade BelJogos",
            logo: siteURL + "logos/beljogos.png?height=60&width=150&text=Comunidade+BelJogos",
            website: "https://www.instagram.com/beljogos/",
          },
          {
            name: "PyLadies Belém",
            logo: siteURL + "logos/pyladies-belem.png?height=60&width=150&text=PyLadies+Belem",
            website: "https://www.instagram.com/pyladiesbelem/",
          },
          {
            name: "Cap Belem",
            logo: siteURL + "logos/cap-belem.png?height=60&width=150&text=Cap+Belem",
            website: "https://www.instagram.com/owasp_belem",
          },
          {
            name: "Tá Safo",
            logo: siteURL + "logos/ta-safo.jpeg?height=60&width=150&text=Tá+Safo",
            website: "https://www.linkedin.com/company/tasafo",
          },
          {
            name: "LovelaceTech",
            logo: siteURL + "logos/lovelacetech.jpeg?height=60&width=150&text=LovelaceTech",
            website: "https://www.linkedin.com/company/lovelacetech/",
          }
        ],
      },
      photos: [
        // {
        //   src: "/placeholder.svg?height=300&width=400&text=Evento+Python+Belém",
        //   alt: "Evento Python Belém",
        //   caption: "Meetup Python Belém 2024",
        // },
      ],
    },
  };

  const currentEvent = events[selectedEvent as keyof typeof events];

const schedule = [
  {
    time: "09:00 – 09:05",
    title: "Boas-vindas, agradecimentos & Abertura oficial",
    type: "ceremony",
  },
  {
    time: "09:05 – 09:45",
    title: "Vibe Coding e AI Pair programming",
    speaker: "Prof. Claudio Bonel",
    type: "keynote",
  },
  {
    time: "09:45 – 10:10",
    title: "Não limite seus conhecimentos: Dados além da técnica",
    speaker: " Beatriz Meireles Gomes",
    type: "talk",
  },
  {
    time: "10:10 – 10:35",
    title: "Plataforma açAÍ",
    speaker: "Patrick Alves",
    type: "talk",
  },
  {
    time: "10:35 – 10:50",
    title: "☕ Intervalo / Networking / Coffee Break",
    type: "break",
  },
  {
    time: "10:50 – 11:15",
    title: "Script Hunting: Automatizando Threat Intelligence com Python",
    speaker: "Cleber Soares",
    type: "talk",
  },
  {
    time: "11:15 – 11:20",
    title: "⚡ Palestras Relâmpago 1",
    type: "lightning",
  },
  {
    time: "11:20 – 11:35",
    title: "⚡ Palestras Relâmpago 2 - SolusIT",
    type: "lightning",
  },
  {
    time: "11:35 – 12:00",
    title: "Colonialismo de dados: O Judiciário Paraense sob as Nuvens das Big Techs",
    speaker: "Belém Campelo Ribeiro",
    type: "talk",
  },
  {
    time: "12h00 – 12h40",
    title: "Arquitetura base para o sucesso de um projeto de dados",
    speaker: "Profa. Artemisia Weyl",
    type: "keynote",
  },
  {
    time: "12h40 – 13h00",
    title: "Encerramento, Agradecimentos & Sorteios",
    type: "ceremony",
  },
];


  const getScheduleIcon = (type: string) => {
    switch (type) {
      case "keynote":
        return <Star className="h-4 w-4" />;
      case "talk":
        return <Mic className="h-4 w-4" />;
      case "lightning":
        return <Zap className="h-4 w-4" />;
      case "break":
        return <Clock className="h-4 w-4" />;
      case "ceremony":
        return <Users className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getScheduleColor = (type: string) => {
    switch (type) {
      case "keynote":
        return "bg-pydata-orange text-white";
      case "talk":
        return "bg-pydata-teal text-white";
      case "lightning":
        return "bg-pydata-orange-light text-pydata-dark";
      case "break":
        return "bg-pydata-gray text-pydata-dark";
      case "ceremony":
        return "bg-pydata-teal-light text-pydata-dark";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pydata-light to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-pydata-orange">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pydata-orange to-pydata-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-pydata-dark">
                  PyData Pará
                </h1>
                <p className="text-pydata-gray-dark">{currentEvent.subtitle}</p>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex items-center space-x-6">
                <a
                  href="#sobre"
                  className="text-pydata-gray-dark hover:text-pydata-teal transition-colors"
                >
                  Sobre
                </a>
                <a
                  href="#palestrantes"
                  className="text-pydata-gray-dark hover:text-pydata-teal transition-colors"
                >
                  Palestrantes
                </a>
                <a
                  href="#cronograma"
                  className="text-pydata-gray-dark hover:text-pydata-teal transition-colors"
                >
                  Cronograma
                </a>
                <a
                  href="#apoiadores"
                  className="text-pydata-gray-dark hover:text-pydata-teal transition-colors"
                >
                  Apoiadores
                </a>

                {/* Events Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-pydata-gray-dark hover:text-pydata-teal hover:bg-pydata-light transition-colors"
                    >
                      Eventos Anteriores
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem
                      onClick={() => setSelectedEvent("2025")}
                      className={
                        selectedEvent === "2025" ? "bg-pydata-orange-light" : ""
                      }
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold">
                          2025 - I Meetup PyData Pará
                        </span>
                        <span className="text-sm text-pydata-gray-dark">
                          Próximo evento
                        </span>
                      </div>
                    </DropdownMenuItem>

                    {/* <DropdownMenuItem
                      onClick={() => setSelectedEvent("2024")}
                      className={
                        selectedEvent === "2024" ? "bg-pydata-orange-light" : ""
                      }
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold">
                          2024 - Meetup Python & Data
                        </span>
                        <span className="text-sm text-pydata-gray-dark">
                          45 participantes
                        </span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setSelectedEvent("2023")}
                      className={
                        selectedEvent === "2023" ? "bg-pydata-orange-light" : ""
                      }
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold">
                          2023 - I Encontro Python PA
                        </span>
                        <span className="text-sm text-pydata-gray-dark">
                          80 participantes
                        </span>
                      </div>
                    </DropdownMenuItem> */}
                  </DropdownMenuContent>
                </DropdownMenu>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-pydata-teal to-pydata-teal-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            {currentEvent.status === "past" && (
              <Badge className="bg-pydata-orange text-white mb-4">
                Evento Realizado
              </Badge>
            )}
            {currentEvent.status === "upcoming" && (
              <Badge className="bg-pydata-orange text-white mb-4">
                Próximo Evento
              </Badge>
            )}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {currentEvent.title}
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Da comunidade e para a comunidade
          </p>
          <Button className="bg-pydata-orange hover:bg-pydata-orange-dark text-white mb-8" onClick={() => openLink('https://www.meetup.com/pydata-para/events/310374256')}>
            Inscreva-se
          </Button>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{currentEvent.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{currentEvent.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{currentEvent.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>{currentEvent.attendees}</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold text-pydata-dark mb-6">
              Sobre o PyData
            </h3>
            <p className="text-lg text-pydata-gray-dark leading-relaxed">
              O PyData é uma comunidade de pessoas desenvolvedoras e usuárias de
              ferramentas open source voltado à ciência de dados, principalmente
              usando a linguagem de programação Python. É um programa apoiado
              pela NumFocus e um evento gratuito idealizado pela comunidade e
              para a comunidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-pydata-orange">
              <CardHeader>
                <CardTitle className="text-pydata-dark">Palestras</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pydata-gray-dark">
                  Com duração de 30 a 40 minutos, cuidadosamente escolhidas para
                  todos os níveis, do básico ao avançado.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-pydata-teal">
              <CardHeader>
                <CardTitle className="text-pydata-dark">Keynotes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pydata-gray-dark">
                  Personalidades com destaque na área são convidadas para servir
                  como inspiração aos ouvintes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-pydata-orange-light">
              <CardHeader>
                <CardTitle className="text-pydata-dark">
                  Palestras Relâmpago
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pydata-gray-dark">
                  Cada palestra tem duração de 5 minutos e qualquer pessoa pode
                  se inscrever. Tema livre!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Keynotes Section */}
      <section className="py-16 bg-gradient-to-r from-pydata-orange to-pydata-orange-dark">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Keynotes
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {currentEvent.keynotes.map((keynote, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-2xl">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-pydata-teal to-pydata-teal-dark flex items-center justify-center">
                    <img
                      src={keynote.photo || "/placeholder.svg"}
                      alt={keynote.name}
                      className="w-32 h-32 rounded-full border-4 border-white object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <h4 className="text-xl font-bold text-pydata-dark mb-1">
                        {keynote.name}
                      </h4>
                      <p className="text-sm text-pydata-gray-dark">
                        {keynote.title}
                      </p>
                      <p className="text-sm text-pydata-teal font-semibold">
                        {keynote.company}
                      </p>
                    </div>
                    <h5 className="text-lg font-semibold text-pydata-dark mb-2">
                      {keynote.talk}
                    </h5>
                    <p className="text-pydata-gray-dark mb-4">
                      {keynote.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-pydata-orange font-semibold">
                        {keynote.time}
                      </span>
                      <Badge className="bg-pydata-orange text-white">
                        Keynote
                      </Badge>
                    </div>
                    <div className="flex justify-center space-x-3">
                      <a
                        href={keynote.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-pydata-teal text-white hover:bg-pydata-teal-dark transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={keynote.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-pydata-orange text-white hover:bg-pydata-orange-dark transition-colors"
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                      <a
                        href={keynote.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-pydata-gray-dark text-white hover:bg-pydata-dark transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="palestrantes" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-pydata-dark mb-12">
            Palestrantes
          </h3>
          <center>
            <Button onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfoInODCCM_OcbIoOdi-_CJ_V_pjtrr03ElcQ8-MO9T-_qd8g/viewform")}  className="bg-pydata-orange hover:bg-pydata-orange-dark text-white">
              Clique aqui
            </Button>
          </center>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentEvent.speakers.map((speaker, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-pydata-teal"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <img
                      src={speaker.photo || "/placeholder.svg"}
                      alt={speaker.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-pydata-orange-light"
                    />
                    <h4 className="text-lg font-bold text-pydata-dark">
                      {speaker.name}
                    </h4>
                    <p className="text-sm text-pydata-gray-dark">
                      {speaker.title}
                    </p>
                    <p className="text-sm text-pydata-teal font-semibold">
                      {speaker.company}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold text-pydata-dark mb-1">
                      {speaker.talk}
                    </h5>
                    <p className="text-sm text-pydata-orange">{speaker.time}</p>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-pydata-teal text-white hover:bg-pydata-teal-dark transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={speaker.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-pydata-orange text-white hover:bg-pydata-orange-dark transition-colors"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href={speaker.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-pydata-gray-dark text-white hover:bg-pydata-dark transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="cronograma" className="py-16 bg-pydata-light">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-pydata-dark mb-12">
            Cronograma
          </h3>

          {selectedEvent === "2025" ? (
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden border-l-4 ${
                      item.type === "keynote"
                        ? "border-pydata-orange"
                        : item.type === "talk"
                        ? "border-pydata-teal"
                        : item.type === "lightning"
                        ? "border-pydata-orange-light"
                        : item.type === "break"
                        ? "border-pydata-gray"
                        : "border-pydata-teal-light"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-3 rounded-full ${getScheduleColor(
                              item.type
                            )}`}
                          >
                            {getScheduleIcon(item.type)}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-pydata-dark">
                              {item.title}
                            </h4>
                            {item.speaker && (
                              <p className="text-sm text-pydata-gray-dark">
                                Por: {item.speaker}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-pydata-orange">
                            {item.time}
                          </span>
                          <Badge
                            className={`ml-2 ${
                              item.type === "keynote"
                                ? "bg-pydata-orange text-white"
                                : item.type === "talk"
                                ? "bg-pydata-teal text-white"
                                : item.type === "lightning"
                                ? "bg-pydata-orange-light text-pydata-dark"
                                : item.type === "break"
                                ? "bg-pydata-gray text-white"
                                : "bg-pydata-teal-light text-pydata-dark"
                            }`}
                          >
                            {item.type === "keynote"
                              ? "Keynote"
                              : item.type === "talk"
                              ? "Palestra"
                              : item.type === "lightning"
                              ? "Lightning"
                              : item.type === "break"
                              ? "Intervalo"
                              : "Cerimônia"}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto text-center">
              <Card className="p-8 border-2 border-pydata-teal">
                <CardContent>
                  <div className="mb-6">
                    <Clock className="h-16 w-16 text-pydata-teal mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-pydata-dark mb-2">
                      Cronograma do {currentEvent.title}
                    </h4>
                    <p className="text-pydata-gray-dark">
                      Este evento foi realizado em {currentEvent.date}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h5 className="font-semibold text-pydata-dark mb-3">
                        Keynotes
                      </h5>
                      <div className="space-y-2">
                        {currentEvent.keynotes.map((keynote, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <Star className="h-4 w-4 text-pydata-orange" />
                            <span className="text-sm text-pydata-gray-dark">
                              {keynote.time} - {keynote.talk}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-pydata-dark mb-3">
                        Palestras
                      </h5>
                      <div className="space-y-2">
                        {currentEvent.speakers
                          .slice(0, 3)
                          .map((speaker, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <Mic className="h-4 w-4 text-pydata-teal" />
                              <span className="text-sm text-pydata-gray-dark">
                                {speaker.time} - {speaker.talk}
                              </span>
                            </div>
                          ))}
                        {currentEvent.speakers.length > 3 && (
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-pydata-gray" />
                            <span className="text-sm text-pydata-gray-dark">
                              E mais {currentEvent.speakers.length - 3}{" "}
                              palestras...
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-pydata-gray-light">
                    <p className="text-sm text-pydata-gray-dark">
                      <strong>Local:</strong> {currentEvent.location} •
                      <strong> Participantes:</strong> {currentEvent.attendees}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="apoiadores" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-pydata-dark mb-12">
            Apoiadores
          </h3>

          <center>
            <Button className="bg-pydata-orange hover:bg-pydata-orange-dark text-white mb-10">
              Confira nosso plano de Patrocínio
            </Button>
          </center>

          {/* Gold Sponsors */}
          {currentEvent.sponsors.gold.length > 0 && (
            <div className="mb-12">
              <h4 className="text-2xl font-semibold text-center text-pydata-orange mb-8">
                Patrocínio Ouro
              </h4>
              <div className="flex justify-center gap-8 flex-wrap">
                {currentEvent.sponsors.gold.map((sponsor, index) => (
                  <a
                    key={index}
                    href={sponsor.website || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-pydata-orange group-hover:border-pydata-orange-dark group-hover:scale-105">
                      <div className="flex items-center justify-center">
                        <img
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.name}
                          className="h-32 w-auto mx-auto"
                        />
                         <ExternalLink className="hidden h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-pydata-orange" />
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Silver Sponsors */}
          {currentEvent.sponsors.silver.length > 0 && (
            <div className="mb-12">
              <h4 className="text-xl font-semibold text-center text-pydata-gray-dark mb-6">
                Patrocínio Prata
              </h4>
              <div className="flex justify-center gap-6 flex-wrap">
                {currentEvent.sponsors.silver.map((sponsor, index) => (
                  <a
                    key={index}
                    href={sponsor.website || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="p-4 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center justify-center">
                        <img
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.name}
                          className="h-28 w-auto mx-auto"
                        />
                         <ExternalLink className="hidden h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-pydata-gray-dark" />
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Bronze Sponsors */}
          {currentEvent.sponsors.bronze.length > 0 && (
            <div className="mb-12">
              <h4 className="text-lg font-semibold text-center text-pydata-gray-dark mb-6">
                Patrocínio Bronze
              </h4>
              <div className="flex justify-center gap-6 flex-wrap">
                {currentEvent.sponsors.bronze.map((sponsor, index) => (
                  <a
                    key={index}
                    href={sponsor.website || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="p-3 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center justify-center">
                        <img
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.name}
                          className="h-24 w-auto mx-auto"
                        />
                         <ExternalLink className="hidden h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-pydata-gray-dark" />
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Community Sponsors */}
          {currentEvent.sponsors.community.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-center text-pydata-teal mb-6">
                Apoio da Comunidade
              </h4>
              <div className="flex justify-center gap-6 flex-wrap">
                {currentEvent.sponsors.community.map((sponsor, index) => (
                  <a
                    key={index}
                    href={sponsor.website || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="p-3 hover:shadow-lg transition-all duration-300 border border-pydata-teal group-hover:border-pydata-teal-dark group-hover:scale-105">
                      <div className="flex items-center justify-center">
                        <img
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.name}
                          className="h-16 w-auto mx-auto"
                        />
                         <ExternalLink className="hidden h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-pydata-teal" />
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-br from-pydata-light to-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-pydata-dark mb-4">
            Galeria de Fotos
          </h3>
          <p className="text-center text-pydata-gray-dark mb-12 max-w-2xl mx-auto">
            {currentEvent.status === "upcoming"
              ? "Momentos especiais da comunidade PyData e eventos de tecnologia no Pará"
              : `Momentos especiais do ${currentEvent.title}`}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {currentEvent.photos.map((photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">
                      {photo.caption}
                    </p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-pydata-orange rounded-full flex items-center justify-center">
                     <ExternalLink className="hidden h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-pydata-teal text-pydata-teal hover:bg-pydata-teal hover:text-white bg-transparent"
            >
              Ver Mais Fotos
            </Button>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-pydata-light">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-pydata-dark mb-12">
            Assuntos Abordados
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Ciência de Dados",
                "Análise de dados",
                "Visualização de Dados",
                "Inteligência Artificial",
                "Aprendizado de máquina",
                "Big Data",
                "Aprendizado profundo",
                "Computação de alta escalabilidade",
                "IA generativa",
                "Processamento de Linguagem Natural",
                "Ética em IA",
                "Mineração de dados",
                "Visão Computacional",
                "Movimento do Software Livre",
              ].map((topic, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="p-3 text-center justify-center border-pydata-teal text-pydata-teal hover:bg-pydata-teal hover:text-white transition-colors"
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pydata-orange to-pydata-orange-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            {currentEvent.status === "upcoming"
              ? "Quer apoiar o evento?"
              : "Gostou do evento?"}
          </h3>
          <p className="text-xl mb-8 opacity-90">
            {currentEvent.status === "upcoming"
              ? "Sua marca como incentivadora de grupos minoritários em tecnologia"
              : "Acompanhe os próximos eventos da comunidade PyData Pará"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {currentEvent.status === "upcoming" ? (
              <>
                <Button
                  variant="outline"
                  className="bg-white text-pydata-orange hover:bg-pydata-light"
                >
                  Ver Plano de Patrocínio
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-pydata-orange"
                >
                  Entre em Contato
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="bg-white text-pydata-orange hover:bg-pydata-light"
                  onClick={() => setSelectedEvent("2025")}
                >
                  Ver Próximo Evento
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-pydata-orange"
                >
                  Seguir Comunidade
                </Button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Realization Section */}
      <section className="py-16 bg-white border-t border-pydata-gray-light">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-pydata-dark mb-4">
            Realização
          </h3>
          <p className="text-center text-pydata-gray-dark mb-12 max-w-2xl mx-auto">
            Uma iniciativa conjunta das principais comunidades de tecnologia e
            dados do Pará
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Açaí com Dados */}
            <Card className="overflow-hidden border-2 border-pydata-teal hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-pydata-teal to-pydata-teal-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <img
                    src="/placeholder.svg?height=80&width=80&text=Açaí+Dados"
                    alt="Açaí com Dados"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-bold text-pydata-dark mb-4">
                  Açaí com Dados
                </h4>
                <p className="text-pydata-gray-dark mb-6 leading-relaxed">
                  Comunidade voltada para a área de Dados no Norte do Brasil!
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/company/acai-com-dados/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-pydata-teal text-white hover:bg-pydata-teal-dark transition-colors"
                    title="LinkedIn Açaí com Dados"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/acaicomdados/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-pydata-orange text-white hover:bg-pydata-orange-dark transition-colors"
                    title="Instagram Açaí com Dados"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* GruPy PA */}
            <Card className="overflow-hidden border-2 border-pydata-orange hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-pydata-orange to-pydata-orange-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <img
                    src="/placeholder.svg?height=80&width=80&text=GruPy+PA"
                    alt="GruPy PA"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-bold text-pydata-dark mb-4">
                  GruPy PA
                </h4>
                <p className="text-pydata-gray-dark mb-6 leading-relaxed">
                  Comunidade de usuários e desenvolvedores que utilizam Python
                  no Pará 🏳️‍🌈
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://linkedin.com/company/grupy-pa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-pydata-teal text-white hover:bg-pydata-teal-dark transition-colors"
                    title="LinkedIn GruPy PA"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/grupypa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-pydata-orange text-white hover:bg-pydata-orange-dark transition-colors"
                    title="Instagram GruPy PA"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Porãygua */}
            <Card className="overflow-hidden border-2 border-pydata-teal hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-pydata-teal to-pydata-teal-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <img
                    src="/placeholder.svg?height=80&width=80&text=Porãygua"
                    alt="Porãygua"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-bold text-pydata-dark mb-4">
                  Porãygua
                </h4>
                <p className="text-pydata-gray-dark mb-6 leading-relaxed">
                  Comunidade de estudantes de computação do norte do Brasil 🌎
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/company/106975641"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-pydata-teal text-white hover:bg-pydata-teal-dark transition-colors"
                    title="LinkedIn Porãygua"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/poraygua/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-pydata-orange text-white hover:bg-pydata-orange-dark transition-colors"
                    title="Instagram Porãygua"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Union Message */}
          <div className="text-center mt-12">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-pydata-teal flex-1"></div>
                <div className="px-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pydata-teal to-pydata-orange rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="h-px bg-pydata-orange flex-1"></div>
              </div>
              <h4 className="text-xl font-semibold text-pydata-dark mb-4">
                União de Forças
              </h4>
              <p className="text-pydata-gray-dark leading-relaxed">
                O PyData Pará nasce da colaboração entre três das principais
                comunidades tech do estado do Pará, unindo expertise em dados e
                desenvolvimento Python para criar um evento único e inclusivo
                que representa a diversidade e inovação da Amazônia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pydata-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-pydata-orange to-pydata-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-xl font-bold">PyData Pará</span>
            </div>
            <p className="text-pydata-gray mb-4">
              Uma iniciativa da comunidade Python e Data Science do Pará
            </p>
            <p className="text-sm text-pydata-gray">
              Apoiado pela NumFocus • Evento gratuito e aberto à comunidade
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
