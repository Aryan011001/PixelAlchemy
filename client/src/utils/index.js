import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constant';

export function getRandomPrompt(prompt) {

    // random index from 1 to 49 ie surpriseMePrompts is array of 50 diff sentences when user doesnt any idea what to type, then we can show them oone og these 50
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

//   now to avoid getting the same prompt same time in a row we do this ie if get same prompt then we just recall the func
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}