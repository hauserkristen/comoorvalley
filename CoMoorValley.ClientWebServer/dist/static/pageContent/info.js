export const infoPage = {
  title: 'Information',
  navTab: 'Governing Documents',
  tabs: [
    {
      name: 'Governing Documents',
      icon: 'file',
      isDownload: true,
      info: {
        'By-Laws': {
          content: 'Description of document they are downloading goes here.',
          src: require('../downloads/ByLaws.doc')
        },
        'Convenants': {
          content: 'Description of document they are downloading goes here.',
          src: require('../downloads/DeclarationOfCovenants.doc')
        },
        'Rules and Regulations': {
          content: 'Description of document they are downloading goes here.',
          src: require('../downloads/RulesandRegulations.doc')
        },
        'Antennae': {
          content: 'Description of document they are downloading goes here.',
          src: require('../downloads/AntennaRules.pdf')
        },
        'Sandy\'s Page': {
          content: 'Description of document they are downloading goes here.',
          src: ''
        }
      }
    }, {
      name: 'Forms',
      icon: 'check-square',
      isDownload: true,
      info: {
        'Landscape Change Request': {
          content: 'Description of document they are downloading goes here.',
          src: ''
        },
        'Antennae Installation': {
          content: 'Description of document they are downloading goes here.',
          src: ''
        }
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
