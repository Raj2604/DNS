
const dgram = require('node:dgram');
const dnsPacket = require('dns-packet');

const server = dgram.createSocket('udp4')

server.on('message', (msg, rinfo) => {
    const incomingReq = dnsPacket.decode(msg);
    console.log({
        questions:incomingReq.questions[0].name,
        rinfo
    })
})

server.bind(8080, () => {
    console.log('DNS SERVER IS RUNNING ON PORT 8080')
})
