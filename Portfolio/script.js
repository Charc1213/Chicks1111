const story = new inkjs.Story(inkStory);
const storyContainer = document.querySelector('#story-container');

function continueStory() {
  // Generate next line of story
  const text = story.Continue();

  // Add text to story container
  storyContainer.innerHTML += text;
}
