let tab = ['Julie', 'Djo', 'Raph']

for (let i = 0; i < tab.length; i++) {

  console.log((tab[i]), (tab.length))
}
for (let name of tab) {
  console.log(`${name}${name.length}`)
}
tab.forEach(name => {
  console.log(`${name}${name.length}`)
})