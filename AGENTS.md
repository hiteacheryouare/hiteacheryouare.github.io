# Dev Portfolio Agent Instructions
For code style guidelines, read @.agents/CODESTYLE.md

## Overview
This is my (Ryan Mullin) developer portfolio. The purpose is to showcase skills, get people in contact, and serve as a news outlet for my happenings. I also tend to use it to host random throwaway pages that I need to get online. These tend to be hidden.

---

## Stuff for AI Agents:

- Skills for you have been provided. Check @.agents/skills
  - When stuck: think "could there be a skill for this", check the skills directory, if yes, use it!
- When opening PRs, Issues, etc via the GitHub API or any access you have to github, ALWAYS add the "robotic" label so we know it was assisted by agents.


## UI Mistakes to Avoid:
The following are common UI designs spit out by AI agents and are usually discouraged unless approved of by the promptor:
- Pills
- Status Indicators
- Marquees
- Eyebrows
- Tags
- Chips
- Counting sections, specifically 01, 02, 03...
- words seperated by bullet points ("Svetle * Bootstrap * Built in 2021")
- Footers re-explaining evident information

Instead, you must respect the existing design system. Look through the project and trace through how UI is implemented, and do your best to follow the exising brand and design system.

For more info, use the `avoiding-ai-slop` skill.
