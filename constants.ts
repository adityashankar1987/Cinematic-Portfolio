
import { Project, Offering } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    category: 'Showreel 2024',
    title: 'The Kinetic Canvas: A Visual Symphony',
    description: 'Dive into a vibrant tapestry of motion design, where abstract forms dance and colors explode. This compilation showcases a year of pushing creative boundaries, blending art with kinetic energy to tell stories without words.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVfYYBfq70LkP99UkMCM5bqLs5m3C5NL9jGllc9bYa9KNdIZMVPQCf-t2-0vGMPq-eBQYrkhvWLB_GoIwgglMXPeh0832wd-NpOEE3TgQCgG3Oyju0dcivzyg7z5npluyGVYULxm6hbVKlO8LobEhOfBBjF08euFDdRIXiEvgWET4Qqf67K-plDwpgvlv7GL6P9dTXzOj9qieXOZZuCQZGnHbLnha0LkmVuj1JOHesdIf9umq-JIdAjEFfMcPJg5qgsPv7yS3Dcf85',
    hasPlayButton: true
  },
  {
    id: 'p2',
    category: 'Fashion Narrative',
    title: 'Monochrome Elegance: Vogue Portrait Series',
    description: 'A study in classic beauty and sophisticated storytelling through still imagery. This Vogue editorial piece explores the power of monochromatic tones to convey emotion and character, with a focus on art direction.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC01SiqIgGxqksi6L0reeejTLqBrClGAATYusig1Gheugq1AdoMCwJDUk6tDjMeO6RvnyzAfDpSZWgSWsznI2XuLtMChfr_WmD8mJAWR1ps3R2YSA_5HLNz4xgKBFYBvDALP9UTFwNfAKxfHFGLuD7ihB4MgE7QgPusaDJ4PM3QmPTozYLKxdzS1omR1wcNu6lllUhyVhavqbMedOoqEAsxcl3IMuoglxlJ-X463JVD9-x-Y92CmjflYL9Xwd0MxNHWvkyFEPOEcbR4'
  },
  {
    id: 'p3',
    category: 'Short Film',
    title: 'Neon Reverie: A Cyberpunk Dystopia',
    description: 'Step into a futuristic city where neon lights paint the rain-slicked streets and shadows hide untold stories. As VFX Supervisor, I brought this cyberpunk vision to life, crafting the gritty atmosphere.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpQlkW-7Pl6T1ZrBaMg1ttmgWrpaQV98ZwZ39QkAEO5lWzsVzhub0S_5HfGTsRnDEsGCNHmoRjttDdRi4l8BeDdg0VFDRQE1cFC4_0Fr2ZX1-WFStHLiUQ2x3fn7XZaXfrG3oOUOB6z8u4S0v140a7ZCCtJekjXyLuSmDwRLtZPCplMElCSAvHsohqt4FWV6c5W21Xgwi9CYHzk04tmDawzyXFD6iZcMgBaBeT_90gUgN82wwm-NTJMoOWsNZYgiRw2ZojpsW2PE_7'
  },
  {
    id: 'p4',
    category: 'Event Documentary',
    title: 'Pulse of the City: Neon Nights Unveiled',
    description: 'Capturing the raw energy and vibrant spectacle of the Neon Nights Music Festival. This piece delves into the heart of the crowd, the electrifying performances, and the ephemeral moments that make live events unforgettable.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJLAvCoKgWxMAHndOZ5evvZj93RDCI8bNbo_sEJIj-fPF8QjAkmSXKyuFFBDlhujC5NCjO6oQ1JqhvmuxeRdBu4XSuMNw96R9U2FbCMERLkIk4jZ0n78sl9M9KxiWVcDRmtppPK6Fr5VLa4rAre9M-fievCDO7G6KWHSMZzktjw_y1JycMjFH7F0uFh8jJknkPGx5mFB1bQwJsdcY4IKDoI4udSKT4-GVP6I5JyvUeWSX8fZkq1j49daievQzcG7Op84P0rEpvTU4l',
    hasPlayButton: true
  }
];

export const OFFERINGS: Offering[] = [
  {
    id: 'o1',
    icon: 'auto_videocam',
    title: 'Narrative Editing',
    description: 'Crafting compelling stories through precise cuts and strategic pacing for documentaries, films, and engaging social content.'
  },
  {
    id: 'o2',
    icon: 'animation',
    title: 'Visual Effects & Motion',
    description: 'Bringing static visuals to life with stunning 2D/3D animation, kinetic typography, and seamless visual effects that enhance cinematic impact.'
  },
  {
    id: 'o3',
    icon: 'palette',
    title: 'Cinematic Direction',
    description: 'Defining the visual aesthetics of a project, from evocative color grading to dynamic composition and comprehensive stylistic guidance.'
  }
];
