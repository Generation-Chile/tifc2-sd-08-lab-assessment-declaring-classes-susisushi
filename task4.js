export class Player {
  constructor(name, level) {
    this.name = String(name)
    this.level = Number(level)
  }
info(){
  return console.log(`${this.name} has reached Level ${this.level}!`)
  //return this.name + " has reached level " + String(this.level)
}
levelUp(){
this.level= this.level+1
  return this.level
}
  
  
}

