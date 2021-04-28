const discoverData: DiscoverItem[] = [
  {
    id: "discover-1",
    title: "Kayaking in the Tofino Sea",
    location: "Canada",
    image: require("../images/kayak.png"),
    imageBig: require("../images/kayak-big.png"),
    description:
      "An ideal introduction to sea kayaking around the stunning historical Islands of Tofino's harbour. Come explore the spectacular scenery of the area and learn what makes the area so fascinating.",
    liked: true,
    price: 50,
    rating: 5,
    duration: 2
  },
  {
    id: "discover-2",
    title: "Hiking the Grand Canyon",
    location: "USA",
    image: require("../images/canyon-1.png"),
    imageBig: require("../images/canyon.png"),
    description:
      "Great day hikes and backpacking routes on the North and South Rim of this century-old national park include easy hikes overlooking the rim and more rugged trekking options that descend into the canyon.",
    liked: true,
    price: 350,
    rating: 4.5,
    duration: 3
  }
];
export type DiscoverItem = {
  id: string;
  title: string;
  location: string;
  image: any;
  imageBig: any;
  description: any;
  liked: boolean;
  price: number;
  rating: number;
  duration: number;
};
export default discoverData;
