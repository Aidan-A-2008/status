const pageConfig = {
  // Title for your status page
  title: "Status - Aidan Arredondo",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://www.aidanarredondo.com/', label: 'Website' },
    { link: 'https://photos.aidanarredondo.com/', label: 'Photography' },
    { link: 'https://aidana.link', label: 'Links' },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      id: 'website',
      name: 'Website',
      method: 'GET', // Change to GET for availability checks
      target: 'https://www.aidanarredondo.com',
      expectedCodes: [200], // Expect 200 for the site to be available
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'photography',
      name: 'Photography',
      method: 'GET', // Change to GET for availability checks
      target: 'https://photos.aidanarredondo.com',
      expectedCodes: [200], // Expect 200 for the site to be available
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'linksite',
      name: 'Link Site',
      method: 'GET', // Change to GET for availability checks
      target: 'https://aidana.link',
      expectedCodes: [200], // Expect 200 for the site to be available
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },

    // Example TCP Monitor
    //{
     // id: 'forestracksdirectadmin',
      //name: 'ForestRacks Direct Admin',
      // `method` should be `TCP_PING` for tcp monitors
      //method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      //target: '109.122.46.4',
      //tooltip: 'My production server SSH',
      //statusPageLink: 'https://example.com',
      //timeout: 5000,
    //},
  //],
  //notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    //appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    //recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    //timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    //gracePeriod: 5,
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
