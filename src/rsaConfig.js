const publicKey = `
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDJBG39/feqdChIOmKF8Lr0HvfJ
tZlJjUJL0IZzzRoeid0MTjxdepRJDo/+u8SKJUxBi3+VXeDiV0sX8SZippX5lT1A
5VJ+4pveINmkWVnAiIDjbMVzxUYFSrQ/pyftdCSpxXXqdI47/QyI/aC1uDwEZUbX
R3HM8VVjgn14TPWh0wIDAQAB
-----END PUBLIC KEY-----
    `
const privateKey = `
-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQDJBG39/feqdChIOmKF8Lr0HvfJtZlJjUJL0IZzzRoeid0MTjxd
epRJDo/+u8SKJUxBi3+VXeDiV0sX8SZippX5lT1A5VJ+4pveINmkWVnAiIDjbMVz
xUYFSrQ/pyftdCSpxXXqdI47/QyI/aC1uDwEZUbXR3HM8VVjgn14TPWh0wIDAQAB
AoGBAJ+BX1ISywo7X5dolLMZgQ+i3xX0fmzJpRiJn5aV4irnVDqmfenjEXUjFAma
ruq7i9XavmMkegTAJbsaxE21R/y5wlf1Q7uWs3EczFATi3BHq2gqjpDShnGSlhDz
hBwx9CEeRQeEbuhrrz9t2/8abrwas+DxmBzqLbJ4/q5k7TwBAkEA8YcY2yYVbzLW
Cf0pH0DajixaleMU4wrEf6umqYQCYfrjO9pwItY9uU9C7DaCm29iHRaH8xnAowgU
Ph2vOJhT0wJBANUP7Mf1YXgF1VRGoxeo59pX7BaHBr7epmO5wukRUaMUKgPu3vfm
eFPHiYPCZso0nYyNNu4F/hFVydTVL+7yugECQBS4GCPEkpYlcEMPGpX5xEXp/CNb
hZEsfUrOeM+V6XZqRU//Hxt98XGSIRWOX4nh9jK0mhj6npHdwY7KkRtzxc0CQAhY
albetqWj3NpDNgosNICp5vZu7YW2ZOANG6RTaFYx6P9kcNlW7qmhbDJ7/9i1vOIP
efJSy8PUD2bFvu3mFgECQQDpHy0lpNgOe5i8/9CgHLFjJtf+tE0te0VFvGyK1muq
/p0n2mVu0m7Ekp5mp19xG74S5XOsloWswrrGGEYieuhd
-----END RSA PRIVATE KEY-----
    `
const NodeRSA = require('node-rsa')

const encrypt = str => {
    const key = new NodeRSA(publicKey)
    key.setOptions({encryptionScheme: 'pkcs1'})
    return key.encrypt(str, 'base64', 'utf8').toString()
}

const decrypt = str => {
    const key = new NodeRSA(privateKey)
    key.setOptions({encryptionScheme: 'pkcs1'})
    return key.decrypt(str, 'utf8')
}

module.exports = {
    encrypt,
    decrypt
}


