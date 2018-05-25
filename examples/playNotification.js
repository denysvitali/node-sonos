const Sonos = require('../').Sonos
const sonos = new Sonos(process.env.SONOS_HOST || '192.168.96.52')

sonos.playNotification({
  uri: 'https://archive.org/download/Doorbell_1/doorbell.mp3',
  onlyWhenPlaying: false, // It will query the state anyway, don't play the notification if the speaker is currently off.
  volume: 4 // Change the volume for the notification, and revert back afterwards.
}).then(result => {
  // It will wait until the notification is played until getting here.
  console.log('Did play notification %j', result)

  // It starts (and stops) a listener in the background so you have to exit the process explicitly.
  process.exit()
}).catch(err => { console.log('Error occurred %j', err) })
