import { useState } from "react";

const JSONDATA = [
  {
    id: 1,
    first_name: "Adriaens",
    last_name: "Chitty",
    email: "achitty0@japanpost.jp",
    gender: "Female",
  },
  {
    id: 2,
    first_name: "Alano",
    last_name: "Wafer",
    email: "awafer1@youku.com",
    gender: "Genderfluid",
  },
  {
    id: 3,
    first_name: "Ashly",
    last_name: "Cornier",
    email: "acornier2@w3.org",
    gender: "Female",
  },
  {
    id: 4,
    first_name: "Carolus",
    last_name: "Golightly",
    email: "cgolightly3@cdc.gov",
    gender: "Male",
  },
  {
    id: 5,
    first_name: "Bord",
    last_name: "Bracer",
    email: "bbracer4@biblegateway.com",
    gender: "Male",
  },
  {
    id: 6,
    first_name: "Nevile",
    last_name: "Marchand",
    email: "nmarchand5@europa.eu",
    gender: "Male",
  },
  {
    id: 7,
    first_name: "Jens",
    last_name: "Kirrens",
    email: "jkirrens6@ebay.co.uk",
    gender: "Male",
  },
  {
    id: 8,
    first_name: "Carolin",
    last_name: "Talman",
    email: "ctalman7@irs.gov",
    gender: "Female",
  },
  {
    id: 9,
    first_name: "Eldredge",
    last_name: "Pawlick",
    email: "epawlick8@berkeley.edu",
    gender: "Male",
  },
  {
    id: 10,
    first_name: "Francine",
    last_name: "Varrow",
    email: "fvarrow9@nbcnews.com",
    gender: "Female",
  },
];
function SearchFilter() {
  const [search, setSearch] = useState("");
  

  return (
    <>
      <br />
      <input
        type="text"
        placeholder="Search Text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>SEARCH</button>
      {search}

      {JSONDATA.filter((user) => {
        if (search === "") {
          return user;
        } else if (
          user.first_name.toLowerCase().includes(search.toLowerCase())
        ) {
          return user;
        }
      }).map((user, index) => (
        <li key={user.id}>{user.first_name}</li>
      ))}
    </>
  );
}

export default SearchFilter;