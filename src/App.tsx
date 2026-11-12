
import { useState } from "react";
import {
  ArrowUpRight,
  Bell,
  Compass,
  LayoutDashboard,
  Plus,
  Settings,
  Users,
  Wallet,
  Palmtree,
  FolderOpen,
  MoreHorizontal,
  Search,
  Sparkles,
  Menu,
  X,
  ChevronRight,
  Clock3,
  Heart,
} from "lucide-react";

import RoomWorkspace, {
  type RoomData,
} from "./features/rooms/RoomWorkspace";

// ------------------------------------------
// INITIAL ROOM DATA
// ------------------------------------------

const initialRooms: RoomData[] = [
  {
    id: 1,
    name: "Goa Trip",
    type: "TRAVEL",
    members: 5,
    description: "A little escape with the gang.",
    activity: "20 min ago",
  },
  {
    id: 2,
    name: "Friday Dinner",
    type: "EXPENSES",
    members: 4,
    description: "Good food, shared bills.",
    activity: "Yesterday",
  },
];

// ------------------------------------------
// SIDEBAR NAVIGATION
// ------------------------------------------

const navigation = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "My Rooms", icon: Users },
  { label: "Discover", icon: Compass },
  { label: "Shared Files", icon: FolderOpen },
];

// ------------------------------------------
// MAIN APPLICATION
// ------------------------------------------

function App() {
  const [rooms, setRooms] = useState<RoomData[]>(initialRooms);

  const [activeNav, setActiveNav] = useState("My Rooms");

  const [selectedRoom, setSelectedRoom] =
    useState<RoomData | null>(null);

  const [mobileMenu, setMobileMenu] = useState(false);

  const [modal, setModal] = useState<"create" | "join" | null>(null);

  const [roomInput, setRoomInput] = useState("");

  const [roomType, setRoomType] = useState("TRAVEL");

  const [searchOpen, setSearchOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  // ----------------------------------------
  // MODAL
  // ----------------------------------------

  const closeModal = () => {
    setModal(null);
    setRoomInput("");
    setRoomType("TRAVEL");
  };

  // ----------------------------------------
  // CREATE ROOM
  // ----------------------------------------

  const handleCreateRoom = () => {
    if (!roomInput.trim()) return;

    const newRoom: RoomData = {
      id: Date.now(),
      name: roomInput.trim(),
      type: roomType,
      members: 1,
      description:
        roomType === "TRAVEL"
          ? "A new adventure starts here."
          : "Keep your shared expenses organised.",
      activity: "Just now",
    };

    setRooms((previous) => [newRoom, ...previous]);

    closeModal();

    setSelectedRoom(newRoom);
  };

  // ----------------------------------------
  // JOIN ROOM
  // ----------------------------------------

  const handleJoinRoom = () => {
    if (!roomInput.trim()) return;

    alert(
      "Invitation requests will be connected to Supabase in the backend milestone."
    );

    closeModal();
  };

  // ----------------------------------------
  // ROOM WORKSPACE
  // ----------------------------------------

  if (selectedRoom) {
    return (
      <RoomWorkspace
        room={selectedRoom}
        onBack={() => {
          setSelectedRoom(null);
          setActiveNav("My Rooms");
        }}
      />
    );
  }

  // ----------------------------------------
  // FILTER ROOMS
  // ----------------------------------------

  const visibleRooms = rooms.filter((room) => {
    const matchesSearch = room.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesNav =
      activeNav !== "My Rooms" ||
      room.name.length > 0;

    return matchesSearch && matchesNav;
  });

  // ----------------------------------------
  // DASHBOARD
  // ----------------------------------------

  return (
    <div className="min-h-screen bg-[#101018] text-[#F1ECF5] selection:bg-[#A995E8]/30">

      <div className="flex min-h-screen">

        {/* ================= SIDEBAR ================= */}

        <aside className="hidden w-[250px] shrink-0 flex-col border-r border-white/[0.06] bg-[#14131D] px-5 py-7 lg:flex">

          {/* BRAND */}

          <div className="mb-12 flex items-center gap-3 px-2">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D99BB8] to-[#A995E8] text-lg font-bold text-[#17131F]">
              U
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight">
                US MATES<span className="text-[#D99BB8]">.</span>
              </h1>

              <p className="text-[11px] text-[#898398]">
                Better together.
              </p>
            </div>

          </div>

          {/* NAVIGATION */}

          <p className="mb-4 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#777386]">
            Workspace
          </p>

          <nav className="space-y-2">

            {navigation.map((item) => {
              const Icon = item.icon;
              const active = activeNav === item.label;

              return (
                <button
                  key={item.label}
                  onClick={() => setActiveNav(item.label)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                    active
                      ? "bg-[#A995E8]/10 text-[#C1B2F3]"
                      : "text-[#9691A4] hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <Icon size={18} />

                  {item.label}

                  {active && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#D99BB8]" />
                  )}
                </button>
              );
            })}

          </nav>

          {/* SIDEBAR BOTTOM */}

          <div className="mt-auto space-y-5">

            <div className="rounded-2xl border border-[#A995E8]/10 bg-gradient-to-br from-[#A995E8]/10 to-[#D99BB8]/5 p-4">

              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#A995E8]/15 text-[#BCA9F0]">
                <Heart size={17} />
              </div>

              <p className="text-sm font-semibold">
                Made for your people.
              </p>

              <p className="mt-1 text-xs leading-relaxed text-[#898398]">
                Your people. Your plans. Your memories.
              </p>

            </div>

            <button
              onClick={() => setActiveNav("Settings")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-[#9691A4] hover:bg-white/[0.04]"
            >
              <Settings size={18} />
              Settings
            </button>

            <div className="flex items-center gap-3 border-t border-white/[0.06] pt-5">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#292438] font-semibold text-[#C1B2F3]">
                U
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  Your profile
                </p>
                <p className="text-xs text-[#777386]">
                  Welcome aboard!
                </p>
              </div>

              <MoreHorizontal
                size={18}
                className="text-[#777386]"
              />

            </div>

          </div>

        </aside>

        {/* ================= MAIN ================= */}

        <main className="min-w-0 flex-1">

          {/* HEADER */}

          <header className="sticky top-0 z-30 flex h-[64px] items-center justify-between border-b border-white/[0.06] bg-[#101018]/90 px-4 backdrop-blur-xl md:h-[72px] md:px-9">

            <div className="flex items-center gap-3">

              <button
                className="rounded-xl p-2 text-[#A49EB2] hover:bg-white/5 lg:hidden"
                onClick={() => setMobileMenu(!mobileMenu)}
                aria-label="Toggle navigation"
              >
                {mobileMenu ? <X size={21} /> : <Menu size={21} />}
              </button>

              <div className="flex items-center gap-2 text-sm">

                <span className="hidden text-[#777386] sm:block">
                  Workspace
                </span>

                <ChevronRight
                  size={14}
                  className="hidden text-[#555161] sm:block"
                />

                <span className="font-medium text-[#E9E3F0]">
                  {activeNav}
                </span>

              </div>

            </div>

            <div className="flex items-center gap-2 sm:gap-4">

              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search rooms"
                className="rounded-xl p-2 text-[#9691A4] hover:bg-white/5 hover:text-white"
              >
                <Search size={19} />
              </button>

              <button
                aria-label="Notifications"
                className="relative rounded-xl p-2 text-[#9691A4] hover:bg-white/5 hover:text-white"
              >
                <Bell size={19} />
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#D99BB8]" />
              </button>

              <div className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-[#A995E8]/20 bg-[#292438] text-sm font-semibold text-[#C1B2F3]">
                U
              </div>

            </div>

          </header>

          {/* SEARCH BAR */}

          {searchOpen && (
            <div className="border-b border-white/[0.06] bg-[#171622] px-4 py-3 md:px-9">
              <input
                autoFocus
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search your rooms..."
                className="w-full rounded-xl border border-white/10 bg-[#101018] px-4 py-3 text-sm outline-none focus:border-[#A995E8]/50"
              />
            </div>
          )}

          {/* MOBILE NAV */}

          {mobileMenu && (
            <div className="absolute inset-x-0 top-[64px] z-40 border-b border-white/[0.08] bg-[#171622] p-4 shadow-2xl lg:hidden">

              <nav className="space-y-1">

                {navigation.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.label}
                      onClick={() => {
                        setActiveNav(item.label);
                        setMobileMenu(false);
                      }}
                      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-[#C1B9CF] hover:bg-white/[0.05]"
                    >
                      <Icon size={18} />
                      {item.label}
                    </button>
                  );
                })}

                <button
                  onClick={() => {
                    setActiveNav("Settings");
                    setMobileMenu(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-[#C1B9CF] hover:bg-white/[0.05]"
                >
                  <Settings size={18} />
                  Settings
                </button>

              </nav>
            </div>
          )}

          {/* ================= DASHBOARD BODY ================= */}

          <div className="mx-auto max-w-[1450px] px-4 pb-12 pt-7 sm:px-6 md:px-9 md:pt-12">

            {/* WELCOME */}

            <section className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#A995E8]/15 bg-[#A995E8]/[0.07] px-3 py-1.5 text-[11px] font-medium text-[#C1B2F3] sm:text-xs">
                  <Sparkles size={13} />
                  Your little corner of the internet
                </div>

                <h2 className="text-[25px] font-semibold leading-tight tracking-tight sm:text-3xl lg:text-[42px]">
                  Good to have you{" "}
                  <span className="bg-gradient-to-r from-[#D99BB8] to-[#A995E8] bg-clip-text text-transparent">
                    here.
                  </span>
                </h2>

                <p className="mt-2 max-w-lg text-xs leading-relaxed text-[#918A9F] sm:mt-3 sm:text-sm">
                  All the things you're planning with your people,
                  finally in one place.
                </p>

              </div>

              <div className="hidden sm:block">
                <span className="rounded-full border border-white/[0.07] px-3 py-2 text-xs text-[#898398]">
                  Made for togetherness ✳
                </span>
              </div>

            </section>

            {/* YOUR ROOMS - PRIMARY */}

            {(activeNav === "My Rooms" || activeNav === "Overview") && (

              <section className="mb-10 sm:mb-12">

                <div className="mb-4 flex items-end justify-between sm:mb-6">

                  <div>
                    <div className="mb-1 flex items-center gap-2">

                      <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                        Your rooms
                      </h3>

                      <span className="rounded-full bg-[#A995E8]/10 px-2 py-0.5 text-[10px] font-medium text-[#BDAAF0]">
                        {visibleRooms.length}
                      </span>

                    </div>

                    <p className="text-xs text-[#898398] sm:text-sm">
                      Your spaces, all together.
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveNav("My Rooms")}
                    className="flex items-center gap-1 text-xs font-medium text-[#BDAAF0] hover:text-white sm:text-sm"
                  >
                    View all
                    <ChevronRight size={15} />
                  </button>

                </div>

                {/* ROOM GRID */}

                <div className="grid grid-cols-2 gap-3 sm:gap-4">

                  {visibleRooms.map((room) => {

                    const isTravel = room.type === "TRAVEL";

                    const Icon = isTravel ? Palmtree : Wallet;

                    const color = isTravel
                      ? "text-[#A995E8]"
                      : "text-[#D99BB8]";

                    const bg = isTravel
                      ? "bg-[#A995E8]/10"
                      : "bg-[#D99BB8]/10";

                    return (

                      <button
                        key={room.id}
                        onClick={() => setSelectedRoom(room)}
                        className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#191824] p-3 text-left transition duration-300 hover:-translate-y-1 hover:border-[#A995E8]/30 hover:bg-[#1D1B2A] sm:p-6"
                      >

                        <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-white/[0.025] blur-3xl transition group-hover:bg-white/[0.05]" />

                        <div className="relative mb-5 flex items-start justify-between sm:mb-7">

                          <div className={`flex h-10 w-10 items-center justify-center rounded-xl sm:h-12 sm:w-12 sm:rounded-2xl ${bg} ${color}`}>
                            <Icon size={20} />
                          </div>

                          <MoreHorizontal
                            size={19}
                            className="text-[#777386]"
                          />

                        </div>

                        <div className="relative">

                          <div className={`mb-1.5 text-[9px] font-bold tracking-[0.16em] sm:mb-2 sm:text-[10px] ${color}`}>
                            {room.type}
                          </div>

                          <h4 className="text-base font-semibold leading-snug tracking-tight sm:text-xl">
                            {room.name}
                          </h4>

                          <p className="mt-1.5 text-[11px] leading-relaxed text-[#898398] sm:mt-2 sm:text-sm">
                            {room.description}
                          </p>

                        </div>

                        <div className="relative mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.07] pt-3 sm:mt-7 sm:pt-4">

                          <div className="flex items-center gap-1.5 text-[10px] text-[#A49EB2] sm:gap-2 sm:text-xs">
                            <Users size={13} />
                            {room.members} members
                          </div>

                          <div className="hidden items-center gap-1.5 text-xs text-[#777386] sm:flex">
                            <Clock3 size={13} />
                            {room.activity}
                          </div>

                        </div>

                      </button>

                    );
                  })}

                  {/* CREATE ROOM */}

                  <button
                    onClick={() => setModal("create")}
                    className="flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/[0.13] bg-white/[0.015] p-3 text-center transition hover:border-[#A995E8]/40 hover:bg-[#A995E8]/[0.04] sm:min-h-[210px] sm:p-6"
                  >

                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#A995E8]/10 text-[#BDAAF0] sm:h-12 sm:w-12 sm:rounded-2xl">
                      <Plus size={21} />
                    </div>

                    <p className="text-sm font-semibold">
                      Create a room
                    </p>

                    <p className="mt-1 text-[10px] text-[#898398] sm:text-xs">
                      Start something new
                    </p>

                  </button>

                </div>

                {visibleRooms.length === 0 && (
                  <div className="mt-4 rounded-2xl border border-dashed border-white/10 p-6 text-center">
                    <Users size={28} className="mx-auto mb-3 text-[#A995E8]" />
                    <p className="text-sm font-medium">
                      No rooms found.
                    </p>
                    <p className="mt-1 text-xs text-[#898398]">
                      Try another search or create a new room.
                    </p>
                  </div>
                )}

              </section>
            )}

            {/* DISCOVER */}

            {activeNav === "Discover" && (
              <section className="mb-10 rounded-2xl border border-white/[0.07] bg-[#191824] p-6 sm:p-10">
                <Compass size={32} className="mb-4 text-[#BDAAF0]" />
                <h3 className="text-xl font-semibold">
                  Discover new spaces.
                </h3>
                <p className="mt-2 text-sm text-[#898398]">
                  Explore and join rooms shared by your people.
                </p>
                <button
                  onClick={() => setModal("join")}
                  className="mt-6 rounded-xl bg-[#B5A3EC] px-5 py-3 text-sm font-semibold text-[#171321]"
                >
                  Enter an invitation
                </button>
              </section>
            )}

            {/* SHARED FILES */}

            {activeNav === "Shared Files" && (
              <section className="rounded-2xl border border-white/[0.07] bg-[#191824] p-8 text-center">
                <FolderOpen size={35} className="mx-auto mb-4 text-[#BDAAF0]" />
                <h3 className="text-xl font-semibold">
                  Shared files
                </h3>
                <p className="mt-2 text-sm text-[#898398]">
                  Files from all your rooms will live here.
                </p>
              </section>
            )}

            {/* SECONDARY ACTIONS */}

            {(activeNav === "My Rooms" || activeNav === "Overview") && (
              <>

                <section className="mb-10">

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-[#E9E3F0] sm:text-base">
                      More ways to connect
                    </h3>
                    <p className="mt-1 text-xs text-[#777386]">
                      Bring your people into the space.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">

                    <button
                      onClick={() => setModal("create")}
                      className="group rounded-2xl border border-white/[0.07] bg-[#191824] p-3 text-left transition hover:border-[#A995E8]/30 hover:bg-[#1D1B2A] sm:p-5"
                    >

                      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-[#A995E8]/10 text-[#BDAAF0] sm:h-11 sm:w-11 sm:rounded-2xl">
                        <Plus size={19} />
                      </div>

                      <h4 className="text-sm font-semibold">
                        Create something new
                      </h4>

                      <p className="mt-2 text-[11px] leading-relaxed text-[#898398] sm:text-sm">
                        Start a trip, split expenses or organise something new.
                      </p>

                      <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[#BDAAF0]">
                        Get started
                        <ArrowUpRight size={14} />
                      </div>

                    </button>

                    <button
                      onClick={() => setModal("join")}
                      className="group rounded-2xl border border-white/[0.07] bg-[#191824] p-3 text-left transition hover:border-[#D99BB8]/30 hover:bg-[#201A25] sm:p-5"
                    >

                      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-[#D99BB8]/10 text-[#D99BB8] sm:h-11 sm:w-11 sm:rounded-2xl">
                        <Users size={19} />
                      </div>

                      <h4 className="text-sm font-semibold">
                        Join your people
                      </h4>

                      <p className="mt-2 text-[11px] leading-relaxed text-[#898398] sm:text-sm">
                        Have an invitation link? Jump into a space together.
                      </p>

                      <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[#D99BB8]">
                        Enter invitation
                        <ArrowUpRight size={14} />
                      </div>

                    </button>

                  </div>

                </section>

                {/* RECENT ACTIVITY */}

                <section>

                  <div className="mb-4">
                    <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                      Recent activity
                    </h3>
                    <p className="mt-1 text-xs text-[#898398] sm:text-sm">
                      What's happening in your spaces.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.07] bg-[#191824] p-4 sm:p-6">

                    <div className="flex items-center gap-3 sm:gap-4">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#A995E8]/10 text-[#BDAAF0] sm:h-11 sm:w-11 sm:rounded-2xl">
                        <Sparkles size={19} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium sm:text-sm">
                          Your next story starts here.
                        </p>
                        <p className="mt-1 text-[10px] text-[#898398] sm:text-sm">
                          Create a room and bring everyone together.
                        </p>
                      </div>

                      <ArrowUpRight size={17} className="text-[#777386]" />

                    </div>

                  </div>

                </section>

              </>
            )}

            {/* FOOTER */}

            <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-[10px] text-[#666174] sm:flex-row sm:text-xs">

              <p>US MATES © 2026</p>

              <p className="flex items-center gap-1.5">
                Made for your people
                <Heart
                  size={12}
                  className="fill-[#D99BB8] text-[#D99BB8]"
                />
              </p>

            </footer>

          </div>

        </main>

      </div>

      {/* ================= CREATE / JOIN MODAL ================= */}

      {modal && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >

          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#1B1927] p-6 shadow-2xl shadow-black/40">

            {/* MODAL HEADER */}

            <div className="mb-6 flex items-center justify-between">

              <div>
                <h3 className="text-xl font-semibold">
                  {modal === "create" ? "Create a room" : "Join a room"}
                </h3>

                <p className="mt-1 text-xs text-[#898398]">
                  {modal === "create"
                    ? "Bring your people together."
                    : "Enter an invitation link to continue."}
                </p>
              </div>

              <button
                onClick={closeModal}
                className="rounded-lg p-2 text-[#898398] hover:bg-white/5 hover:text-white"
                aria-label="Close dialog"
              >
                <X size={19} />
              </button>

            </div>

            {/* ROOM TYPE */}

            {modal === "create" && (

              <div className="mb-5">

                <label className="mb-2 block text-sm font-medium">
                  Choose your room type
                </label>

                <div className="grid grid-cols-2 gap-3">

                  <button
                    onClick={() => setRoomType("TRAVEL")}
                    className={`rounded-xl border p-4 text-left transition ${
                      roomType === "TRAVEL"
                        ? "border-[#A995E8]/50 bg-[#A995E8]/10"
                        : "border-white/10 bg-[#101018] hover:bg-white/[0.03]"
                    }`}
                  >
                    <Palmtree size={21} className="mb-3 text-[#A995E8]" />
                    <p className="text-sm font-semibold">Travel</p>
                    <p className="mt-1 text-[10px] text-[#898398]">
                      Trips and adventures
                    </p>
                  </button>

                  <button
                    onClick={() => setRoomType("EXPENSES")}
                    className={`rounded-xl border p-4 text-left transition ${
                      roomType === "EXPENSES"
                        ? "border-[#D99BB8]/50 bg-[#D99BB8]/10"
                        : "border-white/10 bg-[#101018] hover:bg-white/[0.03]"
                    }`}
                  >
                    <Wallet size={21} className="mb-3 text-[#D99BB8]" />
                    <p className="text-sm font-semibold">Expenses</p>
                    <p className="mt-1 text-[10px] text-[#898398]">
                      Shared spending
                    </p>
                  </button>

                </div>

              </div>

            )}

            {/* INPUT */}

            <label className="mb-2 block text-sm font-medium">
              {modal === "create" ? "Room name" : "Invitation link or code"}
            </label>

            <input
              autoFocus
              value={roomInput}
              onChange={(event) => setRoomInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  if (modal === "create") {
                    handleCreateRoom();
                  } else {
                    handleJoinRoom();
                  }
                }
              }}
              placeholder={
                modal === "create"
                  ? "e.g. Goa Trip, Friday Dinner..."
                  : "Paste your invitation link or code"
              }
              className="w-full rounded-xl border border-white/10 bg-[#101018] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#686274] focus:border-[#A995E8]/60 focus:ring-2 focus:ring-[#A995E8]/10"
            />

            {/* SUBMIT */}

            <button
              disabled={!roomInput.trim()}
              onClick={
                modal === "create"
                  ? handleCreateRoom
                  : handleJoinRoom
              }
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#B5A3EC] px-4 py-3 text-sm font-semibold text-[#171321] transition hover:bg-[#C4B5F3] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {modal === "create" ? "Create room" : "Find room"}
              <ArrowUpRight size={16} />
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;
