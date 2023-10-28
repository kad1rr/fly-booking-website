import { useState } from "react";
import AltTitle from "../components/AltTitle";
import Title from "../components/Title";
import Button from "../components/Button";
import Input from "../components/Input";
import ActiveLink from "../components/ActiveLink";
import {
  AlertTriangle,
  Bookmark,
  Briefcase,
  DollarSign,
  Home,
  List,
  Package,
} from "react-feather";

const Main = () => {
  const [exploreState, setExplateState] = useState("flight");

  const words = [
    "Best Comfort",
    "Safety For Passengers",
    "Best Quality",
    "Best Service",
    "Make Reservation",
    "Discover World",
    "Business Travel",
    "Very Economic",
  ];

  return (
    <div className="gap-y-4 overflow-hidden min-w-full h-auto text-white py-24 px-6 flex flex-col items-center">
      <img
        src="/main.png"
        alt=""
        className="bg-img bg-no-repeat absolute -mt-24 -z-10 h-[400px] min-w-full"
      />
      <div className="w-full flex flex-col items-start">
        <Title text={words[Math.floor(Math.random() * words.length)]} />
        <AltTitle text="Where Do You Want To Explore?" />
      </div>
      <div className="w-full h-auto text-black p-4 z-10 bg-white items-center mt-4 lg:mt-12 rounded-lg shadow-md">
        <div className="flex flex-row gap-x-4 lg:gap-x-8">
          <Button
            active={exploreState === "flight"}
            text="Flight"
            onClick={() => setExplateState("flight")}
          />
          <Button
            active={exploreState === "booking"}
            text="Manage Booking"
            onClick={() => setExplateState("booking")}
          />
          <Button
            active={exploreState === "status"}
            text="Status"
            onClick={() => setExplateState("status")}
          />
        </div>
        {exploreState === "flight" ? (
          <div className="items-center flex flex-col lg:flex-row mt-8 justify-start gap-4">
            <Input.VariableInput
              placeholder="From"
              variables={["istanbul", "samsun"]}
            />
            <Input.VariableInput
              placeholder="To"
              variables={["istanbul", "samsun"]}
            />
            <Input.DateInput placeholder="Date" />
            <Input.NumberInput placeholder="Passenger Count" />

            <ActiveLink href="#" text="Search" />
          </div>
        ) : exploreState === "booking" ? (
          <div className="items-center flex flex-col lg:flex-row mt-8 justify-start gap-4">
            <Input.TextInput placeholder="Ticket Code" />
            <Input.TextInput placeholder="Passenger Surname" />
            <ActiveLink href="#" text="Search" />
          </div>
        ) : (
          <div className="items-center flex flex-col lg:flex-row mt-8 justify-start gap-4">
            <Input.VariableInput
              variables={["arrival", "departure", "route"]}
              placeholder="Flight Type"
            />
            <Input.VariableInput
              placeholder="From"
              variables={["istanbul", "samsun"]}
            />
            <Input.VariableInput
              placeholder="To"
              variables={["istanbul", "samsun"]}
            />
            <Input.DateInput placeholder="Date" />
            or
            <Input.TextInput placeholder="Flight Number" />
            <ActiveLink href="#" text="Search" />
          </div>
        )}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <a
          href="#"
          className="w-full h-full gap-y-4 hover:shadow-lg transition-shadow flex flex-col shadow-md rounded-lg text-black p-2 items-center justify-around z-10 bg-white"
        >
          <div className="flex flex-row items-center p-4 rounded-full bg-gray-200">
            <Bookmark />
          </div>
          Seat Selection
        </a>
        <a
          href="#"
          className="w-full h-full gap-y-4 hover:shadow-lg transition-shadow flex flex-col shadow-md rounded-lg text-black p-2 items-center justify-around z-10 bg-white"
        >
          <div className="flex flex-row items-center p-4 rounded-full bg-gray-200">
            <Briefcase />
          </div>
          Extra Baggage
        </a>
        <a
          href="#"
          className="w-full h-full gap-y-4 hover:shadow-lg transition-shadow flex flex-col shadow-md rounded-lg text-black p-2 items-center justify-around z-10 bg-white"
        >
          <div className="flex flex-row items-center p-4 rounded-full bg-gray-200">
            <Home />
          </div>
          Book a Hotel
        </a>
        <a
          href="#"
          className="w-full h-full gap-y-4 hover:shadow-lg transition-shadow flex flex-col shadow-md rounded-lg text-black p-2 items-center justify-around z-10 bg-white"
        >
          <div className="flex flex-row items-center p-4 rounded-full bg-gray-200">
            <DollarSign />
          </div>
          Rent a Car
        </a>
        <a
          href="#"
          className="w-full h-full gap-y-4 hover:shadow-lg transition-shadow flex flex-col shadow-md rounded-lg text-black p-2 items-center justify-around z-10 bg-white"
        >
          <div className="flex flex-row items-center p-4 rounded-full bg-gray-200">
            <List />
          </div>
          Travel Insurance
        </a>
        <a
          href="#"
          className="w-full h-full gap-y-4 hover:shadow-lg transition-shadow flex flex-col shadow-md rounded-lg text-black p-2 items-center justify-around z-10 bg-white"
        >
          <div className="flex flex-row items-center p-4 rounded-full bg-gray-200">
            <Package />
          </div>
          Extra Cargo
        </a>
      </div>
      <div className="bg-white z-10 border border-primary/50 text-black rounded-lg w-full p-4 flex flex-row items-center gap-x-4">
        <AlertTriangle className="text-primary" />
        Our Tel Aviv (TLV) flights have been temporarily suspended until further
        notice. Rights have been granted to passengers registered on Tel Aviv
        (TLV) flights. You can visit this link for detailed information.
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 text-black gap-4">
        <div className="flex flex-col shadow-md w-full h-full rounded-lg overflow-hidden gap-y-4 pb-4">
          <img src="/istanbul.png" />
          <div className="p-4 gap-y-4 flex flex-col">
            <h1>Istanbul</h1>
            <p>
              Stopover in Istanbul, which we have prepared for our transit
              passengers traveling via Istanbul Airport, offers free
              accommodation at our contracted hotels and the opportunity to
              discover the city.
            </p>
            <p>
              <ActiveLink href="#" text="Explore" />
            </p>
          </div>
        </div>
        <div className="flex flex-col shadow-md w-full h-full rounded-lg overflow-hidden gap-y-4 pb-4">
          <img src="/istanbul.png" />
          <div className="p-4 gap-y-4 flex flex-col">
            <h1>Istanbul</h1>
            <p>
              Stopover in Istanbul, which we have prepared for our transit
              passengers traveling via Istanbul Airport, offers free
              accommodation at our contracted hotels and the opportunity to
              discover the city.
            </p>
            <p>
              <ActiveLink href="#" text="Explore" />
            </p>
          </div>
        </div>
      </div>
      <p className="text-black mt-16">
        <AltTitle text="To the new cities with special deals!" />
      </p>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black gap-4">
        <div className="flex flex-col shadow-md w-full h-full rounded-lg overflow-hidden gap-y-4 pb-4">
          <img src="/aile-indirimi.png" />
          <div className="p-4 gap-y-4 flex flex-col">
            <h1>Explore domestic routes with your family!</h1>
            <p>
              Purchase tickets by April 2, 2024, you and your family can fly
              from November 01, 2023 to April 4, 2024 with a 20% discount!
            </p>
            <p>
              <ActiveLink href="#" text="Book" />
            </p>
          </div>
        </div>
        <div className="flex flex-col shadow-md w-full h-full rounded-lg overflow-hidden gap-y-4 pb-4">
          <img src="/kibris-aile.png" />
          <div className="p-4 gap-y-4 flex flex-col">
            <h1>Northern Cyprus flights with a 20% family discount!</h1>
            <p>
              Take a family trip with a 20% discount on both directions for
              direct flights between Northern Cyprus and Türkiye (Istanbul and
              Antalya)!
            </p>
            <p>
              <ActiveLink href="#" text="Book" />
            </p>
          </div>
        </div>
        <div className="flex flex-col shadow-md w-full h-full rounded-lg overflow-hidden gap-y-4 pb-4">
          <img src="/avis.png" />
          <div className="p-4 gap-y-4 flex flex-col">
            <h1>Add a rental car & Earn extra Miles</h1>
            <p>
              Book your Avis or Budget car on our online channels for 500+ bonus
              Miles and up to 35% off.
            </p>
            <p>
              <ActiveLink href="#" text="Book" />
            </p>
          </div>
        </div>
      </div>
      <p className="text-black mt-16">
        <AltTitle text="Our Rewards" />
      </p>
      <div className="flex flex-col md:flex-row gap-12 items-center justify-around">
        <img src="/apex-fivestar.png" />
        <img src="/apex-worldclass.png" />
        <img src="/skyt-kazanan.png" />
      </div>
    </div>
  );
};

export default Main;
