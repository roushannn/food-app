const restaurants = [
  {
    _id: "5c342ac9fc13ae39f8000000",
    name: "The Burger Bar by Fatboy's Concepts (Boat Quay)",
    address: "35 Boat Quay, 049824 Singapore",
    openingTime: "11:00 AM",
    closingTime: "10:30 PM",
    cusine: { _id: "5c3430ecfc13ae122d000000", name: "Western" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000000.jpg"

  },
  {
    _id: "5c342ac9fc13ae39f8000001",
    name: "The Soup Spoon (Tanjong Pagar Exchange)",
    address: "120 Maxwell Road, Tanjong Pagar Xchange, B1-31, 069119 Singapore",
    openingTime: "12:00 PM",
    closingTime: "9:30 PM",
    cusine: { _id: "5c3430ecfc13ae122d000000", name: "Western" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000001.jpg"
  },
  {
    id: "5c342ac9fc13ae39f8000002",
    name: "Subway (Chinatown Point)",
    address: "133 New Bridge Road, #B1-37 Chinatown Point, 059413 Singapore",
    openingTime: "10:00 AM",
    closingTime: "9:30 PM",
    cusine: { _id: "5c3430ecfc13ae122d000000", name: "Western" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000002.jpg"
  },
  {
    _id: "5c342ac9fc13ae39f8000003",
    name: "Ramen Champion",
    address:
      "#03-89, 6 Eu Tong Sen Street, The Central, Clarke Quay, Lower Central, 059817 Singapore",
    openingTime: "11:00 AM",
    closingTime: "10:00 PM",
    cusine: { _id: "5c3430ecfc13ae122d000001", name: "Japanese" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000003.jpg"
  },
  {
    _id: "5c342ac9fc13ae39f8000004",
    name: "Umi Sushi (One Raffles Place)",
    address:
      "B1-24/25, 1 Raffles Place, OUB Centre, Clarke Quay, Lower Central, 048616 Singapore",
    openingTime: "11:00 AM",
    closingTime: "8:00 PM",
    cusine: { _id: "5c3430ecfc13ae122d000001", name: "Japanese" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000004.jpg"
  },
  {
    _id: "5c342ac9fc13ae39f8000005",
    name: "Aroy Dee Thai Kitchen (Boat Quay)",
    address: "1 Lor Telok, River Valley, West Central, 049014 Singapore",
    openingTime: "11:30 AM",
    closingTime: "10:30 PM",
    cusine: { _id: "5c3430ecfc13ae122d000002", name: "Thai" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000005.jpg"
  },
  {
    _id: "5c342ac9fc13ae39f8000006",
    name: "Basil & Mint Thai Street Eats",
    address:
      "01-47, Telok Ayer Street, Amoy Street Food Centre, Tanjong Pagar, 069111 Singapore",
    openingTime: "11:30 AM",
    closingTime: "8:00 PM",
    cusine: { _id: "5c3430ecfc13ae122d000002", name: "Thai" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000006.jpg"
  },
  {
    _id: "5c342ac9fc13ae39f8000007",
    name: "Penang Kitchen (Amoy Street)",
    address:
      "Stall 32, 7 Maxwell Road, Amoy Street Food Centre, Lower Central, 069111 Singapore",
    openingTime: "10:00 AM",
    closingTime: "7:00 PM",
    cusine: { _id: "5c3430ecfc13ae122d000003", name: "Chinese" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000007.jpg"
  },
  {
    _id: "5c342ac9fc13ae39f8000008",
    name: "Authentic Hock Lam Street Popular Beef",
    address: "6 North Canal Road, Clarke Quay, Lower Central, 048819 Singapore",
    openingTime: "11:00 AM",
    closingTime: "8:30 PM",
    cusine: { _id: "5c3430ecfc13ae122d000003", name: "Chinese" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000008.jpg"
  },
  {
    _id: "5c342ac9fc13ae39f8000009",
    name: "Peach Garden (Chinatown Point)",
    address:
      "#02-36, 133 New Bridge Road, Chinatown Point, Lower Central, 059413 Singapore",
    openingTime: "11:00 AM",
    closingTime: "9:30 PM",
    cusine: { _id: "5c3430ecfc13ae122d000003", name: "Chinese" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000009.jpg"
  }
];

export function getRestaurants() {
  return restaurants;
}

export function getResturant(id) {
  return restaurants.find(restaurant => restaurant._id === id);
}
