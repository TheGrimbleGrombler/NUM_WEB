const Decimal = window.Decimal;
function E(n) {
  
  return new Decimal().fromString(n)
  
}
import { player } from './script.js'

export function milestones() {
  //group 1 below
  if (player.tributemilestone < 1) {if (player.besttributesthisflare.gte(E("1"))) {player.tributemilestone = 1}}
  if (player.tributemilestone < 2) {if (player.besttributesthisflare.gte(E("2"))) {player.tributemilestone = 2}}
  if (player.tributemilestone < 3) {if (player.besttributesthisflare.gte(E("4"))) {player.tributemilestone = 3}}
  if (player.tributemilestone < 4) {if (player.besttributesthisflare.gte(E("10"))) {player.tributemilestone = 4}}
  if (player.tributemilestone < 5) {if (player.besttributesthisflare.gte(E("15"))) {player.tributemilestone = 5}}
  if (player.tributemilestone < 6) {if (player.besttributesthisflare.gte(E("20"))) {player.tributemilestone = 6}}
  if (player.tributemilestone < 7) {if (player.besttributesthisflare.gte(E("75"))) {player.tributemilestone = 7}}
  if (player.tributemilestone < 8) {if (player.besttributesthisflare.gte(E("125"))) {player.tributemilestone = 8}}
  if (player.tributemilestone < 9) {if (player.besttributesthisflare.gte(E("2500"))) {player.tributemilestone = 9}}
  //group 2 below
  if (player.tributemilestone < 10) {if (player.besttributesthisflare.gte(E("5000"))) {player.tributemilestone = 10}}
  if (player.tributemilestone < 11) {if (player.besttributesthisflare.gte(E("15000"))) {player.tributemilestone = 11}}
  if (player.tributemilestone < 12) {if (player.besttributesthisflare.gte(E("25000"))) {player.tributemilestone = 12}}
  if (player.tributemilestone < 13) {if (player.besttributesthisflare.gte(E("75000"))) {player.tributemilestone = 13}}
  if (player.tributemilestone < 14) {if (player.besttributesthisflare.gte(E("150000"))) {player.tributemilestone = 14}}
  if (player.tributemilestone < 15) {if (player.besttributesthisflare.gte(E("300000"))) {player.tributemilestone = 15}}
  //group 1 classname stuff below
  if (player.tributemilestone >= 1) {document.getElementById("tributemilestone1").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone1").className = "milestone numberwhite"}
  if (player.tributemilestone >= 2) {document.getElementById("tributemilestone2").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone2").className = "milestone numberwhite"}
  if (player.tributemilestone >= 3) {document.getElementById("tributemilestone3").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone3").className = "milestone numberwhite"}
  if (player.tributemilestone >= 4) {document.getElementById("tributemilestone4").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone4").className = "milestone numberwhite"}
  if (player.tributemilestone >= 5) {document.getElementById("tributemilestone5").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone5").className = "milestone numberwhite"}
  if (player.tributemilestone >= 6) {document.getElementById("tributemilestone6").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone6").className = "milestone numberwhite"}
  if (player.tributemilestone >= 7) {document.getElementById("tributemilestone7").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone7").className = "milestone numberwhite"}
  if (player.tributemilestone >= 8) {document.getElementById("tributemilestone8").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone8").className = "milestone numberwhite"}
  if (player.tributemilestone >= 9) {document.getElementById("tributemilestone9").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone9").className = "milestone numberwhite"}
  //group 2 classname stuff below
  if (player.tributemilestone >= 10) {document.getElementById("tributemilestone10").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone10").className = "milestone numberwhite"}
  if (player.tributemilestone >= 11) {document.getElementById("tributemilestone11").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone11").className = "milestone numberwhite"}
  if (player.tributemilestone >= 12) {document.getElementById("tributemilestone12").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone12").className = "milestone numberwhite"}
  if (player.tributemilestone >= 13) {document.getElementById("tributemilestone13").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone13").className = "milestone numberwhite"}
  if (player.tributemilestone >= 14) {document.getElementById("tributemilestone14").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone14").className = "milestone numberwhite"}
  if (player.tributemilestone >= 15) {document.getElementById("tributemilestone15").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone15").className = "milestone numberwhite"}
  
  //flare milestones
  
  //group 1 below
  if (player.flaremilestone < 1) {if (player.bestflaresthist4.gte(E("1000"))) {player.flaremilestone = 1}}
  //group 1 classname stuff below
  if (player.flaremilestone >= 1) {document.getElementById("flaremilestone1").className = "weakmilestonebreached fire numberwhite"} else {document.getElementById("flaremilestone1").className = "weakmilestone fire numberwhite"}
}