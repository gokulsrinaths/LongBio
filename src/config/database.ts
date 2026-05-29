export const databaseConfig = {
  people: {
    url: 'https://airtable.com/embed/app2ge6qh7frci58c/shrJc9LgRUFyizNWs?viewControls=on',
    label: 'People',
    description: 'View and manage people in the longevity field',
  },
  companies: {
    url: 'https://airtable.com/embed/app2ge6qh7frci58c/shrt0TpkwdeAfZqwd?viewControls=on',
    label: 'Companies',
    description: 'Explore longevity companies and startups',
  },
  investors: {
    url: 'https://airtable.com/embed/app2ge6qh7frci58c/shrn4KTgK1nde1n8Z?viewControls=on',
    label: 'Investors',
    description: 'Track investors and funding in longevity',
  },
  typology: {
    url: 'https://airtable.com/embed/app2ge6qh7frci58c/shr52yN1NPoJeNX7q?viewControls=on',
    label: 'Typology',
    description: 'Categorize and understand longevity research areas',
  },
} as const;

export type DatabaseView = keyof typeof databaseConfig;