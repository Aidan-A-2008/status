const pageConfig = {
  title: "Status - Aidan Arredondo",
  links: [
    { link: 'https://www.aidanarredondo.com/', label: 'Website' },
    { link: 'https://photos.aidanarredondo.com/', label: 'Photography' },
    { link: 'https://aidana.link', label: 'Links' },
    { link: 'https://support.aidanarredondo.com/', label: 'Status' }, // Added new link
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 1, // Reduced refresh time per check
  monitors: [
    {
      id: 'website',
      name: 'Website',
      method: 'GET',
      target: 'https://www.aidanarredondo.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'photography',
      name: 'Photography',
      method: 'GET',
      target: 'https://photos.aidanarredondo.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'support',
      name: 'Support', // Added new monitor for status site
      method: 'GET',
      target: 'https://support.aidanarredondo.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'linksite',
      name: 'Link Site',
      method: 'GET',
      target: 'https://aidana.link',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'netdata',
      name: 'Netdata',
      method: 'GET',
      target: 'https://vps.aidanarredondo.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
  ],
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
