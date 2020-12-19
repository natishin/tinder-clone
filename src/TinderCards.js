import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

function TinderCards() {
  //array of objects of the cards with a list of names and photos
  const [people, setPeople] = useState([
    // {
    //   name: "Chris Hemsworth",
    //   url:
    //     "https://upload.wikimedia.org/wikipedia/commons/3/3a/Chris_Hemsworth_%2835437549953%29.jpg",
    // },
    // {
    //   name: "Scarlett Johansson",
    //   url:
    //     "https://media.spiked-online.com/website/images/2019/08/06154453/scarlett-johansson-800x480.jpg",
    // },
  ]);

  //   Piece of code which runs based on a condition
  useEffect(() => {
    // this is where the code runs
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
    // this will run once when the component loads, and never again
  }, []);

  return (
    <div>
      <h1>Tinder Cards</h1>
      <div class="tinderCards__cardsContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
