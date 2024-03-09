
export let achievements = [

]

export function renderachievements() {
for (let i = 0; i < achievements.length; i++) {
  document.getElementById(achievements[i] + "Achievement").className = "achievementclaimed";
} 
}