export const cleanName = name =>
  name
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/'/g, "")

export const calculateCraftTime = (
  base = 0,
  firstWorkerBonus = 0,
  secondWorkerBonus = 0,
  firstMilestone = 0,
  secondMilestone = 0,
  needString = true
) => {
  const totalSeconds = Math.round(
    base *
      (1 - firstWorkerBonus) *
      (1 - secondWorkerBonus) *
      (1 - firstMilestone) *
      (1 - secondMilestone)
  )

  if (!needString) return totalSeconds

  const hours = Math.floor(totalSeconds / 60 / 60)
  const minutes = Math.floor((totalSeconds / 60) % 60)
  const seconds = Math.floor(totalSeconds % 60)
  return `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`
}
