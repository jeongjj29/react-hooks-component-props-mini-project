import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date}
        {minutesToRead(minutes)}
      </small>
      <p>{preview}</p>
    </article>
  );
}

function minutesToRead(mins) {
  if (mins < 30) {
    const cups = Math.ceil(mins / 5);
    return "☕️".repeat(cups) + ` ${mins} min read`;
  } else {
    const bentos = Math.ceil(mins / 10);
    return "🍱".repeat(bentos) + ` ${mins} min read`;
  }
}

export default Article;
