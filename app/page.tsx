import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <section>
      <div>
        <Navbar />
      </div>

      <div>
        <div>
          <h1>Welcome to Eventia</h1>
          <h1>Lets Book Your Event</h1>
          <p>Book live events and discover concerts, events, theatre, and more</p>
        </div>
      </div>
    </section>
  );
}