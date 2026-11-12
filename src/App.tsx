
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
} from "lucide-react";

const rooms = [
  {
    name: "Goa Trip",
    type: "Travel",
    members: 5,
    icon: Palmtree,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    description: "A little escape with the gang.",
    activity: "Updated 20 minutes ago",
  },
  {
    name: "Friday Dinner",
    type: "Expenses",
    members: 4,
    icon: Wallet,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    description: "Dinner plans and shared expenses.",
    activity: "Updated yesterday",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F10] text-[#F2F5F4]">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 flex-col border-r border-white/[0.07] bg-[#101516] p-6 md:flex">

          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-400 text-black font-bold">
              U
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-wide">
                US MATES
              </h1>
              <p className="text-xs text-zinc-500">
                Together, in one space.
              </p>
            </div>
          </div>

          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Workspace
          </p>

          <nav className="space-y-2">
            <a className="flex items-center gap-3 rounded-xl bg-teal-400/10 px-4 py-3 text-sm text-teal-300">
              <LayoutDashboard size={18} />
              Overview
            </a>

            <a className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-400 hover:bg-white/[0.04]">
              <Users size={18} />
              My Rooms
            </a>

            <a className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-400 hover:bg-white/[0.04]">
              <Compass size={18} />
              Discover
            </a>

            <a className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-400 hover:bg-white/[0.04]">
              <FolderOpen size={18} />
              Shared Files
            </a>
          </nav>

          <div className="mt-auto space-y-2">
            <a className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-400">
              <Settings size={18} />
              Settings
            </a>

            <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4">
              <p className="text-sm font-medium">Made for togetherness.</p>
              <p className="mt-1 text-xs text-zinc-500">
                Your people. Your spaces. Your plans.
              </p>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1">

          {/* Header */}
          <header className="flex h-[76px] items-center justify-between border-b border-white/[0.07] px-5 md:px-10">
            <div className="flex items-center gap-3 md:hidden">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-400 font-bold text-black">
                U
              </div>
              <span className="font-semibold">US MATES</span>
            </div>

            <div className="hidden items-center gap-2 text-sm text-zinc-500 md:flex">
              Workspace <span>/</span>
              <span className="text-white">Overview</span>
            </div>

            <div className="flex items-center gap-4">
              <button className="rounded-xl p-2 text-zinc-400 hover:bg-white/5">
                <Search size={19} />
              </button>
              <button className="rounded-xl p-2 text-zinc-400 hover:bg-white/5">
                <Bell size={19} />
              </button>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#283B39] text-sm font-semibold text-teal-300">
                U
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-7xl p-5 md:p-10">

            {/* Welcome */}
            <section className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm text-teal-400">
                  <Sparkles size={16} />
                  Your shared space
                </div>

                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Good to have you here.
                </h2>

                <p className="mt-3 text-sm text-zinc-500">
                  Everything your people are planning, all in one place.
                </p>
              </div>

              <button className="flex items-center justify-center gap-2 rounded-xl bg-teal-400 px-5 py-3 text-sm font-semibold text-[#07110F] transition hover:bg-teal-300">
                <Plus size={18} />
                Create a room
              </button>
            </section>

            {/* Quick actions */}
            <section className="mb-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.08] bg-[#121A19] p-5">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400">
                  <Plus size={20} />
                </div>
                <h3 className="font-medium">Create a room</h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Start a trip, split expenses or organise something new.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-teal-400">
                  Get started <ArrowUpRight size={16} />
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-[#121A19] p-5">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10 text-orange-400">
                  <Users size={20} />
                </div>
                <h3 className="font-medium">Join a room</h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Have an invitation? Enter a room and join your people.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-orange-400">
                  Enter invitation <ArrowUpRight size={16} />
                </div>
              </div>
            </section>

            {/* Rooms */}
            <section className="mb-10">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Your rooms</h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    Your spaces, all together.
                  </p>
                </div>
                <button className="text-sm text-zinc-400 hover:text-white">
                  View all
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {rooms.map((room) => {
                  const Icon = room.icon;

                  return (
                    <div
                      key={room.name}
                      className="rounded-2xl border border-white/[0.08] bg-[#121A19] p-5 transition hover:border-white/[0.16]"
                    >
                      <div className="mb-5 flex items-start justify-between">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${room.bg} ${room.color}`}>
                          <Icon size={21} />
                        </div>
                        <button className="text-zinc-500">
                          <MoreHorizontal size={20} />
                        </button>
                      </div>

                      <p className={`mb-2 text-xs ${room.color}`}>
                        {room.type}
                      </p>

                      <h4 className="text-lg font-semibold">
                        {room.name}
                      </h4>

                      <p className="mt-2 text-sm text-zinc-500">
                        {room.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4 text-xs text-zinc-500">
                        <span>{room.members} members</span>
                        <span>{room.activity}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Activity */}
            <section>
              <h3 className="mb-4 text-lg font-semibold">
                Recent activity
              </h3>

              <div className="rounded-2xl border border-white/[0.08] bg-[#121A19] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-400/10 text-teal-400">
                    <Compass size={17} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      Your group's next adventure starts here.
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      Create a room to get started.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
