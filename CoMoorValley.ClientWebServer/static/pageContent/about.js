export const aboutPage = {
  title: 'About',
  infoRows: [
    {
      src: require('./../../src/assets/019.jpg'),
      content: 'Content topics here: Offerings such as pool, fitness center, etc? City info.',
      title: 'About Co-Moor Valley',
      justification: 'left'
    }, {
      src: require('./../../src/assets/060.jpg'),
      content: 'Content topics here: When was it founded? Home many homes? Different types? Difference from Co-Moor?',
      title: 'History',
      justification: 'right'
    }
  ],
  boardMemberRow: {
    title: 'Board of Directors',
    content: 'Content topics here: Intro to how many board members, positions and general idea of what they do.',
    members: [
      {
        name: 'John Smith',
        title: 'President',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
        src: 'https://bulma.io/images/placeholders/1280x960.png'
      }, {
        name: 'Jane Smith',
        title: 'Board Member',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
        src: 'https://bulma.io/images/placeholders/1280x960.png'
      }
    ]
  }
}
