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
          content: 'hese are the rules about how we govern ourselves, and operations and duties of the board of trustees.',
          src: require('../downloads/ByLaws.doc')
        },
        'Covenants': {
          content: 'The original founding documents of The Co-Moor Valley Association.',
          src: require('../downloads/DeclarationOfCovenants.doc')
        },
        'Rules and Regulations': {
          content: 'These are the day-to-day rules for homeowners. Last updated in 2007, and currently being updated by the board.',
          src: require('../downloads/RulesAndRegulations.doc')
        },
        'Antennae': {
          content: 'Before you install an antenna or dish, read this.',
          src: require('../downloads/AntennaRules.pdf')
        },
        'Keeping with Tradition': {
          content: 'A thoughtful explanation of how we approach the maintenance and planting of front beds and courtyards, written by one of our residents.',
          src: require('../downloads/KeepingWithTradition.pdf')
        }
      }
    }, {
      name: 'Forms',
      icon: 'check-square',
      isDownload: true,
      info: {
        'Landscape Change Request': {
          content: 'Before you make any changes to front landscape beds (or side beds that the association maintains), you must submit a landscape request form to the board.',
          src: require('../downloads/LandscapeChangeRequestForm.jpeg')
        }
      }
    }, {
      name: 'Important Numbers/Emails',
      icon: 'address-card',
      isDownload: false,
      info: {
        'Mark Graham': '(216)-533-6578',
        'Tom Oravec': '(440)-570-9914',
        'Schill Grounds Management (Private Work Requests)': '(440)-327-3071',
        'City of Strongsville (Phone)': '(440)580-3100',
        'City of Strongsville': 'https://www.strongsville.org/',
        'City of Strongsville Trash Collection': 'https://www.strongsville.org/departments/service-department/refuse-collection',
        'City of Strongsville Recycling': 'https://www.strongsville.org/departments/service-department/recycling'
      }
    }, {
      name: 'General Information',
      icon: 'info',
      isDownload: false,
      info: {
        'Dues': 'Dues are payable quarterly, due January 1, April 1, July 1, and October 1. Amount varies by property, currently either $360 or $397.50 per quarter. Residents receive payment coupons with the January newsletter. Dues may be dropped off at home of our treasurer Jim Buddie or with any board member, or mailed to The Co-Moor Valley Association, 11062 Blodgett Creek Trail, Strongsville OH 44149. Payments received after the 10th of the month will subject to a late fee.',
        'Pool': 'Blodgett Creek Trail residents automatically have access to a beautiful pool at 21111 Idlewood Trail in Strongsville. The facility is maintained by the Co-Moor Recreation Club. Annual dues (currently $200) are mandatory, and entitle members to use of the pool and pavilion for themselves and guests. Additional information is available in the current newsletter of the Co-Moor Recreation Club.',
        'Garbage': 'Garbage day is Tuesday. Please place trash and recycling at the curb by 7 a.m. the day of pickup. You may put it out Monday evening if desired. For more details, see the City of Strongsville’s page.',
        'Landscaping Changes': 'Landscape changes in beds and front yards maintained by the association must be submitted to the Board in writing prior to any work being done. This applies to shrubs, trees, and permanent plantings and changes. The planting of annuals or displaying plants in pots does not require Board approval.'
      }
    }
  ]
}
