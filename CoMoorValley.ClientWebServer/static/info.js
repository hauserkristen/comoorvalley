export const infoPage = {
  title: 'Information',
  navTab: 'Governing Documents',
  tabs: [
    {
      name: 'Governing Documents',
      icon: 'file',
      isDownload: true,
      info: {
        'By-Laws': 'Description of document they are downloading goes here.',
        'Convenants': 'Description of document they are downloading goes here.',
        'Rules and Regulations': 'Description of document they are downloading goes here.',
        'Antennae': 'Description of document they are downloading goes here.',
        'Sandy\'s Page': 'Description of document they are downloading goes here.'
      }
    }, {
      name: 'Forms',
      icon: 'check-square',
      isDownload: true,
      info: {
        'Landscape Change Request': 'Description of document they are downloading goes here.',
        'Antennae Installation': 'Description of document they are downloading goes here.'
      }
    }, {
      name: 'Important Numbers',
      icon: 'address-card',
      isDownload: false,
      info: {
        'President': '(123)-456-7890',
        'Vice President': '(123)-456-7890',
        'Schili': '(123)-456-7890',
        'City of Cleveland': '(123)-456-7890'
      }
    }, {
      name: 'General Information',
      icon: 'info',
      isDownload: false,
      info: {
        'Dues': 'Info on dues...',
        'Pool': 'Info on pool...',
        'Garbage': 'Info on garbage...'
      }
    }
  ]
}
