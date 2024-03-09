const Decimal = window.Decimal;
import { player } from './script.js'
import { doreset } from './doreset.js'
import { achievements } from './achievements.js'

export let Labors = {
  TL1: false,
  TL2: false,
  TL3: false,
  TL4: false,
  TL5: false,
  TL6: false,
  TL7: false,
  TL8: false,
  TL9: false,
  TL10: false,
  TL11: false,
  TL12: false,
  FL1: false,
  FL2: false,
  FL3: false,
  FL4: false,
  FL5: false,
  FL6: false,
}

export function calibratelabors() {
      var temp = 0
      while (temp < 12) {
        temp += 1
        var temp2 = document.getElementById('Labor' + String(temp))
        if (player.labor == temp) {
          temp2.className = "laboryellow numberwhite"
        } else {
          if (Labors["TL" + String(temp)] == true) {
            temp2.className = "milestonebreached numberwhite"
          } else {
            temp2.className = "milestone numberwhite"
          }
        }
      }
}

export function togglelabor(n) {
  
    if (player.labor == 0) {
      player.labor = 0
      doreset(2)
      player.labor = n
    } else {
      player.labor = 0
      doreset(2)
      player.labor = 0
    }
  
    calibratelabors()
  
}