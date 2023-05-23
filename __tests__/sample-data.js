module.exports = {
  locations: [
    {
      street: "45 Davis Street",
      city: "Long Island City",
      state: "NY",
      zip: "11101",
    },
    {
      street: "23 Broadway",
      city: "New York",
      state: "NY",
      zip: "11011",
    },
  ],
  machines: [
    {
      brand: "Bowflex",
      model: "Bowflexer 4000",
      type: "Extreme Fitness Bench",
      purchased: 1986,
      location: 11101,
    },
    {
      brand: "Bowflex",
      model: "Bowflexer 4000",
      type: "Extreme Fitness Bench",
      purchased: 1996,
      location: 11101,
    },
    {
      brand: "Bowflex",
      model: "Bowflexer 4000",
      type: "Extreme Fitness Bench",
      purchased: 2006,
      location: 10011,
    },
  ],
  persons: [
    {
      name: "Najee",
      role: "member",
      plan: "gold",
      mainLocation: "11101",
    },
    {
      name: "Salina",
      role: "staff",
      plan: "staff",
      mainLocation: "11101",
    },
    {
      name: "Amandine",
      role: "member",
      plan: "silver",
      mainLocation: "10011",
    },
  ],
  plans: [
    {
      type: "bronze",
      price: 100,
      extras: [],
    },
    {
      type: "silver",
      price: 200,
      extras: ["Laundry service", "Free smoothie each visit"],
    },
    {
      type: "gold",
      price: 300,
      extras: ["Personal locker", "Monogrammed robe", "Sauna access"],
    },
  ],
  specialEvents: [
    {
      name: "Cinco De Muscles",
      date: "May 5, 2022",
      description: "Attend up to 5 fitness classes in one day, no extra cost!",
    },
    {
      name: "Lost Sock Memorial Day",
      date: "May 9, 2022",
      description:
        "Come together as a community to honor all the lost socks that have helped us with our fitness quests. Donate a lost sock, and get a protein smoothie!",
    },
    {
      name: "Hallowhoa",
      date: "October 31, 2022",
      description:
        "Professional photographers will be taking photos all day. Get your photo taken and share your hard work on every social media platform you want!",
    },
  ],
};

