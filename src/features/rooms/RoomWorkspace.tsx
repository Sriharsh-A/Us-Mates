
import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  ExternalLink,
  FileText,
  Image,
  Link2,
  Map,
  MapPin,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Navigation,
  Plus,
  Share2,
  Sparkles,
  Users,
  Wallet,
  X,
  Palmtree,
  Hotel,
  Coffee,
  Utensils,
  Mountain,
} from "lucide-react";

export type RoomData = {
  id: number;
  name: string;
  type: string;
  members: number;
  description: string;
  activity: string;
};

type Props = {
  room: RoomData;
  onBack: () => void;
};

const days = [
  {
    day: "01",
    date: "Day One",
    title: "The beginning",
    subtitle: "Arrival & settling in",
    stops: [
      {
        time: "09:00 AM",
        title: "Meet-up point",
        description: "Everyone meets before starting the journey.",
        icon: Users,
        type: "Meeting",
      },
      {
        time: "12:30 PM",
        title: "Lunch break",
        description: "A little food stop along the way.",
        icon: Utensils,
        type: "Food",
      },
      {
        time: "04:00 PM",
        title: "Check-in",
        description: "Reach the accommodation and settle in.",
        icon: Hotel,
        type: "Stay",
      },
      {
        time: "07:00 PM",
        title: "Evening plans",
        description: "Explore nearby places together.",
        icon: Palmtree,
        type: "Explore",
      },
    ],
  },
  {
    day: "02",
    date: "Day Two",
    title: "Out and about",
    subtitle: "Explore the destination",
    stops: [
      {
        time: "08:00 AM",
        title: "Breakfast",
        description: "Start the day together.",
        icon: Utensils,
        type: "Food",
      },
      {
        time: "10:00 AM",
        title: "Explore the coast",
        description: "Discover the places on our list.",
        icon: Palmtree,
        type: "Explore",
      },
      {
        time: "01:00 PM",
        title: "Lunch stop",
        description: "Find somewhere nice to eat.",
        icon: Coffee,
        type: "Food",
      },
      {
        time: "05:30 PM",
        title: "Sunset point",
        description: "Save some time for the sunset.",
        icon: Mountain,
        type: "Explore",
      },
    ],
  },
  {
    day: "03",
    date: "Day Three",
    title: "One last adventure",
    subtitle: "The final day",
    stops: [
      {
        time: "09:00 AM",
        title: "Breakfast",
        description: "A relaxed morning.",
        icon: Coffee,
        type: "Food",
      },
      {
        time: "11:00 AM",
        title: "Check-out",
        description: "Pack up and get ready.",
        icon: Hotel,
        type: "Stay",
      },
      {
        time: "01:00 PM",
        title: "Journey back",
        description: "Head back home with memories.",
        icon: Navigation,
        type: "Travel",
      },
    ],
  },
];

const tabs = [
  { name: "Journal", icon: Compass },
  { name: "Itinerary", icon: CalendarDays },
  { name: "Map", icon: Map },
  { name: "Stays", icon: Hotel },
  { name: "Expenses", icon: Wallet },
  { name: "Memories", icon: Camera },
  { name: "Chat", icon: MessageCircle },
];

function PaperCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-[#D3D0C6]/70 bg-[#E9E5D9] text-[#253650] shadow-[0_8px_24px_rgba(0,0,0,0.15)] ${className}`}
    >
      {children}
    </div>
  );
}

function RoomWorkspace({ room, onBack }: Props) {
  const [activeTab, setActiveTab] = useState("Journal");
  const [activeDay, setActiveDay] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);
  const [showAddStop, setShowAddStop] = useState(false);
  const [newStop, setNewStop] = useState("");
  const [stops, setStops] = useState(days);

  const isTravel = room.type === "TRAVEL";

  if (!isTravel) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#101018] p-6 text-white">
        <div className="max-w-sm text-center">
          <Wallet size={40} className="mx-auto mb-5 text-[#A995E8]" />
          <h1 className="text-2xl font-semibold">A different journey awaits.</h1>
          <p className="mt-3 text-sm text-[#898398]">
            The Expenses experience is coming after POSTCARD MODE.
          </p>
          <button
            onClick={onBack}
            className="mt-6 rounded-xl bg-[#B5A3EC] px-5 py-3 text-sm font-semibold text-[#171321]"
          >
            Back to rooms
          </button>
        </div>
      </div>
    );
  }

  const currentDay = stops[activeDay];

  const addStop = () => {
    if (!newStop.trim()) return;

    setStops((previous) =>
      previous.map((day, index) =>
        index === activeDay
          ? {
              ...day,
              stops: [
                ...day.stops,
                {
                  time: "TO BE DECIDED",
                  title: newStop.trim(),
                  description: "Add the details for this stop.",
                  icon: MapPin,
                  type: "Custom",
                },
              ],
            }
          : day
      )
    );

    setNewStop("");
    setShowAddStop(false);
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[#172B50] text-[#E9E5D9]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 10% 10%, rgba(70,110,153,.25), transparent 40%), radial-gradient(ellipse at 90% 80%, rgba(12,31,61,.7), transparent 45%)",
      }}
    >
      {/* TOP NAVIGATION */}

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#172B50]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-[1450px] items-center justify-between px-4 sm:px-8">

          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              aria-label="Back to dashboard"
              className="rounded-lg p-2 text-[#B9CBD8] hover:bg-white/10"
            >
              <ArrowLeft size={19} />
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#A8C9D9]/30 bg-[#315783] text-[#E9E5D9]">
              <Compass size={19} />
            </div>

            <div>
              <p className="text-sm font-semibold tracking-wide">
                POSTCARD<span className="text-[#A8C9D9]">.</span>
              </p>
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#A8C9D9]">
                A US MATES travel room
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden items-center gap-2 text-xs text-[#B9CBD8] sm:flex">
              <Users size={15} />
              {room.members} travellers
            </div>

            <button
              aria-label="Share trip"
              className="rounded-lg p-2 text-[#B9CBD8] hover:bg-white/10"
            >
              <Share2 size={17} />
            </button>

            <button
              aria-label="Room options"
              className="rounded-lg p-2 text-[#B9CBD8] hover:bg-white/10"
            >
              <MoreHorizontal size={19} />
            </button>
          </div>
        </div>
      </header>

      {/* TRIP HERO */}

      <main className="mx-auto max-w-[1450px] px-4 pb-16 pt-7 sm:px-8 sm:pt-10">

        <section className="relative mb-9 overflow-hidden rounded-2xl border border-white/10 bg-[#24446B] p-6 sm:p-10">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,.025) 4px), radial-gradient(circle at 90% 20%, #A8C9D9, transparent 30%)",
            }}
          />

          <div className="relative z-10 max-w-2xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#A8C9D9]/30 bg-[#172B50]/50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#C3DBE7]">
              <Sparkles size={13} />
              Our next adventure
            </div>

            <p className="mb-2 font-serif text-sm italic tracking-wide text-[#A8C9D9]">
              The travel journal of
            </p>

            <h1 className="font-serif text-4xl font-semibold tracking-tight text-[#F3F0E8] sm:text-6xl">
              {room.name}
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#D0DCE5]">
              {room.description || "A collection of places, people and memories waiting to happen."}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-[#172B50]/40 px-3 py-2 text-xs text-[#E4E9E9]">
                <CalendarDays size={15} />
                Dates to be added
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-[#172B50]/40 px-3 py-2 text-xs text-[#E4E9E9]">
                <Users size={15} />
                {room.members} travellers
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-10 -right-5 hidden rotate-[-12deg] text-[#A8C9D9]/20 md:block">
            <Compass size={210} strokeWidth={0.7} />
          </div>

          <div className="pointer-events-none absolute right-12 top-8 hidden rotate-12 rounded-sm border border-white/20 bg-[#E9E5D9] p-3 text-[#172B50] shadow-xl md:block">
            <div className="flex h-20 w-24 items-center justify-center border border-[#315783]/30">
              <Palmtree size={42} strokeWidth={1} />
            </div>
            <p className="mt-2 text-center font-serif text-[10px] italic">
              Wish you were here.
            </p>
          </div>
        </section>

        {/* JOURNAL NAVIGATION */}

        <nav className="mb-9 -mx-4 overflow-x-auto border-y border-white/10 bg-[#10223F]/60 px-4 sm:mx-0 sm:rounded-xl sm:border sm:px-3">
          <div className="flex min-w-max items-center gap-1 py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.name;

              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 rounded-lg px-3 py-3 text-xs transition ${
                    active
                      ? "bg-[#A8C9D9]/15 text-[#D7E8EE]"
                      : "text-[#9DB1C4] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={15} />
                  {tab.name}
                </button>
              );
            })}
          </div>
        </nav>

        {/* JOURNAL PAGE */}

        {activeTab === "Journal" && (
          <div className="grid gap-7 lg:grid-cols-[1.4fr_.8fr]">

            <section className="space-y-7">

              <div>
                <p className="mb-2 font-serif text-sm italic text-[#A8C9D9]">
                  Chapter one
                </p>
                <h2 className="font-serif text-3xl text-[#F0EDE4] sm:text-4xl">
                  The adventure begins.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#B5C6D5]">
                  One place to collect all our plans. From the first meeting
                  point to the last photograph, this is where the story comes together.
                </p>
              </div>

              {/* MAP PREVIEW */}

              <div className="relative overflow-hidden rounded-xl border-[5px] border-[#E9E5D9] bg-[#B8D0D7] shadow-xl">

                <div
                  className="relative flex min-h-[230px] items-center justify-center overflow-hidden"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(35deg, transparent 0px, transparent 18px, rgba(49,87,131,.07) 19px, transparent 21px), radial-gradient(ellipse at 30% 40%, #E5E4D6 0%, #B8D0D7 50%, #85ACBA 100%)",
                  }}
                >
                  <div className="absolute left-[15%] top-[20%] h-24 w-40 rotate-12 rounded-[45%] bg-[#E9E5D9]/60 blur-sm" />
                  <div className="absolute bottom-[10%] right-[10%] h-32 w-48 -rotate-12 rounded-[50%] bg-[#6F9BAE]/30 blur-sm" />

                  <div className="absolute left-[20%] top-[25%]">
                    <MapPin size={28} className="fill-[#315783] text-[#172B50]" />
                  </div>
                  <div className="absolute right-[25%] top-[45%]">
                    <MapPin size={28} className="fill-[#B66F65] text-[#753F43]" />
                  </div>

                  <div className="absolute bottom-[18%] left-[43%]">
                    <MapPin size={28} className="fill-[#315783] text-[#172B50]" />
                  </div>

                  <div className="absolute left-[26%] top-[34%] h-24 w-[45%] rotate-[23deg] border-t-2 border-dashed border-[#315783]/70" />

                  <div className="absolute bottom-3 right-3 rounded bg-[#E9E5D9]/90 px-3 py-1.5 text-[10px] font-semibold tracking-widest text-[#315783]">
                    OUR ROUTE
                  </div>
                </div>

              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif text-xl text-[#F0EDE4]">
                    The itinerary
                  </p>
                  <p className="mt-1 text-xs text-[#9DB1C4]">
                    A little plan for every day.
                  </p>
                </div>

                <button
                  onClick={() => setActiveTab("Itinerary")}
                  className="flex items-center gap-1 text-xs text-[#A8C9D9] hover:text-white"
                >
                  View all <ArrowUpRight size={14} />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {stops.map((day, index) => (
                  <button
                    key={day.day}
                    onClick={() => {
                      setActiveDay(index);
                      setActiveTab("Itinerary");
                    }}
                    className="rounded-xl border border-white/10 bg-[#213B5B] p-3 text-left transition hover:border-[#A8C9D9]/50"
                  >
                    <span className="font-serif text-2xl text-[#A8C9D9]">
                      {day.day}
                    </span>
                    <p className="mt-2 text-xs font-medium text-[#F0EDE4]">
                      {day.date}
                    </p>
                    <p className="mt-1 text-[10px] text-[#9DB1C4]">
                      {day.stops.length} stops
                    </p>
                  </button>
                ))}
              </div>

            </section>

            {/* SIDE JOURNAL */}

            <aside className="space-y-6">

              <PaperCard className="rotate-[1deg] p-5">
                <p className="font-serif text-xs italic text-[#647D91]">
                  A little reminder
                </p>

                <h3 className="mt-3 font-serif text-2xl font-semibold">
                  Don't forget to enjoy the journey.
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-[#657386]">
                  Plans can change. The best moments are sometimes the
                  unplanned ones.
                </p>

                <div className="mt-5 flex justify-end">
                  <span className="font-serif text-xs italic text-[#647D91]">
                    — Our travel journal
                  </span>
                </div>
              </PaperCard>

              <div className="rounded-xl border border-white/10 bg-[#213B5B] p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl">Our people</h3>
                  <Users size={18} className="text-[#A8C9D9]" />
                </div>

                <div className="mt-5 flex -space-x-2">
                  {["H", "R", "A", "S", "K"].slice(0, room.members).map((letter, index) => (
                    <div
                      key={index}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#213B5B] bg-[#A8C9D9] text-xs font-bold text-[#172B50]"
                    >
                      {letter}
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs text-[#B5C6D5]">
                  {room.members} people, one adventure.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#213B5B] p-5">
                <div className="flex items-center gap-2">
                  <Image size={18} className="text-[#A8C9D9]" />
                  <h3 className="font-serif text-xl">Memories</h3>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-[#9DB1C4]">
                  Photos, videos and little moments from the trip.
                </p>

                <button
                  onClick={() => setActiveTab("Memories")}
                  className="mt-4 flex items-center gap-2 text-xs text-[#A8C9D9]"
                >
                  Open memories <ArrowUpRight size={14} />
                </button>
              </div>

            </aside>
          </div>
        )}

        {/* ITINERARY */}

        {activeTab === "Itinerary" && (
          <section className="mx-auto max-w-4xl">

            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-serif text-sm italic text-[#A8C9D9]">
                  The pages of our journey
                </p>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
                  Our itinerary
                </h2>
                <p className="mt-2 text-xs text-[#9DB1C4]">
                  Every stop, every little plan.
                </p>
              </div>

              <button
                onClick={() => setShowAddStop(true)}
                className="flex items-center gap-2 rounded-lg bg-[#A8C9D9] px-4 py-3 text-xs font-semibold text-[#172B50] hover:bg-[#D1E4E9]"
              >
                <Plus size={15} />
                Add a stop
              </button>
            </div>

            <div className="mb-7 flex gap-2 overflow-x-auto pb-2">
              {stops.map((day, index) => (
                <button
                  key={day.day}
                  onClick={() => setActiveDay(index)}
                  className={`min-w-[110px] rounded-lg border p-3 text-left transition ${
                    activeDay === index
                      ? "border-[#A8C9D9]/50 bg-[#315783]"
                      : "border-white/10 bg-[#213B5B]"
                  }`}
                >
                  <p className="font-serif text-2xl text-[#A8C9D9]">
                    {day.day}
                  </p>
                  <p className="mt-1 text-xs font-medium">
                    {day.date}
                  </p>
                </button>
              ))}
            </div>

            <PaperCard className="mb-7 p-5 sm:p-7">
              <p className="font-serif text-xs italic text-[#647D91]">
                {currentDay.subtitle}
              </p>
              <h3 className="mt-2 font-serif text-3xl font-semibold">
                {currentDay.title}
              </h3>
              <p className="mt-2 text-xs text-[#647D91]">
                A page from our adventure.
              </p>
            </PaperCard>

            <div className="relative ml-3 space-y-6 border-l border-dashed border-[#A8C9D9]/40 pl-6 sm:ml-5 sm:pl-9">
              {currentDay.stops.map((stop, index) => {
                const Icon = stop.icon;

                return (
                  <div key={`${stop.title}-${index}`} className="relative">
                    <div className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#172B50] bg-[#A8C9D9] sm:-left-[42px]" />

                    <div className="rounded-xl border border-white/10 bg-[#213B5B] p-4 sm:p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-[#A8C9D9]">
                          <Clock size={13} />
                          {stop.time}
                        </div>
                        <span className="rounded-full bg-white/[0.06] px-2 py-1 text-[9px] text-[#B5C6D5]">
                          {stop.type}
                        </span>
                      </div>

                      <div className="mt-4 flex gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#A8C9D9]/10 text-[#A8C9D9]">
                          <Icon size={19} />
                        </div>

                        <div>
                          <h4 className="font-serif text-xl">
                            {stop.title}
                          </h4>
                          <p className="mt-1 text-xs leading-relaxed text-[#9DB1C4]">
                            {stop.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </section>
        )}

        {/* MAP */}

        {activeTab === "Map" && (
          <section>
            <div className="mb-7">
              <p className="font-serif text-sm italic text-[#A8C9D9]">
                Find our way
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
                Our map
              </h2>
              <p className="mt-2 text-xs text-[#9DB1C4]">
                Places we want to see, stops we want to make.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.5fr_.7fr]">

              <div
                className="relative min-h-[390px] overflow-hidden rounded-xl border-[6px] border-[#E9E5D9] bg-[#C7D8D6] shadow-xl"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent 0px, transparent 38px, rgba(49,87,131,.1) 39px), repeating-linear-gradient(90deg, transparent 0px, transparent 38px, rgba(49,87,131,.1) 39px), radial-gradient(ellipse at 20% 20%, #E7E3D5, #B5CFD0 65%, #83ABB8)",
                }}
              >
                <div className="absolute left-[12%] top-[15%] rotate-[-15deg] rounded border border-[#315783]/30 bg-[#E9E5D9]/90 px-3 py-2 font-serif text-xs italic text-[#315783]">
                  Meeting point
                </div>

                <div className="absolute left-[25%] top-[35%] text-[#244D72]">
                  <MapPin size={32} className="fill-[#315783] text-[#172B50]" />
                </div>

                <div className="absolute left-[58%] top-[50%] text-[#753F43]">
                  <MapPin size={32} className="fill-[#B66F65] text-[#753F43]" />
                </div>

                <div className="absolute bottom-[18%] right-[18%] text-[#244D72]">
                  <MapPin size={32} className="fill-[#315783] text-[#172B50]" />
                </div>

                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 400" preserveAspectRatio="none">
                  <path
                    d="M145 145 Q260 110 350 230 T495 315"
                    fill="none"
                    stroke="#315783"
                    strokeWidth="3"
                    strokeDasharray="8 8"
                  />
                </svg>

                <div className="absolute bottom-3 left-3 rounded bg-[#E9E5D9]/90 px-3 py-2 text-[10px] font-semibold tracking-widest text-[#315783]">
                  TRAVEL ROUTE
                </div>
              </div>

              <div className="space-y-3">
                <PaperCard className="p-5">
                  <h3 className="font-serif text-xl">Places to visit</h3>
                  <p className="mt-2 text-xs text-[#647D91]">
                    Add destinations and meeting points to the journey.
                  </p>
                  <div className="mt-5 space-y-3 text-xs">
                    <div className="flex items-center gap-2">
                      <MapPin size={15} />
                      Meeting point
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee size={15} />
                      Tea break
                    </div>
                    <div className="flex items-center gap-2">
                      <Hotel size={15} />
                      Accommodation
                    </div>
                  </div>
                </PaperCard>

                <div className="rounded-xl border border-white/10 bg-[#213B5B] p-5">
                  <p className="font-serif text-lg">A note about the map</p>
                  <p className="mt-2 text-xs leading-relaxed text-[#9DB1C4]">
                    This is a visual map preview. We'll connect real map tiles,
                    searchable locations, draggable pins and route directions
                    in the mapping milestone.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* STAYS */}

        {activeTab === "Stays" && (
          <section className="mx-auto max-w-4xl">
            <p className="font-serif text-sm italic text-[#A8C9D9]">
              Somewhere to call home
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
              Our stays
            </h2>
            <p className="mt-2 text-xs text-[#9DB1C4]">
              All our accommodation links in one place.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <PaperCard className="p-5">
                <Hotel size={24} />
                <h3 className="mt-4 font-serif text-2xl">
                  Accommodation one
                </h3>
                <p className="mt-2 text-xs text-[#647D91]">
                  Add hotel name, location and booking information.
                </p>
                <button className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#315783]">
                  <Plus size={14} />
                  Add accommodation
                </button>
              </PaperCard>

              <div className="flex min-h-[190px] flex-col items-center justify-center rounded-xl border border-dashed border-white/20 p-5 text-center">
                <Link2 size={25} className="mb-3 text-[#A8C9D9]" />
                <p className="text-sm font-medium">Save a booking link</p>
                <p className="mt-2 text-xs text-[#9DB1C4]">
                  Keep your reservation links together.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* EXPENSES PLACEHOLDER */}

        {activeTab === "Expenses" && (
          <section className="mx-auto max-w-3xl">
            <p className="font-serif text-sm italic text-[#A8C9D9]">
              Keeping track of the journey
            </p>
            <h2 className="mt-2 font-serif text-3xl">
              Trip expenses
            </h2>
            <div className="mt-7 rounded-xl border border-white/10 bg-[#213B5B] p-6">
              <Wallet size={25} className="mb-4 text-[#A8C9D9]" />
              <h3 className="font-serif text-2xl">The group wallet</h3>
              <p className="mt-2 text-xs text-[#9DB1C4]">
                Trip-specific expense tracking will be built as part of our
                Travel module before we move to the full Expenses experience.
              </p>
            </div>
          </section>
        )}

        {/* MEMORIES */}

        {activeTab === "Memories" && (
          <section>
            <p className="font-serif text-sm italic text-[#A8C9D9]">
              Little moments worth keeping
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
              Our memories
            </h2>
            <p className="mt-2 text-xs text-[#9DB1C4]">
              The photographs and stories from our journey.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {["The beginning", "Somewhere along the way", "The little moments"].map((label, index) => (
                <div
                  key={label}
                  className={`rotate-${index === 1 ? "2" : "1"} bg-[#E9E5D9] p-3 pb-8 text-[#253650] shadow-xl`}
                >
                  <div className="flex aspect-square items-center justify-center bg-[#B8CFD9]">
                    <Camera size={35} className="text-[#315783]" />
                  </div>
                  <p className="mt-3 text-center font-serif text-sm italic">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-dashed border-white/20 p-6 text-center">
              <Image className="mx-auto mb-3 text-[#A8C9D9]" size={27} />
              <p className="text-sm font-medium">Add your memories</p>
              <p className="mt-2 text-xs text-[#9DB1C4]">
                Google Drive albums and photo uploads will be connected later.
              </p>
            </div>
          </section>
        )}

        {/* CHAT */}

        {activeTab === "Chat" && (
          <section className="mx-auto max-w-3xl">
            <p className="font-serif text-sm italic text-[#A8C9D9]">
              Notes from everyone
            </p>
            <h2 className="mt-2 font-serif text-3xl">Trip conversations</h2>

            <div className="mt-7 flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-white/10 bg-[#213B5B] p-6 text-center">
              <MessageCircle size={35} className="mb-4 text-[#A8C9D9]" />
              <h3 className="font-serif text-2xl">Let's talk about the trip.</h3>
              <p className="mt-2 max-w-sm text-xs leading-relaxed text-[#9DB1C4]">
                Group chat and live messaging will be connected when we build
                the shared backend.
              </p>
            </div>
          </section>
        )}

      </main>

      {/* ADD ITINERARY STOP MODAL */}

      {showAddStop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-xl border border-[#A8C9D9]/20 bg-[#E9E5D9] p-6 text-[#253650] shadow-2xl">

            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="font-serif text-xs italic text-[#647D91]">
                  Add a new memory
                </p>
                <h3 className="mt-1 font-serif text-2xl">
                  New stop
                </h3>
              </div>

              <button
                onClick={() => setShowAddStop(false)}
                aria-label="Close"
              >
                <X size={19} />
              </button>
            </div>

            <label className="mb-2 block text-xs font-semibold">
              What are we doing?
            </label>

            <input
              autoFocus
              value={newStop}
              onChange={(event) => setNewStop(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") addStop();
              }}
              placeholder="e.g. Stop for tea..."
              className="w-full rounded-lg border border-[#315783]/20 bg-white/70 px-4 py-3 text-sm outline-none focus:border-[#315783]"
            />

            <button
              onClick={addStop}
              disabled={!newStop.trim()}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#315783] px-4 py-3 text-sm font-semibold text-white hover:bg-[#24446B] disabled:opacity-40"
            >
              <Plus size={16} />
              Add to itinerary
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomWorkspace;
