document.addEventListener('DOMContentLoaded', () => {
  console.log('Popup Loaded');

  // Updated widgetList with simplified background image names
  const widgetList = [
    { name: 'Google Slides', url: 'https://docs.google.com/presentation/d/1t8W2hpJ5YPHJnEHoajSngXKfcOAXG4Lwgz2VG9sjOxs/edit?usp=sharing', bgImage: 'sheet.jpg' },
    { name: 'Pomodoro Timer', url: 'widgets/pomodoro.html', bgImage: 'pomodo.jpg' },
    { name: 'Google Spreadsheet', url: 'https://docs.google.com/spreadsheets/d/1g-x6iXS2ESpF4jrUj-tANehhigd5R1b1q2laovD6rTw/edit?usp=sharing', bgImage: 'spreadsheet.jpg' },
    { name: 'Google Form', url: 'https://forms.gle/ffmX2yq7TMT9iZ1t8', bgImage: 'form.jpg' },
    { name: 'Music', url: 'https://www.spotify.com/', bgImage: 'spotify.jpg' },
    { name: 'Poll', url: 'https://www.strawpoll.com', bgImage: 'poll2.jpg' },
    { name: 'Book + Quote', url: 'https://www.goodreads.com/', bgImage: 'book.jpg' },
    { name: 'DGC - Daily Growth Checklist', url: 'widgets/dgc.html', bgImage: 'dgc.webp' }
  ];

  const widgetListElement = document.getElementById('widget-list');
  const contentElement = document.getElementById('content');

  widgetList.forEach(widget => {
    // Create list item for widget list
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = widget.url;
    link.target = '_blank';
    link.textContent = widget.name;
    listItem.appendChild(link);
    widgetListElement.appendChild(listItem);

    // Create widget box for content
    const widgetBox = document.createElement('div');
    widgetBox.className = 'widget-box';
    widgetBox.style.backgroundImage = `url(icons/${widget.bgImage})`; // Updated to match simplified names
    widgetBox.style.backgroundSize = 'cover';
    widgetBox.style.backgroundPosition = 'center';
    widgetBox.addEventListener('click', () => {
      window.open(widget.url, '_blank');
    });
    contentElement.appendChild(widgetBox);
  });

  // Search functionality
  document.getElementById('search-button').addEventListener('click', () => {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    document.querySelectorAll('#widget-list a').forEach(link => {
      const text = link.textContent.toLowerCase();
      link.parentElement.style.display = text.includes(searchText) ? '' : 'none';
    });

    document.querySelectorAll('.widget-box').forEach(box => {
      const text = box.textContent.toLowerCase();
      box.style.display = text.includes(searchText) ? '' : 'none';
    });
  });

  document.getElementById('search-input').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      document.getElementById('search-button').click();
    }
  });
});
