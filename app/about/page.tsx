import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export default function AboutPage() {
  return (
    <section>
        <div>
            <Navbar /> 
        </div>
      <div className="max-w-7xl mx-auto py-16 px-6 text-gray-800">
        <h1 className="lg:text-4xl text-xl font-bold mb-3 mt-10 text-center text-gray-900">
          About Eventia
        </h1>

        <p className="lg:text-lg mb-4 leading-relaxed">
          Eventia is a creative event management company that specializes in
          bringing unforgettable experiences to life. From intimate gatherings
          to large scale conferences and celebrations, we design, plan, and
          execute events that inspire, engage, and connect people.
        </p>

        <p className="lg:text-lg mb-4 leading-relaxed">
          At Eventia, we believe that every event tells a story, your story.
          That’s why we approach each project with creativity, precision, and
          passion, ensuring every detail reflects your vision and leaves a
          lasting impression on your guests.
        </p>

        <p className="lg:text-lg mb-4 leading-relaxed">
          Our team is made up of experienced planners, designers, and
          strategists who love what they do. We combine artistry with logistics,
          creativity with structure, and innovation with reliability turning
          even the most ambitious ideas into reality.
        </p>

        <h2 className="lg:text-2xl text-lg font-semibold mt-10 mb-3 text-gray-900">
          Our Vision
        </h2>
        <p className="text-lg mb-4 leading-relaxed">
          To redefine the art of event creation by making every experience
          memorable, meaningful, and magical.
        </p>

        <h2 className="lg:text-2xl text-lg font-semibold mt-10 mb-3 text-gray-900">
          Our Mission
        </h2>
        <p className="text-lg mb-4 leading-relaxed">
          To craft extraordinary events that connect people, celebrate moments,
          and leave a lasting impact through creativity, collaboration, and
          flawless execution.
        </p>

        <h2 className="lg:text-2xl text-lg font-semibold mt-10 mb-3 text-gray-900">
          Our Values
        </h2>
        <ul className="list-disc list-inside lg:text-lg space-y-2">
          <li>
            <strong>Creativity:</strong> We dream big and turn imagination into
            experience.
          </li>
          <li>
            <strong>Excellence:</strong> Every detail matters from concept to
            curtain call.
          </li>
          <li>
            <strong>Integrity:</strong> We deliver on our promises with honesty
            and professionalism.
          </li>
          <li>
            <strong>Collaboration:</strong> We work hand in hand with our
            clients to bring visions to life.
          </li>
          <li>
            <strong>Joy:</strong> We believe every event should spark happiness
            and connection.
          </li>
        </ul>

        <p className="lg:text-lg mt-10 leading-relaxed">
          Whether it’s a corporate event, a wedding, a festival, or a private
          celebration, Eventia is your trusted partner for creating moments that
          matter.
        </p>
      </div>

      <div className="-mt-7">
        <Footer/>
      </div>
    </section>
  );
}
