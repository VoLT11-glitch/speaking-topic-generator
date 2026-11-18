# speak. — Changelog

Every version of the site, newest first. **Code** opens the files exactly as they were in that version, and **Zip** downloads them.

Live site: https://speak-khaki-xi.vercel.app

| Version | Date | What changed | Code |
|---|---|---|---|
| **v2.2** | 18 Nov 2026 | Timer and read-along now run together | latest on `main` |
| v2.1 | 18 Nov 2026 | Focus mode while speaking | [Code](https://github.com/VoLT11-glitch/speaking-topic-generator/tree/e876b4c5373feb994526e23a2b92e889d17ee508) · [Zip](https://github.com/VoLT11-glitch/speaking-topic-generator/archive/e876b4c5373feb994526e23a2b92e889d17ee508.zip) |
| v2.0 | 18 Nov 2026 | Redesign: category chips, two zones (topic / speak), one column width, bigger timer, less repeated copy | [Code](https://github.com/VoLT11-glitch/speaking-topic-generator/tree/506d76e25530c7e06f6bcb86c1f765602f07e70f) · [Zip](https://github.com/VoLT11-glitch/speaking-topic-generator/archive/506d76e25530c7e06f6bcb86c1f765602f07e70f.zip) |
| v1.9 | 18 Nov 2026 | Read-along v2: 30s / 1 min / 2 min answers, pace slider, karaoke fill, Fraunces font | [Code](https://github.com/VoLT11-glitch/speaking-topic-generator/tree/b9a9be4868cb37e896cdbbc45befc34d2bd6a2ec) · [Zip](https://github.com/VoLT11-glitch/speaking-topic-generator/archive/b9a9be4868cb37e896cdbbc45befc34d2bd6a2ec.zip) |
| v1.8 | 18 Nov 2026 | Read-along sample answers | [Code](https://github.com/VoLT11-glitch/speaking-topic-generator/tree/eebb6e4811274135492fca5f4c025aa4c618c3a8) · [Zip](https://github.com/VoLT11-glitch/speaking-topic-generator/archive/eebb6e4811274135492fca5f4c025aa4c618c3a8.zip) |
| v1.7 | 18 Nov 2026 | Bug fixes, think time, recording, clickable history, shortcuts | [Code](https://github.com/VoLT11-glitch/speaking-topic-generator/tree/5cb22280c072b1f625fd920a4c92fb56a4a29ece) · [Zip](https://github.com/VoLT11-glitch/speaking-topic-generator/archive/5cb22280c072b1f625fd920a4c92fb56a4a29ece.zip) |
| v1.6 | — | 180 topics, first deployed version | [Code](https://github.com/VoLT11-glitch/speaking-topic-generator/tree/9487a3599af3c4cfdad10f9d66826a73b44ae1f1) · [Zip](https://github.com/VoLT11-glitch/speaking-topic-generator/archive/9487a3599af3c4cfdad10f9d66826a73b44ae1f1.zip) |
| v1.5 | — | Timer | [Code](https://github.com/VoLT11-glitch/speaking-topic-generator/tree/6cfef48d93722fb6039673f7e2efcd1c49fec6ec) · [Zip](https://github.com/VoLT11-glitch/speaking-topic-generator/archive/6cfef48d93722fb6039673f7e2efcd1c49fec6ec.zip) |
| v1.3 | — | Topic shuffle animation | [Code](https://github.com/VoLT11-glitch/speaking-topic-generator/tree/64f76d720e86b8a908bc1b57faa72ad5a4669ad9) · [Zip](https://github.com/VoLT11-glitch/speaking-topic-generator/archive/64f76d720e86b8a908bc1b57faa72ad5a4669ad9.zip) |
| v1.1 | — | UI changes | [Code](https://github.com/VoLT11-glitch/speaking-topic-generator/tree/fbc66321cea6641078628fc1e3230d0568e704a9) · [Zip](https://github.com/VoLT11-glitch/speaking-topic-generator/archive/fbc66321cea6641078628fc1e3230d0568e704a9.zip) |
| v1.0 | — | First version | [Code](https://github.com/VoLT11-glitch/speaking-topic-generator/tree/4affcdee060d03b31d128161646521131fac3d5a) · [Zip](https://github.com/VoLT11-glitch/speaking-topic-generator/archive/4affcdee060d03b31d128161646521131fac3d5a.zip) |

---

## v2.2 — Timer and read-along in sync

- Pause / Resume on the timer now pauses / resumes the read-along too, and the other way round
- Starting Read along while the 15s think timer runs cancels it and starts the speaking timer
- Read along from idle starts the speaking timer; Restart restarts both; Reset resets both

## v2.1 — Focus mode

- While a round runs, everything fades back except the topic and the timer (and can't be clicked)
- Timer grows (84px desktop, 72px phone); the card and timer scroll into view
- Space can't change the topic mid-answer
- Ends when the time is up or you press Reset

## v2.0 — Redesign

- Category and difficulty are now one-tap **chips** instead of dropdowns, and they're remembered between visits
- **Topic zone:** the card shows category · difficulty, the topic and one line of copy. "Read a sample answer" and "Another topic" sit on the card itself.
- **Speak zone:** one bar with the speaking time, toggles, a large timer, and Start / Reset
- One column width for every section
- One button style system: purple = action, dark = selected, outline = secondary
- Removed repeated taglines, the floating quote circle and "Ready when you are"
- Timer digits fixed (no more old-style numerals), curly quotes, no letter-spacing on lowercase text
- Phones: the topic is now on the first screen
- Version number in the footer

## v1.9 — Read-along v2

- Sample answer length follows the timer: 30s / 1 min / 2 min for all 180 topics
- Pace slider (110–170 wpm) with accurate timing
- Karaoke word fill, Fraunces font, auto-scroll

## v1.8 — Read-along

- A sample answer for every topic, highlighted word by word

## v1.7 — Fixes + practice tools

- Long topics no longer cut off, the timer chimes at the end and doesn't drift, no repeat topics
- Think first · 15s, Record me, clickable recent topics, keyboard shortcuts

---

## Creating git tags (optional, one time)

Tags make every version show up under **Tags** on GitHub. Run this from the project folder on your computer:

```bash
git fetch origin
git tag v1.0 4affcde
git tag v1.1 fbc6632
git tag v1.3 64f76d7
git tag v1.5 6cfef48
git tag v1.6 9487a35
git tag v1.7 5cb2228
git tag v1.8 eebb6e4
git tag v1.9 b9a9be4
git tag v2.0 506d76e
git push origin --tags
```

To go back and look at an old version locally: `git checkout v1.6` (then `git checkout main` to return).
