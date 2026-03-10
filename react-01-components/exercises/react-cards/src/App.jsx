import Profile from "./components/Profile";

export default function App() {
  const cohort = [
    {
      id: 1,
      name: "Will Robinson",
      role: "Tech Trainer",
      note: "Status: Probs Waffling",
      avatar: "/feathers.jpg",
      color: "#588bb4",
    },
    {
      id: 2,
      name: "Thomas Crabtree",
      role: "Tech Trainer",
      note: "Loves Javascript!",
      avatar: "/kermit.jpg",
      color: "#e7e3e8",
    },
    {
      id: 3,
      name: "James Taylor",
      role: "Sales and recruitment",
      note: "When I grow up I want to be like Bielsa",
      avatar: "/pingu.jpg",
      color: "#ff6c6c",
    },
    {
    id: 3,
    name: "Rachel McMahon",
    role: "People person",
    note: "LOUD NOISES",
    avatar: "/lisa.jpg",
    color: "#ff6c6c",
    }
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {cohort.map((person) => (
        <Profile
          key={person.id}
          name={person.name}
          role={person.role}
          note={person.note}
          avatar={person.avatar}
          color={person.color}
        />
      ))}
    </div>
  );
}
