import React from "react"
import { useLastFM } from "use-last-fm"
import note from "../images/svg/note.svg"

export default function Spotify() {
  const lastFM = useLastFM("agneskalstrom", process.env.GATSBY_LASTFM_KEY)

  return (
    <div class="spotify-wrapper">
      <img
        src={note}
        className={lastFM.status === "playing" ? "listening-status-active" : ""}
        alt="Musical note"
      />
      {lastFM.status === "playing" ? (
        <>
          <p>
            Listening to <span class="song-title">{lastFM.song.name}</span>{" "}by{" "}
            {lastFM.song.artist}
          </p>
        </>
      ) : (
        <p>Currently not listening to anything</p>
      )}
    </div>
  )
}
