function getFormatedTimer(timer = 0) {
  // допустим, 35000 секунд
  let seconds = 0;
  let minutes = Math.trunc(timer / 60); // 583 минуты в таймере
  const hours = minutes >= 60 ? Math.trunc(minutes / 60) : 0; // 9  часов в таймере
  if (minutes > 59) {
    const hoursCountInSeconds = hours * 3600; // 32400 секунд: 9 часов * количество секунд в часе
    const minutesCountInSeconds = timer - hoursCountInSeconds; // 2600 секунд - количество минут в секундах
    minutes = Math.trunc(minutesCountInSeconds / 60); // 43 минуты
    const minutesResultInSeconds = minutes * 60; // 2580 секунд - количество минут в сенкудах в таймере
    seconds = Math.abs(minutesCountInSeconds - minutesResultInSeconds);
  } else {
    seconds = Math.trunc(timer - minutes * 60);
  }
  return `${hours ? `${hours}:` : ""}${minutes > 9 ? minutes : `0${minutes}`}:${
    seconds > 9 ? seconds : `0${seconds}`
  }`;
}

export { getFormatedTimer };
