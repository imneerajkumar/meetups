import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Point_Cabrillo_Lighthouse%2C_on_an_early_morning_in_February.jpg/640px-Point_Cabrillo_Lighthouse%2C_on_an_early_morning_in_February.jpg",
    address: "Some random address",
    description: "This is first meetup"
  },
  {
    id: "m2",
    title: "Second Meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Point_Cabrillo_Lighthouse%2C_on_an_early_morning_in_February.jpg/640px-Point_Cabrillo_Lighthouse%2C_on_an_early_morning_in_February.jpg",
    address: "Some random address",
    description: "This is second meetup"
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;