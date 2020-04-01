import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
// TODO: use BaseList
const MOCK_AUDIO_ITEMS = [
  {
    artist: "Squirm",
    slug: "palm-springs",
    title: "PALM SPRINGS",
    key: "Em",
    tempo: 124,
    genre: "House",
    venue: "Peak",
    mood: ""
  },
  {
    artist: "Squirm",
    title: "CRUSH ON YOU",
    slug: "crush-on-you",
    key: "Dm",
    tempo: 124,
    genre: "House",
    venue: "",
    mood: ""
  },
  {
    artist: "Squirm",
    title: "VENICE",
    slug: "venice",
    key: "",
    tempo: 124,
    genre: "",
    venue: "",
    mood: ""
  },
  {
    artist: "Squirm",
    title: "LOS ANGELES",
    slug: "los-angeles",
    key: "",
    tempo: 124,
    genre: "",
    venue: "",
    mood: ""
  },
  {
    artist: "NEW SENSE",
    title: "LET IT GO",
    slug: "let-it-go",
    key: "",
    tempo: 124,
    genre: "",
    venue: "",
    mood: ""
  }
];
// type ArtistObject {

// }
// interface ListItemObject {
//   artist: ArtistObject;
//   bpm: number;
//   bpm: number;
// }

const ListItem = React.memo(function ListItem({ item }) {
  return (
    <div>
      <div>{item.key}</div>
      <div>{item.tempo}</div>
      <div>{item.title}</div>
      <div>{item.genre}</div>
      <div>{item.venue}</div>
      <div>{item.mood}</div>
      <div>PLAYER</div>
    </div>
  );
});

export function List() {
  return (
    <ListGroup variant="flush">
      {MOCK_AUDIO_ITEMS.map(item => (
        <ListGroup.Item key={item.title}>
          <ListItem item={item} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
