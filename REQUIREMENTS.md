# User Requirements

- Project should be delivered 72 hours after the requirements are sent specifing the maximum release date by Monday 31/8/2020 at 5:00 PM

- This project is to evaluate:

  - Analysis capacity
  - Code quality
  - Solution design
  - Documentation

- Tech to be used
  - React and React Native
  - Typescript
  - Pusher

---

## Requirement for the assesment Test

### Project 1: Web App

1. Multiple Selector based Filter:
   This part of the form must create a filter based on a multiple selector where the data must come from a JSON file with the data like **candidates.json**

2. Likert Scale Score: With the candidates filtered in the first part, each one must be listed and a score collected from each with a [Likert Scale](https://en.wikipedia.org/wiki/Likert_scale)

3. Google Maps Marker: Using Google Maps, choose a point on the map.

4. Submit: When submitting the form, send the data via pusher (websockets)[https://pusher.com/tutorials/react-websockets]

### Project 2: Hybrid Mobile App

With react native, develop a mobile app with the following functions:

1. Pusher Listener:
   You must listen (be subscribed) to the channel where the results of the form are published
2. ListView:
   Have a view where there is a list of items, with the results published in the channel (point 1)
3. Detail View:
   To be able to access each Item on the list, showing a view with its detail, including a view of a map with the address chosen for the item.

---

## Data

`` `json
// candidates.json

{
"candidates": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
}
`` ''
