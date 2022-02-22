import React from "react"
import { useLastFM } from "use-last-fm"
import note from "../images/svg/note.svg"

export default function Spotify() {
  const lastFM = useLastFM("agneskalstrom", "06f7188d0b401ac73bc3100133a285bd")

  return (
    <div class="spotify-wrapper">
      <img src={note} className={lastFM.status === "playing" ? "listening-status-active" : ""} />
      {lastFM.status === "playing" ? (
          <>
          <p>
            Listening to <span class="song-title">{lastFM.song.name}</span> by <span class="artist">{lastFM.song.artist}</span>
          </p>
        </>
      ) : (
          <p>Not currently listening to anything</p>
      )}
    </div>
  )
}
